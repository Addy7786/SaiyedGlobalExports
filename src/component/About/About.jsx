import {
  Globe2,
  PackageCheck,
  ShieldCheck,
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

  const features = [
    {
      icon: <Globe2 size={30} />,
      title: getText("about.feature1Title", "Global Network"),
      text: getText(
        "about.feature1Text",
        "Connecting Indian manufacturers with buyers across international markets."
      ),
    },
    {
      icon: <PackageCheck size={30} />,
      title: getText("about.feature2Title", "Premium Quality"),
      text: getText(
        "about.feature2Text",
        "Every product is sourced with strict quality standards and reliable suppliers."
      ),
    },
    {
      icon: <Truck size={30} />,
      title: getText("about.feature3Title", "Fast Logistics"),
      text: getText(
        "about.feature3Text",
        "Efficient shipping and documentation for smooth international trade."
      ),
    },
    {
      icon: <ShieldCheck size={30} />,
      title: getText("about.feature4Title", "Trusted Service"),
      text: getText(
        "about.feature4Text",
        "Transparent communication and long-term business relationships."
      ),
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-up"
        >
          <span className="section-tag">
            {getText("about.tag", "ABOUT US")}
          </span>

          <h2>
            {getText(
              "about.heading",
              "Building Global Business With Trust"
            )}
          </h2>

          <p>
            {getText(
              "about.description",
              "Saiyed Global Exports is committed to delivering premium Indian products to international markets with quality, transparency and dependable export solutions."
            )}
          </p>
        </div>

        <div className="about-grid">
          <div
            className="about-left"
            data-aos="fade-right"
          >
            <div className="about-card">
              <h3>
                {getText(
                  "about.cardTitle",
                  "Who We Are"
                )}
              </h3>

              <p>
                {getText(
                  "about.cardText1",
                  "We help businesses worldwide source quality products from India through reliable export services."
                )}
              </p>

              <p>
                {getText(
                  "about.cardText2",
                  "Our focus is customer satisfaction, timely delivery and building long-term partnerships."
                )}
              </p>

              <div className="about-stats">
                <div>
                  <h4>100%</h4>
                  <span>
                    {getText(
                      "about.stat1",
                      "Quality Focus"
                    )}
                  </span>
                </div>

                <div>
                  <h4>24/7</h4>
                  <span>
                    {getText(
                      "about.stat2",
                      "Customer Support"
                    )}
                  </span>
                </div>

                <div>
                  <h4>Global</h4>
                  <span>
                    {getText(
                      "about.stat3",
                      "Export Reach"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            {features.map((item, index) => (
              <div
                key={index}
                className="feature-card"
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <div className="feature-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;