import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

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
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        footer.querySelectorAll(
          ".footer-luxury__brand > *, .footer-luxury__column, .footer-luxury__bottom > *"
        ),
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: footer,
          start: "top 84%",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".footer-luxury__logo",
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
          }
        )
        .fromTo(
          ".footer-luxury__brand p",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
          },
          0.25
        )
        .fromTo(
          ".footer-luxury__socials a",
          {
            autoAlpha: 0,
            y: 18,
            scale: 0.8,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.07,
            ease: "back.out(1.7)",
          },
          0.38
        )
        .fromTo(
          ".footer-luxury__column",
          {
            autoAlpha: 0,
            y: 34,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.09,
          },
          0.32
        )
        .fromTo(
          ".footer-luxury__heading-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.62,
            stagger: 0.08,
            ease: "power3.inOut",
          },
          0.55
        )
        .fromTo(
          ".footer-luxury__bottom > *",
          {
            autoAlpha: 0,
            y: 16,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.54,
            stagger: 0.07,
          },
          0.82
        );

      gsap.to(".footer-luxury__glow--one", {
        x: 55,
        y: 34,
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".footer-luxury__glow--two", {
        x: -50,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, footer);

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "sge:refresh-animations",
      handleRefresh
    );

    return () => {
      window.removeEventListener(
        "sge:refresh-animations",
        handleRefresh
      );

      context.revert();
    };
  }, []);

  const whatsappMessage =
    "Hello Saiyed Global Exports, I would like to enquire about your products and export services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer
      ref={footerRef}
      className="footer-luxury"
      id="footer"
    >
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
            width="235"
            height="120"
            loading="lazy"
            decoding="async"
            draggable="false"
          />

          <p>
            Connecting Indian Products With Global Markets. Your
            trusted export partner for quality, reliability and
            professional coordination.
          </p>

          <div className="footer-luxury__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="@saiyed_global_exports"
            >
              <Instagram
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
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
                aria-hidden="true"
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
                    aria-hidden="true"
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
                    aria-hidden="true"
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
                    aria-hidden="true"
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
                <Phone
                  size={17}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>{displayPhoneNumber}</span>
              </a>
            </li>

            <li>
              <a href="mailto:info@saiyed-global-exports.com">
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>info@saiyed-global-exports.com</span>
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
                  aria-hidden="true"
                />

                <span>@saiyed_global_exports</span>
              </a>
            </li>

            <li>
              <span className="footer-luxury__contact-line">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>Petlad, Anand, Gujarat, India</span>
              </span>
            </li>

            <li>
              <span className="footer-luxury__contact-line">
                <Clock3
                  size={17}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>Mon–Sat, 10:00 AM–7:00 PM</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-luxury__bottom">
        <p>
          © {currentYear} Saiyed Global Exports. All Rights
          Reserved.
        </p>

        <span>
          <ShieldCheck
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />
          Trusted Export Partner
        </span>

        <span>
          Made with{" "}
          <Heart
            size={16}
            fill="currentColor"
            aria-hidden="true"
          />{" "}
          in India
        </span>

        <a href="#home">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;