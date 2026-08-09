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
  ".rfq-modal__submit",
  ".rfq-modal__whatsapp",
  ".rfq-modal__close",
  ".rfq-modal__success-actions button",
  ".whatsapp-button",
  ".social-btn",
].join(", ");

const BUTTON_SELECTOR = [
  "button",
  "[role='button']",
  ".premium-cta__button",
  ".product-btn",
  ".market-enquiry-button",
  ".markets-cta-button",
  ".contact-luxury__submit",
  ".rfq-modal__submit",
  ".rfq-modal__whatsapp",
  ".rfq-modal__close",
  ".rfq-modal__success-actions button",
  ".social-btn",
].join(", ");

const LINK_SELECTOR = [
  "a:not([href*='wa.me'])",
  "[data-cursor='link']",
].join(", ");

const CHAT_SELECTOR = [
  ".whatsapp-button",
  ".whatsapp",
  "[href*='wa.me']",
  "[data-cursor='chat']",
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
    selector: CHAT_SELECTOR,
    label: "Chat",
  },
  {
    selector: ".testimonials-premium-card",
    label: "Read",
  },
  {
    selector: DRAG_SELECTOR,
    label: "Drag",
  },
  {
    selector: ".rfq-modal__submit",
    label: "Submit",
  },
  {
    selector: ".rfq-modal__whatsapp",
    label: "Chat",
  },
  {
    selector: ".rfq-modal__close",
    label: "Close",
  },
];

