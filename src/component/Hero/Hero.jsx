import { ArrowRight, Globe2, MessageCircle } from "lucide-react";
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
      <div className="hero-background">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div
            className="hero-badge"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <Globe2 size={17} />

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
            >
              <MessageCircle size={19} />

              <span>
                {getText("hero.contactButton", "Contact Us")}
              </span>
            </a>
          </div>

          <div
            className="hero-trust-row"
            data-aos="fade-up"
            data-aos-delay="650"
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
          <div className="hero-visual-ring hero-ring-one" />
          <div className="hero-visual-ring hero-ring-two" />

          <img
            src={heroImage}
            alt="Saiyed Global Exports international trade"
            className="hero-main-image"
          />
        </div>
      </div>

      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={scrollToProducts}
        aria-label="Scroll to products"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <span />
      </button>
    </section>
  );
}

export default Hero;