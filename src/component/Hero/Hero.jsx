import {
  ArrowRight,
  Globe2,
  MessageCircle,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import heroImage from "../../assets/hero-futuristic.png";
import "./Hero.css";

function Hero() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const translatedText = t(key);

    if (!translatedText || translatedText === key) {
      return fallback;
    }

    return translatedText;
  };

  const whatsappNumber = "917867869243";

  const whatsappMessage =
    "Hello Saiyed Global Exports, I would like to enquire about your products and export services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-noise" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-glow hero-glow-three" />

        <div className="hero-orbit hero-orbit-large" />
        <div className="hero-orbit hero-orbit-small" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div
            className="hero-badge"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span className="hero-badge-icon">
              <Globe2 size={16} />
            </span>

            <span>
              {getText("hero.badge", "India • Global Trade • 2026")}
            </span>
          </div>

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {getText("hero.titleStart", "Connecting Indian Products")}

            <span className="hero-title-highlight">
              {getText("hero.titleHighlight", " With Global Markets.")}
            </span>
          </h1>

          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            {getText(
              "hero.description",
              "Saiyed Global Exports delivers quality Indian products to international markets with trust, transparency and dependable export solutions."
            )}
          </p>

          <div
            className="hero-actions"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <button
              type="button"
              className="hero-primary-button"
              onClick={scrollToProducts}
            >
              <span>
                {getText("hero.exploreButton", "Explore Products")}
              </span>

              <ArrowRight size={19} />
            </button>

            <a
              className="hero-secondary-button"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Saiyed Global Exports on WhatsApp"
            >
              <MessageCircle size={19} />

              <span>
                {getText("hero.contactButton", "Contact Us")}
              </span>
            </a>
          </div>

          <div
            className="hero-feature-row"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="hero-feature-item">
              <span className="hero-feature-icon">
                <ShieldCheck size={18} />
              </span>

              <span>
                {getText("hero.featureTrusted", "Trusted Export Support")}
              </span>
            </div>

            <div className="hero-feature-item">
              <span className="hero-feature-icon">
                <PackageCheck size={18} />
              </span>

              <span>
                {getText("hero.featureQuality", "Quality Product Sourcing")}
              </span>
            </div>
          </div>

          <div
            className="hero-trust-row"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="hero-trust-item">
              <strong>100%</strong>
              <span>{getText("hero.trustQuality", "Quality Focus")}</span>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <strong>Global</strong>
              <span>{getText("hero.trustMarkets", "Market Reach")}</span>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <strong>Trusted</strong>
              <span>{getText("hero.trustService", "Export Service")}</span>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >
          <div className="hero-visual-glow" />

          <div className="hero-visual-ring hero-ring-one" />
          <div className="hero-visual-ring hero-ring-two" />
          <div className="hero-visual-ring hero-ring-three" />

          <div className="hero-image-wrapper">
            <div className="hero-image-shine" />

            <img
              src={heroImage}
              alt="International export network connecting India with global markets"
              className="hero-main-image"
              fetchPriority="high"
            />
          </div>

          <div className="hero-floating-card hero-card-shipping">
            <span className="hero-floating-icon">
              <Ship size={21} />
            </span>

            <div>
              <strong>
                {getText("hero.shippingTitle", "Sea Freight")}
              </strong>

              <span>
                {getText("hero.shippingText", "Global Cargo Network")}
              </span>
            </div>
          </div>

          <div className="hero-floating-card hero-card-air">
            <span className="hero-floating-icon">
              <Plane size={21} />
            </span>

            <div>
              <strong>{getText("hero.airTitle", "Air Cargo")}</strong>

              <span>{getText("hero.airText", "Fast Worldwide Reach")}</span>
            </div>
          </div>

          <div className="hero-floating-card hero-card-export">
            <span className="hero-live-dot" />

            <div>
              <strong>
                {getText("hero.exportTitle", "Export Ready")}
              </strong>

              <span>
                {getText("hero.exportText", "India to Global Markets")}
              </span>
            </div>
          </div>

          <div className="hero-route hero-route-one" />
          <div className="hero-route hero-route-two" />
        </div>
      </div>

      <div className="hero-bottom-fade" />

      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={scrollToProducts}
        aria-label="Scroll to products"
      >
        <span />
      </button>
    </section>
  );
}

export default Hero;