const TRAIL_COUNT = 18;
const BURST_COUNT = 28;

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
  const secondaryRippleRef = useRef(null);
  const trailContainerRef = useRef(null);
  const burstContainerRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const ripple = rippleRef.current;
    const secondaryRipple = secondaryRippleRef.current;
    const trailContainer = trailContainerRef.current;
    const burstContainer = burstContainerRef.current;
    const underline = underlineRef.current;

    if (
      !dot ||
      !ring ||
      !label ||
      !ripple ||
      !secondaryRipple ||
      !trailContainer ||
      !burstContainer ||
      !underline
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
      [
        dot,
        ring,
        label,
        ripple,
        secondaryRipple,
        ...trailDots,
      ],
      {
        xPercent: -50,
        yPercent: -50,
      }
    );

    gsap.set(underline, {
      scaleX: 0,
      autoAlpha: 0,
      transformOrigin: "left center",
    });

    const dotX = gsap.quickTo(dot, "x", {
      duration: 0.045,
      ease: "power3.out",
    });

    const dotY = gsap.quickTo(dot, "y", {
      duration: 0.045,
      ease: "power3.out",
    });

    const ringX = gsap.quickTo(ring, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const ringY = gsap.quickTo(ring, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const labelX = gsap.quickTo(label, "x", {
      duration: 0.17,
      ease: "power3.out",
    });

    const labelY = gsap.quickTo(label, "y", {
      duration: 0.17,
      ease: "power3.out",
    });

    const trailQuickSetters = trailDots.map(
      (trailDot, index) => ({
        x: gsap.quickTo(trailDot, "x", {
          duration: 0.09 + index * 0.027,
          ease: "power3.out",
        }),

        y: gsap.quickTo(trailDot, "y", {
          duration: 0.09 + index * 0.027,
          ease: "power3.out",
        }),

        rotation: gsap.quickSetter(
          trailDot,
          "rotation",
          "deg"
        ),

        scaleX: gsap.quickSetter(
          trailDot,
          "scaleX"
        ),

        scaleY: gsap.quickSetter(
          trailDot,
          "scaleY"
        ),
      })
    );

    const ringRotation = gsap.quickTo(
      ring,
      "rotation",
      {
        duration: 0.16,
        ease: "power3.out",
      }
    );

    const ringScaleX = gsap.quickTo(
      ring,
      "scaleX",
      {
        duration: 0.16,
        ease: "power3.out",
      }
    );

    const ringScaleY = gsap.quickTo(
      ring,
      "scaleY",
      {
        duration: 0.16,
        ease: "power3.out",
      }
    );

    let previousX = window.innerWidth / 2;
    let previousY = window.innerHeight / 2;
    let previousTime = performance.now();

    let idleTimer;
    let activeMagneticElement = null;
    let activeMagneticBounds = null;
    let magneticMoveX = null;
    let magneticMoveY = null;
    let magneticScale = null;
    let activeUnderlineElement = null;
    let activeUnderlineBounds = null;
    let cursorIsVisible = false;
    let fastState = false;

    const showCursor = () => {
      if (cursorIsVisible) {
        return;
      }

      cursorIsVisible = true;

      dot.classList.add("custom-cursor-visible");
      ring.classList.add("custom-cursor-visible");

      trailContainer.classList.add(
        "custom-cursor-trail-visible"
      );
    };

    const hideUnderline = () => {
      activeUnderlineElement = null;

      gsap.to(underline, {
        scaleX: 0,
        autoAlpha: 0,
        duration: 0.22,
        ease: "power2.in",
        overwrite: true,
      });
    };

    const hideCursor = () => {
      cursorIsVisible = false;

      dot.classList.remove("custom-cursor-visible");
      ring.classList.remove("custom-cursor-visible");

      label.classList.remove(
        "custom-cursor-label-visible"
      );

      trailContainer.classList.remove(
        "custom-cursor-trail-visible"
      );

      hideUnderline();
    };

    const resetVisualState = () => {
      dot.classList.remove(
        "custom-cursor-hover",
        "custom-cursor-button",
        "custom-cursor-link",
        "custom-cursor-chat",
        "custom-cursor-media",
        "custom-cursor-input",
        "custom-cursor-drag"
      );

      ring.classList.remove(
        "custom-cursor-hover",
        "custom-cursor-button",
        "custom-cursor-link",
        "custom-cursor-chat",
        "custom-cursor-media",
        "custom-cursor-input",
        "custom-cursor-drag",
        "custom-cursor-idle"
      );

      label.classList.remove(
        "custom-cursor-label-visible"
      );
    };

    const resetMagneticElement = () => {
      if (!activeMagneticElement) {
        return;
      }

      gsap.to(activeMagneticElement, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "elastic.out(1, 0.55)",
        overwrite: true,
      });

      activeMagneticElement = null;
      activeMagneticBounds = null;
      magneticMoveX = null;
      magneticMoveY = null;
      magneticScale = null;
    };

    const scheduleIdlePulse = () => {
      window.clearTimeout(idleTimer);

      ring.classList.remove("custom-cursor-idle");

      idleTimer = window.setTimeout(() => {
        ring.classList.add("custom-cursor-idle");
      }, 850);
    };

    const showLinkUnderline = (element) => {
      if (!(element instanceof Element)) {
        hideUnderline();
        return;
      }

      const bounds = element.getBoundingClientRect();

      if (bounds.width < 12 || bounds.height < 8) {
        hideUnderline();
        return;
      }

      activeUnderlineElement = element;
      activeUnderlineBounds = bounds;

      gsap.killTweensOf(underline);

      gsap.set(underline, {
        x: bounds.left,
        y: bounds.bottom + 3,
        width: bounds.width,
        scaleX: 0,
        autoAlpha: 1,
        transformOrigin: "left center",
      });

      gsap.to(underline, {
        scaleX: 1,
        duration: 0.36,
        ease: "power3.out",
      });
    };

    const updateLinkUnderline = () => {
      if (!activeUnderlineElement) {
        return;
      }

      activeUnderlineBounds =
        activeUnderlineElement.getBoundingClientRect();

      gsap.set(underline, {
        x: activeUnderlineBounds.left,
        y: activeUnderlineBounds.bottom + 3,
        width: activeUnderlineBounds.width,
      });
    };

    let pointerFrame = 0;
    let latestPointerEvent = null;

    const renderPointerMove = (event) => {
      const currentTime = performance.now();

      const deltaTime = Math.max(
        8,
        currentTime - previousTime
      );

      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;

      const movementDistance = Math.sqrt(
        deltaX ** 2 + deltaY ** 2
      );

      const speed = movementDistance / deltaTime;

      const angle =
        Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      const normalizedSpeed = Math.min(speed, 4.8);

      const stretch = Math.min(
        2.35,
        1 + normalizedSpeed * 0.34
      );

      const squash = Math.max(
        0.48,
        1 - normalizedSpeed * 0.11
      );

      const target = event.target;

      let cursorX = event.clientX;
      let cursorY = event.clientY;

      let magneticElement = null;

      if (target instanceof Element) {
        magneticElement = target.closest(
          MAGNETIC_SELECTOR
        );
      }

      if (magneticElement) {
        if (
          activeMagneticElement !== magneticElement
        ) {
          resetMagneticElement();

          activeMagneticElement = magneticElement;
          activeMagneticBounds =
            magneticElement.getBoundingClientRect();

          magneticMoveX = gsap.quickTo(
            magneticElement,
            "x",
            {
              duration: 0.28,
              ease: "power3.out",
            }
          );

          magneticMoveY = gsap.quickTo(
            magneticElement,
            "y",
            {
              duration: 0.28,
              ease: "power3.out",
            }
          );

          magneticScale = gsap.quickTo(
            magneticElement,
            "scale",
            {
              duration: 0.28,
              ease: "power3.out",
            }
          );
        }

        const bounds = activeMagneticBounds;

        if (bounds) {
          const centerX =
            bounds.left + bounds.width / 2;

          const centerY =
            bounds.top + bounds.height / 2;

          const distanceX =
            event.clientX - centerX;

          const distanceY =
            event.clientY - centerY;

          const elementPullX =
            distanceX * 0.24;

          const elementPullY =
            distanceY * 0.24;

          cursorX =
            event.clientX -
            distanceX * 0.13;

          cursorY =
            event.clientY -
            distanceY * 0.13;

          magneticMoveX?.(elementPullX);
          magneticMoveY?.(elementPullY);
          magneticScale?.(1.025);
        }
      } else {
        resetMagneticElement();
      }

      dotX(cursorX);
      dotY(cursorY);

      ringX(cursorX);
      ringY(cursorY);

      labelX(cursorX + 23);
      labelY(cursorY + 25);

      trailQuickSetters.forEach((setter) => {
        setter.x(event.clientX);
        setter.y(event.clientY);
      });

      const trailStretch = Math.min(
        2.15,
        1 + normalizedSpeed * 0.22
      );

      const trailSquash = Math.max(
        0.55,
        1 - normalizedSpeed * 0.07
      );

      trailQuickSetters.forEach(
        (setter, index) => {
          setter.rotation(angle);

          setter.scaleX(
            Math.max(
              1,
              trailStretch - index * 0.025
            )
          );

          setter.scaleY(trailSquash);
        }
      );

      ringRotation(angle);
      ringScaleX(stretch);
      ringScaleY(squash);

      const nextFastState = speed > 1.25;

      if (nextFastState !== fastState) {
        fastState = nextFastState;

        ring.classList.toggle(
          "custom-cursor-fast",
          fastState
        );

        dot.classList.toggle(
          "custom-cursor-fast",
          fastState
        );
      }
      showCursor();
      scheduleIdlePulse();

      previousX = event.clientX;
      previousY = event.clientY;
      previousTime = currentTime;
    };

    const handlePointerMove = (event) => {
      latestPointerEvent = event;

      if (pointerFrame) {
        return;
      }

      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = 0;

        if (latestPointerEvent) {
          renderPointerMove(latestPointerEvent);
        }
      });
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

      const inputElement = target.closest(
        "input, textarea, select"
      );

      if (inputElement) {
        hideUnderline();

        dot.classList.add("custom-cursor-input");
        ring.classList.add("custom-cursor-input");
        return;
      }

      const dragElement = target.closest(DRAG_SELECTOR);

      if (dragElement) {
        hideUnderline();

        dot.classList.add("custom-cursor-drag");
        ring.classList.add("custom-cursor-drag");
        return;
      }

      const chatElement = target.closest(CHAT_SELECTOR);

      if (chatElement) {
        hideUnderline();

        dot.classList.add("custom-cursor-chat");
        ring.classList.add("custom-cursor-chat");
        return;
      }

      const mediaElement = target.closest(
        MEDIA_SELECTOR
      );

      if (mediaElement) {
        hideUnderline();

        dot.classList.add("custom-cursor-media");
        ring.classList.add("custom-cursor-media");
        return;
      }

      const buttonElement = target.closest(
        BUTTON_SELECTOR
      );

      if (buttonElement) {
        hideUnderline();

        dot.classList.add("custom-cursor-button");
        ring.classList.add("custom-cursor-button");
        return;
      }

      const linkElement = target.closest(LINK_SELECTOR);

      if (linkElement) {
        dot.classList.add("custom-cursor-link");
        ring.classList.add("custom-cursor-link");

        showLinkUnderline(linkElement);
        return;
      }

      if (target.closest(MAGNETIC_SELECTOR)) {
        hideUnderline();

        dot.classList.add("custom-cursor-hover");
        ring.classList.add("custom-cursor-hover");
      } else {
        hideUnderline();
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
      hideUnderline();
    };

    const createClickBurst = (x, y) => {
      burstContainer.innerHTML = "";

      Array.from({ length: BURST_COUNT }).forEach(
        (_, index) => {
          const particle =
            document.createElement("span");

          const isSpark = index % 3 === 0;

          particle.className = isSpark
            ? "custom-cursor-burst-particle custom-cursor-burst-spark"
            : "custom-cursor-burst-particle";

          burstContainer.appendChild(particle);

          const particleAngle =
            (Math.PI * 2 * index) / BURST_COUNT +
            (Math.random() - 0.5) * 0.52;

          const distance =
            54 + Math.random() * 72;

          const particleScale =
            0.75 + Math.random() * 1.15;

          gsap.set(particle, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 1,
            scale: particleScale,
            rotation:
              (particleAngle * 180) / Math.PI,
          });

          gsap.to(particle, {
            x:
              x +
              Math.cos(particleAngle) * distance,

            y:
              y +
              Math.sin(particleAngle) * distance,

            autoAlpha: 0,

            scale: isSpark ? 0.25 : 0,

            rotation:
              (particleAngle * 180) / Math.PI +
              (Math.random() - 0.5) * 80,

            duration: 0.68 + Math.random() * 0.34,
            ease: "power3.out",

            onComplete: () => {
              particle.remove();
            },
          });
        }
      );
    };

    const animateRipple = (
      element,
      x,
      y,
      delay = 0
    ) => {
      gsap.killTweensOf(element);

      gsap.set(element, {
        x,
        y,
        autoAlpha: 0,
        scale: 0.2,
      });

      gsap.to(element, {
        autoAlpha: 0.82,
        scale: 0.48,
        duration: 0.12,
        delay,
        ease: "power2.out",
      });

      gsap.to(element, {
        autoAlpha: 0,
        scale: 2.7,
        duration: 0.78,
        delay: delay + 0.08,
        ease: "power3.out",
      });
    };

    const handlePointerDown = (event) => {
      animateRipple(
        ripple,
        event.clientX,
        event.clientY
      );

      animateRipple(
        secondaryRipple,
        event.clientX,
        event.clientY,
        0.1
      );

      createClickBurst(
        event.clientX,
        event.clientY
      );

      gsap.to(dot, {
        scale: 1.7,
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(ring, {
        scaleX: 0.66,
        scaleY: 0.66,
        duration: 0.1,
        ease: "power3.out",
        overwrite: "auto",
      });

      if (activeMagneticElement) {
        gsap.to(activeMagneticElement, {
          scale: 0.97,
          duration: 0.1,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const handlePointerUp = () => {
      gsap.to(dot, {
        scale: 1,
        duration: 0.34,
        ease: "back.out(2.6)",
        overwrite: "auto",
      });

      gsap.to(ring, {
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        duration: 0.44,
        ease: "elastic.out(1, 0.45)",
        overwrite: "auto",
      });

      if (activeMagneticElement) {
        gsap.to(activeMagneticElement, {
          scale: 1.025,
          duration: 0.38,
          ease: "back.out(2)",
          overwrite: "auto",
        });
      }
    };

    const invalidateGeometry = () => {
      activeMagneticBounds = null;

      if (activeMagneticElement) {
        activeMagneticBounds =
          activeMagneticElement.getBoundingClientRect();
      }

      updateLinkUnderline();
    };

    const handleScroll = () => {
      invalidateGeometry();
    };

    const handleResize = () => {
      invalidateGeometry();
    };

    const handleWindowBlur = () => {
      hideCursor();
      resetVisualState();
      resetMagneticElement();
    };

    document.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
        capture: true,
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

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    document.addEventListener(
      "mouseleave",
      hideCursor
    );

    document.addEventListener(
      "mouseenter",
      showCursor
    );

    return () => {
      window.clearTimeout(idleTimer);
      window.cancelAnimationFrame(pointerFrame);

      latestPointerEvent = null;

      resetMagneticElement();

      document.documentElement.classList.remove(
        "custom-cursor-enabled"
      );

      document.removeEventListener(
        "pointermove",
        handlePointerMove,
        {
          capture: true,
        }
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
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
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
        secondaryRipple,
        underline,
        ...trailDots,
      ]);

      burstContainer.innerHTML = "";
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
        ref={underlineRef}
        className="custom-cursor-link-underline"
        aria-hidden="true"
      />

      <div
        ref={rippleRef}
        className="custom-cursor-ripple"
        aria-hidden="true"
      />

      <div
        ref={secondaryRippleRef}
        className="custom-cursor-ripple custom-cursor-ripple-secondary"
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