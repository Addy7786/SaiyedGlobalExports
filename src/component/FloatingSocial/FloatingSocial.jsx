import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import "./FloatingSocial.css";

function FloatingSocial() {
  return (
    <div className="floating-social">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
        aria-label="Instagram"
        title="Instagram"
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
        aria-label="Email"
        title="Email"
      >
        <MdEmail size={22} />
      </a>

      <a
        href="https://wa.me/917867869243"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={21} />
      </a>
    </div>
  );
}

export default FloatingSocial;