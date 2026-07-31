import { useState } from "react";
import {
  BarChart3,
  Box,
  Globe2,
  LockKeyhole,
  Mail,
  Send,
} from "lucide-react";

import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Thank you. You are subscribed for export updates.");
    setEmail("");
  };

  return (
    <section id="newsletter" className="newsletter-luxury">
      <div className="newsletter-luxury__glow newsletter-luxury__glow--one" />
      <div className="newsletter-luxury__glow newsletter-luxury__glow--two" />

      <div className="newsletter-luxury__container">
        <div className="newsletter-luxury__icon">
          <Mail size={42} strokeWidth={1.5} />
        </div>

        <div className="newsletter-luxury__content">
          <div className="newsletter-luxury__eyebrow">
            <span>Newsletter</span>
            <i />
          </div>

          <h2>
            Get Export <strong>Updates</strong>
          </h2>

          <p>
            Subscribe to receive product alerts, global market updates and trade
            insights straight to your inbox.
          </p>

          <div className="newsletter-luxury__benefits">
            <div>
              <Box size={22} strokeWidth={1.7} />
              <span>
                <strong>New Product Alerts</strong>
                Be the first to know
              </span>
            </div>

            <div>
              <Globe2 size={22} strokeWidth={1.7} />
              <span>
                <strong>Market Updates</strong>
                Latest global demand
              </span>
            </div>

            <div>
              <BarChart3 size={22} strokeWidth={1.7} />
              <span>
                <strong>Trade Insights</strong>
                Useful market information
              </span>
            </div>
          </div>
        </div>

        <div className="newsletter-luxury__form-area">
          <form className="newsletter-luxury__form" onSubmit={handleSubmit}>
            <label>
              <Mail size={20} strokeWidth={1.7} />
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status) setStatus("");
                }}
                placeholder="Enter your email address"
                aria-label="Email address"
              />
            </label>

            <button type="submit">
              <span>Subscribe Now</span>
              <Send size={20} strokeWidth={1.8} />
            </button>
          </form>

          <div className="newsletter-luxury__privacy">
            <LockKeyhole size={15} strokeWidth={1.8} />
            <span>We respect your privacy. No spam.</span>
          </div>

          {status && (
            <p className="newsletter-luxury__status" role="status">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;