import { MessageCircle } from "lucide-react";

import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "917867869243";

  const message =
    "Hello Saiyed Global Exports, I would like to enquire about your products and export services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Saiyed Global Exports on WhatsApp"
      title="+91 786786 9243"
    >
      <span
        className="whatsapp-button__pulse"
        aria-hidden="true"
      />

      <span className="whatsapp-button__core">
        <MessageCircle
          size={25}
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </span>

      <span className="whatsapp-tooltip">
        WhatsApp Enquiry
      </span>
    </a>
  );
}

export default WhatsAppButton;