import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Ship,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext.jsx";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const getText = (key, fallback) => {
    const translatedText = t(key);

    return translatedText && translatedText !== key
      ? translatedText
      : fallback;
  };

  const whatsappNumber = "917867869243";

  const quickLinks = [
    {
      label: getText("navbar.home", "Home"),
      href: "#home",
    },
    {
      label: getText("navbar.about", "About Us"),
      href: "#about",
    },
    {
      label: getText("navbar.products", "Products"),
      href: "#products",
    },
    {
      label: getText("navbar.markets", "Markets"),
      href: "#markets",
    },
    {
      label: getText("navbar.whyUs", "Why Choose Us"),
      href: "#why-us",
    },
    {
      label: getText("navbar.contact", "Contact"),
      href: "#contact",
    },
  ];

  const productLinks = [
    {
      label: getText(
        "footer.products.agriculture",
        "Agricultural Products"
      ),
      href: "#products",
    },
    {
      label: getText(
        "footer.products.spices",
        "Indian Spices"
      ),
      href: "#products",
    },
    {
      label: getText(
        "footer.products.food",
        "Food Products"
      ),
      href: "#products",
    },
    {
      label: getText(
        "footer.products.textiles",
        "Textiles & Garments"
      ),
      href: "#products",
    },
    {
      label: getText(
        "footer.products.personalCare",
        "Personal Care Products"
      ),
      href: "#products",
    },
    {
      label: getText(
        "footer.products.herbal",
        "Herbal Products"
      ),
      href: "#products",
    },
  ];

  const marketLinks = [
    {
      label: getText(
        "footer.markets.middleEast",
        "Middle East"
      ),
      href: "#markets",
    },
    {
      label: getText(
        "footer.markets.europe",
        "Europe"
      ),
      href: "#markets",
    },
    {
      label: getText(
        "footer.markets.africa",
        "Africa"
      ),
      href: "#markets",
    },
    {
      label: getText(
        "footer.markets.asia",
        "Asia"
      ),
      href: "#markets",
    },
  ];

  const openWhatsApp = () => {
    const message =
      "Hello Saiyed Global Exports, I would like to enquire about your products, pricing, MOQ, export documentation and shipping options.";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappLink,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div
        className="footer-background"
        aria-hidden="true"
      >
        <div className="footer-grid-pattern" />
        <div className="footer-glow footer-glow-one" />
        <div className="footer-glow footer-glow-two" />
        <div className="footer-route footer-route-one" />
        <div className="footer-route footer-route-two" />
      </div>

      <div className="footer-container">
        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="footer-cta-label">
              <Sparkles size={15} />

              {getText(
                "footer.ctaLabel",
                "START A GLOBAL BUSINESS CONNECTION"
              )}
            </span>

            <h2>
              {getText(
                "footer.ctaHeading",
                "Looking for Reliable Products From India?"
              )}
            </h2>

            <p>
              {getText(
                "footer.ctaDescription",
                "Share your sourcing requirement and connect with our team for product availability, pricing, MOQ, documentation and shipping information."
              )}
            </p>
          </div>

          <div className="footer-cta-actions">
            <a
              href="#contact"
              className="footer-primary-button"
            >
              <Send size={18} />

              <span>
                {getText(
                  "footer.sendEnquiry",
                  "Send an Enquiry"
                )}
              </span>

              <ArrowUpRight size={17} />
            </a>

            <button
              type="button"
              className="footer-whatsapp-button"
              onClick={openWhatsApp}
            >
              <MessageCircle size={19} />

              <span>
                {getText(
                  "footer.whatsappButton",
                  "Chat on WhatsApp"
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              aria-label="Saiyed Global Exports home"
            >
              <div className="footer-logo-icon">
                <span className="footer-logo-letter">
                  S
                </span>

                <Ship
                  size={21}
                  className="footer-logo-ship"
                />

                <Plane
                  size={15}
                  className="footer-logo-plane"
                />
              </div>

              <div className="footer-logo-text">
                <strong>
                  Saiyed Global Exports
                </strong>

                <span>
                  {getText(
                    "footer.logoTagline",
                    "Connecting Markets, Delivering Trust"
                  )}
                </span>
              </div>
            </a>

            <p className="footer-description">
              {getText(
                "footer.description",
                "Saiyed Global Exports connects quality Indian products with international markets through reliable sourcing, professional communication and export-focused business support."
              )}
            </p>

            <div className="footer-global-note">
              <Globe2 size={20} />

              <span>
                {getText(
                  "footer.globalNote",
                  "Export enquiries from importers, distributors, wholesalers and international businesses are welcome."
                )}
              </span>
            </div>

            <div className="footer-trust-row">
              <span>
                <CheckCircle2 size={15} />
                {getText(
                  "footer.trustSourcing",
                  "Trusted Sourcing"
                )}
              </span>

              <span>
                <ShieldCheck size={15} />
                {getText(
                  "footer.trustSupport",
                  "Professional Support"
                )}
              </span>
            </div>
          </div>

          <div className="footer-column">
            <h3>
              {getText(
                "footer.quickLinks",
                "Quick Links"
              )}
            </h3>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                >
                  <ArrowRight size={14} />
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>
              {getText(
                "footer.productsTitle",
                "Our Products"
              )}
            </h3>

            <div className="footer-product-list">
              {productLinks.map((product) => (
                <a
                  href={product.href}
                  key={product.label}
                >
                  <PackageSearch size={14} />
                  <span>{product.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column footer-market-column">
            <h3>
              {getText(
                "footer.marketsTitle",
                "Export Markets"
              )}
            </h3>

            <div className="footer-market-list">
              {marketLinks.map((market) => (
                <a
                  href={market.href}
                  key={market.label}
                >
                  <Globe2 size={14} />
                  <span>{market.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column footer-contact-column">
            <h3>
              {getText(
                "footer.contactTitle",
                "Contact Us"
              )}
            </h3>

            <div className="footer-contact-list">
              <a
                href="tel:+917867869243"
                aria-label="Call Saiyed Global Exports"
              >
                <span className="footer-contact-icon">
                  <Phone size={17} />
                </span>

                <span className="footer-contact-content">
                  <small>
                    {getText(
                      "footer.phoneLabel",
                      "Phone"
                    )}
                  </small>

                  <strong>
                    +91 78678 69243
                  </strong>
                </span>
              </a>

              <a
                href="mailto:saiyedglobalexport@gmail.com"
                aria-label="Email Saiyed Global Exports"
              >
                <span className="footer-contact-icon">
                  <Mail size={17} />
                </span>

                <span className="footer-contact-content">
                  <small>
                    {getText(
                      "footer.emailLabel",
                      "Business Email"
                    )}
                  </small>

                  <strong>
                    saiyedglobalexport@gmail.com
                  </strong>
                </span>
              </a>

              <div>
                <span className="footer-contact-icon">
                  <MapPin size={17} />
                </span>

                <span className="footer-contact-content">
                  <small>
                    {getText(
                      "footer.locationLabel",
                      "Location"
                    )}
                  </small>

                  <strong>
                    {getText(
                      "footer.location",
                      "Petlad, Anand, Gujarat, India"
                    )}
                  </strong>
                </span>
              </div>
            </div>

            <button
              type="button"
              className="footer-quick-enquiry"
              onClick={openWhatsApp}
            >
              <MessageCircle size={18} />

              <span>
                <small>
                  {getText(
                    "footer.quickEnquiryLabel",
                    "QUICK ENQUIRY"
                  )}
                </small>

                <strong>
                  {getText(
                    "footer.quickEnquiryText",
                    "Message Our Team"
                  )}
                </strong>
              </span>

              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        <div className="footer-divider">
          <span />
          <Globe2 size={18} />
          <span />
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Saiyed Global Exports.{" "}
              {getText(
                "footer.rights",
                "All rights reserved."
              )}
            </p>

            <span>
              {getText(
                "footer.bottomText",
                "Connecting Indian products with global markets."
              )}
            </span>
          </div>

          <div className="footer-bottom-actions">
            <a href="#contact">
              {getText(
                "footer.businessEnquiry",
                "Business Enquiry"
              )}
            </a>

            <span aria-hidden="true">•</span>

            <a href="mailto:saiyedglobalexport@gmail.com">
              {getText(
                "footer.emailUs",
                "Email Us"
              )}
            </a>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;