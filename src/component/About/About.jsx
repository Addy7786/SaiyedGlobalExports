import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  Headphones,
  MapPin,
  MessageCircle,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
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
        "Connecting trusted Indian suppliers with importers, wholesalers and businesses across international markets."
      ),
    },
    {
      icon: PackageCheck,
      number: "02",
      title: getText("about.feature2Title", "Quality-Focused Sourcing"),
      text: getText(
        "about.feature2Text",
        "Products are sourced according to buyer requirements with attention to quality, packaging and reliability."
      ),
    },
    {
      icon: Truck,
      number: "03",
      title: getText("about.feature3Title", "Export Logistics Support"),
      text: getText(
        "about.feature3Text",
        "We coordinate transportation, documentation and shipment requirements for smooth international dispatch."
      ),
    },
    {
      icon: ShieldCheck,
      number: "04",
      title: getText("about.feature4Title", "Transparent Service"),
      text: getText(
        "about.feature4Text",
        "Clear communication, honest coordination and long-term business relationships remain our priority."
      ),
    },
  ];

  const trustPoints = [
    getText(
      "about.trustPoint1",
      "Trusted supplier coordination across India"
    ),
    getText(
      "about.trustPoint2",
      "Buyer-focused product sourcing support"
    ),
    getText(
      "about.trustPoint3",
      "Clear quotation, MOQ and export communication"
    ),
    getText(
      "about.trustPoint4",
      "Sea and air shipment coordination"
    ),
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
        "We understand your product, quantity, packaging and destination requirements."
      ),
    },
    {
      icon: PackageCheck,
      step: "02",
      title: getText("about.workflow2Title", "Supplier Coordination"),
      text: getText(
        "about.workflow2Text",
        "Suitable suppliers are identified and product information is coordinated."
      ),
    },
    {
      icon: FileCheck2,
      step: "03",
      title: getText("about.workflow3Title", "Export Preparation"),
      text: getText(
        "about.workflow3Text",
        "Commercial details, documentation and shipping requirements are prepared."
      ),
    },
    {
      icon: Ship,
      step: "04",
      title: getText("about.workflow4Title", "International Dispatch"),
      text: getText(
        "about.workflow4Text",
        "The shipment is coordinated through sea or air freight to the destination."
      ),
    },
  ];

  const supportItems = [
    {
      icon: BadgeCheck,
      title: getText("about.support1Title", "Quality"),
      text: getText(
        "about.support1Text",
        "Product-focused sourcing"
      ),
    },
    {
      icon: FileCheck2,
      title: getText("about.support2Title", "Documentation"),
      text: getText(
        "about.support2Text",
        "Export process support"
      ),
    },
    {
      icon: Truck,
      title: getText("about.support3Title", "Logistics"),
      text: getText(
        "about.support3Text",
        "Shipment coordination"
      ),
    },
    {
      icon: Headphones,
      title: getText("about.support4Title", "Support"),
      text: getText(
        "about.support4Text",
        "Responsive communication"
      ),
    },
  ];

  const openWhatsApp = () => {
    const message =
      "Hello Saiyed Global Exports, I would like to know more about your company, available products, pricing, MOQ and export services.";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="about-section" id="about">
      <div className="about-background" aria-hidden="true">
        <div className="about-grid-pattern" />
        <div className="about-glow about-glow-one" />
        <div className="about-glow about-glow-two" />
        <div className="about-shape about-shape-one" />
        <div className="about-shape about-shape-two" />
      </div>

      <div className="about-container">
        <div className="about-heading" data-aos="fade-up">
          <span className="about-tag">
            <Sparkles size={15} />
            {getText("about.tag", "ABOUT SAIYED GLOBAL EXPORTS")}
          </span>

          <h2>
            {getText(
              "about.heading",
              "Building Global Business Through Trust, Quality and Reliable Trade"
            )}
          </h2>

          <p>
            {getText(
              "about.description",
              "Saiyed Global Exports connects international buyers with quality Indian products through professional sourcing, transparent communication, export coordination and dependable logistics support."
            )}
          </p>
        </div>

        <div className="about-main-grid">
          <div
            className="about-company-panel"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="about-company-card">
              <div className="about-company-card-top">
                <div className="about-company-icon">
                  <Globe2 size={30} strokeWidth={1.8} />
                </div>

                <div className="about-company-status">
                  <span />
                  {getText("about.activeStatus", "GLOBAL TRADE READY")}
                </div>
              </div>

              <span className="about-company-eyebrow">
                {getText("about.companyEyebrow", "WHO WE ARE")}
              </span>

              <h3>
                {getText(
                  "about.cardTitle",
                  "Your Trusted Partner for Indian Product Exports"
                )}
              </h3>

              <p>
                {getText(
                  "about.cardText1",
                  "We support businesses worldwide in sourcing quality products from India according to their market needs, commercial requirements and destination standards."
                )}
              </p>

              <p>
                {getText(
                  "about.cardText2",
                  "Our mission is to simplify international sourcing through responsible supplier coordination, transparent information and dependable export support."
                )}
              </p>

              <div className="about-trust-list">
                {trustPoints.map((point) => (
                  <div className="about-trust-item" key={point}>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <div className="about-company-actions">
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

                <a
                  href="#products"
                  className="about-secondary-button"
                >
                  <PackageCheck size={18} />
                  <span>
                    {getText(
                      "about.viewProducts",
                      "View Products"
                    )}
                  </span>
                </a>
              </div>

              <div className="about-mini-footer">
                <div>
                  <MapPin size={16} />
                  <span>
                    {getText(
                      "about.location",
                      "Gujarat, India"
                    )}
                  </span>
                </div>

                <div>
                  <Ship size={16} />
                  <span>
                    {getText(
                      "about.exportSolutions",
                      "Global Export Solutions"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="about-visual-panel"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="about-visual-card">
              <div className="about-visual-header">
                <div>
                  <span>
                    {getText(
                      "about.supplyNetworkLabel",
                      "SUPPLY NETWORK"
                    )}
                  </span>

                  <strong>
                    {getText(
                      "about.supplyNetworkTitle",
                      "India to Global Markets"
                    )}
                  </strong>
                </div>

                <div className="about-verified">
                  <BadgeCheck size={17} />
                  {getText("about.verified", "Verified Process")}
                </div>
              </div>

              <div className="about-world-visual">
                <div className="about-world-ring about-world-ring-one" />
                <div className="about-world-ring about-world-ring-two" />
                <div className="about-world-ring about-world-ring-three" />

                <div className="about-world-center">
                  <Globe2 size={93} strokeWidth={1.05} />
                  <span className="about-world-pulse" />
                </div>

                <span className="about-route about-route-one">
                  <span />
                </span>

                <span className="about-route about-route-two">
                  <span />
                </span>

                <span className="about-route about-route-three">
                  <span />
                </span>

                <span className="about-route about-route-four">
                  <span />
                </span>

                <div className="about-floating-card about-floating-card-one">
                  <Plane size={19} />
                  <div>
                    <strong>
                      {getText("about.airFreight", "Air Freight")}
                    </strong>
                    <span>
                      {getText("about.fastDelivery", "Fast delivery")}
                    </span>
                  </div>
                </div>

                <div className="about-floating-card about-floating-card-two">
                  <Ship size={19} />
                  <div>
                    <strong>
                      {getText("about.seaFreight", "Sea Freight")}
                    </strong>
                    <span>
                      {getText("about.bulkShipping", "Bulk shipping")}
                    </span>
                  </div>
                </div>

                <div className="about-floating-card about-floating-card-three">
                  <PackageCheck size={19} />
                  <div>
                    <strong>
                      {getText("about.productSupply", "Product Supply")}
                    </strong>
                    <span>
                      {getText("about.indianSourcing", "Indian sourcing")}
                    </span>
                  </div>
                </div>

                <div className="about-floating-card about-floating-card-four">
                  <Handshake size={19} />
                  <div>
                    <strong>
                      {getText("about.tradeSupport", "Trade Support")}
                    </strong>
                    <span>
                      {getText(
                        "about.buyerCoordination",
                        "Buyer coordination"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-visual-bottom">
                <div>
                  <span className="about-dot about-dot-green" />
                  <p>
                    {getText(
                      "about.status1",
                      "Supplier coordination active"
                    )}
                  </p>
                </div>

                <div>
                  <span className="about-dot about-dot-blue" />
                  <p>
                    {getText(
                      "about.status2",
                      "International enquiries open"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <article
              className="about-stat-card"
              key={stat.label}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <span className="about-stat-number">
                0{index + 1}
              </span>

              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="about-features-section">
          <div className="about-subheading" data-aos="fade-up">
            <span>
              {getText(
                "about.featuresTag",
                "WHY CHOOSE US"
              )}
            </span>

            <h3>
              {getText(
                "about.featuresHeading",
                "Professional Support at Every Stage of International Trade"
              )}
            </h3>

            <p>
              {getText(
                "about.featuresDescription",
                "From product sourcing to shipment coordination, our approach is built around clear communication, buyer requirements and dependable execution."
              )}
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  className="about-feature-card"
                  key={feature.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                >
                  <div className="about-feature-top">
                    <div className="about-feature-icon">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span>{feature.number}</span>
                  </div>

                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>

                  <div className="about-feature-line" />
                </article>
              );
            })}
          </div>
        </div>

        <div className="about-workflow">
          <div className="about-workflow-heading" data-aos="fade-up">
            <div>
              <span>
                {getText(
                  "about.workflowTag",
                  "OUR EXPORT APPROACH"
                )}
              </span>

              <h3>
                {getText(
                  "about.workflowHeading",
                  "A Clear Process From Enquiry to International Dispatch"
                )}
              </h3>
            </div>

            <p>
              {getText(
                "about.workflowDescription",
                "Each requirement is handled step by step to keep the sourcing and export process organized, transparent and business-focused."
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
                  data-aos-delay={index * 100}
                >
                  <div className="about-workflow-card-top">
                    <div className="about-workflow-icon">
                      <Icon size={22} />
                    </div>

                    <span>{item.step}</span>
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.text}</p>

                  {index < workflow.length - 1 && (
                    <div
                      className="about-workflow-connector"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="about-support-strip" data-aos="fade-up">
          {supportItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="about-support-item"
                key={item.title}
              >
                <div>
                  <Icon size={20} />
                </div>

                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
              </div>
            );
          })}
        </div>

        <div className="about-cta" data-aos="fade-up">
          <div className="about-cta-icon">
            <Handshake size={31} />
          </div>

          <div className="about-cta-content">
            <span>
              {getText(
                "about.ctaLabel",
                "LET'S BUILD A RELIABLE TRADE CONNECTION"
              )}
            </span>

            <h3>
              {getText(
                "about.ctaTitle",
                "Looking for quality Indian products for your market?"
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
                "Start a Business Enquiry"
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