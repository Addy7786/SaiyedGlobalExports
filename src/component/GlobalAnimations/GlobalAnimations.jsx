import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./GlobalAnimations.css";

gsap.registerPlugin(ScrollTrigger);

function GlobalAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const coarsePointerQuery = window.matchMedia(
      "(pointer: coarse)"
    );

    const reduceMotion = reduceMotionQuery.matches;
    const isTouchDevice = coarsePointerQuery.matches;

    if (reduceMotion) {
      root.classList.add("reduce-motion");

      const refreshWithoutMotion = () => {
        ScrollTrigger.refresh();
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
        root.classList.remove("reduce-motion");

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

    root.classList.add("sge-smooth-scroll");

    /*
     * Lenis handles scrolling only.
     * All section reveal animations are controlled
     * inside their own components.
     */
    const lenis = new Lenis({
      duration: isTouchDevice ? 0.9 : 1.08,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: isTouchDevice ? 1 : 0.92,
      touchMultiplier: 1.05,
      syncTouch: false,
      infinite: false,
    });

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScrollTrigger);

    const runLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(runLenis);
    gsap.ticker.lagSmoothing(0);

    /*
     * Keep native and programmatic anchor navigation
     * synchronized with Lenis.
     */
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();

      lenis.scrollTo(target, {
        offset: -88,
        duration: 1.05,
        lock: false,
        force: true,
        onComplete: () => {
          window.history.replaceState(null, "", href);
          ScrollTrigger.refresh();
        },
      });
    };

    document.addEventListener("click", handleAnchorClick);

    /*
     * Refresh after lazy sections, fonts, images,
     * resize and orientation changes.
     */
    let refreshTimer;
    let resizeTimer;

    const refreshAnimations = () => {
      window.clearTimeout(refreshTimer);

      refreshTimer = window.setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, 90);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);

      resizeTimer = window.setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, 180);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
        refreshAnimations();
      }
    };

    const handlePageShow = (event) => {
      if (event.persisted) {
        lenis.resize();
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("load", refreshAnimations);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("pageshow", handlePageShow);
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

    document.fonts?.ready.then(refreshAnimations);

    /*
     * Handle direct URLs such as /#products after
     * lazy-loaded content enters the DOM.
     */
    const scrollToCurrentHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      const target = document.querySelector(hash);

      if (!target) {
        return;
      }

      lenis.scrollTo(target, {
        offset: -88,
        immediate: true,
        force: true,
      });

      ScrollTrigger.refresh();
    };

    const initialHashTimer = window.setTimeout(
      scrollToCurrentHash,
      650
    );

    const initialRefreshTimer = window.setTimeout(
      refreshAnimations,
      350
    );

    return () => {
      window.clearTimeout(refreshTimer);
      window.clearTimeout(resizeTimer);
      window.clearTimeout(initialHashTimer);
      window.clearTimeout(initialRefreshTimer);

      document.removeEventListener(
        "click",
        handleAnchorClick
      );

      window.removeEventListener(
        "load",
        refreshAnimations
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

      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(runLenis);
      lenis.destroy();

      /*
       * Do not call ScrollTrigger.getAll().kill().
       * Every component owns and cleans its own triggers.
       */
      root.classList.remove("sge-smooth-scroll");
    };
  }, []);

  return null;
}

export default GlobalAnimations;