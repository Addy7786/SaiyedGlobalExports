import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext.jsx";

import logo from "../../assets/saiyed-logo.webp";

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

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const scrollFrameRef = useRef(0);
  const sectionPositionsRef = useRef([]);

  useEffect(() => {
    let resizeTimer = 0;
    let refreshTimer = 0;

    const cacheSectionPositions = () => {
      sectionPositionsRef.current =
        navigationLinks
          .map((link) => {
            const element =
              document.getElementById(link.id);

            if (!element) {
              return null;
            }

            return {
              id: link.id,
              top: element.offsetTop,
            };
          })
          .filter(Boolean);
    };

    const updateNavbarState = () => {
      scrollFrameRef.current = 0;

      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 24;

      setIsScrolled((current) =>
        current === nextScrolled
          ? current
          : nextScrolled
      );

      const positions =
        sectionPositionsRef.current;

      let nextSection = "home";

      for (
        let index = positions.length - 1;
        index >= 0;
        index -= 1
      ) {
        if (
          scrollY >=
          positions[index].top - 160
        ) {
          nextSection = positions[index].id;
          break;
        }
      }

      setActiveSection((current) =>
        current === nextSection
          ? current
          : nextSection
      );
    };

    const requestNavbarUpdate = () => {
      if (scrollFrameRef.current) {
        return;
      }

      scrollFrameRef.current =
        window.requestAnimationFrame(
          updateNavbarState
        );
    };

    const refreshPositions = () => {
      window.clearTimeout(refreshTimer);

      refreshTimer = window.setTimeout(() => {
        cacheSectionPositions();
        requestNavbarUpdate();
      }, 80);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);

      resizeTimer = window.setTimeout(() => {
        cacheSectionPositions();
        requestNavbarUpdate();
      }, 160);
    };

    cacheSectionPositions();
    updateNavbarState();

    window.addEventListener(
      "scroll",
      requestNavbarUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "orientationchange",
      handleResize
    );

    window.addEventListener(
      "sge:content-loaded",
      refreshPositions
    );

    window.addEventListener(
      "sge:refresh-animations",
      refreshPositions
    );

    return () => {
      window.clearTimeout(resizeTimer);
      window.clearTimeout(refreshTimer);

      window.cancelAnimationFrame(
        scrollFrameRef.current
      );

      window.removeEventListener(
        "scroll",
        requestNavbarUpdate
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "orientationchange",
        handleResize
      );

      window.removeEventListener(
        "sge:content-loaded",
        refreshPositions
      );

      window.removeEventListener(
        "sge:refresh-animations",
        refreshPositions
      );
    };
  }, []);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
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
      <div className="navbar-shell">
        <div className="navbar-container">
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Saiyed Global Exports home"
          >
            <span className="navbar-logo-image-wrap">
              <span
                className="navbar-logo-glow"
                aria-hidden="true"
              />

              <img
                src={logo}
                alt="Saiyed Global Exports Logo"
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
              isMenuOpen
                ? "navbar-menu-open"
                : ""
            }`}
            aria-label="Main navigation"
          >
            <div className="navbar-mobile-header">
              <div>
                <strong>Menu</strong>
                <span>
                  Explore Saiyed Global Exports
                </span>
              </div>

              <button
                type="button"
                className="navbar-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X
                  size={21}
                  strokeWidth={2}
                />
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
                  <span>
                    {t(link.translationKey)}
                  </span>
                </a>
              ))}
            </div>

            <div className="navbar-mobile-footer">
              <p>
                Connecting markets, delivering
                trust.
              </p>

              <a
                href="#contact"
                className="navbar-mobile-cta"
                onClick={closeMenu}
              >
                <span>
                  {t("navbar.getInTouch")}
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={2.2}
                />
              </a>
            </div>
          </nav>

          <div className="navbar-actions">
            <a
              href="#contact"
              className="navbar-cta"
            >
              <span>
                {t("navbar.getInTouch")}
              </span>

              <ArrowRight
                size={18}
                strokeWidth={2.2}
              />
            </a>

            <button
              type="button"
              className={`navbar-toggle ${
                isMenuOpen
                  ? "navbar-toggle-active"
                  : ""
              }`}
              onClick={() =>
                setIsMenuOpen(
                  (current) => !current
                )
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
                <X
                  size={23}
                  strokeWidth={2}
                />
              ) : (
                <Menu
                  size={23}
                  strokeWidth={2}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`navbar-backdrop ${
          isMenuOpen
            ? "navbar-backdrop-visible"
            : ""
        }`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
      />
    </header>
  );
}

export default Navbar;