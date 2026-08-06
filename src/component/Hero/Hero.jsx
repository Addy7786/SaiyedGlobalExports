import { useEffect, useState } from "react";

import AOS from "aos";

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

  const [showFeaturePanel, setShowFeaturePanel] =
    useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowFeaturePanel(true);
    }, 450);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!showFeaturePanel) {
      return undefined;
    }

    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 120);

    return () => {
      window.clearTimeout(refreshTimer);
    };
  }, [showFeaturePanel]);

  const getText = (key, fallback) => {
    const translatedText = t(key);

    if (
      !translatedText ||
      translatedText === key
    ) {
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
    const productsSection =
      document.getElementById("products");

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
    <section
      className="hero-section"
      id="home"
    >
      <picture className="hero-picture">
        <source
          media="(max-width: 768px)"
          srcSet={heroMobileImage}
        />

        <img
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

      <div
        className="hero-dark-overlay"
        aria-hidden="true"
      />

      <div
        className="hero-grid-overlay"
        aria-hidden="true"
      />

      <div
        className="hero-top-glow"
        aria-hidden="true"
      />

      <div
        className="hero-bottom-glow"
        aria-hidden="true"
      />

      <div
        className="hero-motion-layer"
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
        <div className="hero-content">
          <div
            className="hero-badge"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <span
              className="hero-badge-dot"
              aria-hidden="true"
            />

            {heroBadgeText}
          </div>

          <div
            className="hero-gold-line"
            data-aos="fade-right"
            data-aos-delay="90"
            aria-hidden="true"
          />

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="130"
          >
            <span>
              {getText(
                "hero.titleLineOne",
                "Connecting"
              )}
            </span>

            <span className="hero-title-gold">
              {getText(
                "hero.titleLineTwo",
                "Indian Products"
              )}
            </span>

            <span>
              {getText(
                "hero.titleLineThree",
                "With Global Markets."
              )}
            </span>
          </h1>

          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="210"
          >
            {getText(
              "hero.description",
              "Saiyed Global Exports connects trusted Indian suppliers with international buyers through reliable sourcing, quality assurance, secure packaging and dependable export support."
            )}
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="290"
          >
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

              <ArrowRight
                size={21}
                aria-hidden="true"
              />
            </button>

            <a
              className="hero-secondary-button"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Saiyed Global Exports on WhatsApp"
            >
              <MessageCircle
                size={20}
                aria-hidden="true"
              />

              <span>
                {getText(
                  "hero.contactButton",
                  "Get In Touch"
                )}
              </span>

              <ArrowRight
                size={19}
                aria-hidden="true"
              />
            </a>
          </div>

          <div
            className="hero-trusted-block"
            data-aos="fade-up"
            data-aos-delay="360"
          >
            <div
              className="hero-trusted-line"
              aria-hidden="true"
            />

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

          <div
            className="hero-country-flags"
            data-aos="fade-up"
            data-aos-delay="420"
          >
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

      {showFeaturePanel && (
        <div
          className="hero-feature-panel"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          {featureItems.map(
            (
              {
                icon: Icon,
                title,
                description,
              },
              index
            ) => (
              <article
                className="hero-feature-panel-item"
                key={title}
              >
                <span className="hero-feature-panel-icon">
                  <Icon
                    size={30}
                    aria-hidden="true"
                  />
                </span>

                <div className="hero-feature-panel-copy">
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>

                {index <
                  featureItems.length - 1 && (
                  <span
                    className="hero-feature-panel-divider"
                    aria-hidden="true"
                  />
                )}
              </article>
            )
          )}
        </div>
      )}

      <div
        className="hero-scroll-indicator"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}

export default Hero;