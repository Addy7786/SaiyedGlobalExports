import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";
import companyLogo from "../../assets/logo/saiyed-logo-no-tagline-transparent.webp";

import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_DELAY = 5000;

function Testimonials() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);

    return value && value !== key ? value : fallback;
  };

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        country: getText(
          "testimonials.country1",
          "United Arab Emirates"
        ),
        flag: "🇦🇪",
        name: getText(
          "testimonials.client1Name",
          "Ahmed Al Mansoori"
        ),
        role: getText(
          "testimonials.client1Role",
          "Import Manager • Dubai"
        ),
        message: getText(
          "testimonials.client1Message",
          "Saiyed Global Exports provided professional communication, dependable sourcing and smooth export support throughout our order."
        ),
      },
      {
        id: 2,
        country: getText(
          "testimonials.country2",
          "South Africa"
        ),
        flag: "🇿🇦",
        name: getText(
          "testimonials.client2Name",
          "Daniel Okoro"
        ),
        role: getText(
          "testimonials.client2Role",
          "Distributor • Johannesburg"
        ),
        message: getText(
          "testimonials.client2Message",
          "We were impressed with the product quality, transparent process and timely coordination. A reliable business partner from India."
        ),
      },
      {
        id: 3,
        country: getText(
          "testimonials.country3",
          "Saudi Arabia"
        ),
        flag: "🇸🇦",
        name: getText(
          "testimonials.client3Name",
          "Abdullah Hassan"
        ),
        role: getText(
          "testimonials.client3Role",
          "Wholesale Buyer • Riyadh"
        ),
        message: getText(
          "testimonials.client3Message",
          "The team understood our requirements and helped us source suitable products with professional service and reliable logistics support."
        ),
      },
      {
        id: 4,
        country: getText(
          "testimonials.country4",
          "Qatar"
        ),
        flag: "🇶🇦",
        name: getText(
          "testimonials.client4Name",
          "Yusuf Rahman"
        ),
        role: getText(
          "testimonials.client4Role",
          "Procurement Partner • Doha"
        ),
        message: getText(
          "testimonials.client4Message",
          "Clear quotations, responsive communication and dependable export coordination made the entire sourcing process easier for our business."
        ),
      },
      {
        id: 5,
        country: getText(
          "testimonials.country5",
          "Singapore"
        ),
        flag: "🇸🇬",
        name: getText(
          "testimonials.client5Name",
          "Marcus Lee"
        ),
        role: getText(
          "testimonials.client5Role",
          "Trading Company • Singapore"
        ),
        message: getText(
          "testimonials.client5Message",
          "A professional export partner with strong product sourcing support, careful documentation and clear communication at every stage."
        ),
      },
      {
        id: 6,
        country: getText(
          "testimonials.country6",
          "United Kingdom"
        ),
        flag: "🇬🇧",
        name: getText(
          "testimonials.client6Name",
          "Oliver Bennett"
        ),
        role: getText(
          "testimonials.client6Role",
          "International Buyer • London"
        ),
        message: getText(
          "testimonials.client6Message",
          "Their team handled our requirement with attention to detail and kept us informed from product selection through shipment preparation."
        ),
      },
    ],
    [t]
  );

  const trustItems = useMemo(
    () => [
      {
        icon: MessageCircle,
        value: "100%",
        label: getText(
          "testimonials.trust1Text",
          "Transparent Communication"
        ),
      },
      {
        icon: Globe2,
        value: "Global",
        label: getText(
          "testimonials.trust2Text",
          "Business Support"
        ),
      },
      {
        icon: ShieldCheck,
        value: "Reliable",
        label: getText(
          "testimonials.trust3Text",
          "Export Coordination"
        ),
      },
      {
        icon: Sparkles,
        value: "Premium",
        label: getText(
          "testimonials.trust4Text",
          "Quality-Focused Service"
        ),
      },
    ],
    [t]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;

    if (!section || !slider) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".testimonials-premium-heading > *, .testimonials-premium-slider-shell, .testimonials-premium-card, .testimonials-premium-navigation, .testimonials-premium-trust-item"
        ),
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      introTimeline
        .fromTo(
          ".testimonials-premium-heading > *",
          {
            autoAlpha: 0,
            y: 40,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.82,
            stagger: 0.12,
          }
        )
        .fromTo(
          ".testimonials-premium-slider-shell",
          {
            autoAlpha: 0,
            y: 55,
            scale: 0.97,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
          },
          0.28
        )
        .fromTo(
          ".testimonials-premium-navigation",
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
          },
          0.72
        );

      const cards = gsap.utils.toArray(
        ".testimonials-premium-card",
        section
      );

      const cardsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top 86%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -38 : 38;
        const stars = card.querySelectorAll(
          ".testimonials-premium-rating svg"
        );
        const content = card.querySelectorAll(
          ".testimonials-premium-country, .testimonials-premium-quote-icon, .testimonials-premium-message, .testimonials-premium-divider, .testimonials-premium-client"
        );
        const startAt = index * 0.06;

        cardsTimeline
          .fromTo(
            card,
            {
              autoAlpha: 0,
              x: direction,
              y: 30,
              scale: 0.95,
              rotateY: direction > 0 ? -3 : 3,
              transformPerspective: 1100,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateY: 0,
              duration: 0.78,
              ease: "power3.out",
            },
            startAt
          )
          .fromTo(
            stars,
            {
              autoAlpha: 0,
              scale: 0.4,
              rotate: -18,
            },
            {
              autoAlpha: 1,
              scale: 1,
              rotate: 0,
              duration: 0.4,
              stagger: 0.05,
              ease: "back.out(1.8)",
            },
            0.32 + startAt
          )
          .fromTo(
            content,
            {
              autoAlpha: 0,
              y: 14,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.055,
              ease: "power2.out",
            },
            0.38 + startAt
          );
      });

      gsap.fromTo(
        section.querySelectorAll(
          ".testimonials-premium-trust-item"
        ),
        {
          autoAlpha: 0,
          y: 32,
          scale: 0.94,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.68,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector(
              ".testimonials-premium-trust-bar"
            ),
            start: "top 88%",
            once: true,
            invalidateOnRefresh: false,
          },
        }
      );

      gsap.to(
        section.querySelector(
          ".testimonials-premium-glow-one"
        ),
        {
        x: 70,
        y: 42,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.35,
          invalidateOnRefresh: false,
        },
      }
      );

      gsap.to(
        section.querySelector(
          ".testimonials-premium-glow-two"
        ),
        {
        x: -70,
        y: -38,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.35,
          invalidateOnRefresh: false,
        },
      }
      );
    }, section);

    const canTilt =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    const cleanupHandlers = [];

    if (canTilt) {
      const tiltTargets = [
        ...section.querySelectorAll(
          ".testimonials-premium-card, .testimonials-premium-trust-item"
        ),
      ];

      tiltTargets.forEach((target) => {
        let bounds = null;
        let pointerFrame = 0;
        let latestPointerEvent = null;

        gsap.set(target, {
          transformPerspective: 1100,
          transformOrigin: "center center",
        });

        const rotateXTo = gsap.quickTo(target, "rotateX", {
          duration: 0.42,
          ease: "power2.out",
        });

        const rotateYTo = gsap.quickTo(target, "rotateY", {
          duration: 0.42,
          ease: "power2.out",
        });

        const updateBounds = () => {
          bounds = target.getBoundingClientRect();
        };

        const renderMove = () => {
          pointerFrame = 0;

          if (!latestPointerEvent || !bounds) {
            return;
          }

          const x =
            (latestPointerEvent.clientX - bounds.left) /
              bounds.width -
            0.5;

          const y =
            (latestPointerEvent.clientY - bounds.top) /
              bounds.height -
            0.5;

          rotateYTo(x * 4);
          rotateXTo(y * -3.5);
        };

        const handleEnter = () => {
          updateBounds();
        };

        const handleMove = (event) => {
          latestPointerEvent = event;

          if (!bounds) {
            updateBounds();
          }

          if (pointerFrame) {
            return;
          }

          pointerFrame =
            window.requestAnimationFrame(renderMove);
        };

        const handleLeave = () => {
          window.cancelAnimationFrame(pointerFrame);

          pointerFrame = 0;
          latestPointerEvent = null;
          bounds = null;

          gsap.to(target, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.62,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        target.addEventListener(
          "pointerenter",
          handleEnter
        );

        target.addEventListener(
          "pointermove",
          handleMove,
          {
            passive: true,
          }
        );

        target.addEventListener(
          "pointerleave",
          handleLeave
        );

        cleanupHandlers.push(() => {
          window.cancelAnimationFrame(pointerFrame);

          target.removeEventListener(
            "pointerenter",
            handleEnter
          );

          target.removeEventListener(
            "pointermove",
            handleMove
          );

          target.removeEventListener(
            "pointerleave",
            handleLeave
          );

          gsap.killTweensOf(target);
        });
      });
    }

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());

      context.revert();
    };
  }, []);


  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 700) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1080) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    let resizeTimer = 0;

    const handleResize = () => {
      window.clearTimeout(resizeTimer);

      resizeTimer = window.setTimeout(
        updateCardsPerView,
        140
      );
    };

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      }
    );

    return () => {
      window.clearTimeout(resizeTimer);

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  const maxIndex = Math.max(
    testimonials.length - cardsPerView,
    0
  );

  useEffect(() => {
    setCurrentIndex((index) =>
      Math.min(index, maxIndex)
    );
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((index) =>
        index >= maxIndex ? 0 : index + 1
      );
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((index) =>
      index <= 0 ? maxIndex : index - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((index) =>
      index >= maxIndex ? 0 : index + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX =
      event.changedTouches[0]?.clientX ??
      touchStartX.current;

    const difference =
      touchStartX.current - touchEndX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      className="testimonials-premium-section"
      id="testimonials"
    >
      <div
        className="testimonials-premium-background"
        aria-hidden="true"
      >
        <div className="testimonials-premium-glow testimonials-premium-glow-one" />
        <div className="testimonials-premium-glow testimonials-premium-glow-two" />
        <div className="testimonials-premium-grid-pattern" />
      </div>

      <div className="testimonials-premium-container">
        <div className="testimonials-premium-heading">
          <span className="testimonials-premium-tag">
            <Quote size={16} aria-hidden="true" />

            {getText(
              "testimonials.tag",
              "CLIENT TESTIMONIALS"
            )}
          </span>

          <h2>
            {getText(
              "testimonials.heading",
              "Trusted By Buyers Across Global Markets"
            )}
          </h2>

          <p>
            {getText(
              "testimonials.description",
              "Building long-term international business relationships through professional communication, dependable sourcing and reliable export coordination."
            )}
          </p>
        </div>

        <div
          ref={sliderRef}
          className="testimonials-premium-slider-shell"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="testimonials-premium-arrow testimonials-premium-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={21} aria-hidden="true" />
          </button>

          <div className="testimonials-premium-window">
            <div
              className="testimonials-premium-track"
              style={{
                "--testimonial-index": currentIndex,
                "--testimonial-count": cardsPerView,
              }}
            >
              {testimonials.map((testimonial) => (
                <article
                  className="testimonials-premium-card"
                  key={testimonial.id}
                >
                  <img
                    className="testimonials-premium-watermark"
                    src={companyLogo}
                    alt=""
                    width="185"
                    height="185"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />

                  <div className="testimonials-premium-card-top">
                    <div className="testimonials-premium-country">
                      <span
                        className="testimonials-premium-flag"
                        aria-hidden="true"
                      >
                        {testimonial.flag}
                      </span>

                      <div>
                        <small>
                          {getText(
                            "testimonials.buyerLocation",
                            "Buyer Location"
                          )}
                        </small>

                        <strong>
                          {testimonial.country}
                        </strong>
                      </div>
                    </div>

                    <div
                      className="testimonials-premium-rating"
                      aria-label="5 out of 5 stars"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials-premium-quote-icon">
                    <Quote size={27} aria-hidden="true" />
                  </div>

                  <p className="testimonials-premium-message">
                    “{testimonial.message}”
                  </p>

                  <div
                    className="testimonials-premium-divider"
                    aria-hidden="true"
                  />

                  <div className="testimonials-premium-client">
                    <div className="testimonials-premium-avatar">
                      {testimonial.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part.charAt(0))
                        .join("")}
                    </div>

                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="testimonials-premium-arrow testimonials-premium-arrow-right"
            onClick={goToNext}
            aria-label="Next testimonials"
          >
            <ArrowRight size={21} aria-hidden="true" />
          </button>
        </div>

        <div className="testimonials-premium-navigation">
          <div className="testimonials-premium-dots">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                type="button"
                key={index}
                className={
                  currentIndex === index
                    ? "testimonials-premium-dot testimonials-premium-dot-active"
                    : "testimonials-premium-dot"
                }
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial group ${
                  index + 1
                }`}
              />
            ))}
          </div>

          <span>
            {getText(
              "testimonials.sliderHint",
              "Auto slide • Hover to pause • Swipe on mobile"
            )}
          </span>
        </div>

        <div
          className="testimonials-premium-trust-bar"
        >
          {trustItems.map(
            ({ icon: Icon, value, label }) => (
              <div
                className="testimonials-premium-trust-item"
                key={label}
              >
                <span className="testimonials-premium-trust-icon">
                  <Icon
                    size={21}
                    aria-hidden="true"
                  />
                </span>

                <div className="testimonials-premium-trust-copy">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;