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
      className="whatsapp-button"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Saiyed Global Exports on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={25} />
      <span className="whatsapp-tooltip">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;