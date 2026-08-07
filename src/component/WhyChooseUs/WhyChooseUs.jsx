import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BadgeCheck,
  Boxes,
  Globe2,
  Headphones,
  IndianRupee,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";

import "./WhyChooseUs.css";

import whyChooseMap from "../../assets/gallery/world-network-india.webp";
import indiaFlag from "../../assets/icons/india-flag-gold.webp";

gsap.registerPlugin(ScrollTrigger);

const highlightItems = [
  {
    title: "Quality Assured",
    description: "Premium quality products",
    icon: BadgeCheck,
  },
  {
    title: "Global Network",
    description: "Strong network across the world",
    icon: Globe2,
  },
  {
    title: "Export Ready",
    description: "All products ready for global export",
    icon: Ship,
  },
];

const featureItems = [
  {
    title: "Premium Quality",
    description:
      "We ensure strong quality standards in every product we export.",
    icon: ShieldCheck,
  },
  {
    title: "Worldwide Shipping",
    description:
      "Delivering Indian products to global markets through reliable channels.",
    icon: Globe2,
  },
  {
    title: "Competitive Pricing",
    description:
      "Fair pricing and practical value for buyers across international markets.",
    icon: IndianRupee,
  },
  {
    title: "Secure Packaging",
    description:
      "Safe and suitable packaging support for every export requirement.",
    icon: Boxes,
  },
  {
    title: "Reliable Logistics",
    description:
      "Dependable coordination from product sourcing to final shipment.",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    description:
      "Responsive assistance throughout your sourcing and export journey.",
    icon: Headphones,
  },
];

