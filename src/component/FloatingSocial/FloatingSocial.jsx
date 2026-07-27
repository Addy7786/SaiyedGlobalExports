import {
  FaInstagram,
  FaFacebookF,
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
        rel="noreferrer"
        className="social-btn instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="social-btn facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="social-btn linkedin"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="mailto:info@saiyedglobalexports.com"
        className="social-btn email"
      >
        <MdEmail />
      </a>

      <a
        href="https://wa.me/917867869243"
        target="_blank"
        rel="noreferrer"
        className="social-btn whatsapp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default FloatingSocial;