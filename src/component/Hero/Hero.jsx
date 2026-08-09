import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import {
  ArrowRight,
  Award,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";

import heroDesktopImage from "../../assets/hero-global-trade-desktop.webp";
import heroMobileImage from "../../assets/hero-global-trade-mobile.webp";

import indiaFlag from "../../assets/flags-optimized/india.webp";
import uaeFlag from "../../assets/flags-optimized/uae.webp";
import saudiFlag from "../../assets/flags-optimized/saudi-arabia.webp";
import turkeyFlag from "../../assets/flags-optimized/turkey.webp";
import ukFlag from "../../assets/flags-optimized/united-kingdom.webp";
import usaFlag from "../../assets/flags-optimized/united-states.webp";
import malaysiaFlag from "../../assets/flags-optimized/malaysia.webp";
import singaporeFlag from "../../assets/flags-optimized/singapore.webp";
import southAfricaFlag from "../../assets/flags-optimized/south-africa.webp";

import "./Hero.css";


const countryFlags = [
  { name: "India", image: indiaFlag },
  { name: "United Arab Emirates", image: uaeFlag },
  { name: "Saudi Arabia", image: saudiFlag },
  { name: "Turkey", image: turkeyFlag },
  { name: "United Kingdom", image: ukFlag },
  { name: "United States", image: usaFlag },
  { name: "Malaysia", image: malaysiaFlag },
  { name: "Singapore", image: singaporeFlag },
  { name: "South Africa", image: southAfricaFlag },
];

const featureItems = [
  {
    icon: Globe2,
    title: "Global Sourcing",
    description: "Premium Quality",
  },
  {
    icon: Award,
    title: "Reliable Partnership",
    description: "Commitment To Trust",
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    description: "On-Time, Every Time",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Business",
    description: "Integrity & Transparency",
  },
];

function Hero() {
  const { t } = useLanguage();

  const heroRef = useRef(null);
  const pictureRef = useRef(null);
  const backgroundRef = useRef(null);
  const motionLayerRef = useRef(null);
  const contentRef = useRef(null);
  const featurePanelRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const picture = pictureRef.current;
    const background = backgroundRef.current;
    const motionLayer = motionLayerRef.current;
    const content = contentRef.current;
    const featurePanel = featurePanelRef.current;

    if (
      !hero ||
      !picture ||
      !background ||
      !motionLayer ||
      !content ||
      !featurePanel
    ) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobilePerformanceMode = window.matchMedia(
      "(max-width: 768px), (pointer: coarse)"
    ).matches;

    // Mobile/touch and reduced-motion: keep the first render fully static.
    // No GSAP mutation runs on the critical mobile paint path.
    if (prefersReducedMotion || isMobilePerformanceMode) {
      return undefined;
    }

    let entranceStarted = false;
    let entranceFallbackTimer = 0;
    let scrollFrame = 0;
    let pointerFrame = 0;
    let latestPointerEvent = null;
    let heroBounds = null;
    let cleanupRuntime = () => {};

    const context = gsap.context(() => {
      const startEntrance = () => {
        if (entranceStarted) {
          return;
        }

        entranceStarted = true;

        const entranceTimeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
          onComplete: () => {
            hero.classList.remove("hero-is-animating");
          },
        });

        entranceTimeline
          .fromTo(
            ".hero-dark-overlay",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1.15 },
            0
          )
          .fromTo(
            background,
            { autoAlpha: 0, scale: 1.09 },
            {
              autoAlpha: 1,
              scale: 1.015,
              duration: 1.75,
              ease: "power2.out",
            },
            0
          )
          .fromTo(
            ".hero-badge",
            { autoAlpha: 0, y: -22, scale: 0.94 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.72 },
            0.28
          )
          .fromTo(
            ".hero-gold-line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.75, ease: "power3.inOut" },
            0.4
          )
          .fromTo(
            ".hero-title-line",
            { autoAlpha: 0, yPercent: 115, rotateX: -12 },
            {
              autoAlpha: 1,
              yPercent: 0,
              rotateX: 0,
              duration: 0.92,
              stagger: 0.12,
            },
            0.48
          )
          .fromTo(
            ".hero-actions > *",
            { autoAlpha: 0, y: 26, scale: 0.96 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              stagger: 0.12,
            },
            0.98
          )
          .fromTo(
            ".hero-trusted-block",
            { autoAlpha: 0, x: -28 },
            { autoAlpha: 1, x: 0, duration: 0.72 },
            1.12
          )
          .fromTo(
            ".hero-country-flag-item, .hero-more-countries",
            { autoAlpha: 0, y: 25, scale: 0.62, rotate: -8 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 0.62,
              stagger: 0.065,
              ease: "back.out(1.7)",
            },
            1.2
          )
          .fromTo(
            featurePanel,
            { autoAlpha: 0, y: 48, scale: 0.985 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
            1.12
          )
          .fromTo(
            ".hero-feature-panel-item",
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.62,
              stagger: 0.09,
            },
            1.3
          )
          .fromTo(
            ".hero-scroll-indicator",
            { autoAlpha: 0, y: -18 },
            { autoAlpha: 0.65, y: 0, duration: 0.75 },
            1.45
          );
      };

      // Start on the next paint instead of waiting up to 3.1s for a custom
      // loader event. The background is already eager/high-priority loaded.
      entranceFallbackTimer = window.setTimeout(() => {
        window.requestAnimationFrame(startEntrance);
      }, 0);

      const isDesktopPointer = window.matchMedia(
        "(min-width: 769px) and (hover: hover) and (pointer: fine)"
      ).matches;

      const setPictureY = gsap.quickSetter(picture, "yPercent");
      const setContentY = gsap.quickSetter(content, "yPercent");
      const setContentOpacity = gsap.quickSetter(content, "opacity");
      const setMotionY = gsap.quickSetter(motionLayer, "yPercent");

      const updateScrollMotion = () => {
        scrollFrame = 0;

        const rect = hero.getBoundingClientRect();
        const viewportHeight = window.innerHeight || 1;

        if (rect.bottom <= 0 || rect.top >= viewportHeight) {
          return;
        }

        const progress = Math.min(
          1,
          Math.max(0, -rect.top / Math.max(rect.height, 1))
        );

        setPictureY(progress * 7);
        setContentY(progress * 12);
        setContentOpacity(1 - progress * 0.58);
        setMotionY(progress * 10);
      };

      const handleScroll = () => {
        if (scrollFrame) {
          return;
        }

        scrollFrame = window.requestAnimationFrame(
          updateScrollMotion
        );
      };

      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      let removePointerEffects = () => {};

      if (isDesktopPointer) {
        const movePictureX = gsap.quickTo(picture, "x", {
          duration: 1.15,
          ease: "power3.out",
        });
        const movePictureY = gsap.quickTo(picture, "y", {
          duration: 1.15,
          ease: "power3.out",
        });
        const moveMotionX = gsap.quickTo(motionLayer, "x", {
          duration: 0.85,
          ease: "power3.out",
        });
        const moveMotionY = gsap.quickTo(motionLayer, "y", {
          duration: 0.85,
          ease: "power3.out",
        });

        const updateHeroBounds = () => {
          heroBounds = hero.getBoundingClientRect();
        };

        const renderHeroPointer = () => {
          pointerFrame = 0;

          if (!latestPointerEvent || !heroBounds) {
            return;
          }

          const normalizedX =
            (latestPointerEvent.clientX - heroBounds.left) /
              heroBounds.width -
            0.5;

          const normalizedY =
            (latestPointerEvent.clientY - heroBounds.top) /
              heroBounds.height -
            0.5;

          movePictureX(normalizedX * -18);
          movePictureY(normalizedY * -12);
          moveMotionX(normalizedX * 28);
          moveMotionY(normalizedY * 20);
        };

        const handlePointerEnter = () => {
          updateHeroBounds();
        };

        const handlePointerMove = (event) => {
          latestPointerEvent = event;

          if (!heroBounds) {
            updateHeroBounds();
          }

          if (pointerFrame) {
            return;
          }

          pointerFrame = window.requestAnimationFrame(
            renderHeroPointer
          );
        };

        const resetPointerPosition = () => {
          window.cancelAnimationFrame(pointerFrame);
          pointerFrame = 0;
          latestPointerEvent = null;
          heroBounds = null;

          movePictureX(0);
          movePictureY(0);
          moveMotionX(0);
          moveMotionY(0);
        };

        const magneticElements = hero.querySelectorAll(
          ".hero-primary-button, .hero-secondary-button"
        );

        const magneticCleanup = [];

        magneticElements.forEach((element) => {
          const moveX = gsap.quickTo(element, "x", {
            duration: 0.35,
            ease: "power3.out",
          });
          const moveY = gsap.quickTo(element, "y", {
            duration: 0.35,
            ease: "power3.out",
          });

          let bounds = null;
          let magneticFrame = 0;
          let latestMagneticEvent = null;

          const updateMagneticBounds = () => {
            bounds = element.getBoundingClientRect();
          };

          const renderMagnetic = () => {
            magneticFrame = 0;

            if (!latestMagneticEvent || !bounds) {
              return;
            }

            const x =
              latestMagneticEvent.clientX -
              (bounds.left + bounds.width / 2);

            const y =
              latestMagneticEvent.clientY -
              (bounds.top + bounds.height / 2);

            moveX(x * 0.16);
            moveY(y * 0.2);
          };

          const handleMagneticEnter = () => {
            updateMagneticBounds();
          };

          const handleMagneticMove = (event) => {
            latestMagneticEvent = event;

            if (!bounds) {
              updateMagneticBounds();
            }

            if (magneticFrame) {
              return;
            }

            magneticFrame = window.requestAnimationFrame(
              renderMagnetic
            );
          };

          const resetMagnetic = () => {
            window.cancelAnimationFrame(magneticFrame);
            magneticFrame = 0;
            latestMagneticEvent = null;
            bounds = null;

            moveX(0);
            moveY(0);
          };

          element.addEventListener(
            "pointerenter",
            handleMagneticEnter
          );
          element.addEventListener(
            "pointermove",
            handleMagneticMove,
            { passive: true }
          );
          element.addEventListener(
            "pointerleave",
            resetMagnetic
          );

          magneticCleanup.push(() => {
            window.cancelAnimationFrame(magneticFrame);
            element.removeEventListener(
              "pointerenter",
              handleMagneticEnter
            );
            element.removeEventListener(
              "pointermove",
              handleMagneticMove
            );
            element.removeEventListener(
              "pointerleave",
              resetMagnetic
            );
            gsap.killTweensOf(element);
          });
        });

        hero.addEventListener(
          "pointerenter",
          handlePointerEnter
        );
        hero.addEventListener(
          "pointermove",
          handlePointerMove,
          { passive: true }
        );
        hero.addEventListener(
          "pointerleave",
          resetPointerPosition
        );

        removePointerEffects = () => {
          window.cancelAnimationFrame(pointerFrame);
          hero.removeEventListener(
            "pointerenter",
            handlePointerEnter
          );
          hero.removeEventListener(
            "pointermove",
            handlePointerMove
          );
          hero.removeEventListener(
            "pointerleave",
            resetPointerPosition
          );
          magneticCleanup.forEach((cleanup) => cleanup());
          gsap.killTweensOf(picture);
          gsap.killTweensOf(motionLayer);
        };
      }

      cleanupRuntime = () => {
        window.clearTimeout(entranceFallbackTimer);
        window.cancelAnimationFrame(scrollFrame);
        window.removeEventListener("scroll", handleScroll);
        removePointerEffects();
      };
    }, hero);

    return () => {
      cleanupRuntime();
      context.revert();
      hero.classList.remove("hero-is-animating");
    };
  }, []);

  const getText = (key, fallback) => {
    const translatedText = t(key);

    if (!translatedText || translatedText === key) {
      return fallback;
    }

    return translatedText;
  };

  const heroBadgeText = getText(
    "hero.badge",
    "India • Global Trade"
  ).replace(/\s*•\s*2026\s*$/i, "");

  const whatsappNumber = "917867869243";

  const whatsappMessage =
    "Hello Saiyed Global Exports, I would like to enquire about your products and export services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");

    if (!productsSection) {
      window.location.hash = "products";
      return;
    }

    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <picture className="hero-picture" ref={pictureRef}>
        <source
          media="(max-width: 768px)"
          srcSet={heroMobileImage}
        />

        <img
          ref={backgroundRef}
          className="hero-background-image"
          src={heroDesktopImage}
          alt=""
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
          aria-hidden="true"
        />
      </picture>

      <div className="hero-dark-overlay" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-top-glow" aria-hidden="true" />
      <div className="hero-bottom-glow" aria-hidden="true" />

      <div
        className="hero-motion-layer"
        ref={motionLayerRef}
        aria-hidden="true"
      >
        <span className="hero-light-ray hero-light-ray--one" />
        <span className="hero-light-ray hero-light-ray--two" />
        <span className="hero-light-ray hero-light-ray--three" />

        <span className="hero-orb hero-orb--one" />
        <span className="hero-orb hero-orb--two" />
        <span className="hero-orb hero-orb--three" />

        <span className="hero-particle hero-particle--one" />
        <span className="hero-particle hero-particle--two" />
        <span className="hero-particle hero-particle--three" />
        <span className="hero-particle hero-particle--four" />
        <span className="hero-particle hero-particle--five" />
        <span className="hero-particle hero-particle--six" />

        <span className="hero-route-line" />
        <span className="hero-route-dot" />
      </div>

      <div className="hero-container">
        <div className="hero-content" ref={contentRef}>
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {heroBadgeText}
          </div>

          <div className="hero-gold-line" aria-hidden="true" />

          <h1 className="hero-title">
            <span className="hero-title-clip">
              <span className="hero-title-line">
                {getText("hero.titleLineOne", "Connecting")}
              </span>
            </span>

            <span className="hero-title-clip">
              <span className="hero-title-line hero-title-gold">
                {getText("hero.titleLineTwo", "Indian Products")}
              </span>
            </span>

            <span className="hero-title-clip">
              <span className="hero-title-line">
                {getText(
                  "hero.titleLineThree",
                  "With Global Markets."
                )}
              </span>
            </span>
          </h1>

          <p className="hero-description">
            {getText(
              "hero.description",
              "Saiyed Global Exports connects trusted Indian suppliers with international buyers through reliable sourcing, quality assurance, secure packaging and dependable export support."
            )}
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-primary-button"
              onClick={scrollToProducts}
            >
              <span>
                {getText(
                  "hero.exploreButton",
                  "Explore Our Products"
                )}
              </span>
              <ArrowRight size={21} aria-hidden="true" />
            </button>

            <a
              className="hero-secondary-button"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Saiyed Global Exports on WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>
                {getText("hero.contactButton", "Get In Touch")}
              </span>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-trusted-block">
            <div className="hero-trusted-line" aria-hidden="true" />

            <div>
              <span className="hero-trusted-gold">
                {getText(
                  "hero.trustedGold",
                  "Trusted By Importers In"
                )}
              </span>

              <strong>
                {getText(
                  "hero.trustedWhite",
                  "Many Countries Worldwide"
                )}
              </strong>
            </div>
          </div>

          <div className="hero-country-flags">
            {countryFlags.map((country) => (
              <div
                className="hero-country-flag-item"
                key={country.name}
                title={country.name}
              >
                <img
                  src={country.image}
                  alt={`${country.name} flag`}
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>
            ))}

            <div
              className="hero-more-countries"
              title="More Countries"
              aria-label="More Countries"
            >
              +
            </div>
          </div>
        </div>
      </div>

      <div className="hero-feature-panel" ref={featurePanelRef}>
        {featureItems.map(({ icon: Icon, title, description }, index) => (
          <article className="hero-feature-panel-item" key={title}>
            <span className="hero-feature-panel-icon">
              <Icon size={30} aria-hidden="true" />
            </span>

            <div className="hero-feature-panel-copy">
              <strong>{title}</strong>
              <small>{description}</small>
            </div>

            {index < featureItems.length - 1 && (
              <span
                className="hero-feature-panel-divider"
                aria-hidden="true"
              />
            )}
          </article>
        ))}
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}

export default Hero;