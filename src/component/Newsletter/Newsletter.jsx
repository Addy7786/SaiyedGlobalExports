import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import "./Newsletter.css";

function Newsletter() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO:
    // Mailchimp / EmailJS / Backend API

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section
      className="newsletter-section"
      id="newsletter"
    >
      <div
        className="newsletter-card"
        data-aos="zoom-in"
      >
        <div className="newsletter-icon">
          <Mail size={36} />
        </div>

        <h2>
          {getText(
            "newsletter.title",
            "Subscribe To Our Newsletter"
          )}
        </h2>

        <p>
          {getText(
            "newsletter.description",
            "Receive product updates, export news and international trade opportunities directly in your inbox."
          )}
        </p>

        <form
          onSubmit={handleSubmit}
          className="newsletter-form"
        >
          <input
            type="email"
            placeholder={getText(
              "newsletter.placeholder",
              "Enter your email address"
            )}
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button type="submit">
            <Send size={18} />

            {getText(
              "newsletter.button",
              "Subscribe"
            )}
          </button>
        </form>

        {subscribed && (
          <div className="newsletter-success">
            <CheckCircle size={18} />

            <span>
              {getText(
                "newsletter.success",
                "Thank you for subscribing!"
              )}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;