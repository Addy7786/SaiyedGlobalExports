import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext.jsx";
import logo from "../../assets/saiyed-logo.jpeg";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navigationLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const currentSection = [...sections]
        .reverse()
        .find((section) => {
          const sectionTop = section.offsetTop - 160;
          return window.scrollY >= sectionTop;
        });

      setActiveSection(currentSection?.id ?? "home");
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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-shell">
        <div className="navbar-container">
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Saiyed Global Exports Home"
          >
            <span className="navbar-logo-image-wrap">
              <span
                className="navbar-logo-glow"
                aria-hidden="true"
              />

              <img
                src={logo}
                alt="Saiyed Global Exports logo"
                className="navbar-logo-image"
                draggable="false"
              />
            </span>

            <span className="navbar-logo-content">
              <strong>Saiyed</strong>
              <small>Global Exports</small>
            </span>
          </a>

          <nav
            id="main-navigation"
            className={`navbar-menu ${
              isMenuOpen ? "navbar-menu-open" : ""
            }`}
            aria-label="Main navigation"
          >
            <div className="navbar-mobile-header">
              <div>
                <strong>Menu</strong>
                <span>Explore Saiyed Global Exports</span>
              </div>

              <button
                type="button"
                className="navbar-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X size={21} strokeWidth={2} />
              </button>
            </div>

            <div className="navbar-links">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={
                    activeSection === link.id
                      ? "navbar-link navbar-link-active"
                      : "navbar-link"
                  }
                  onClick={closeMenu}
                >
                  <span>{t(link.translationKey)}</span>
                </a>
              ))}
            </div>

            <div className="navbar-mobile-footer">
              <p>Connecting markets, delivering trust.</p>

              <a
                href="#contact"
                className="navbar-mobile-cta"
                onClick={closeMenu}
              >
                <span>{t("navbar.getInTouch")}</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </a>
            </div>
          </nav>

          <div className="navbar-actions">
            <a href="#contact" className="navbar-cta">
              <span>{t("navbar.getInTouch")}</span>
              <ArrowRight size={18} strokeWidth={2.2} />
            </a>

            <button
              type="button"
              className={`navbar-toggle ${
                isMenuOpen ? "navbar-toggle-active" : ""
              }`}
              onClick={() =>
                setIsMenuOpen((current) => !current)
              }
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
            >
              {isMenuOpen ? (
                <X size={23} strokeWidth={2} />
              ) : (
                <Menu size={23} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`navbar-backdrop ${
          isMenuOpen ? "navbar-backdrop-visible" : ""
        }`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
      />
    </header>
  );
}

export default Navbar;