import {
  ArrowRight,
  Award,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";
import heroImage from "../../assets/hero-global-trade.png";
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
    <section
      className="hero-section"
      id="home"
      style={{
        "--hero-background-image": `url(${heroImage})`,
      }}
    >
      <div className="hero-background-image" aria-hidden="true" />

      <div className="hero-dark-overlay" aria-hidden="true" />

      <div className="hero-top-glow" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <div
            className="hero-badge"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {getText("hero.badge", "India • Global Trade • 2026")}
          </div>

          <div className="hero-gold-line" aria-hidden="true" />

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>
              {getText("hero.titleLineOne", "Connecting")}
            </span>

            <span className="hero-title-gold">
              {getText("hero.titleLineTwo", "Indian Products")}
            </span>

            <span>
              {getText("hero.titleLineThree", "With Global Markets.")}
            </span>
          </h1>

          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            {getText(
              "hero.description",
              "Saiyed Global Exports is a trusted export partner delivering premium quality Indian products worldwide with integrity, reliability and commitment."
            )}
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="500"
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

              <ArrowRight size={21} />
            </button>

            <a
              className="hero-secondary-button"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Saiyed Global Exports on WhatsApp"
            >
              <MessageCircle size={20} />

              <span>
                {getText("hero.contactButton", "Get In Touch")}
              </span>

              <ArrowRight size={19} />
            </a>
          </div>

          <div
            className="hero-trusted-block"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <div className="hero-trusted-line" />

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
            data-aos-delay="750"
          >
            <span title="India">🇮🇳</span>
            <span title="United Arab Emirates">🇦🇪</span>
            <span title="Saudi Arabia">🇸🇦</span>
            <span title="Turkey">🇹🇷</span>
            <span title="United Kingdom">🇬🇧</span>
            <span title="United States">🇺🇸</span>
            <span title="Malaysia">🇲🇾</span>
            <span title="Singapore">🇸🇬</span>
            <span title="South Africa">🇿🇦</span>
            <span className="hero-more-countries">+</span>
          </div>
        </div>
      </div>

      <div className="hero-feature-panel">
        <div className="hero-feature-panel-item">
          <span className="hero-feature-panel-icon">
            <Globe2 size={32} />
          </span>

          <div>
            <strong>Global</strong>
            <span>Sourcing</span>
            <small>Premium Quality</small>
          </div>
        </div>

        <div className="hero-feature-panel-divider" />

        <div className="hero-feature-panel-item">
          <span className="hero-feature-panel-icon">
            <Award size={32} />
          </span>

          <div>
            <strong>Reliable</strong>
            <span>Partnership</span>
            <small>Commitment to Trust</small>
          </div>
        </div>

        <div className="hero-feature-panel-divider" />

        <div className="hero-feature-panel-item">
          <span className="hero-feature-panel-icon">
            <Truck size={32} />
          </span>

          <div>
            <strong>Efficient</strong>
            <span>Logistics</span>
            <small>On-time, Every Time</small>
          </div>
        </div>

        <div className="hero-feature-panel-divider" />

        <div className="hero-feature-panel-item">
          <span className="hero-feature-panel-icon">
            <ShieldCheck size={32} />
          </span>

          <div>
            <strong>Ethical</strong>
            <span>Business</span>
            <small>Integrity & Transparency</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;