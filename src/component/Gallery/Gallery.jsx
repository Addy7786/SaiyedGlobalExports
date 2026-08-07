import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Expand,
  Globe2,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

import deliveryBanner from "../../assets/gallery/delivery-banner.webp";
import globalNetworkImage from "../../assets/gallery/gallery-global-network.webp";
import airFreightImage from "../../assets/gallery/gallery-air-freight.webp";
import warehouseImage from "../../assets/gallery/gallery-warehouse-storage.webp";
import qualityInspectionImage from "../../assets/gallery/gallery-quality-inspection.webp";
import domesticTransportImage from "../../assets/gallery/gallery-domestic-transport.webp";
import globalPartnershipImage from "../../assets/gallery/gallery-global-partnership.webp";
import companyLogo from "../../assets/logo/saiyed-logo-no-tagline-transparent.webp";

const galleryItems = [
  {
    id: 1,
    number: "01",
    title: "Global Network",
    subtitle: "Connecting Indian products with worldwide markets",
    image: globalNetworkImage,
    icon: Globe2,
  },
  {
    id: 2,
    number: "02",
    title: "Air Freight",
    subtitle: "Fast and dependable international cargo movement",
    image: airFreightImage,
    icon: Plane,
  },
  {
    id: 3,
    number: "03",
    title: "Warehouse Storage",
    subtitle: "Organised and secure product handling solutions",
    image: warehouseImage,
    icon: Warehouse,
  },
  {
    id: 4,
    number: "04",
    title: "Quality Inspection",
    subtitle: "Careful checks before every global shipment",
    image: qualityInspectionImage,
    icon: ShieldCheck,
  },
  {
    id: 5,
    number: "05",
    title: "Domestic Transport",
    subtitle: "Reliable movement from supplier to shipping point",
    image: domesticTransportImage,
    icon: Truck,
  },
  {
    id: 6,
    number: "06",
    title: "Global Partnership",
    subtitle: "Building trusted and lasting business relationships",
    image: globalPartnershipImage,
    icon: PackageCheck,
  },
];

const trustItems = [
  {
    id: 1,
    title: "Global Reach",
    description: "Worldwide trade connections",
    icon: Globe2,
  },
  {
    id: 2,
    title: "Quality Focus",
    description: "Carefully selected products",
    icon: PackageCheck,
  },
  {
    id: 3,
    title: "Secure Trade",
    description: "Reliable export coordination",
    icon: ShieldCheck,
  },
];

