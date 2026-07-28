import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";
import "./Contact.css";

function Contact() {
  const formRef = useRef(null);
  const { t } = useLanguage();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const whatsappNumber = "917867869243";

  const contactCards = [
    {
      icon: Mail,
      label: getText("contact.emailLabel", "Business Email"),
      value: "saiyedglobalexport@gmail.com",
      href: "mailto:saiyedglobalexport@gmail.com",
      description: getText(
        "contact.emailDescription",
        "Send product details, quotations and business proposals."
      ),
    },
    {
      icon: Phone,
      label: getText("contact.phoneLabel", "Phone & WhatsApp"),
      value: "+91 78678 69243",
      href: "tel:+917867869243",
      description: getText(
        "contact.phoneDescription",
        "Connect directly for export and sourcing enquiries."
      ),
    },
    {
      icon: MapPin,
      label: getText("contact.locationLabel", "Business Location"),
      value: getText(
        "contact.locationValue",
        "Petlad, Anand, Gujarat, India"
      ),
      description: getText(
        "contact.locationDescription",
        "Operating from Gujarat with a global export vision."
      ),
    },
  ];

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: getText("contact.trust1Title", "Secure Enquiry"),
      text: getText(
        "contact.trust1Text",
        "Your business information is handled professionally."
      ),
    },
    {
      icon: Clock3,
      title: getText("contact.trust2Title", "Quick Response"),
      text: getText(
        "contact.trust2Text",
        "Our team aims to respond as quickly as possible."
      ),
    },
    {
      icon: Globe2,
      title: getText("contact.trust3Title", "Global Support"),
      text: getText(
        "contact.trust3Text",
        "International buyers and business enquiries are welcome."
      ),
    },
  ];

  const openWhatsApp = () => {
    const message =
      "Hello Saiyed Global Exports, I would like to enquire about your products, pricing, MOQ, documentation and shipping options.";

    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(link, "_blank", "noopener,noreferrer");
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (loading) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: getText(
          "contact.configurationError",
          "The contact form is not configured yet. Please contact us by email, phone or WhatsApp."
        ),
      });

      return;
    }

    if (!formRef.current) {
      setStatus({
        type: "error",
        message: getText(
          "contact.formError",
          "The enquiry form could not be loaded. Please refresh the page and try again."
        ),
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
        message: getText(
          "contact.successMessage",
          "Your enquiry has been sent successfully. Our team will contact you shortly."
        ),
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: getText(
          "contact.errorMessage",
          "Your enquiry could not be sent. Please try again or contact us directly."
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background" aria-hidden="true">
        <div className="contact-grid-pattern" />
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
      </div>

      <div className="contact-container">
        <div
          className="contact-info"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <span className="contact-label">
            <Sparkles size={15} />
            {getText("contact.label", "GET IN TOUCH")}
          </span>

          <h2>
            {getText(
              "contact.heading",
              "Let’s Build a Strong Global Business Connection"
            )}
          </h2>

          <p className="contact-description">
            {getText(
              "contact.description",
              "Contact Saiyed Global Exports for product sourcing, quotation requests, bulk orders, export documentation, shipping information and international business opportunities."
            )}
          </p>

          <div className="contact-highlight-card">
            <div className="contact-highlight-icon">
              <Building2 size={28} />
            </div>

            <div>
              <span>
                {getText(
                  "contact.companyLabel",
                  "SAIYED GLOBAL EXPORTS"
                )}
              </span>

              <h3>
                {getText(
                  "contact.companyHeading",
                  "Professional Export Support From India"
                )}
              </h3>

              <p>
                {getText(
                  "contact.companyText",
                  "Share your requirement and receive guidance regarding product availability, pricing, MOQ, packaging and shipping."
                )}
              </p>
            </div>
          </div>

          <div className="contact-details-list">
            {contactCards.map((item) => {
              const Icon = item.icon;

              const content = (
                <>
                  <span className="info-icon">
                    <Icon size={21} />
                  </span>

                  <span className="info-content">
                    <span className="info-label">
                      {item.label}
                    </span>

                    <strong>{item.value}</strong>
                    <small>{item.description}</small>
                  </span>

                  {item.href && (
                    <span className="info-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  )}
                </>
              );

              if (item.href) {
                return (
                  <a
                    className="info-box"
                    href={item.href}
                    key={item.label}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div className="info-box" key={item.label}>
                  {content}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="contact-whatsapp-button"
            onClick={openWhatsApp}
          >
            <span className="contact-whatsapp-icon">
              <MessageCircle size={21} />
            </span>

            <span>
              <small>
                {getText(
                  "contact.whatsappLabel",
                  "QUICK WHATSAPP ENQUIRY"
                )}
              </small>

              <strong>
                {getText(
                  "contact.whatsappText",
                  "Chat With Our Export Team"
                )}
              </strong>
            </span>

            <ArrowUpRight size={19} />
          </button>

          <div className="contact-trust-grid">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="contact-trust-item"
                  key={item.title}
                >
                  <Icon size={18} />

                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="contact-form-wrapper"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <div className="contact-form-topbar">
              <div className="contact-form-status-badge">
                <span />
                {getText(
                  "contact.enquiriesOpen",
                  "ENQUIRIES OPEN"
                )}
              </div>

              <div className="contact-form-code">
                SGE / 2026
              </div>
            </div>

            <div className="contact-form-heading">
              <span>
                {getText(
                  "contact.formLabel",
                  "SEND A BUSINESS ENQUIRY"
                )}
              </span>

              <h3>
                {getText(
                  "contact.formHeading",
                  "Tell Us About Your Requirement"
                )}
              </h3>

              <p>
                {getText(
                  "contact.formDescription",
                  "Provide your product, quantity and destination details so our team can understand your requirement."
                )}
              </p>
            </div>

            <div className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="contact-name">
                  {getText("contact.nameLabel", "Full Name")}
                  <span>*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  placeholder={getText(
                    "contact.namePlaceholder",
                    "Enter your full name"
                  )}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  {getText(
                    "contact.emailFieldLabel",
                    "Email Address"
                  )}
                  <span>*</span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  placeholder={getText(
                    "contact.emailPlaceholder",
                    "Enter your email address"
                  )}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">
                  {getText(
                    "contact.phoneFieldLabel",
                    "Phone Number"
                  )}
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="user_phone"
                  placeholder={getText(
                    "contact.phonePlaceholder",
                    "Include country code"
                  )}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-country">
                  {getText(
                    "contact.countryLabel",
                    "Country"
                  )}
                </label>

                <input
                  id="contact-country"
                  type="text"
                  name="user_country"
                  placeholder={getText(
                    "contact.countryPlaceholder",
                    "Enter destination country"
                  )}
                  autoComplete="country-name"
                />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="contact-product">
                  {getText(
                    "contact.productLabel",
                    "Product Requirement"
                  )}
                </label>

                <div className="form-input-icon-wrapper">
                  <PackageSearch size={18} />

                  <input
                    id="contact-product"
                    type="text"
                    name="product_requirement"
                    placeholder={getText(
                      "contact.productPlaceholder",
                      "Which product are you interested in?"
                    )}
                  />
                </div>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="contact-message">
                  {getText(
                    "contact.messageLabel",
                    "Requirement Details"
                  )}
                  <span>*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder={getText(
                    "contact.messagePlaceholder",
                    "Tell us about quantity, packaging, destination, expected delivery and other requirements..."
                  )}
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

            <input
              type="hidden"
              name="business_location"
              value="Petlad, Anand, Gujarat, India"
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
              {loading ? (
                <span
                  className="contact-submit-loader"
                  aria-hidden="true"
                />
              ) : (
                <Send size={19} />
              )}

              <span>
                {loading
                  ? getText(
                      "contact.sendingButton",
                      "Sending Enquiry..."
                    )
                  : getText(
                      "contact.submitButton",
                      "Send Business Enquiry"
                    )}
              </span>

              {!loading && <ArrowUpRight size={18} />}
            </button>

            <div className="contact-form-footer">
              <ShieldCheck size={15} />

              <p>
                {getText(
                  "contact.privacyNote",
                  "Your details will only be used to respond to your business enquiry."
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;