import {
  BadgeCheck,
  Boxes,
  Globe2,
  Headphones,
  IndianRupee,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";

import "./WhyChooseUs.css";

import whyChooseMap from "../../assets/gallery/world-network-india.webp";
import indiaFlag from "../../assets/icons/india-flag-gold.webp";

const highlightItems = [
  {
    title: "Quality Assured",
    description: "Premium quality products",
    icon: BadgeCheck,
  },
  {
    title: "Global Network",
    description: "Strong network across the world",
    icon: Globe2,
  },
  {
    title: "Export Ready",
    description: "All products ready for global export",
    icon: Ship,
  },
];

const featureItems = [
  {
    title: "Premium Quality",
    description:
      "We ensure strong quality standards in every product we export.",
    icon: ShieldCheck,
  },
  {
    title: "Worldwide Shipping",
    description:
      "Delivering Indian products to global markets through reliable channels.",
    icon: Globe2,
  },
  {
    title: "Competitive Pricing",
    description:
      "Fair pricing and practical value for buyers across international markets.",
    icon: IndianRupee,
  },
  {
    title: "Secure Packaging",
    description:
      "Safe and suitable packaging support for every export requirement.",
    icon: Boxes,
  },
  {
    title: "Reliable Logistics",
    description:
      "Dependable coordination from product sourcing to final shipment.",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    description:
      "Responsive assistance throughout your sourcing and export journey.",
    icon: Headphones,
  },
];

const trustItems = [
  {
    title: "India Based",
    description:
      "Proudly based in India, connecting products with the world.",
    flag: true,
  },
  {
    title: "Global Network",
    description:
      "Connecting Indian products with international markets.",
    icon: Globe2,
  },
  {
    title: "Quality Assured",
    description:
      "Focused product checks for global buyer requirements.",
    icon: PackageCheck,
  },
  {
    title: "Export Ready",
    description:
      "Products and coordination prepared for global shipment.",
    icon: Ship,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-choose">
      <div
        className="why-choose__glow why-choose__glow--one"
        aria-hidden="true"
      />

      <div
        className="why-choose__glow why-choose__glow--two"
        aria-hidden="true"
      />

      <div className="why-choose__container">
        <div className="why-choose__top">
          <div className="why-choose__content">
            <div className="why-choose__eyebrow">
              <span
                className="why-choose__eyebrow-dot"
                aria-hidden="true"
              />

              <span>Why Choose Us</span>
            </div>

            <h2 className="why-choose__title">
              Trusted Export Partner
              <span>
                For <strong>Global Business</strong>
              </span>
            </h2>

            <div
              className="why-choose__title-line"
              aria-hidden="true"
            />

            <p className="why-choose__description">
              Saiyed Global Exports is focused on connecting dependable Indian
              products with global markets through transparency, professional
              coordination and customer-focused service at every step.
            </p>

            <div className="why-choose__highlights">
              {highlightItems.map(
                ({ title, description, icon: Icon }) => (
                  <article
                    className="why-choose__highlight"
                    key={title}
                  >
                    <div className="why-choose__highlight-icon">
                      <Icon
                        size={29}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>

          <div className="why-choose__map-panel">
            <img
              src={whyChooseMap}
              alt="Global export routes from India"
              className="why-choose__map-image"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              draggable="false"
            />

            <div
              className="why-choose__map-overlay"
              aria-hidden="true"
            />

            <div className="why-choose__map-badge">
              <Globe2
                size={20}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <div>
                <strong>India To Global Markets</strong>
                <span>Air • Sea • Land</span>
              </div>
            </div>

            <div
              className="why-choose__route why-choose__route--one"
              aria-hidden="true"
            />

            <div
              className="why-choose__route why-choose__route--two"
              aria-hidden="true"
            />

            <div
              className="why-choose__route why-choose__route--three"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="why-choose__features">
          {featureItems.map(
            ({ title, description, icon: Icon }) => (
              <article
                className="why-choose__feature"
                key={title}
              >
                <div className="why-choose__feature-icon">
                  <Icon
                    size={44}
                    strokeWidth={1.45}
                    aria-hidden="true"
                  />
                </div>

                <h3>{title}</h3>

                <span
                  className="why-choose__feature-line"
                  aria-hidden="true"
                />

                <p>{description}</p>
              </article>
            )
          )}
        </div>

        <div className="why-choose__trust-bar">
          {trustItems.map(
            ({ title, description, icon: Icon, flag }) => (
              <article
                className="why-choose__trust-item"
                key={title}
              >
                <div
                  className={`why-choose__trust-icon ${
                    flag ? "why-choose__trust-icon--flag" : ""
                  }`}
                >
                  {flag ? (
                    <img
                      src={indiaFlag}
                      alt="India flag"
                      className="why-choose__india-flag"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      draggable="false"
                    />
                  ) : (
                    <Icon
                      size={34}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;