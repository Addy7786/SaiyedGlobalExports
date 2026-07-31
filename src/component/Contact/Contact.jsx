import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ChevronRight,
  Globe2,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.country.trim() ||
      !formData.product.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          country: formData.country,
          product_requirement: formData.product,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message: "Your enquiry has been sent successfully.",
      });

      setFormData(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Enquiry could not be sent. Please try again or contact us on WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Saiyed Global Exports, I would like to discuss a product requirement.",
    );

    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="contact-luxury">
      <div className="contact-luxury__glow contact-luxury__glow--one" />
      <div className="contact-luxury__glow contact-luxury__glow--two" />

      <div className="contact-luxury__container">
        <div className="contact-luxury__info">
          <div className="contact-luxury__eyebrow">
            <span className="contact-luxury__eyebrow-dot" />
            <span>Let&apos;s Connect</span>
          </div>

          <h2 className="contact-luxury__title">
            Get In Touch With
            <span>Saiyed Global Exports</span>
          </h2>

          <div className="contact-luxury__title-line" />

          <p className="contact-luxury__description">
            We are here to help with product requirements, export enquiries and
            business collaboration. Share your requirement and our team will
            guide you through the next steps.
          </p>

          <div className="contact-luxury__cards">
            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <Phone size={27} strokeWidth={1.7} />
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <small>Monday–Saturday, 10 AM–7 PM</small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <Mail size={27} strokeWidth={1.7} />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:info@saiyed-global-exports.com">
                  info@saiyed-global-exports.com
                </a>
                <small>We usually reply within 24 hours</small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <MapPin size={28} strokeWidth={1.7} />
              </div>

              <div>
                <span>Location</span>
                <strong>Petlad, Anand, Gujarat</strong>
                <small>India</small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <MessageCircle size={28} strokeWidth={1.7} />
              </div>

              <div>
                <span>WhatsApp</span>
                <button type="button" onClick={openWhatsApp}>
                  Start a quick conversation
                </button>
                <small>Fast enquiry support</small>
              </div>
            </article>
          </div>

          <div className="contact-luxury__world-card">
            <div className="contact-luxury__world-icon">
              <Globe2 size={31} strokeWidth={1.6} />
            </div>

            <div>
              <strong>India Based. Globally Focused.</strong>
              <span>
                Connecting quality Indian products with international buyers.
              </span>
            </div>
          </div>
        </div>

        <div className="contact-luxury__form-panel">
          <div className="contact-luxury__form-eyebrow">
            <Send size={17} strokeWidth={1.8} />
            <span>Send Your Requirement</span>
          </div>

          <h3>Send Us Your Enquiry</h3>

          <span className="contact-luxury__form-line" />

          <p className="contact-luxury__form-intro">
            Fill in the form and our team will respond with the best available
            sourcing and export support.
          </p>

          <form className="contact-luxury__form" onSubmit={handleSubmit}>
            <label className="contact-luxury__field">
              <UserRound size={19} strokeWidth={1.7} />
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </label>

            <label className="contact-luxury__field">
              <Mail size={19} strokeWidth={1.7} />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </label>

            <label className="contact-luxury__field">
              <Phone size={19} strokeWidth={1.7} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </label>

            <label className="contact-luxury__field">
              <Globe2 size={19} strokeWidth={1.7} />
              <input
                type="text"
                name="country"
                placeholder="Country *"
                value={formData.country}
                onChange={handleChange}
                autoComplete="country-name"
              />
            </label>

            <label className="contact-luxury__field contact-luxury__field--full">
              <Headphones size={19} strokeWidth={1.7} />
              <input
                type="text"
                name="product"
                placeholder="Product Requirement *"
                value={formData.product}
                onChange={handleChange}
              />
            </label>

            <label className="contact-luxury__field contact-luxury__field--message">
              <MessageCircle size={19} strokeWidth={1.7} />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            {status.message && (
              <div
                className={`contact-luxury__status contact-luxury__status--${status.type}`}
                role="status"
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="contact-luxury__submit"
              disabled={isSending}
            >
              <Send size={20} strokeWidth={1.9} />
              <span>{isSending ? "Sending..." : "Send Enquiry"}</span>
              <ChevronRight size={19} strokeWidth={1.9} />
            </button>

            <div className="contact-luxury__privacy">
              <LockKeyhole size={15} strokeWidth={1.8} />
              <span>Your information is kept private and secure.</span>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-luxury__quick">
        <div className="contact-luxury__quick-icon">
          <Headphones size={29} strokeWidth={1.7} />
        </div>

        <div>
          <strong>Need Quick Assistance?</strong>
          <span>Our team is ready to help with your requirement.</span>
        </div>

        <button type="button" onClick={openWhatsApp}>
          <MessageCircle size={19} strokeWidth={1.8} />
          Chat On WhatsApp
        </button>
      </div>
    </section>
  );
}

export default Contact;
