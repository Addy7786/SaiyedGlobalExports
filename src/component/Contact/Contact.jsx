import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <div
          className="contact-info"
          data-aos="fade-right"
        >
          <h2>Contact Us</h2>

          <p>
            We'd love to hear from you.
            Contact us for export enquiries.
          </p>

          <div className="info-box">
            <Mail size={22} />
            <span>info@saiyedglobalexports.com</span>
          </div>

          <div className="info-box">
            <Phone size={22} />
            <span>+91 7867869243</span>
          </div>

          <div className="info-box">
            <MapPin size={22} />
            <span>
              Petlad, Anand,
              Gujarat, India
            </span>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          data-aos="fade-left"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="user_phone"
            placeholder="Phone Number"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            <Send size={18} />

            {loading
              ? "Sending..."
              : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;