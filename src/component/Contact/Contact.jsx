import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (event) => {
    event.preventDefault();

    if (loading) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Contact form is not configured yet. Please contact us by email or phone.",
      });

      return;
    }

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        }
      );

      setStatus({
        type: "success",
        message:
          "Your enquiry has been sent successfully. We will contact you shortly.",
      });

      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Your enquiry could not be sent. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div
          className="contact-info"
          data-aos="fade-right"
        >
          <span className="contact-label">
            Get in Touch
          </span>

          <h2>Let’s Build Global Business Together</h2>

          <p className="contact-description">
            Contact Saiyed Global Exports for product sourcing,
            export enquiries, quotation requests and international
            business opportunities.
          </p>

          <a
            className="info-box"
            href="mailto:saiyedglobalexport@gmail.com"
            aria-label="Email Saiyed Global Exports"
          >
            <span className="info-icon">
              <Mail size={22} />
            </span>

            <span className="info-content">
              <strong>Email</strong>
              <small>
                saiyedglobalexport@gmail.com
              </small>
            </span>
          </a>

          <a
            className="info-box"
            href="tel:+917867869243"
            aria-label="Call Saiyed Global Exports"
          >
            <span className="info-icon">
              <Phone size={22} />
            </span>

            <span className="info-content">
              <strong>Phone</strong>
              <small>+91 78678 69243</small>
            </span>
          </a>

          <div className="info-box">
            <span className="info-icon">
              <MapPin size={22} />
            </span>

            <span className="info-content">
              <strong>Location</strong>
              <small>
                Petlad, Anand, Gujarat, India
              </small>
            </span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          data-aos="fade-left"
        >
          <div className="contact-form-heading">
            <span>Send an Enquiry</span>

            <h3>Tell Us Your Requirement</h3>

            <p>
              Fill in the details below and our team will
              contact you as soon as possible.
            </p>
          </div>

          <div className="contact-form-grid">
            <div className="form-group">
              <label htmlFor="contact-name">
                Full Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="user_name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">
                Email Address
              </label>

              <input
                id="contact-email"
                type="email"
                name="user_email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">
                Phone Number
              </label>

              <input
                id="contact-phone"
                type="tel"
                name="user_phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
                inputMode="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-country">
                Country
              </label>

              <input
                id="contact-country"
                type="text"
                name="user_country"
                placeholder="Enter your country"
                autoComplete="country-name"
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="contact-product">
                Product Requirement
              </label>

              <input
                id="contact-product"
                type="text"
                name="product_requirement"
                placeholder="Which product are you interested in?"
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell us about quantity, destination country and other requirements..."
                required
              />
            </div>
          </div>

          <input
            type="hidden"
            name="website"
            value="Saiyed Global Exports"
          />

          <input
            type="hidden"
            name="reply_to"
            value="saiyedglobalexport@gmail.com"
          />

          {status.message && (
            <div
              className={`form-status ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.type === "success" ? (
                <CheckCircle2 size={20} />
              ) : (
                <AlertCircle size={20} />
              )}

              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            className="contact-submit-button"
            disabled={loading}
          >
            <Send size={19} />

            <span>
              {loading
                ? "Sending Enquiry..."
                : "Send Enquiry"}
            </span>
          </button>

          <p className="contact-privacy-note">
            By submitting this form, you agree to be contacted
            regarding your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;