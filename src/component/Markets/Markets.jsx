import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  MapPin,
  MessageCircle,
  PackageCheck,
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

  const whatsappNumber = "917867869243";

  const markets = [
    {
      icon: Building2,
      code: "GCC",
      title: getText("markets.middleEastTitle", "Middle East"),
      description: getText(
        "markets.middleEastText",
        "Supplying quality Indian products to importers, wholesalers and distributors across major Gulf markets."
      ),
      countries: getText(
        "markets.middleEastCountries",
        "UAE • Saudi Arabia • Qatar • Oman"
      ),
    },
    {
      icon: Globe2,
      code: "EU",
      title: getText("markets.europeTitle", "Europe"),
      description: getText(
        "markets.europeText",
        "Professional sourcing and export support for buyers across established and emerging European markets."
      ),
      countries: getText(
        "markets.europeCountries",
        "United Kingdom • Germany • France • Italy"
      ),
    },
    {
      icon: Ship,
      code: "AF",
      title: getText("markets.africaTitle", "Africa"),
      description: getText(
        "markets.africaText",
        "Reliable product supply and trade solutions for distributors and growing businesses across Africa."
      ),
      countries: getText(
        "markets.africaCountries",
        "South Africa • Kenya • Tanzania • Nigeria"
      ),
    },
    {
      icon: Plane,
      code: "AS",
      title: getText("markets.asiaTitle", "Asia"),
      description: getText(
        "markets.asiaText",
        "Connecting Indian suppliers with importers and businesses throughout important Asian markets."
      ),
      countries: getText(
        "markets.asiaCountries",
        "Singapore • Malaysia • Indonesia • Sri Lanka"
      ),
    },
  ];

  const highlights = [
    {
      icon: MapPin,
      title: getText("markets.highlight1Title", "Global Destinations"),
      text: getText(
        "markets.highlight1Text",
        "Export support designed for buyers across multiple international markets."
      ),
    },
    {
      icon: Ship,
      title: getText("markets.highlight2Title", "Sea Freight"),
      text: getText(
        "markets.highlight2Text",
        "Cost-effective shipping solutions for container and bulk international orders."
      ),
    },
    {
      icon: Plane,
      title: getText("markets.highlight3Title", "Air Freight"),
      text: getText(
        "markets.highlight3Text",
        "Faster delivery options for urgent, lightweight and premium shipments."
      ),
    },
    {
      icon: Truck,
      title: getText("markets.highlight4Title", "Reliable Logistics"),
      text: getText(
        "markets.highlight4Text",
        "Coordinated transportation and shipment support from supplier to destination."
      ),
    },
  ];

  const exportSteps = [
    {
      icon: PackageCheck,
      number: "01",
      title: getText("markets.step1Title", "Product Sourcing"),
      text: getText(
        "markets.step1Text",
        "We identify reliable Indian suppliers according to your product requirements."
      ),
    },
    {
      icon: CheckCircle2,
      number: "02",
      title: getText("markets.step2Title", "Quality Coordination"),
      text: getText(
        "markets.step2Text",
        "Product details, packaging and commercial requirements are coordinated carefully."
      ),
    },
    {
      icon: FileCheck2,
      number: "03",
      title: getText("markets.step3Title", "Export Documentation"),
      text: getText(
        "markets.step3Text",
        "Required commercial and shipping documentation is arranged for the order."
      ),
    },
    {
      icon: Ship,
      number: "04",
      title: getText("markets.step4Title", "Global Dispatch"),
      text: getText(
        "markets.step4Text",
        "The shipment is prepared for sea or air transportation to the destination market."
      ),
    },
  ];

  const openMarketEnquiry = (marketTitle) => {
    const message = `Hello Saiyed Global Exports, I am interested in importing Indian products for the ${marketTitle} market. Please share available products, pricing, MOQ, documentation and shipping details.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="markets-section" id="markets">
      <div className="markets-background" aria-hidden="true">
        <div className="markets-glow markets-glow-one" />
        <div className="markets-glow markets-glow-two" />
        <div className="markets-grid-pattern" />
        <div className="markets-noise" />
      </div>

      <div className="markets-container">
        <div className="markets-heading" data-aos="fade-up">
          <span className="markets-tag">
            <Globe2 size={16} />
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
              "We help international buyers source trusted Indian products with dependable supply, export coordination, documentation and professional logistics support."
            )}
          </p>
        </div>

        <div className="markets-content">
          <div
            className="markets-map-area"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="markets-map-card">
              <div className="markets-map-header">
                <div>
                  <span>
                    {getText("markets.networkLabel", "EXPORT NETWORK")}
                  </span>

                  <strong>
                    {getText(
                      "markets.networkStatus",
                      "Global trade connections"
                    )}
                  </strong>
                </div>

                <div className="markets-live-status">
                  <span />
                  {getText("markets.activeStatus", "Active")}
                </div>
              </div>

              <div className="markets-map-globe">
                <Globe2 size={280} strokeWidth={0.55} />
              </div>

              <div className="markets-orbit markets-orbit-one" />
              <div className="markets-orbit markets-orbit-two" />
              <div className="markets-orbit markets-orbit-three" />

              <div className="markets-map-center">
                <div className="markets-earth">
                  <Globe2 size={78} strokeWidth={1.15} />

                  <span className="markets-earth-glow" />
                  <span className="markets-earth-ring markets-earth-ring-one" />
                  <span className="markets-earth-ring markets-earth-ring-two" />

                  <div className="markets-india-marker">
                    <span className="markets-pulse" />
                  </div>
                </div>

                <div className="markets-center-label">
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

              <span className="market-route market-route-one">
                <span />
              </span>

              <span className="market-route market-route-two">
                <span />
              </span>

              <span className="market-route market-route-three">
                <span />
              </span>

              <span className="market-route market-route-four">
                <span />
              </span>

              <div className="market-location market-location-one">
                <span className="market-location-dot" />

                <div>
                  <small>GCC</small>
                  {getText("markets.middleEastShort", "Middle East")}
                </div>
              </div>

              <div className="market-location market-location-two">
                <span className="market-location-dot" />

                <div>
                  <small>EU</small>
                  {getText("markets.europeShort", "Europe")}
                </div>
              </div>

              <div className="market-location market-location-three">
                <span className="market-location-dot" />

                <div>
                  <small>AF</small>
                  {getText("markets.africaShort", "Africa")}
                </div>
              </div>

              <div className="market-location market-location-four">
                <span className="market-location-dot" />

                <div>
                  <small>AS</small>
                  {getText("markets.asiaShort", "Asia")}
                </div>
              </div>

              <div className="markets-map-footer">
                <div>
                  <Ship size={17} />
                  <span>
                    {getText("markets.seaNetwork", "Sea Network")}
                  </span>
                </div>

                <div>
                  <Plane size={17} />
                  <span>
                    {getText("markets.airNetwork", "Air Network")}
                  </span>
                </div>

                <div>
                  <Truck size={17} />
                  <span>
                    {getText("markets.landNetwork", "Land Support")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="markets-list">
            {markets.map((market, index) => {
              const Icon = market.icon;

              return (
                <article
                  className="market-card"
                  key={market.title}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <div className="market-card-top">
                    <div className="market-icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <span className="market-code">
                      {market.code}
                    </span>
                  </div>

                  <div className="market-card-content">
                    <h3>{market.title}</h3>

                    <p>{market.description}</p>

                    <div className="market-countries">
                      <MapPin size={15} />
                      <span>{market.countries}</span>
                    </div>

                    <button
                      type="button"
                      className="market-enquiry-button"
                      onClick={() =>
                        openMarketEnquiry(market.title)
                      }
                      aria-label={`Send enquiry for ${market.title}`}
                    >
                      <MessageCircle size={17} />

                      <span>
                        {getText(
                          "markets.marketEnquiry",
                          "Market Enquiry"
                        )}
                      </span>

                      <ArrowUpRight
                        className="market-enquiry-arrow"
                        size={17}
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="markets-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="market-highlight-card"
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <div className="market-highlight-icon">
                  <Icon size={21} strokeWidth={1.9} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="markets-process" data-aos="fade-up">
          <div className="markets-process-heading">
            <span>
              {getText(
                "markets.processTag",
                "HOW WE SUPPORT EXPORTS"
              )}
            </span>

            <h3>
              {getText(
                "markets.processHeading",
                "From Indian Suppliers to Global Buyers"
              )}
            </h3>
          </div>

          <div className="markets-process-grid">
            {exportSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="markets-process-card"
                  key={step.number}
                >
                  <div className="markets-process-card-top">
                    <div className="markets-process-icon">
                      <Icon size={21} />
                    </div>

                    <span>{step.number}</span>
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="markets-cta"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="markets-cta-icon">
            <Globe2 size={31} />
          </div>

          <div className="markets-cta-content">
            <span>
              {getText(
                "markets.ctaLabel",
                "PLANNING TO IMPORT FROM INDIA?"
              )}
            </span>

            <h3>
              {getText(
                "markets.ctaTitle",
                "Share your destination and product requirements with our export team."
              )}
            </h3>
          </div>

          <button
            type="button"
            className="markets-cta-button"
            onClick={() =>
              openMarketEnquiry(
                getText(
                  "markets.internationalMarket",
                  "international"
                )
              )
            }
          >
            <MessageCircle size={18} />

            <span>
              {getText(
                "markets.contactExportTeam",
                "Contact Export Team"
              )}
            </span>

            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Markets;