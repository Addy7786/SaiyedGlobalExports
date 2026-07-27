import {
  Building2,
  Globe2,
  MapPin,
  Plane,
  Ship,
  Truck,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import "./Markets.css";

function Markets() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const markets = [
    {
      icon: <Building2 size={30} />,
      title: getText("markets.middleEastTitle", "Middle East"),
      description: getText(
        "markets.middleEastText",
        "Supplying quality Indian products to importers and distributors across Gulf markets."
      ),
    },
    {
      icon: <Globe2 size={30} />,
      title: getText("markets.europeTitle", "Europe"),
      description: getText(
        "markets.europeText",
        "Professional sourcing and export support for buyers across European markets."
      ),
    },
    {
      icon: <Ship size={30} />,
      title: getText("markets.africaTitle", "Africa"),
      description: getText(
        "markets.africaText",
        "Reliable product supply and trade solutions for growing African businesses."
      ),
    },
    {
      icon: <Plane size={30} />,
      title: getText("markets.asiaTitle", "Asia"),
      description: getText(
        "markets.asiaText",
        "Connecting Indian suppliers with businesses throughout major Asian markets."
      ),
    },
  ];

  const highlights = [
    {
      icon: <MapPin size={22} />,
      title: getText("markets.highlight1Title", "Global Destinations"),
      text: getText(
        "markets.highlight1Text",
        "Export solutions designed for multiple international markets."
      ),
    },
    {
      icon: <Ship size={22} />,
      title: getText("markets.highlight2Title", "Sea Freight"),
      text: getText(
        "markets.highlight2Text",
        "Cost-effective shipping support for bulk international orders."
      ),
    },
    {
      icon: <Plane size={22} />,
      title: getText("markets.highlight3Title", "Air Freight"),
      text: getText(
        "markets.highlight3Text",
        "Fast delivery options for urgent and premium shipments."
      ),
    },
    {
      icon: <Truck size={22} />,
      title: getText("markets.highlight4Title", "Reliable Logistics"),
      text: getText(
        "markets.highlight4Text",
        "Coordinated transport and documentation from source to destination."
      ),
    },
  ];

  return (
    <section className="markets-section" id="markets">
      <div className="markets-background">
        <div className="markets-glow markets-glow-one" />
        <div className="markets-glow markets-glow-two" />
        <div className="markets-grid-pattern" />
      </div>

      <div className="container markets-container">
        <div className="markets-heading" data-aos="fade-up">
          <span className="markets-tag">
            {getText("markets.tag", "GLOBAL MARKETS")}
          </span>

          <h2>
            {getText(
              "markets.heading",
              "Connecting India With International Markets"
            )}
          </h2>

          <p>
            {getText(
              "markets.description",
              "We help international buyers source trusted Indian products with dependable supply, export documentation and professional logistics support."
            )}
          </p>
        </div>

        <div className="markets-content">
          <div className="markets-map-area" data-aos="fade-right">
            <div className="markets-map-card">
              <div className="markets-map-globe">
                <Globe2 size={92} strokeWidth={1.4} />
              </div>

              <div className="markets-map-center">
                <span className="markets-pulse" />

                <div>
                  <strong>
                    {getText("markets.indiaTitle", "India")}
                  </strong>

                  <span>
                    {getText(
                      "markets.indiaText",
                      "Our Global Supply Hub"
                    )}
                  </span>
                </div>
              </div>

              <span className="market-route market-route-one" />
              <span className="market-route market-route-two" />
              <span className="market-route market-route-three" />
              <span className="market-route market-route-four" />

              <div className="market-location market-location-one">
                <span />
                {getText("markets.middleEastShort", "Middle East")}
              </div>

              <div className="market-location market-location-two">
                <span />
                {getText("markets.europeShort", "Europe")}
              </div>

              <div className="market-location market-location-three">
                <span />
                {getText("markets.africaShort", "Africa")}
              </div>

              <div className="market-location market-location-four">
                <span />
                {getText("markets.asiaShort", "Asia")}
              </div>
            </div>
          </div>

          <div className="markets-list">
            {markets.map((market, index) => (
              <article
                className="market-card"
                key={market.title}
                data-aos="fade-left"
                data-aos-delay={index * 120}
              >
                <div className="market-icon">
                  {market.icon}
                </div>

                <div className="market-card-content">
                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="markets-highlights">
          {highlights.map((item, index) => (
            <article
              className="market-highlight-card"
              key={item.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="market-highlight-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Markets;