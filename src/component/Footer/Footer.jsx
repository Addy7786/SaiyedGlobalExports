import {
  ArrowUpRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Ship,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext.jsx";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("navbar.home"), href: "#home" },
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.products"), href: "#products" },
    { label: t("navbar.markets"), href: "#markets" },
    { label: t("navbar.whyUs"), href: "#why-us" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="footer-logo-icon">
                <Ship size={25} />
              </div>

              <div>
                <strong>Saiyed Global Exports</strong>
                <span>{t("footer.logoTagline")}</span>
              </div>
            </a>

            <p className="footer-description">
              {t("footer.description")}
            </p>

            <div className="footer-global-note">
              <Globe2 size={20} />
              <span>{t("footer.globalNote")}</span>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t("footer.quickLinks")}</h3>

            <div className="footer-links">
              {quickLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>{t("footer.productsTitle")}</h3>

            <div className="footer-product-list">
              <span>{t("footer.products.agriculture")}</span>
              <span>{t("footer.products.spices")}</span>
              <span>{t("footer.products.food")}</span>
              <span>{t("footer.products.textiles")}</span>
              <span>{t("footer.products.personalCare")}</span>
              <span>{t("footer.products.herbal")}</span>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t("footer.contactTitle")}</h3>

            <div className="footer-contact-list">
              <a href="tel:+917867869243">
                <Phone size={18} />
                <span>+91 786 786 92 43</span>
              </a>

              <a href="mailto:info@saiyedglobalexports.com">
                <Mail size={18} />
                <span>info@saiyedglobalexports.com</span>
              </a>

              <div>
                <MapPin size={18} />
                <span>Petlad, Anand, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Saiyed Global Exports.{" "}
            {t("footer.rights")}
          </p>

          <p>{t("footer.bottomText")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;