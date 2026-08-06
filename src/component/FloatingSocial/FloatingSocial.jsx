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

function FloatingSocial() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="floating-social"
      aria-label="Social media links"
    >
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
        aria-label="Follow Saiyed Global Exports on Instagram"
        title="@saiyed_global_exports"
      >
        <FaInstagram size={21} />
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn facebook"
        aria-label="Facebook"
        title="Facebook"
      >
        <FaFacebookF size={20} />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedinIn size={20} />
      </a>

      <a
        href="mailto:info@saiyedglobalexports.com"
        className="social-btn email"
        aria-label="Email Saiyed Global Exports"
        title="Email"
      >
        <MdEmail size={22} />
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
        aria-label="Chat with Saiyed Global Exports on WhatsApp"
        title="+91 786786 9243"
      >
        <FaWhatsapp size={21} />
      </a>
    </div>
  );
}

export default FloatingSocial;