import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext.jsx";
import "./Navbar.css";

const navigationLinks = [
  {
    id: "home",
    translationKey: "navbar.home",
  },
  {
    id: "about",
    translationKey: "navbar.about",
  },
  {
    id: "products",
    translationKey: "navbar.products",
  },
  {
    id: "markets",
    translationKey: "navbar.markets",
  },
  {
    id: "why-us",
    translationKey: "navbar.whyUs",
  },
  {
    id: "contact",
    translationKey: "navbar.contact",
  },
];

function Navbar() {
  const { t } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Saiyed Global Exports Home"
        >
          <div className="navbar-logo-mark">
            <span>S</span>
            <span>G</span>
          </div>

          <div className="navbar-logo-text">
            <strong>Saiyed Global</strong>
            <span>Exports</span>
          </div>
        </a>

        <nav
          className={`navbar-menu ${
            isMenuOpen ? "navbar-menu-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="navbar-link"
              onClick={closeMenu}
            >
              {t(link.translationKey)}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar-mobile-cta"
            onClick={closeMenu}
          >
            {t("navbar.getInTouch")}
            <ArrowRight size={18} />
          </a>
        </nav>

        <div className="navbar-actions">
          <a
            href="#contact"
            className="navbar-cta"
          >
            {t("navbar.getInTouch")}
            <ArrowRight size={18} />
          </a>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="navbar-overlay"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
    </header>
  );
}

export default Navbar;