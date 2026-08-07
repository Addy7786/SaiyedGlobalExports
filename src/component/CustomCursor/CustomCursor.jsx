import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./CustomCursor.css";

const MAGNETIC_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  ".premium-cta__button",
  ".product-btn",
  ".market-enquiry-button",
  ".markets-cta-button",
  ".contact-luxury__submit",
  ".whatsapp-button",
  ".social-btn",
].join(", ");

const MEDIA_SELECTOR = [
  ".product-card",
  ".market-card",
  ".gallery-final__card",
  ".testimonials-premium-card",
  ".why-choose__feature",
  ".company-profile-feature",
  ".about-feature-card",
  "img[data-cursor-media]",
].join(", ");

const DRAG_SELECTOR = [
  ".testimonials-premium-slider",
  ".gallery-final-lightbox__content",
  "[data-cursor='drag']",
].join(", ");

const LABEL_RULES = [
  {
    selector:
      ".gallery-final__card, [data-cursor-label='View']",
    label: "View",
  },
  {
    selector:
      ".product-card, [data-cursor-label='Explore']",
    label: "Explore",
  },
  {
    selector:
      ".market-card, [data-cursor-label='Market']",
    label: "Market",
  },
  {
    selector:
      ".whatsapp-button, .whatsapp, [href*='wa.me']",
    label: "Chat",
  },
  {
    selector:
      ".testimonials-premium-card",
    label: "Read",
  },
  {
    selector: DRAG_SELECTOR,
    label: "Drag",
  },
];

const TRAIL_COUNT = 6;
const BURST_COUNT = 10;

