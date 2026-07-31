import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Headphones,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";
import aboutImage from "../../assets/about-logistics.png";
import "./About.css";

function About() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const whatsappNumber = "917867869243";

  const features = [
    {
      icon: Globe2,
      number: "01",
      title: getText("about.feature1Title", "Global Trade Network"),
      text: getText(
        "about.feature1Text",
        "Connecting trusted Indian suppliers with buyers and businesses across international markets."
      ),
    },
    {
      icon: PackageCheck,
      number: "02",
      title: getText("about.feature2Title", "Quality Sourcing"),
      text: getText(
        "about.feature2Text",
        "Products sourced according to buyer requirements with focus on quality, packaging and reliability."
      ),
    },
    {
      icon: Truck,
      number: "03",
      title: getText("about.feature3Title", "Export Logistics"),
      text: getText(
        "about.feature3Text",
        "Professional coordination of transportation, documentation and international shipment requirements."
      ),
    },
    {
      icon: ShieldCheck,
      number: "04",
      title: getText("about.feature4Title", "Transparent Service"),
      text: getText(
        "about.feature4Text",
        "Clear communication, responsible coordination and dependable long-term business relationships."
      ),
    },
  ];

  const stats = [
    {
      value: "100%",
      label: getText("about.stat1", "Quality Focus"),
    },
    {
      value: "24/7",
      label: getText("about.stat2", "Enquiry Support"),
    },
    {
      value: "Global",
      label: getText("about.stat3", "Market Vision"),
    },
    {
      value: "India",
      label: getText("about.stat4", "Supply Hub"),
    },
  ];

  const workflow = [
    {
      icon: ClipboardCheck,
      step: "01",
      title: getText("about.workflow1Title", "Requirement Review"),
      text: getText(
        "about.workflow1Text",
        "We understand your required product, quantity, packaging and destination."
      ),
    },
    {
      icon: PackageCheck,
      step: "02",
      title: getText("about.workflow2Title", "Product Sourcing"),
      text: getText(
        "about.workflow2Text",
        "Suitable suppliers and product options are coordinated according to your needs."
      ),
    },
    {
      icon: FileCheck2,
      step: "03",
      title: getText("about.workflow3Title", "Export Preparation"),
      text: getText(
        "about.workflow3Text",
        "Commercial details, documentation and shipment requirements are prepared."
      ),
    },
    {
      icon: Ship,
      step: "04",
      title: getText("about.workflow4Title", "Global Dispatch"),
      text: getText(
        "about.workflow4Text",
        "The shipment is coordinated through sea or air freight to its destination."
      ),
    },
  ];

  const supportItems = [
    {
      icon: BadgeCheck,
      title: getText("about.support1Title", "Quality"),
      text: getText("about.support1Text", "Buyer-focused sourcing"),
    },
    {
      icon: FileCheck2,
      title: getText("about.support2Title", "Documentation"),
      text: getText("about.support2Text", "Export process support"),
    },
    {
      icon: Truck,
      title: getText("about.support3Title", "Logistics"),
      text: getText("about.support3Text", "Shipment coordination"),
    },
    {
      icon: Headphones,
      title: getText("about.support4Title", "Support"),
      text: getText("about.support4Text", "Responsive communication"),
    },
  ];

  const openWhatsApp = () => {
    const message =
      "Hello Saiyed Global Exports, I would like to know more about your products, pricing, MOQ and export services.";

    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-main-grid">
          <div
            className="about-content"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="about-kicker">
              <span className="about-kicker-line" />

              <span>{getText("about.tag", "ABOUT US")}</span>
            </div>

            <h2>
              <span className="about-heading-dark">
                {getText("about.headingLine1", "Connecting India")}
              </span>

              <span className="about-heading-gold">
                {getText("about.headingLine2", "to Global Markets")}
              </span>
            </h2>

            <div className="about-title-line" />

            <p>
              {getText(
                "about.cardText1",
                "Saiyed Global Exports connects international buyers with quality Indian products through responsible sourcing, transparent communication and dependable export coordination."
              )}
            </p>

            <p>
              {getText(
                "about.cardText2",
                "From understanding your product requirement to coordinating documentation and shipment, we work to make international sourcing clear, professional and reliable."
              )}
            </p>

            <div className="about-trust-list">
              <div className="about-trust-item">
                <span>
                  <Check size={14} strokeWidth={3} />
                </span>

                <p>
                  {getText(
                    "about.trustPoint1",
                    "Trusted supplier coordination across India"
                  )}
                </p>
              </div>

              <div className="about-trust-item">
                <span>
                  <Check size={14} strokeWidth={3} />
                </span>

                <p>
                  {getText(
                    "about.trustPoint2",
                    "Clear quotation, MOQ and export communication"
                  )}
                </p>
              </div>
            </div>

            <div className="about-actions">
              <button
                type="button"
                className="about-primary-button"
                onClick={openWhatsApp}
              >
                <MessageCircle size={18} />

                <span>
                  {getText(
                    "about.companyEnquiry",
                    "Discuss Your Requirement"
                  )}
                </span>

                <ArrowUpRight size={18} />
              </button>

              <a href="#products" className="about-secondary-button">
                <PackageCheck size={18} />

                <span>
                  {getText("about.viewProducts", "View Products")}
                </span>
              </a>
            </div>
          </div>

          <div
            className="about-visual"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="about-image-frame">
              <div className="about-image-gold-border" />

              <div className="about-image-shape">
                <img
                  src={aboutImage}
                  alt={getText(
                    "about.imageAlt",
                    "Saiyed Global Exports international logistics"
                  )}
                />

                <div className="about-image-overlay" />

                <div className="about-image-top-label">
                  <Globe2 size={16} />

                  <span>
                    {getText(
                      "about.activeStatus",
                      "INDIA TO THE WORLD"
                    )}
                  </span>
                </div>

              </div>

              <div className="about-image-badge">
                <BadgeCheck size={25} />

                <div>
                  <strong>
                    {getText(
                      "about.imageBadgeTitle",
                      "Trusted Export Partner"
                    )}
                  </strong>

                  <span>
                    {getText(
                      "about.imageBadgeText",
                      "Quality • Reliability • Global Trade"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                className="about-feature-card"
                key={feature.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="about-feature-top">
                  <div className="about-feature-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="about-feature-number">
                    {feature.number}
                  </span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

                <div className="about-feature-bottom-line" />
              </article>
            );
          })}
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>

              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-workflow">
          <div
            className="about-section-heading"
            data-aos="fade-up"
          >
            <span>
              {getText(
                "about.workflowTag",
                "OUR EXPORT APPROACH"
              )}
            </span>

            <h3>
              {getText(
                "about.workflowHeading",
                "From Product Requirement to International Dispatch"
              )}
            </h3>

            <p>
              {getText(
                "about.workflowDescription",
                "A clear and professionally coordinated export process designed around your business requirements."
              )}
            </p>
          </div>

          <div className="about-workflow-grid">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-workflow-card"
                  key={item.step}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                >
                  <div className="about-workflow-icon">
                    <Icon size={25} />
                  </div>

                  <span className="about-workflow-number">
                    {item.step}
                  </span>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="about-support-strip"
          data-aos="fade-up"
        >
          {supportItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="about-support-item"
                key={item.title}
              >
                <div className="about-support-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <strong>{item.title}</strong>

                  <span>{item.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="about-cta" data-aos="fade-up">
          <div className="about-cta-content">
            <span>
              {getText(
                "about.ctaLabel",
                "START A GLOBAL TRADE CONNECTION"
              )}
            </span>

            <h3>
              {getText(
                "about.ctaTitle",
                "Looking for quality Indian products?"
              )}
            </h3>

            <p>
              {getText(
                "about.ctaText",
                "Share your product requirement, quantity and destination with our export team."
              )}
            </p>
          </div>

          <button
            type="button"
            className="about-cta-button"
            onClick={openWhatsApp}
          >
            <MessageCircle size={18} />

            <span>
              {getText(
                "about.ctaButton",
                "Send Your Enquiry"
              )}
            </span>

            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;