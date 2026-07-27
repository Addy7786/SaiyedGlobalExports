import {
  Award,
  BadgeCheck,
  Globe2,
  Handshake,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const reasons = [
    {
      icon: <ShieldCheck size={32} />,
      title: getText("why.qualityTitle", "Quality Assurance"),
      description: getText(
        "why.qualityDesc",
        "Every product is sourced from trusted suppliers and checked before export."
      ),
    },
    {
      icon: <Handshake size={32} />,
      title: getText("why.trustTitle", "Trusted Partnership"),
      description: getText(
        "why.trustDesc",
        "We believe in long-term business relationships built on honesty and transparency."
      ),
    },
    {
      icon: <Truck size={32} />,
      title: getText("why.deliveryTitle", "Reliable Delivery"),
      description: getText(
        "why.deliveryDesc",
        "Efficient logistics and timely shipments for international buyers."
      ),
    },
    {
      icon: <Globe2 size={32} />,
      title: getText("why.globalTitle", "Global Reach"),
      description: getText(
        "why.globalDesc",
        "Serving importers, wholesalers and distributors across multiple countries."
      ),
    },
    {
      icon: <Award size={32} />,
      title: getText("why.professionalTitle", "Professional Service"),
      description: getText(
        "why.professionalDesc",
        "Dedicated support from enquiry to shipment with complete export guidance."
      ),
    },
    {
      icon: <BadgeCheck size={32} />,
      title: getText("why.commitmentTitle", "Commitment"),
      description: getText(
        "why.commitmentDesc",
        "Committed to quality products, competitive pricing and customer satisfaction."
      ),
    },
  ];

  return (
    <section
      className="why-section"
      id="why-choose-us"
    >
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-up"
        >
          <span className="section-tag">
            {getText("why.tag", "WHY CHOOSE US")}
          </span>

          <h2>
            {getText(
              "why.heading",
              "Why Businesses Choose Saiyed Global Exports"
            )}
          </h2>

          <p>
            {getText(
              "why.description",
              "We combine quality, reliability and global trade expertise to deliver value for every international customer."
            )}
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="why-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;