import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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

    gsap.set(glow, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveX = gsap.quickTo(glow, "x", {
      duration: 0.72,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(glow, "y", {
      duration: 0.72,
      ease: "power3.out",
    });

    let activeSpotlightElement = null;

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
    };

    const handlePointerMove = (event) => {
      moveX(event.clientX);
      moveY(event.clientY);

      glow.classList.add("cursor-glow-visible");

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const spotlightElement = target.closest(
        SPOTLIGHT_SELECTOR
      );

      if (!spotlightElement) {
        clearSpotlight();
        return;
      }

      if (
        activeSpotlightElement &&
        activeSpotlightElement !== spotlightElement
      ) {
        clearSpotlight();
      }

      activeSpotlightElement = spotlightElement;

      const bounds =
        spotlightElement.getBoundingClientRect();

      const x =
        ((event.clientX - bounds.left) /
          bounds.width) *
        100;

      const y =
        ((event.clientY - bounds.top) /
          bounds.height) *
        100;

      spotlightElement.style.setProperty(
        "--cursor-x",
        `${x}%`
      );

      spotlightElement.style.setProperty(
        "--cursor-y",
        `${y}%`
      );

      spotlightElement.classList.add(
        "cursor-spotlight-active"
      );
    };

    const handlePointerOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .product-card, .market-card, .gallery-final__card"
      );

      glow.classList.toggle(
        "cursor-glow-active",
        Boolean(interactive)
      );
    };

    const hideGlow = () => {
      glow.classList.remove(
        "cursor-glow-visible",
        "cursor-glow-active"
      );

      clearSpotlight();
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener("mouseleave", hideGlow);
    window.addEventListener("blur", hideGlow);

    return () => {
      clearSpotlight();

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "mouseleave",
        hideGlow
      );

      window.removeEventListener("blur", hideGlow);

      gsap.killTweensOf(glow);
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