function Gallery() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;

    if (!section || !visual) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".gallery-final__left-content > *, .gallery-final__visual, .gallery-final__operations-heading > *, .gallery-final__card"
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
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      introTimeline
        .fromTo(
          ".gallery-final__left",
          {
            autoAlpha: 0,
            x: -60,
            scale: 0.97,
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".gallery-final__logo, .gallery-final__eyebrow, .gallery-final__title, .gallery-final__intro",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.2
        )
        .fromTo(
          ".gallery-final__delivery-card, .gallery-final__trust, .gallery-final__mission",
          {
            autoAlpha: 0,
            y: 22,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.07,
            ease: "power2.out",
          },
          0.52
        )
        .fromTo(
          ".gallery-final__visual",
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
            ease: "power3.out",
          },
          0.12
        )
        .fromTo(
          ".gallery-final__badge",
          {
            autoAlpha: 0,
            y: -18,
            scale: 0.88,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.6)",
          },
          0.7
        );

      gsap.fromTo(
        visual,
        {
          backgroundSize: "112%",
        },
        {
          backgroundSize: "100%",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visual,
            start: "top 84%",
            once: true,
          },
        }
      );

      gsap.to(visual, {
        backgroundPosition: "56% 58%",
        ease: "none",
        scrollTrigger: {
          trigger: visual,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.fromTo(
        ".gallery-final__operations",
        {
          autoAlpha: 0,
          y: 48,
          scale: 0.98,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-final__operations",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".gallery-final__operations-heading > *",
        {
          autoAlpha: 0,
          y: 28,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.68,
          stagger: 0.11,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-final__operations-heading",
            start: "top 88%",
            once: true,
          },
        }
      );

      const cards = gsap.utils.toArray(".gallery-final__card");

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -44 : 44;
        const image = card.querySelector(".gallery-final__card-image");
        const children = card.querySelectorAll(
          ".gallery-final__number, .gallery-final__card-content > *"
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        });

        timeline
          .fromTo(
            card,
            {
              autoAlpha: 0,
              x: direction,
              y: 32,
              scale: 0.94,
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
            }
          )
          .fromTo(
            image,
            {
              scale: 1.14,
            },
            {
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
            0.04
          )
          .fromTo(
            children,
            {
              autoAlpha: 0,
              y: 14,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.48,
              stagger: 0.06,
              ease: "power2.out",
            },
            0.28
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
              },
            }
          );
        }
      });
    }, section);

    const canTilt =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    const cleanupHandlers = [];

    if (canTilt) {
      const tiltTargets = [
        visual,
        ...section.querySelectorAll(".gallery-final__card"),
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

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const showPreviousImage = () => {
    if (!activeItem) {
      return;
    }

    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeItem.id
    );

    const previousIndex =
      currentIndex === 0
        ? galleryItems.length - 1
        : currentIndex - 1;

    setActiveItem(galleryItems[previousIndex]);
  };

  const showNextImage = () => {
    if (!activeItem) {
      return;
    }

    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeItem.id
    );

    const nextIndex =
      currentIndex === galleryItems.length - 1
        ? 0
        : currentIndex + 1;

    setActiveItem(galleryItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!activeItem) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      gsap.fromTo(
        ".gallery-final-lightbox",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.28,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".gallery-final-lightbox__content",
        {
          autoAlpha: 0,
          y: 30,
          scale: 0.94,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          ease: "power3.out",
        }
      );
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [activeItem]);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="gallery-final"
      >
        <div className="gallery-final__inner">
          <div className="gallery-final__top">
            <aside className="gallery-final__left">
              <div className="gallery-final__left-content">
                <img
                  className="gallery-final__logo"
                  src={companyLogo}
                  alt="Saiyed Global Exports"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />

                <span className="gallery-final__eyebrow">
                  India To Global Markets
                </span>

                <h2 className="gallery-final__title">
                  Trade
                  <br />
                  Beyond
                  <span>Boundaries</span>
                </h2>

                <p className="gallery-final__intro">
                  Delivering quality Indian products to global markets
                  through reliable sourcing, professional coordination
                  and trusted partnerships.
                </p>

                <div className="gallery-final__left-bottom">
                  <article className="gallery-final__delivery-card">
                    <span>Saiyed Global Exports</span>

                    <h3>
                      Delivering Indian Quality
                      <em>Across The World</em>
                    </h3>

                    <p>
                      From sourcing and inspection to transport and
                      international coordination, every stage is managed
                      with care.
                    </p>
                  </article>

                  <div className="gallery-final__trust-area">
                    {trustItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          className="gallery-final__trust"
                          key={item.id}
                        >
                          <div className="gallery-final__trust-icon">
                            <Icon
                              size={18}
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                          </div>

                          <div>
                            <strong>{item.title}</strong>
                            <small>{item.description}</small>
                          </div>
                        </div>
                      );
                    })}

                    <div className="gallery-final__mission">
                      <div className="gallery-final__mission-icon">
                        <Ship
                          size={20}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <strong>Our Mission</strong>

                        <small>
                          To connect dependable Indian suppliers with
                          buyers across international markets.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div
              ref={visualRef}
              className="gallery-final__visual"
              style={{
                backgroundImage: `url("${deliveryBanner}")`,
              }}
            >
              <div
                className="gallery-final__visual-overlay"
                aria-hidden="true"
              />

              <div className="gallery-final__badge">
                <div className="gallery-final__badge-icon">
                  <Globe2
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <strong>Global Trade</strong>
                  <small>Professional Export Solutions</small>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-final__operations">
            <div className="gallery-final__operations-heading">
              <div>
                <span>Our Operations</span>
                <h3>Inside Our Global Trade Network</h3>
              </div>

              <p>
                Explore the services, systems and partnerships that
                support our export operations.
              </p>
            </div>

            <div className="gallery-final__cards">
              {galleryItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="gallery-final__card"
                    key={item.id}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      aria-label={`Open ${item.title}`}
                    >
                      <div className="gallery-final__card-image-wrap">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="gallery-final__card-image"
                          width="720"
                          height="480"
                          loading="lazy"
                          decoding="async"
                          draggable="false"
                        />

                        <span className="gallery-final__number">
                          {item.number}
                        </span>

                        <span className="gallery-final__expand">
                          <Expand
                            size={15}
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      <div className="gallery-final__card-content">
                        <div className="gallery-final__card-icon">
                          <Icon
                            size={19}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <strong>{item.title}</strong>
                          <small>{item.subtitle}</small>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          className="gallery-final-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} image preview`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-final-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close image preview"
          >
            <X size={24} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="gallery-final-lightbox__nav gallery-final-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="gallery-final-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              decoding="async"
              draggable="false"
            />

            <div className="gallery-final-lightbox__caption">
              <span>{activeItem.number}</span>

              <div>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.subtitle}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="gallery-final-lightbox__nav gallery-final-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;