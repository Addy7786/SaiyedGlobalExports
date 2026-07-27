import { useEffect, useState } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import "./CookieConsent.css";

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("sge-cookie-consent");

    if (!cookieChoice) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sge-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("sge-cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="cookie-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="cookie-card">
        <button
          type="button"
          className="cookie-close"
          onClick={handleClose}
          aria-label="Close cookie notification"
        >
          <X size={20} />
        </button>

        <div className="cookie-icon">
          <Cookie size={34} />
        </div>

        <div className="cookie-content">
          <span className="cookie-label">
            <ShieldCheck size={17} />
            YOUR PRIVACY MATTERS
          </span>

          <h2 id="cookie-title">
            We Use Cookies
          </h2>

          <p id="cookie-description">
            Saiyed Global Exports uses essential cookies to improve website
            performance, remember your preferences and provide a better browsing
            experience.
          </p>

          <div className="cookie-actions">
            <button
              type="button"
              className="cookie-accept-btn"
              onClick={handleAccept}
            >
              Accept Cookies
            </button>

            <button
              type="button"
              className="cookie-reject-btn"
              onClick={handleReject}
            >
              Reject Optional
            </button>

            <a
              href="#privacy-policy"
              className="cookie-policy-link"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;