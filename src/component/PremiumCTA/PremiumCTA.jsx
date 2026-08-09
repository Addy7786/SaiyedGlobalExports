import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Globe2,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Ship,
  Sparkles,
} from "lucide-react";

import "./PremiumCTA.css";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Trusted Export Partner",
  },
  {
    icon: PackageCheck,
    label: "Quality Products",
  },
  {
    icon: Ship,
    label: "Global Logistics",
  },
  {
    icon: MessageCircle,
    label: "Fast Communication",
  },
];

function PremiumCTA() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;

    if (!section || !panel) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".premium-cta__copy > *, .premium-cta__trust-item, .premium-cta__actions > *"
        ),
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      timeline
        .fromTo(
          panel,
          {
            autoAlpha: 0,
            y: 60,
            scale: 0.97,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".premium-cta__eyebrow",
          {
            autoAlpha: 0,
            y: -18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          0.2
        )
        .fromTo(
          ".premium-cta__title-line",
          {
            autoAlpha: 0,
            y: 45,
            rotateX: -12,
            transformOrigin: "50% 100%",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.28
        )
        .fromTo(
          ".premium-cta__description",
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
          },
          0.55
        )
        .fromTo(
          ".premium-cta__trust-item",
          {
            autoAlpha: 0,
            y: 20,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.58,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.7
        )
        .fromTo(
          ".premium-cta__actions > *",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.9
        );

      gsap.to(
        section.querySelector(
          ".premium-cta__globe"
        ),
        {
        y: 20,
        rotate: 6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: false,
        },
      }
      );

      gsap.to(
        section.querySelector(
          ".premium-cta__glow--one"
        ),
        {
        x: 70,
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
          invalidateOnRefresh: false,
        },
      }
      );

      gsap.to(
        section.querySelector(
          ".premium-cta__glow--two"
        ),
        {
        x: -65,
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      }
      );
    }, section);

    const canTilt =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    let bounds = null;
    let pointerFrame = 0;
    let latestPointerEvent = null;

    gsap.set(panel, {
      transformPerspective: 1400,
      transformOrigin: "center center",
    });

    const rotateXTo = gsap.quickTo(
      panel,
      "rotateX",
      {
        duration: 0.5,
        ease: "power2.out",
      }
    );

    const rotateYTo = gsap.quickTo(
      panel,
      "rotateY",
      {
        duration: 0.5,
        ease: "power2.out",
      }
    );

    const updateBounds = () => {
      if (!canTilt) {
        return;
      }

      bounds = panel.getBoundingClientRect();
    };

    const renderMove = () => {
      pointerFrame = 0;

      if (
        !canTilt ||
        !latestPointerEvent ||
        !bounds
      ) {
        return;
      }

      const x =
        (latestPointerEvent.clientX -
          bounds.left) /
          bounds.width -
        0.5;

      const y =
        (latestPointerEvent.clientY -
          bounds.top) /
          bounds.height -
        0.5;

      rotateYTo(x * 2.5);
      rotateXTo(y * -2);
    };

    const handleEnter = () => {
      updateBounds();
    };

    const handleMove = (event) => {
      if (!canTilt) {
        return;
      }

      latestPointerEvent = event;

      if (!bounds) {
        updateBounds();
      }

      if (pointerFrame) {
        return;
      }

      pointerFrame =
        window.requestAnimationFrame(
          renderMove
        );
    };

    const handleLeave = () => {
      if (!canTilt) {
        return;
      }

      window.cancelAnimationFrame(
        pointerFrame
      );

      pointerFrame = 0;
      latestPointerEvent = null;
      bounds = null;

      gsap.to(panel, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    panel.addEventListener(
      "pointerenter",
      handleEnter
    );

    panel.addEventListener(
      "pointermove",
      handleMove,
      {
        passive: true,
      }
    );

    panel.addEventListener(
      "pointerleave",
      handleLeave
    );

    return () => {
      window.cancelAnimationFrame(
        pointerFrame
      );

      panel.removeEventListener(
        "pointerenter",
        handleEnter
      );

      panel.removeEventListener(
        "pointermove",
        handleMove
      );

      panel.removeEventListener(
        "pointerleave",
        handleLeave
      );

      gsap.killTweensOf(panel);
      context.revert();
    };
  }, []);

  const scrollToProducts = () => {
    document
      .querySelector("#products")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Saiyed Global Exports, I would like to discuss a product requirement and export enquiry."
    );

    window.open(
      `https://wa.me/917867869243?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      ref={sectionRef}
      className="premium-cta"
      id="premium-cta"
    >
      <div
        className="premium-cta__glow premium-cta__glow--one"
        aria-hidden="true"
      />

      <div
        className="premium-cta__glow premium-cta__glow--two"
        aria-hidden="true"
      />

      <div className="premium-cta__container">
        <div
          ref={panelRef}
          className="premium-cta__panel"
        >
          <div
            className="premium-cta__grid"
            aria-hidden="true"
          />

          <div
            className="premium-cta__light-sweep"
            aria-hidden="true"
          />

          <div className="premium-cta__copy">
            <div className="premium-cta__eyebrow">
              <Sparkles
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>Global Export Partner</span>
            </div>

            <h2 className="premium-cta__title">
              <span className="premium-cta__title-line">
                Ready To Expand
              </span>

              <span className="premium-cta__title-line">
                Your Business <strong>Worldwide?</strong>
              </span>
            </h2>

            <p className="premium-cta__description">
              Connect with Saiyed Global Exports for reliable Indian
              products, professional sourcing and dependable export
              coordination for global markets.
            </p>

            <div className="premium-cta__trust">
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  className="premium-cta__trust-item"
                  key={label}
                >
                  <span>
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <strong>{label}</strong>
                </div>
              ))}
            </div>

            <div className="premium-cta__actions">
              <button
                type="button"
                className="premium-cta__button premium-cta__button--primary"
                onClick={scrollToProducts}
              >
                <PackageCheck
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>Explore Products</span>

                <ArrowRight
                  size={19}
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                className="premium-cta__button premium-cta__button--secondary"
                onClick={openWhatsApp}
              >
                <MessageCircle
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>WhatsApp Enquiry</span>

                <ArrowRight
                  size={19}
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div
            className="premium-cta__visual"
            aria-hidden="true"
          >
            <div className="premium-cta__orbit premium-cta__orbit--one" />
            <div className="premium-cta__orbit premium-cta__orbit--two" />
            <div className="premium-cta__orbit premium-cta__orbit--three" />

            <div className="premium-cta__globe">
              <Globe2
                size={220}
                strokeWidth={0.75}
              />

              <div className="premium-cta__globe-core" />
            </div>

            <div className="premium-cta__route premium-cta__route--one" />
            <div className="premium-cta__route premium-cta__route--two" />
            <div className="premium-cta__route premium-cta__route--three" />

            <Ship
              className="premium-cta__ship"
              size={92}
              strokeWidth={1.1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumCTA;