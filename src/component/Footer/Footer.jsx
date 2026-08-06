import {
  ChevronRight,
  Clock3,
  Facebook,
  Globe2,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
} from "lucide-react";

import "./Footer.css";

import footerLogo from "../../assets/logo/saiyed-logo-no-tagline-transparent.webp";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Markets", href: "#markets" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const productLinks = [
  "Agricultural Products",
  "Food & Beverages",
  "Textiles & Garments",
  "Industrial Products",
  "Packaging Materials",
  "Custom Sourced Products",
];

const marketLinks = [
  "Middle East",
  "Europe",
  "Africa",
  "Asia Pacific",
  "South America",
  "Worldwide",
];

const phoneNumber = "917867869243";
const displayPhoneNumber = "+91 786786 9243";

const instagramUrl =
  "https://instagram.com/saiyed_global_exports";

function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappMessage =
    "Hello Saiyed Global Exports, I would like to enquire about your products and export services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="footer-luxury">
      <div
        className="footer-luxury__glow footer-luxury__glow--one"
        aria-hidden="true"
      />

      <div
        className="footer-luxury__glow footer-luxury__glow--two"
        aria-hidden="true"
      />

      <div className="footer-luxury__container">
        <div className="footer-luxury__brand">
          <img
            src={footerLogo}
            alt="Saiyed Global Exports"
            className="footer-luxury__logo"
            loading="lazy"
            decoding="async"
            draggable="false"
          />

          <p>
            Connecting Indian Products With Global Markets.
            Your trusted export partner for quality,
            reliability and professional coordination.
          </p>

          <div className="footer-luxury__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook size={19} strokeWidth={1.8} />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="@saiyed_global_exports"
            >
              <Instagram size={19} strokeWidth={1.8} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={19} strokeWidth={1.8} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle
                size={19}
                strokeWidth={1.8}
              />
            </a>
          </div>
        </div>

        <div className="footer-luxury__column">
          <h3>Quick Links</h3>

          <span
            className="footer-luxury__heading-line"
            aria-hidden="true"
          />

          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  <ChevronRight
                    size={15}
                    strokeWidth={1.8}
                  />

                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-luxury__column">
          <h3>Our Products</h3>

          <span
            className="footer-luxury__heading-line"
            aria-hidden="true"
          />

          <ul>
            {productLinks.map((item) => (
              <li key={item}>
                <a href="#products">
                  <Package
                    size={15}
                    strokeWidth={1.7}
                  />

                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-luxury__column">
          <h3>Our Markets</h3>

          <span
            className="footer-luxury__heading-line"
            aria-hidden="true"
          />

          <ul>
            {marketLinks.map((item) => (
              <li key={item}>
                <a href="#markets">
                  <Globe2
                    size={15}
                    strokeWidth={1.7}
                  />

                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-luxury__column footer-luxury__contact">
          <h3>Contact Us</h3>

          <span
            className="footer-luxury__heading-line"
            aria-hidden="true"
          />

          <ul>
            <li>
              <a href={`tel:+${phoneNumber}`}>
                <Phone size={17} strokeWidth={1.7} />

                <span>{displayPhoneNumber}</span>
              </a>
            </li>

            <li>
              <a href="mailto:info@saiyed-global-exports.com">
                <Mail size={17} strokeWidth={1.7} />

                <span>
                  info@saiyed-global-exports.com
                </span>
              </a>
            </li>

            <li>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={17}
                  strokeWidth={1.7}
                />

                <span>@saiyed_global_exports</span>
              </a>
            </li>

            <li>
              <span className="footer-luxury__contact-line">
                <MapPin size={18} strokeWidth={1.7} />

                <span>
                  Petlad, Anand, Gujarat, India
                </span>
              </span>
            </li>

            <li>
              <span className="footer-luxury__contact-line">
                <Clock3 size={17} strokeWidth={1.7} />

                <span>
                  Mon–Sat, 10:00 AM–7:00 PM
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-luxury__bottom">
        <p>
          © {currentYear} Saiyed Global Exports. All
          Rights Reserved.
        </p>

        <span>
          <ShieldCheck size={17} strokeWidth={1.8} />
          Trusted Export Partner
        </span>

        <span>
          Made with{" "}
          <Heart size={16} fill="currentColor" /> in India
        </span>

        <a href="#home">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;