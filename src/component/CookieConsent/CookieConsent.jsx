import {
  useEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

import {
  Cookie,
  ShieldCheck,
  X,
} from "lucide-react";

import "./CookieConsent.css";

const STORAGE_KEY = "sge-cookie-consent";
const SHOW_DELAY = 1200;
const EXIT_DURATION = 320;

function CookieConsent() {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const exitTimerRef = useRef(0);

  const [isVisible, setIsVisible] =
    useState(false);

  const [isLeaving, setIsLeaving] =
    useState(false);

  useEffect(() => {
    let cookieChoice = null;

    try {
      cookieChoice =
        window.localStorage.getItem(
          STORAGE_KEY
        );
    } catch (error) {
      console.warn(
        "Cookie consent preference could not be read:",
        error
      );
    }

    if (cookieChoice) {
      return undefined;
    }

    const showTimer = window.setTimeout(
      () => {
        setIsVisible(true);
      },
      SHOW_DELAY
    );

    return () => {
      window.clearTimeout(showTimer);
    };
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const card = cardRef.current;

    if (!isVisible || !overlay || !card) {
      return undefined;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      gsap.set([overlay, card], {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });

      return undefined;
    }

    const contentItems =
      card.querySelectorAll(
        ".cookie-card__content > *"
      );

    const context = gsap.context(() => {
      gsap.fromTo(
        overlay,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.28,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 52,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        contentItems,
        {
          autoAlpha: 0,
          y: 16,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.055,
          delay: 0.12,
          ease: "power2.out",
        }
      );
    }, overlay);

    return () => {
      context.revert();
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeBanner();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isVisible, isLeaving]);

  useEffect(() => {
    return () => {
      window.clearTimeout(
        exitTimerRef.current
      );
    };
  }, []);

  const saveChoice = (choice) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        choice
      );
    } catch (error) {
      console.warn(
        "Cookie consent preference could not be saved:",
        error
      );
    }
  };

  const closeBanner = (choice) => {
    if (isLeaving) {
      return;
    }

    const overlay = overlayRef.current;
    const card = cardRef.current;

    if (choice) {
      saveChoice(choice);
    }

    if (!overlay || !card) {
      setIsVisible(false);
      return;
    }

    setIsLeaving(true);

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      setIsVisible(false);
      setIsLeaving(false);
      return;
    }

    window.clearTimeout(
      exitTimerRef.current
    );

    gsap.killTweensOf([overlay, card]);

    gsap.to(card, {
      autoAlpha: 0,
      y: 36,
      scale: 0.97,
      duration: 0.26,
      ease: "power2.in",
      overwrite: "auto",
    });

    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto",
    });

    exitTimerRef.current =
      window.setTimeout(() => {
        setIsVisible(false);
        setIsLeaving(false);
      }, EXIT_DURATION);
  };

  const handleAccept = () => {
    closeBanner("accepted");
  };

  const handleReject = () => {
    closeBanner("rejected");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={`cookie-overlay ${
        isLeaving
          ? "cookie-overlay--leaving"
          : ""
      }`}
      role="presentation"
    >
      <section
        ref={cardRef}
        className="cookie-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <button
          type="button"
          className="cookie-close"
          onClick={() => closeBanner()}
          aria-label="Close cookie notice"
          disabled={isLeaving}
        >
          <X
            size={20}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>

        <div
          className="cookie-card__shine"
          aria-hidden="true"
        />

        <div className="cookie-icon">
          <Cookie
            size={35}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </div>

        <div className="cookie-card__content">
          <span className="cookie-label">
            <ShieldCheck
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Your Privacy Matters
          </span>

          <h2 id="cookie-title">
            We Use Cookies
          </h2>

          <p id="cookie-description">
            Saiyed Global Exports uses essential
            cookies to improve website performance,
            remember your preferences and provide a
            better browsing experience.
          </p>

          <div className="cookie-actions">
            <button
              type="button"
              className="cookie-accept-btn"
              onClick={handleAccept}
              disabled={isLeaving}
            >
              Accept Cookies
            </button>

            <button
              type="button"
              className="cookie-reject-btn"
              onClick={handleReject}
              disabled={isLeaving}
            >
              Reject Optional
            </button>

            <a
              href="#footer"
              className="cookie-policy-link"
              onClick={() => closeBanner()}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CookieConsent;