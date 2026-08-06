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
  {
    name: "India",
    image: indiaFlag,
  },
  {
    name: "United Arab Emirates",
    image: uaeFlag,
  },
  {
    name: "Saudi Arabia",
    image: saudiFlag,
  },
  {
    name: "Turkey",
    image: turkeyFlag,
  },
  {
    name: "United Kingdom",
    image: ukFlag,
  },
  {
    name: "United States",
    image: usaFlag,
  },
  {
    name: "Malaysia",
    image: malaysiaFlag,
  },
  {
    name: "Singapore",
    image: singaporeFlag,
  },
  {
    name: "South Africa",
    image: southAfricaFlag,
  },
];

const featureItems = [
  {
    icon: Globe2,
    lineOne: "Global",
    lineTwo: "Sourcing",
    small: "Premium Quality",
  },
  {
    icon: Award,
    lineOne: "Reliable",
    lineTwo: "Partnership",
    small: "Commitment to Trust",
  },
  {
    icon: Truck,
    lineOne: "Efficient",
    lineTwo: "Logistics",
    small: "On-time, Every Time",
  },
  {
    icon: ShieldCheck,
    lineOne: "Ethical",
    lineTwo: "Business",
    small: "Integrity & Transparency",
  },
];

function Hero() {
  const { t } = useLanguage();

  const [showFeaturePanel, setShowFeaturePanel] =
    useState(false);

  useEffect(() => {
    let timeoutId;
    let idleId;

    const displayFeaturePanel = () => {
      setShowFeaturePanel(true);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(
        displayFeaturePanel,
        {
          timeout: 1100,
        }
      );
    } else {
      timeoutId = window.setTimeout(
        displayFeaturePanel,
        700
      );
    }

    return () => {
      if (
        idleId !== undefined &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (!showFeaturePanel) {
      return undefined;
    }

    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 100);

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
    <section className="hero-section" id="home">
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
        className="hero-top-glow"
        aria-hidden="true"
      />

      <div className="hero-container">
        <div className="hero-content">
          <div
            className="hero-badge"
            data-aos="fade-down"
            data-aos-delay="60"
          >
            {heroBadgeText}
          </div>

          <div
            className="hero-gold-line"
            data-aos="fade-right"
            data-aos-delay="100"
            aria-hidden="true"
          />

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="140"
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
            data-aos-delay="220"
          >
            {getText(
              "hero.description",
              "Saiyed Global Exports is a trusted export partner delivering premium quality Indian products worldwide with integrity, reliability and commitment."
            )}
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="300"
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
            data-aos-delay="380"
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
            data-aos-delay="440"
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
                  fetchPriority="low"
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
          data-aos-duration="650"
        >
          {featureItems.map(
            (
              {
                icon: Icon,
                lineOne,
                lineTwo,
                small,
              },
              index
            ) => (
              <div
                className="hero-feature-panel-item"
                key={lineOne}
              >
                <span className="hero-feature-panel-icon">
                  <Icon
                    size={32}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <strong>{lineOne}</strong>
                  <span>{lineTwo}</span>
                  <small>{small}</small>
                </div>

                {index <
                  featureItems.length - 1 && (
                  <div
                    className="hero-feature-panel-divider"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}

export default Hero;