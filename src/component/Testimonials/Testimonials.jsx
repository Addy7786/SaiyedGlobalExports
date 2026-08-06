import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";
import companyLogo from "../../assets/logo/saiyed-logo-no-tagline-transparent.webp";

import "./Testimonials.css";

const AUTOPLAY_DELAY = 5000;

function Testimonials() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);

    return value && value !== key ? value : fallback;
  };

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        country: getText(
          "testimonials.country1",
          "United Arab Emirates"
        ),
        flag: "🇦🇪",
        name: getText(
          "testimonials.client1Name",
          "Ahmed Al Mansoori"
        ),
        role: getText(
          "testimonials.client1Role",
          "Import Manager • Dubai"
        ),
        message: getText(
          "testimonials.client1Message",
          "Saiyed Global Exports provided professional communication, dependable sourcing and smooth export support throughout our order."
        ),
      },
      {
        id: 2,
        country: getText(
          "testimonials.country2",
          "South Africa"
        ),
        flag: "🇿🇦",
        name: getText(
          "testimonials.client2Name",
          "Daniel Okoro"
        ),
        role: getText(
          "testimonials.client2Role",
          "Distributor • Johannesburg"
        ),
        message: getText(
          "testimonials.client2Message",
          "We were impressed with the product quality, transparent process and timely coordination. A reliable business partner from India."
        ),
      },
      {
        id: 3,
        country: getText(
          "testimonials.country3",
          "Saudi Arabia"
        ),
        flag: "🇸🇦",
        name: getText(
          "testimonials.client3Name",
          "Abdullah Hassan"
        ),
        role: getText(
          "testimonials.client3Role",
          "Wholesale Buyer • Riyadh"
        ),
        message: getText(
          "testimonials.client3Message",
          "The team understood our requirements and helped us source suitable products with professional service and reliable logistics support."
        ),
      },
      {
        id: 4,
        country: getText(
          "testimonials.country4",
          "Qatar"
        ),
        flag: "🇶🇦",
        name: getText(
          "testimonials.client4Name",
          "Yusuf Rahman"
        ),
        role: getText(
          "testimonials.client4Role",
          "Procurement Partner • Doha"
        ),
        message: getText(
          "testimonials.client4Message",
          "Clear quotations, responsive communication and dependable export coordination made the entire sourcing process easier for our business."
        ),
      },
      {
        id: 5,
        country: getText(
          "testimonials.country5",
          "Singapore"
        ),
        flag: "🇸🇬",
        name: getText(
          "testimonials.client5Name",
          "Marcus Lee"
        ),
        role: getText(
          "testimonials.client5Role",
          "Trading Company • Singapore"
        ),
        message: getText(
          "testimonials.client5Message",
          "A professional export partner with strong product sourcing support, careful documentation and clear communication at every stage."
        ),
      },
      {
        id: 6,
        country: getText(
          "testimonials.country6",
          "United Kingdom"
        ),
        flag: "🇬🇧",
        name: getText(
          "testimonials.client6Name",
          "Oliver Bennett"
        ),
        role: getText(
          "testimonials.client6Role",
          "International Buyer • London"
        ),
        message: getText(
          "testimonials.client6Message",
          "Their team handled our requirement with attention to detail and kept us informed from product selection through shipment preparation."
        ),
      },
    ],
    [t]
  );

  const trustItems = useMemo(
    () => [
      {
        icon: MessageCircle,
        value: "100%",
        label: getText(
          "testimonials.trust1Text",
          "Transparent Communication"
        ),
      },
      {
        icon: Globe2,
        value: "Global",
        label: getText(
          "testimonials.trust2Text",
          "Business Support"
        ),
      },
      {
        icon: ShieldCheck,
        value: "Reliable",
        label: getText(
          "testimonials.trust3Text",
          "Export Coordination"
        ),
      },
      {
        icon: Sparkles,
        value: "Premium",
        label: getText(
          "testimonials.trust4Text",
          "Quality-Focused Service"
        ),
      },
    ],
    [t]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 700) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1080) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxIndex = Math.max(
    testimonials.length - cardsPerView,
    0
  );

  useEffect(() => {
    setCurrentIndex((index) =>
      Math.min(index, maxIndex)
    );
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((index) =>
        index >= maxIndex ? 0 : index + 1
      );
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((index) =>
      index <= 0 ? maxIndex : index - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((index) =>
      index >= maxIndex ? 0 : index + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX =
      event.changedTouches[0]?.clientX ??
      touchStartX.current;

    const difference =
      touchStartX.current - touchEndX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="testimonials-premium-section"
      id="testimonials"
    >
      <div
        className="testimonials-premium-background"
        aria-hidden="true"
      >
        <div className="testimonials-premium-glow testimonials-premium-glow-one" />
        <div className="testimonials-premium-glow testimonials-premium-glow-two" />
        <div className="testimonials-premium-grid-pattern" />
      </div>

      <div className="testimonials-premium-container">
        <div className="testimonials-premium-heading">
          <span className="testimonials-premium-tag">
            <Quote size={16} aria-hidden="true" />

            {getText(
              "testimonials.tag",
              "CLIENT TESTIMONIALS"
            )}
          </span>

          <h2>
            {getText(
              "testimonials.heading",
              "Trusted By Buyers Across Global Markets"
            )}
          </h2>

          <p>
            {getText(
              "testimonials.description",
              "Building long-term international business relationships through professional communication, dependable sourcing and reliable export coordination."
            )}
          </p>
        </div>

        <div
          className="testimonials-premium-slider-shell"
          data-aos="fade-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="testimonials-premium-arrow testimonials-premium-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={21} aria-hidden="true" />
          </button>

          <div className="testimonials-premium-window">
            <div
              className="testimonials-premium-track"
              style={{
                "--testimonial-index": currentIndex,
                "--testimonial-count": cardsPerView,
              }}
            >
              {testimonials.map((testimonial) => (
                <article
                  className="testimonials-premium-card"
                  key={testimonial.id}
                >
                  <img
                    className="testimonials-premium-watermark"
                    src={companyLogo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />

                  <div className="testimonials-premium-card-top">
                    <div className="testimonials-premium-country">
                      <span
                        className="testimonials-premium-flag"
                        aria-hidden="true"
                      >
                        {testimonial.flag}
                      </span>

                      <div>
                        <small>
                          {getText(
                            "testimonials.buyerLocation",
                            "Buyer Location"
                          )}
                        </small>

                        <strong>
                          {testimonial.country}
                        </strong>
                      </div>
                    </div>

                    <div
                      className="testimonials-premium-rating"
                      aria-label="5 out of 5 stars"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials-premium-quote-icon">
                    <Quote size={27} aria-hidden="true" />
                  </div>

                  <p className="testimonials-premium-message">
                    “{testimonial.message}”
                  </p>

                  <div
                    className="testimonials-premium-divider"
                    aria-hidden="true"
                  />

                  <div className="testimonials-premium-client">
                    <div className="testimonials-premium-avatar">
                      {testimonial.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part.charAt(0))
                        .join("")}
                    </div>

                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="testimonials-premium-arrow testimonials-premium-arrow-right"
            onClick={goToNext}
            aria-label="Next testimonials"
          >
            <ArrowRight size={21} aria-hidden="true" />
          </button>
        </div>

        <div className="testimonials-premium-navigation">
          <div className="testimonials-premium-dots">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                type="button"
                key={index}
                className={
                  currentIndex === index
                    ? "testimonials-premium-dot testimonials-premium-dot-active"
                    : "testimonials-premium-dot"
                }
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial group ${
                  index + 1
                }`}
              />
            ))}
          </div>

          <span>
            {getText(
              "testimonials.sliderHint",
              "Auto slide • Hover to pause • Swipe on mobile"
            )}
          </span>
        </div>

        <div
          className="testimonials-premium-trust-bar"
          data-aos="fade-up"
        >
          {trustItems.map(
            ({ icon: Icon, value, label }) => (
              <div
                className="testimonials-premium-trust-item"
                key={label}
              >
                <span className="testimonials-premium-trust-icon">
                  <Icon
                    size={21}
                    aria-hidden="true"
                  />
                </span>

                <div className="testimonials-premium-trust-copy">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;