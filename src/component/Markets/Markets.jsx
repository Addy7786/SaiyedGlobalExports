import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  MapPin,
  MessageCircle,
  PackageCheck,
  Plane,
  Ship,
  Truck,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";

import middleEastImage from "../../assets/markets/01-middle-east.webp";
import europeImage from "../../assets/markets/02-europe.webp";
import africaImage from "../../assets/markets/03-africa.webp";
import asiaImage from "../../assets/markets/04-asia.webp";
import northAmericaImage from "../../assets/markets/05-north-america.webp";
import networkHeroImage from "../../assets/markets/global-network-premium.webp";
import globalMarketsImage from "../../assets/markets/06-global-markets.webp";

import "./Markets.css";

gsap.registerPlugin(ScrollTrigger);

function Markets() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;

    if (!section) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".markets-heading > *, .markets-visual, .market-card, .market-highlight-card, .markets-process, .markets-cta"
        ),
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      headingTimeline
        .fromTo(
          ".markets-heading > *",
          {
            autoAlpha: 0,
            y: 42,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.82,
            stagger: 0.12,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".markets-visual",
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
          },
          0.28
        )
        .fromTo(
          ".markets-visual-topbar > *, .markets-visual-content > *, .markets-visual-stats > *",
          {
            autoAlpha: 0,
            y: 22,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.07,
            ease: "power2.out",
          },
          0.68
        );

      if (visual) {
        const visualImage = visual.querySelector(
          ".markets-visual-image"
        );

        if (visualImage) {
          gsap.fromTo(
            visualImage,
            {
              scale: 1.12,
            },
            {
              scale: 1,
              duration: 1.35,
              ease: "power3.out",
              scrollTrigger: {
                trigger: visual,
                start: "top 82%",
                once: true,
                invalidateOnRefresh: false,
              },
            }
          );

          gsap.fromTo(
            visualImage,
            {
              yPercent: -4,
            },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: visual,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.15,
                invalidateOnRefresh: false,
              },
            }
          );
        }
      }

      const marketCards = gsap.utils.toArray(
        ".market-card",
        section
      );

      marketCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -52 : 52;
        const image = card.querySelector(".market-card-media img");
        const cardChildren = card.querySelectorAll(
          ".market-card-media-top > *, .market-card-media-title > *, .market-card-content > *"
        );

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
            invalidateOnRefresh: false,
          },
        });

        cardTimeline
          .fromTo(
            card,
            {
              autoAlpha: 0,
              x: direction,
              y: 42,
              scale: 0.95,
              rotationY: direction > 0 ? -3 : 3,
              transformPerspective: 1200,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.92,
              ease: "power3.out",
            }
          )
          .fromTo(
            image,
            {
              scale: 1.14,
            },
            {
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
            },
            0.04
          )
          .fromTo(
            cardChildren,
            {
              autoAlpha: 0,
              y: 16,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.52,
              stagger: 0.055,
              ease: "power2.out",
            },
            0.32
          );

        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: -4,
            },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: false,
              },
            }
          );
        }
      });

      gsap.fromTo(
        ".market-highlight-card",
        {
          autoAlpha: 0,
          y: 34,
          scale: 0.94,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".markets-highlights",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".markets-process",
        {
          autoAlpha: 0,
          y: 52,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".markets-process",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".markets-process-card",
        {
          autoAlpha: 0,
          y: 28,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.62,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".markets-process-grid",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".markets-cta",
        {
          autoAlpha: 0,
          y: 45,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".markets-cta",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.to(".markets-glow-one", {
        x: 75,
        y: 45,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.to(".markets-glow-two", {
        x: -70,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, section);

    const canTilt =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    const cleanupHandlers = [];

    if (canTilt) {
      const tiltTargets = [
        ...section.querySelectorAll(".market-card"),
        ...section.querySelectorAll(".market-highlight-card"),
      ];

      tiltTargets.forEach((target) => {
        let bounds = null;
        let pointerFrame = 0;
        let latestPointerEvent = null;

        gsap.set(target, {
          transformPerspective: 1100,
          transformOrigin: "center center",
        });

        const rotateXTo = gsap.quickTo(
          target,
          "rotationX",
          {
            duration: 0.45,
            ease: "power2.out",
          }
        );

        const rotateYTo = gsap.quickTo(
          target,
          "rotationY",
          {
            duration: 0.45,
            ease: "power2.out",
          }
        );

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

          rotateYTo(x * 4.5);
          rotateXTo(y * -4);
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

          pointerFrame = window.requestAnimationFrame(renderMove);
        };

        const handleLeave = () => {
          window.cancelAnimationFrame(pointerFrame);

          pointerFrame = 0;
          latestPointerEvent = null;
          bounds = null;

          gsap.to(target, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.65,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        target.addEventListener("pointerenter", handleEnter);
        target.addEventListener("pointermove", handleMove, {
          passive: true,
        });
        target.addEventListener("pointerleave", handleLeave);

        cleanupHandlers.push(() => {
          window.cancelAnimationFrame(pointerFrame);
          target.removeEventListener("pointerenter", handleEnter);
          target.removeEventListener("pointermove", handleMove);
          target.removeEventListener("pointerleave", handleLeave);
          gsap.killTweensOf(target);
        });
      });
    }

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());

      context.revert();
    };
  }, []);

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const whatsappNumber = "917867869243";

  const markets = [
    {
      icon: Building2,
      code: "GCC",
      image: middleEastImage,
      title: getText("markets.middleEastTitle", "Middle East"),
      description: getText(
        "markets.middleEastText",
        "Supplying quality Indian products to importers, wholesalers and distributors across major Gulf markets."
      ),
      countries: getText(
        "markets.middleEastCountries",
        "UAE • Saudi Arabia • Qatar • Oman"
      ),
    },
    {
      icon: Globe2,
      code: "EU",
      image: europeImage,
      title: getText("markets.europeTitle", "Europe"),
      description: getText(
        "markets.europeText",
        "Professional sourcing and export support for buyers across established and emerging European markets."
      ),
      countries: getText(
        "markets.europeCountries",
        "United Kingdom • Germany • France • Italy"
      ),
    },
    {
      icon: Ship,
      code: "AF",
      image: africaImage,
      title: getText("markets.africaTitle", "Africa"),
      description: getText(
        "markets.africaText",
        "Reliable product supply and trade solutions for distributors and growing businesses across Africa."
      ),
      countries: getText(
        "markets.africaCountries",
        "South Africa • Kenya • Tanzania • Nigeria"
      ),
    },
    {
      icon: Plane,
      code: "AS",
      image: asiaImage,
      title: getText("markets.asiaTitle", "Asia"),
      description: getText(
        "markets.asiaText",
        "Connecting Indian suppliers with importers and businesses throughout important Asian markets."
      ),
      countries: getText(
        "markets.asiaCountries",
        "Singapore • Malaysia • Indonesia • Sri Lanka"
      ),
    },
    {
      icon: Building2,
      code: "NA",
      image: northAmericaImage,
      title: getText("markets.northAmericaTitle", "North America"),
      description: getText(
        "markets.northAmericaText",
        "Supporting international buyers with Indian product sourcing, documentation and dependable shipment coordination."
      ),
      countries: getText(
        "markets.northAmericaCountries",
        "United States • Canada • Mexico"
      ),
    },
    {
      icon: Globe2,
      code: "GL",
      image: globalMarketsImage,
      title: getText("markets.globalTitle", "Global Markets"),
      description: getText(
        "markets.globalText",
        "Flexible export support for buyers across new and established destinations worldwide."
      ),
      countries: getText(
        "markets.globalCountries",
        "Worldwide Trade Opportunities"
      ),
    },
  ];

  const highlights = [
    {
      icon: MapPin,
      title: getText("markets.highlight1Title", "Global Destinations"),
      text: getText(
        "markets.highlight1Text",
        "Export support designed for buyers across multiple international markets."
      ),
    },
    {
      icon: Ship,
      title: getText("markets.highlight2Title", "Sea Freight"),
      text: getText(
        "markets.highlight2Text",
        "Cost-effective shipping solutions for container and bulk international orders."
      ),
    },
    {
      icon: Plane,
      title: getText("markets.highlight3Title", "Air Freight"),
      text: getText(
        "markets.highlight3Text",
        "Faster delivery options for urgent, lightweight and premium shipments."
      ),
    },
    {
      icon: Truck,
      title: getText("markets.highlight4Title", "Reliable Logistics"),
      text: getText(
        "markets.highlight4Text",
        "Coordinated transportation and shipment support from supplier to destination."
      ),
    },
  ];

  const exportSteps = [
    {
      icon: PackageCheck,
      number: "01",
      title: getText("markets.step1Title", "Product Sourcing"),
      text: getText(
        "markets.step1Text",
        "We identify reliable Indian suppliers according to your product requirements."
      ),
    },
    {
      icon: CheckCircle2,
      number: "02",
      title: getText("markets.step2Title", "Quality Coordination"),
      text: getText(
        "markets.step2Text",
        "Product details, packaging and commercial requirements are coordinated carefully."
      ),
    },
    {
      icon: FileCheck2,
      number: "03",
      title: getText("markets.step3Title", "Export Documentation"),
      text: getText(
        "markets.step3Text",
        "Required commercial and shipping documentation is arranged for the order."
      ),
    },
    {
      icon: Ship,
      number: "04",
      title: getText("markets.step4Title", "Global Dispatch"),
      text: getText(
        "markets.step4Text",
        "The shipment is prepared for sea or air transportation to the destination market."
      ),
    },
  ];

  const openMarketEnquiry = (marketTitle) => {
    const message = `Hello Saiyed Global Exports, I am interested in importing Indian products for the ${marketTitle} market. Please share available products, pricing, MOQ, documentation and shipping details.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      className="markets-section"
      id="markets"
    >
      <div className="markets-background" aria-hidden="true">
        <div className="markets-glow markets-glow-one" />
        <div className="markets-glow markets-glow-two" />
        <div className="markets-grid-pattern" />
        <div className="markets-noise" />
      </div>

      <div className="markets-container">
        <div className="markets-heading">
          <span className="markets-tag">
            <Globe2 size={16} aria-hidden="true" />
            {getText("markets.tag", "GLOBAL MARKETS")}
          </span>

          <h2>
            {getText(
              "markets.heading",
              "Connecting India With International Markets"
            )}
          </h2>

          <p>
            {getText(
              "markets.description",
              "We help international buyers source trusted Indian products with dependable supply, export coordination, documentation and professional logistics support."
            )}
          </p>
        </div>

        <div ref={visualRef} className="markets-visual">
          <div className="markets-visual-image-wrap">
            <img
              src={networkHeroImage}
              alt={getText(
                "markets.globalVisualAlt",
                "Saiyed Global Exports international trade network"
              )}
              className="markets-visual-image"
              width="1600"
              height="900"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              draggable="false"
            />

            <div className="markets-visual-overlay" />

            <div className="markets-visual-topbar">
              <div>
                <span>{getText("markets.networkLabel", "EXPORT NETWORK")}</span>
                <strong>
                  {getText(
                    "markets.networkStatus",
                    "Global trade connections"
                  )}
                </strong>
              </div>

              <div className="markets-live-status">
                <span />
                {getText("markets.activeStatus", "Active")}
              </div>
            </div>

            <div className="markets-visual-content">
              <div className="markets-visual-badge">
                <Globe2 size={19} aria-hidden="true" />
                {getText("markets.indiaTitle", "India")}
              </div>

              <h3>
                {getText(
                  "markets.visualTitle",
                  "From India to Global Business Destinations"
                )}
              </h3>

              <p>
                {getText(
                  "markets.visualText",
                  "Professional sourcing, documentation and logistics support for international buyers."
                )}
              </p>
            </div>

            <div className="markets-visual-stats">
              <div>
                <strong>6+</strong>
                <span>{getText("markets.regionsLabel", "Key Regions")}</span>
              </div>

              <div>
                <strong>Sea</strong>
                <span>{getText("markets.seaNetwork", "Sea Network")}</span>
              </div>

              <div>
                <strong>Air</strong>
                <span>{getText("markets.airNetwork", "Air Network")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="markets-list markets-list-premium">
          {markets.map((market, index) => {
            const Icon = market.icon;

            return (
              <article
                className="market-card market-card-image"
                key={market.code}
              >
                <div className="market-card-media">
                  <img
                    src={market.image}
                    alt={market.title}
                    width="720"
                    height="480"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    draggable="false"
                  />

                  <div className="market-card-media-overlay" />

                  <div className="market-card-media-top">
                    <div className="market-icon">
                      <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <span className="market-code">{market.code}</span>
                  </div>

                  <div className="market-card-media-title">
                    <span>
                      {getText("markets.destinationLabel", "DESTINATION")}
                    </span>

                    <h3>{market.title}</h3>
                  </div>
                </div>

                <div className="market-card-content">
                  <p>{market.description}</p>

                  <div className="market-countries">
                    <MapPin size={15} aria-hidden="true" />
                    <span>{market.countries}</span>
                  </div>

                  <button
                    type="button"
                    className="market-enquiry-button"
                    onClick={() => openMarketEnquiry(market.title)}
                    aria-label={`Send enquiry for ${market.title}`}
                  >
                    <MessageCircle size={17} aria-hidden="true" />

                    <span>
                      {getText("markets.marketEnquiry", "Market Enquiry")}
                    </span>

                    <ArrowUpRight
                      className="market-enquiry-arrow"
                      size={17}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="markets-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="market-highlight-card"
                key={item.title}
              >
                <div className="market-highlight-icon">
                  <Icon size={21} strokeWidth={1.9} aria-hidden="true" />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="markets-process">
          <div className="markets-process-heading">
            <span>
              {getText("markets.processTag", "HOW WE SUPPORT EXPORTS")}
            </span>

            <h3>
              {getText(
                "markets.processHeading",
                "From Indian Suppliers to Global Buyers"
              )}
            </h3>
          </div>

          <div className="markets-process-grid">
            {exportSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="markets-process-card"
                  key={step.number}
                >
                  <div className="markets-process-card-top">
                    <div className="markets-process-icon">
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <span>{step.number}</span>
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="markets-cta"
        >
          <div className="markets-cta-icon">
            <Globe2 size={31} aria-hidden="true" />
          </div>

          <div className="markets-cta-content">
            <span>
              {getText(
                "markets.ctaLabel",
                "PLANNING TO IMPORT FROM INDIA?"
              )}
            </span>

            <h3>
              {getText(
                "markets.ctaTitle",
                "Share your destination and product requirements with our export team."
              )}
            </h3>
          </div>

          <button
            type="button"
            className="markets-cta-button"
            onClick={() =>
              openMarketEnquiry(
                getText("markets.internationalMarket", "international")
              )
            }
          >
            <MessageCircle size={18} aria-hidden="true" />

            <span>
              {getText(
                "markets.contactExportTeam",
                "Contact Export Team"
              )}
            </span>

            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Markets;