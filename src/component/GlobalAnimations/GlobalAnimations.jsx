import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./GlobalAnimations.css";

gsap.registerPlugin(ScrollTrigger);

function GlobalAnimations() {
  useEffect(() => {
    const root = document.documentElement;

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const isTouchDevice =
      window.matchMedia(
        "(pointer: coarse)"
      ).matches;

    let destroyed = false;

    let lenis = null;
    let refreshTimer = 0;
    let refreshFrame = 0;
    let resizeTimer = 0;
    let scrollUpdateFrame = 0;
    let initialHashTimer = 0;
    let initialRefreshTimer = 0;

    const cancelRefresh = () => {
      window.clearTimeout(refreshTimer);
      window.cancelAnimationFrame(
        refreshFrame
      );

      refreshTimer = 0;
      refreshFrame = 0;
    };

    const performRefresh = () => {
      if (destroyed) {
        return;
      }

      lenis?.resize();

      ScrollTrigger.refresh();
    };

    const requestScrollRefresh = (
      delay = 160
    ) => {
      if (destroyed) {
        return;
      }

      cancelRefresh();

      refreshTimer =
        window.setTimeout(() => {
          refreshTimer = 0;

          if (destroyed) {
            return;
          }

          refreshFrame =
            window.requestAnimationFrame(
              () => {
                refreshFrame = 0;
                performRefresh();
              }
            );
        }, delay);
    };

    const requestScrollTriggerUpdate =
      () => {
        if (
          scrollUpdateFrame ||
          destroyed
        ) {
          return;
        }

        scrollUpdateFrame =
          window.requestAnimationFrame(
            () => {
              scrollUpdateFrame = 0;

              if (!destroyed) {
                ScrollTrigger.update();
              }
            }
          );
      };

    /*
     * Mobile browser resize events caused by URL bar
     * should not trigger repeated full refreshes.
     */
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    if (reduceMotion) {
      root.classList.add(
        "reduce-motion"
      );

      const refreshWithoutMotion =
        () => {
          requestScrollRefresh(200);
        };

      window.addEventListener(
        "sge:refresh-animations",
        refreshWithoutMotion
      );

      window.addEventListener(
        "sge:content-loaded",
        refreshWithoutMotion
      );

      return () => {
        destroyed = true;

        cancelRefresh();

        root.classList.remove(
          "reduce-motion"
        );

        window.removeEventListener(
          "sge:refresh-animations",
          refreshWithoutMotion
        );

        window.removeEventListener(
          "sge:content-loaded",
          refreshWithoutMotion
        );
      };
    }

    root.classList.add(
      "sge-smooth-scroll"
    );

    /*
     * Desktop:
     * Preserve existing premium Lenis smoothing.
     *
     * Touch devices:
     * Native scrolling is used because smoothTouch and
     * smoothWheel were already disabled there. This removes
     * the permanent Lenis + GSAP ticker workload from mobile.
     */
    if (!isTouchDevice) {
      lenis = new Lenis({
        duration: 1.08,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.05,
        syncTouch: false,
        infinite: false,
      });

      lenis.on(
        "scroll",
        requestScrollTriggerUpdate
      );
    }

    const runLenis = (time) => {
      lenis?.raf(time * 1000);
    };

    if (lenis) {
      gsap.ticker.add(runLenis);

      gsap.ticker.lagSmoothing(
        500,
        33
      );
    }

    const scrollToElement = (
      destination,
      {
        immediate = false,
        onComplete,
      } = {}
    ) => {
      if (lenis) {
        lenis.scrollTo(destination, {
          offset: -88,
          duration: immediate
            ? 0
            : 1.05,
          immediate,
          lock: false,
          force: true,
          onComplete,
        });

        return;
      }

      const destinationTop =
        destination.getBoundingClientRect()
          .top +
        window.scrollY -
        88;

      window.scrollTo({
        top: destinationTop,
        behavior: immediate
          ? "auto"
          : "smooth",
      });

      if (onComplete) {
        window.setTimeout(
          onComplete,
          immediate ? 0 : 500
        );
      }
    };

    const handleAnchorClick = (
      event
    ) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest(
        'a[href^="#"]'
      );

      if (!anchor) {
        return;
      }

      const href =
        anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      let destination = null;

      try {
        destination =
          document.querySelector(href);
      } catch {
        return;
      }

      if (!destination) {
        return;
      }

      event.preventDefault();

      scrollToElement(destination, {
        onComplete: () => {
          window.history.replaceState(
            null,
            "",
            href
          );

          requestScrollRefresh(140);
        },
      });
    };

    document.addEventListener(
      "click",
      handleAnchorClick
    );

    /*
     * Lazy-loaded sections can dispatch multiple events.
     * All nearby events are merged into one refresh.
     */
    const refreshAnimations = () => {
      requestScrollRefresh(200);
    };

    const handleResize = () => {
      window.clearTimeout(
        resizeTimer
      );

      resizeTimer =
        window.setTimeout(() => {
          requestScrollRefresh(140);
        }, 260);
    };

    const handleVisibilityChange =
      () => {
        if (document.hidden) {
          lenis?.stop();
          return;
        }

        lenis?.start();

        requestScrollRefresh(200);
      };

    const handlePageShow = (
      event
    ) => {
      if (!event.persisted) {
        return;
      }

      requestScrollRefresh(120);
    };

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "orientationchange",
      handleResize
    );

    window.addEventListener(
      "pageshow",
      handlePageShow
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    window.addEventListener(
      "sge:refresh-animations",
      refreshAnimations
    );

    window.addEventListener(
      "sge:content-loaded",
      refreshAnimations
    );

    /*
     * One controlled initial refresh.
     */
    initialRefreshTimer =
      window.setTimeout(() => {
        requestScrollRefresh(80);
      }, 650);

    /*
     * Refresh once when fonts settle.
     */
    if (document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          if (!destroyed) {
            requestScrollRefresh(220);
          }
        })
        .catch(() => {
          // Keep page functional if font readiness fails.
        });
    }

    const scrollToCurrentHash =
      () => {
        const hash =
          window.location.hash;

        if (!hash) {
          return;
        }

        let destination = null;

        try {
          destination =
            document.querySelector(hash);
        } catch {
          return;
        }

        if (!destination) {
          return;
        }

        scrollToElement(destination, {
          immediate: true,
          onComplete: () => {
            requestScrollRefresh(140);
          },
        });
      };

    initialHashTimer =
      window.setTimeout(
        scrollToCurrentHash,
        750
      );

    return () => {
      destroyed = true;

      cancelRefresh();

      window.clearTimeout(
        resizeTimer
      );

      window.clearTimeout(
        initialHashTimer
      );

      window.clearTimeout(
        initialRefreshTimer
      );

      window.cancelAnimationFrame(
        scrollUpdateFrame
      );

      document.removeEventListener(
        "click",
        handleAnchorClick
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "orientationchange",
        handleResize
      );

      window.removeEventListener(
        "pageshow",
        handlePageShow
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      window.removeEventListener(
        "sge:refresh-animations",
        refreshAnimations
      );

      window.removeEventListener(
        "sge:content-loaded",
        refreshAnimations
      );

      if (lenis) {
        lenis.off(
          "scroll",
          requestScrollTriggerUpdate
        );

        gsap.ticker.remove(
          runLenis
        );

        lenis.destroy();
      }

      root.classList.remove(
        "sge-smooth-scroll"
      );
    };
  }, []);

  return null;
}

export default GlobalAnimations;