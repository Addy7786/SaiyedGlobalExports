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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-luxury">
      <div className="footer-luxury__glow footer-luxury__glow--one" />
      <div className="footer-luxury__glow footer-luxury__glow--two" />

      <div className="footer-luxury__container">
        <div className="footer-luxury__brand">
          <img
            src={footerLogo}
            alt="Saiyed Global Exports"
            className="footer-luxury__logo"
          />

          <p>
            Connecting Indian Products With Global Markets. Your trusted export
            partner for quality, reliability and professional coordination.
          </p>

          <div className="footer-luxury__socials">
            <a href="#" aria-label="Facebook">
              <Facebook size={19} strokeWidth={1.8} />
            </a>

            <a href="#" aria-label="Instagram">
              <Instagram size={19} strokeWidth={1.8} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <Linkedin size={19} strokeWidth={1.8} />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={19} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="footer-luxury__column">
          <h3>Quick Links</h3>
          <span className="footer-luxury__heading-line" />

          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  <ChevronRight size={15} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-luxury__column">
          <h3>Our Products</h3>
          <span className="footer-luxury__heading-line" />

          <ul>
            {productLinks.map((item) => (
              <li key={item}>
                <a href="#products">
                  <Package size={15} strokeWidth={1.7} />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-luxury__column">
          <h3>Our Markets</h3>
          <span className="footer-luxury__heading-line" />

          <ul>
            {marketLinks.map((item) => (
              <li key={item}>
                <a href="#markets">
                  <Globe2 size={15} strokeWidth={1.7} />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-luxury__column footer-luxury__contact">
          <h3>Contact Us</h3>
          <span className="footer-luxury__heading-line" />

          <ul>
            <li>
              <a href="tel:+919876543210">
                <Phone size={17} strokeWidth={1.7} />
                <span>+91 98765 43210</span>
              </a>
            </li>

            <li>
              <a href="mailto:info@saiyed-global-exports.com">
                <Mail size={17} strokeWidth={1.7} />
                <span>info@saiyed-global-exports.com</span>
              </a>
            </li>

            <li>
              <span className="footer-luxury__contact-line">
                <MapPin size={18} strokeWidth={1.7} />
                <span>Petlad, Anand, Gujarat, India</span>
              </span>
            </li>

            <li>
              <span className="footer-luxury__contact-line">
                <Clock3 size={17} strokeWidth={1.7} />
                <span>Mon–Sat, 10:00 AM–7:00 PM</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-luxury__bottom">
        <p>
          © {currentYear} Saiyed Global Exports. All Rights Reserved.
        </p>

        <span>
          <ShieldCheck size={17} strokeWidth={1.8} />
          Trusted Export Partner
        </span>

        <span>
          Made with <Heart size={16} fill="currentColor" /> in India
        </span>

        <a href="#home">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;