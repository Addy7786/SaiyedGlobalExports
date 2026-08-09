import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";

import "./BackToTop.css";

function BackToTop() {
  const buttonRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const percentageElement =
      percentageRef.current;

    if (!button || !percentageElement) {
      return undefined;
    }

    const documentElement =
      document.documentElement;

    let animationFrame = 0;
    let isVisible = false;
    let previousPercentage = -1;

    gsap.set(button, {
      autoAlpha: 0,
      y: 18,
      scale: 0.9,
      pointerEvents: "none",
    });

    const updateVisibility = (
      nextVisible
    ) => {
      if (nextVisible === isVisible) {
        return;
      }

      isVisible = nextVisible;

      gsap.killTweensOf(button);

      gsap.to(button, {
        autoAlpha: nextVisible ? 1 : 0,
        y: nextVisible ? 0 : 18,
        scale: nextVisible ? 1 : 0.9,
        duration: nextVisible
          ? 0.38
          : 0.26,
        ease: nextVisible
          ? "back.out(1.7)"
          : "power2.in",
        pointerEvents: nextVisible
          ? "auto"
          : "none",
        overwrite: "auto",
      });
    };

    const renderState = () => {
      animationFrame = 0;

      const scrollTop =
        window.scrollY ||
        documentElement.scrollTop ||
        0;

      const scrollHeight =
        documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? Math.min(
              100,
              Math.max(
                0,
                (scrollTop / scrollHeight) *
                  100
              )
            )
          : 0;

      const roundedPercentage =
        Math.round(progress);

      updateVisibility(scrollTop > 420);

      button.style.setProperty(
        "--back-progress",
        `${progress * 3.6}deg`
      );

      if (
        roundedPercentage !==
        previousPercentage
      ) {
        previousPercentage =
          roundedPercentage;

        percentageElement.textContent =
          `${roundedPercentage}%`;

        button.setAttribute(
          "aria-label",
          `Back to top. Page scrolled ${roundedPercentage} percent`
        );
      }
    };

    const requestStateUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame =
        window.requestAnimationFrame(
          renderState
        );
    };

    requestStateUpdate();

    window.addEventListener(
      "scroll",
      requestStateUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      requestStateUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "sge:content-loaded",
      requestStateUpdate
    );

    window.addEventListener(
      "sge:refresh-animations",
      requestStateUpdate
    );

    return () => {
      window.cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "scroll",
        requestStateUpdate
      );

      window.removeEventListener(
        "resize",
        requestStateUpdate
      );

      window.removeEventListener(
        "sge:content-loaded",
        requestStateUpdate
      );

      window.removeEventListener(
        "sge:refresh-animations",
        requestStateUpdate
      );

      gsap.killTweensOf(button);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top. Page scrolled 0 percent"
      title="Back to top"
      style={{
        "--back-progress": "0deg",
      }}
    >
      <span className="back-to-top__core">
        <ArrowUp
          size={21}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>

      <span
        ref={percentageRef}
        className="back-to-top__percentage"
      >
        0%
      </span>
    </button>
  );
}

export default BackToTop;