function getCursorLabel(target) {
  if (!(target instanceof Element)) {
    return "";
  }

  const customLabel = target
    .closest("[data-cursor-label]")
    ?.getAttribute("data-cursor-label");

  if (customLabel) {
    return customLabel;
  }

  const matchedRule = LABEL_RULES.find(({ selector }) =>
    target.closest(selector)
  );

  return matchedRule?.label || "";
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const rippleRef = useRef(null);
  const trailContainerRef = useRef(null);
  const burstContainerRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const ripple = rippleRef.current;
    const trailContainer = trailContainerRef.current;
    const burstContainer = burstContainerRef.current;

    if (
      !dot ||
      !ring ||
      !label ||
      !ripple ||
      !trailContainer ||
      !burstContainer
    ) {
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

    document.documentElement.classList.add(
      "custom-cursor-enabled"
    );

    const trailDots = Array.from(
      trailContainer.querySelectorAll(
        ".custom-cursor-trail-dot"
      )
    );

    gsap.set(
      [dot, ring, label, ripple, ...trailDots],
      {
        xPercent: -50,
        yPercent: -50,
      }
    );

    const dotX = gsap.quickTo(dot, "x", {
      duration: 0.08,
      ease: "power3.out",
    });

    const dotY = gsap.quickTo(dot, "y", {
      duration: 0.08,
      ease: "power3.out",
    });

    const ringX = gsap.quickTo(ring, "x", {
      duration: 0.34,
      ease: "power3.out",
    });

    const ringY = gsap.quickTo(ring, "y", {
      duration: 0.34,
      ease: "power3.out",
    });

    const labelX = gsap.quickTo(label, "x", {
      duration: 0.22,
      ease: "power3.out",
    });

    const labelY = gsap.quickTo(label, "y", {
      duration: 0.22,
      ease: "power3.out",
    });

    const trailQuickSetters = trailDots.map((trailDot, index) => ({
      x: gsap.quickTo(trailDot, "x", {
        duration: 0.14 + index * 0.055,
        ease: "power3.out",
      }),
      y: gsap.quickTo(trailDot, "y", {
        duration: 0.14 + index * 0.055,
        ease: "power3.out",
      }),
    }));

    let previousX = window.innerWidth / 2;
    let previousY = window.innerHeight / 2;
    let previousTime = performance.now();
    let idleTimer;
    let activeMagneticElement = null;

    const showCursor = () => {
      dot.classList.add("custom-cursor-visible");
      ring.classList.add("custom-cursor-visible");
      trailContainer.classList.add(
        "custom-cursor-trail-visible"
      );
    };

    const hideCursor = () => {
      dot.classList.remove("custom-cursor-visible");
      ring.classList.remove("custom-cursor-visible");
      label.classList.remove("custom-cursor-label-visible");
      trailContainer.classList.remove(
        "custom-cursor-trail-visible"
      );
    };

    const resetVisualState = () => {
      dot.classList.remove(
        "custom-cursor-hover",
        "custom-cursor-media",
        "custom-cursor-input",
        "custom-cursor-drag"
      );

      ring.classList.remove(
        "custom-cursor-hover",
        "custom-cursor-media",
        "custom-cursor-input",
        "custom-cursor-drag",
        "custom-cursor-idle"
      );

      label.classList.remove("custom-cursor-label-visible");
    };

    const resetMagneticElement = () => {
      if (!activeMagneticElement) {
        return;
      }

      gsap.to(activeMagneticElement, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        overwrite: true,
      });

      activeMagneticElement = null;
    };

    const scheduleIdlePulse = () => {
      window.clearTimeout(idleTimer);

      ring.classList.remove("custom-cursor-idle");

      idleTimer = window.setTimeout(() => {
        ring.classList.add("custom-cursor-idle");
      }, 900);
    };

    const handlePointerMove = (event) => {
      const currentTime = performance.now();
      const deltaTime = Math.max(
        16,
        currentTime - previousTime
      );

      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;
      const speed =
        Math.sqrt(deltaX ** 2 + deltaY ** 2) /
        deltaTime;

      const angle =
        Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      const stretch = Math.min(1.45, 1 + speed * 0.18);
      const squash = Math.max(0.78, 1 - speed * 0.06);

      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      labelX(event.clientX + 20);
      labelY(event.clientY + 22);

      trailQuickSetters.forEach((setter) => {
        setter.x(event.clientX);
        setter.y(event.clientY);
      });

      gsap.to(ring, {
        rotation: angle,
        scaleX: stretch,
        scaleY: squash,
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto",
      });

      showCursor();
      scheduleIdlePulse();

      previousX = event.clientX;
      previousY = event.clientY;
      previousTime = currentTime;

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const magneticElement = target.closest(
        MAGNETIC_SELECTOR
      );

      if (magneticElement) {
        if (
          activeMagneticElement &&
          activeMagneticElement !== magneticElement
        ) {
          resetMagneticElement();
        }

        activeMagneticElement = magneticElement;

        const bounds =
          magneticElement.getBoundingClientRect();

        const magneticX =
          (event.clientX -
            (bounds.left + bounds.width / 2)) *
          0.16;

        const magneticY =
          (event.clientY -
            (bounds.top + bounds.height / 2)) *
          0.16;

        gsap.to(magneticElement, {
          x: magneticX,
          y: magneticY,
          duration: 0.34,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        resetMagneticElement();
      }
    };

    const handlePointerOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      resetVisualState();

      const cursorLabel = getCursorLabel(target);

      if (cursorLabel) {
        label.textContent = cursorLabel;
        label.classList.add(
          "custom-cursor-label-visible"
        );
      }

      if (
        target.closest("input, textarea, select")
      ) {
        dot.classList.add("custom-cursor-input");
        ring.classList.add("custom-cursor-input");
        return;
      }

      if (target.closest(DRAG_SELECTOR)) {
        dot.classList.add("custom-cursor-drag");
        ring.classList.add("custom-cursor-drag");
        return;
      }

      if (target.closest(MEDIA_SELECTOR)) {
        dot.classList.add("custom-cursor-media");
        ring.classList.add("custom-cursor-media");
        return;
      }

      if (target.closest(MAGNETIC_SELECTOR)) {
        dot.classList.add("custom-cursor-hover");
        ring.classList.add("custom-cursor-hover");
      }
    };

    const handlePointerOut = (event) => {
      const relatedTarget = event.relatedTarget;

      if (
        relatedTarget instanceof Element &&
        relatedTarget.closest(
          `${MAGNETIC_SELECTOR}, ${MEDIA_SELECTOR}, ${DRAG_SELECTOR}, input, textarea, select`
        )
      ) {
        return;
      }

      resetVisualState();
      resetMagneticElement();
    };

    const createClickBurst = (x, y) => {
      burstContainer.innerHTML = "";

      Array.from({ length: BURST_COUNT }).forEach(
        (_, index) => {
          const particle =
            document.createElement("span");

          particle.className =
            "custom-cursor-burst-particle";

          burstContainer.appendChild(particle);

          const angle =
            (Math.PI * 2 * index) / BURST_COUNT +
            Math.random() * 0.35;

          const distance =
            28 + Math.random() * 34;

          gsap.set(particle, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 1,
            scale: 0.6 + Math.random() * 0.5,
          });

          gsap.to(particle, {
            x: x + Math.cos(angle) * distance,
            y: y + Math.sin(angle) * distance,
            autoAlpha: 0,
            scale: 0,
            duration: 0.5 + Math.random() * 0.2,
            ease: "power2.out",
          });
        }
      );
    };

    const handlePointerDown = (event) => {
      gsap.killTweensOf(ripple);

      gsap.set(ripple, {
        x: event.clientX,
        y: event.clientY,
        autoAlpha: 0.58,
        scale: 0.35,
      });

      gsap.to(ripple, {
        autoAlpha: 0,
        scale: 1.75,
        duration: 0.58,
        ease: "power2.out",
      });

      createClickBurst(event.clientX, event.clientY);

      gsap.to(ring, {
        scale: 0.82,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const handlePointerUp = () => {
      gsap.to(ring, {
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        duration: 0.34,
        ease: "back.out(1.8)",
      });
    };

    const handleWindowBlur = () => {
      hideCursor();
      resetVisualState();
      resetMagneticElement();
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    window.addEventListener("blur", handleWindowBlur);

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      window.clearTimeout(idleTimer);

      resetMagneticElement();

      document.documentElement.classList.remove(
        "custom-cursor-enabled"
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );

      document.removeEventListener(
        "mouseleave",
        hideCursor
      );

      document.removeEventListener(
        "mouseenter",
        showCursor
      );

      gsap.killTweensOf([
        dot,
        ring,
        label,
        ripple,
        ...trailDots,
      ]);
    };
  }, []);

  return (
    <>
      <div
        ref={trailContainerRef}
        className="custom-cursor-trail"
        aria-hidden="true"
      >
        {Array.from({ length: TRAIL_COUNT }).map(
          (_, index) => (
            <span
              key={index}
              className="custom-cursor-trail-dot"
              style={{
                "--trail-index": index,
              }}
            />
          )
        )}
      </div>

      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
        aria-hidden="true"
      />

      <div
        ref={labelRef}
        className="custom-cursor-label"
        aria-hidden="true"
      />

      <div
        ref={rippleRef}
        className="custom-cursor-ripple"
        aria-hidden="true"
      />

      <div
        ref={burstContainerRef}
        className="custom-cursor-burst"
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;