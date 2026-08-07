import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import "./FloatingSocial.css";

const instagramUrl =
  "https://instagram.com/saiyed_global_exports";

const whatsappNumber = "917867869243";

const whatsappMessage =
  "Hello Saiyed Global Exports, I would like to enquire about your products and export services.";

const socialItems = [
  {
    label: "Instagram",
    className: "instagram",
    href: instagramUrl,
    icon: FaInstagram,
    external: true,
  },
  {
    label: "Facebook",
    className: "facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    external: true,
  },
  {
    label: "LinkedIn",
    className: "linkedin",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "Email",
    className: "email",
    href: "mailto:info@saiyed-global-exports.com",
    icon: MdEmail,
    external: false,
  },
];

function FloatingSocial() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="floating-social"
      aria-label="Social media links"
    >
      {socialItems.map(
        ({
          label,
          className,
          href,
          icon: Icon,
          external,
        }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={
              external
                ? "noopener noreferrer"
                : undefined
            }
            className={`social-btn ${className}`}
            aria-label={label}
            title={label}
          >
            <span className="social-btn__icon">
              <Icon aria-hidden="true" />
            </span>

            <span className="social-btn__label">
              {label}
            </span>
          </a>
        )
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
        aria-label="WhatsApp"
        title="+91 786786 9243"
      >
        <span className="social-btn__icon">
          <FaWhatsapp aria-hidden="true" />
        </span>

        <span className="social-btn__label">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

export default FloatingSocial;