const trustItems = [
  {
    title: "India Based",
    description:
      "Proudly based in India, connecting products with the world.",
    flag: true,
  },
  {
    title: "Global Network",
    description:
      "Connecting Indian products with international markets.",
    icon: Globe2,
  },
  {
    title: "Quality Assured",
    description:
      "Focused product checks for global buyer requirements.",
    icon: PackageCheck,
  },
  {
    title: "Export Ready",
    description:
      "Products and coordination prepared for global shipment.",
    icon: Ship,
  },
];

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const mapPanelRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mapPanel = mapPanelRef.current;

    if (!section || !mapPanel) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".why-choose__content > *, .why-choose__highlight, .why-choose__map-panel, .why-choose__feature, .why-choose__trust-item"
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
        },
      });

      introTimeline
        .fromTo(
          ".why-choose__eyebrow",
          {
            autoAlpha: 0,
            y: -20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
          }
        )
        .fromTo(
          ".why-choose__title > *",
          {
            autoAlpha: 0,
            y: 44,
            rotateX: -12,
            transformOrigin: "50% 100%",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.86,
            stagger: 0.12,
          },
          0.12
        )
        .fromTo(
          ".why-choose__title-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.76,
            ease: "power3.inOut",
          },
          0.46
        )
        .fromTo(
          ".why-choose__description",
          {
            autoAlpha: 0,
            y: 26,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.74,
          },
          0.52
        )
        .fromTo(
          ".why-choose__highlight",
          {
            autoAlpha: 0,
            y: 25,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.62,
            stagger: 0.1,
          },
          0.66
        )
        .fromTo(
          ".why-choose__map-panel",
          {
            autoAlpha: 0,
            x: 65,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1,
          },
          0.2
        )
        .fromTo(
          ".why-choose__map-badge",
          {
            autoAlpha: 0,
            y: -18,
            scale: 0.88,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.62,
            ease: "back.out(1.6)",
          },
          0.76
        )
        .fromTo(
          ".why-choose__route",
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.13,
            ease: "back.out(2)",
          },
          0.82
        );

      const mapImage = mapPanel.querySelector(
        ".why-choose__map-image"
      );

      if (mapImage) {
        gsap.fromTo(
          mapImage,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mapPanel,
              start: "top 84%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          mapImage,
          {
            yPercent: -4,
          },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: mapPanel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
            },
          }
        );
      }

      const featureCards = gsap.utils.toArray(
        ".why-choose__feature"
      );

      featureCards.forEach((card, index) => {
        const center = (featureCards.length - 1) / 2;
        const distanceFromCenter = index - center;
        const xOffset = distanceFromCenter * 24;

        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            x: xOffset,
            y: 55,
            scale: 0.86,
            rotateY: distanceFromCenter * -2.2,
            transformPerspective: 1200,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.82,
            delay: Math.abs(distanceFromCenter) * 0.035,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".why-choose__features",
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".why-choose__trust-bar",
        {
          autoAlpha: 0,
          y: 48,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.92,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-choose__trust-bar",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".why-choose__trust-item",
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.58,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-choose__trust-bar",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.to(".why-choose__glow--one", {
        x: -70,
        y: 45,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(".why-choose__glow--two", {
        x: 65,
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });
    }, section);

    const canTilt =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    const cleanupHandlers = [];

    if (canTilt) {
      const tiltTargets = [
        mapPanel,
        ...section.querySelectorAll(".why-choose__feature"),
      ];

      tiltTargets.forEach((target) => {
        const handleMove = (event) => {
          const bounds = target.getBoundingClientRect();
          const x =
            (event.clientX - bounds.left) / bounds.width - 0.5;
          const y =
            (event.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to(target, {
            rotateY: x * 4,
            rotateX: y * -3.5,
            transformPerspective: 1200,
            transformOrigin: "center center",
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleLeave = () => {
          gsap.to(target, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.65,
            ease: "power3.out",
          });
        };

        target.addEventListener("pointermove", handleMove);
        target.addEventListener("pointerleave", handleLeave);

        cleanupHandlers.push(() => {
          target.removeEventListener("pointermove", handleMove);
          target.removeEventListener("pointerleave", handleLeave);
        });
      });
    }

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "sge:refresh-animations",
      handleRefresh
    );

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());

      window.removeEventListener(
        "sge:refresh-animations",
        handleRefresh
      );

      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="why-choose"
      id="why-us"
    >
      <div
        className="why-choose__glow why-choose__glow--one"
        aria-hidden="true"
      />

      <div
        className="why-choose__glow why-choose__glow--two"
        aria-hidden="true"
      />

      <div className="why-choose__container">
        <div className="why-choose__top">
          <div className="why-choose__content">
            <div className="why-choose__eyebrow">
              <span
                className="why-choose__eyebrow-dot"
                aria-hidden="true"
              />

              <span>Why Choose Us</span>
            </div>

            <h2 className="why-choose__title">
              <span>Trusted Export Partner</span>

              <span>
                For <strong>Global Business</strong>
              </span>
            </h2>

            <div
              className="why-choose__title-line"
              aria-hidden="true"
            />

            <p className="why-choose__description">
              Saiyed Global Exports is focused on connecting dependable
              Indian products with global markets through transparency,
              professional coordination and customer-focused service at
              every step.
            </p>

            <div className="why-choose__highlights">
              {highlightItems.map(
                ({ title, description, icon: Icon }) => (
                  <article
                    className="why-choose__highlight"
                    key={title}
                  >
                    <div className="why-choose__highlight-icon">
                      <Icon
                        size={29}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>

          <div
            ref={mapPanelRef}
            className="why-choose__map-panel"
          >
            <img
              src={whyChooseMap}
              alt="Global export routes from India"
              className="why-choose__map-image"
              width="1200"
              height="760"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              draggable="false"
            />

            <div
              className="why-choose__map-overlay"
              aria-hidden="true"
            />

            <div className="why-choose__map-badge">
              <Globe2
                size={20}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <div>
                <strong>India To Global Markets</strong>
                <span>Air • Sea • Land</span>
              </div>
            </div>

            <div
              className="why-choose__route why-choose__route--one"
              aria-hidden="true"
            />

            <div
              className="why-choose__route why-choose__route--two"
              aria-hidden="true"
            />

            <div
              className="why-choose__route why-choose__route--three"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="why-choose__features">
          {featureItems.map(
            ({ title, description, icon: Icon }) => (
              <article
                className="why-choose__feature"
                key={title}
              >
                <div className="why-choose__feature-icon">
                  <Icon
                    size={44}
                    strokeWidth={1.45}
                    aria-hidden="true"
                  />
                </div>

                <h3>{title}</h3>

                <span
                  className="why-choose__feature-line"
                  aria-hidden="true"
                />

                <p>{description}</p>
              </article>
            )
          )}
        </div>

        <div className="why-choose__trust-bar">
          {trustItems.map(
            ({ title, description, icon: Icon, flag }) => (
              <article
                className="why-choose__trust-item"
                key={title}
              >
                <div
                  className={`why-choose__trust-icon ${
                    flag ? "why-choose__trust-icon--flag" : ""
                  }`}
                >
                  {flag ? (
                    <img
                      src={indiaFlag}
                      alt="India flag"
                      className="why-choose__india-flag"
                      width="68"
                      height="68"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      draggable="false"
                    />
                  ) : (
                    <Icon
                      size={34}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;