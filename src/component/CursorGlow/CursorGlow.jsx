import { useEffect, useRef } from "react";

import "./CursorGlow.css";

const SPOTLIGHT_SELECTOR = [
  ".product-card",
  ".market-card",
  ".gallery-final__card",
  ".testimonials-premium-card",
  ".why-choose__feature",
  ".company-profile-feature",
  "[data-cursor-spotlight]",
].join(", ");

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  ".product-card",
  ".market-card",
  ".gallery-final__card",
].join(", ");

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return undefined;
    }

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reduceMotion) {
      return undefined;
    }

    let pointerFrame = 0;
    let latestX = window.innerWidth / 2;
    let latestY = window.innerHeight / 2;
    let activeSpotlightElement = null;
    let cachedBounds = null;
    let glowVisible = false;
    let glowActive = false;

    const clearSpotlight = () => {
      if (!activeSpotlightElement) {
        return;
      }

      activeSpotlightElement.classList.remove(
        "cursor-spotlight-active"
      );

      activeSpotlightElement.style.removeProperty(
        "--cursor-x"
      );

      activeSpotlightElement.style.removeProperty(
        "--cursor-y"
      );

      activeSpotlightElement = null;
      cachedBounds = null;
    };

    const setGlowVisible = (visible) => {
      if (glowVisible === visible) {
        return;
      }

      glowVisible = visible;

      glow.classList.toggle(
        "cursor-glow-visible",
        visible
      );
    };

    const setGlowActive = (active) => {
      if (glowActive === active) {
        return;
      }

      glowActive = active;

      glow.classList.toggle(
        "cursor-glow-active",
        active
      );
    };

    const renderPointerMove = () => {
      pointerFrame = 0;

      glow.style.transform =
        `translate3d(${latestX}px, ${latestY}px, 0) translate3d(-50%, -50%, 0)`;

      setGlowVisible(true);

      if (!activeSpotlightElement) {
        return;
      }

      if (!cachedBounds) {
        cachedBounds =
          activeSpotlightElement.getBoundingClientRect();
      }

      if (
        !cachedBounds.width ||
        !cachedBounds.height
      ) {
        return;
      }

      const x =
        ((latestX - cachedBounds.left) /
          cachedBounds.width) *
        100;

      const y =
        ((latestY - cachedBounds.top) /
          cachedBounds.height) *
        100;

      activeSpotlightElement.style.setProperty(
        "--cursor-x",
        `${x}%`
      );

      activeSpotlightElement.style.setProperty(
        "--cursor-y",
        `${y}%`
      );
    };

    const requestRender = () => {
      if (pointerFrame) {
        return;
      }

      pointerFrame =
        window.requestAnimationFrame(
          renderPointerMove
        );
    };

    const handlePointerMove = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;

      const target = event.target;

      if (target instanceof Element) {
        const nextSpotlight =
          target.closest(
            SPOTLIGHT_SELECTOR
          );

        if (
          nextSpotlight !==
          activeSpotlightElement
        ) {
          clearSpotlight();

          activeSpotlightElement =
            nextSpotlight;

          if (activeSpotlightElement) {
            cachedBounds =
              activeSpotlightElement.getBoundingClientRect();

            activeSpotlightElement.classList.add(
              "cursor-spotlight-active"
            );
          }
        }
      }

      requestRender();
    };

    const handlePointerOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      setGlowActive(
        Boolean(
          target.closest(
            INTERACTIVE_SELECTOR
          )
        )
      );
    };

    const invalidateBounds = () => {
      cachedBounds = null;
    };

    const hideGlow = () => {
      setGlowVisible(false);
      setGlowActive(false);
      clearSpotlight();
    };

    document.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
        capture: true,
      }
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "scroll",
      invalidateBounds,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      invalidateBounds,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "mouseleave",
      hideGlow
    );

    window.addEventListener(
      "blur",
      hideGlow
    );

    return () => {
      window.cancelAnimationFrame(
        pointerFrame
      );

      clearSpotlight();

      document.removeEventListener(
        "pointermove",
        handlePointerMove,
        {
          capture: true,
        }
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      window.removeEventListener(
        "scroll",
        invalidateBounds
      );

      window.removeEventListener(
        "resize",
        invalidateBounds
      );

      document.removeEventListener(
        "mouseleave",
        hideGlow
      );

      window.removeEventListener(
        "blur",
        hideGlow
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}

export default CursorGlow;