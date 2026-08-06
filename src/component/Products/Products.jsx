import {
  ArrowUpRight,
  CheckCircle2,
  FlaskConical,
  Gem,
  Globe2,
  Hammer,
  Leaf,
  MessageCircle,
  Package,
  PackageCheck,
  Recycle,
  Shirt,
  Ship,
  Sparkles,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext";

import agricultureImage from "../../assets/products/01-agriculture-products.webp";
import spicesImage from "../../assets/products/02-spices-herbs.webp";
import foodImage from "../../assets/products/03-food-products.webp";
import textilesImage from "../../assets/products/04-textiles-fabrics.webp";
import chemicalsImage from "../../assets/products/05-chemicals.webp";
import engineeringImage from "../../assets/products/06-engineering-goods.webp";
import scrapImage from "../../assets/products/07-scrap-materials.webp";
import mineralsImage from "../../assets/products/08-minerals-ores.webp";

import "./Products.css";

function Products() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const whatsappNumber = "917867869243";

  const products = [
    {
      icon: Wheat,
      number: "01",
      image: agricultureImage,
      title: getText("products.agriculture", "Agriculture Products"),
      description: getText(
        "products.agricultureDesc",
        "Premium grains, cereals and agricultural commodities sourced from trusted Indian suppliers."
      ),
      highlights: [
        getText("products.farmFresh", "Trusted farm sourcing"),
        getText("products.bulkSupply", "Bulk order supply"),
        getText("products.exportPackaging", "Export-ready packaging"),
      ],
    },
    {
      icon: Leaf,
      number: "02",
      image: spicesImage,
      title: getText("products.spices", "Spices & Herbs"),
      description: getText(
        "products.spicesDesc",
        "Authentic Indian spices and herbs selected for aroma, purity and consistent export quality."
      ),
      highlights: [
        getText("products.premiumSpices", "Premium-grade selection"),
        getText("products.naturalAroma", "Natural aroma and freshness"),
        getText("products.bulkSpices", "Bulk export supply"),
      ],
    },
    {
      icon: UtensilsCrossed,
      number: "03",
      image: foodImage,
      title: getText("products.food", "Food Products"),
      description: getText(
        "products.foodDesc",
        "Quality packaged foods, grains, pulses and processed food products prepared for international markets."
      ),
      highlights: [
        getText("products.qualityFood", "Quality-focused products"),
        getText("products.privateLabel", "Private-label support"),
        getText("products.globalDelivery", "Global delivery support"),
      ],
    },
    {
      icon: Shirt,
      number: "04",
      image: textilesImage,
      title: getText("products.textile", "Textiles & Fabrics"),
      description: getText(
        "products.textileDesc",
        "Premium Indian textiles and fabrics supplied with dependable quality for global sourcing."
      ),
      highlights: [
        getText("products.customDesign", "Custom design support"),
        getText("products.bulkGarments", "Bulk textile orders"),
        getText("products.fabricVariety", "Wide fabric selection"),
      ],
    },
    {
      icon: FlaskConical,
      number: "05",
      image: chemicalsImage,
      title: getText("products.chemicals", "Chemicals"),
      description: getText(
        "products.chemicalsDesc",
        "Industrial and specialty chemical products sourced with attention to quality, handling and documentation."
      ),
      highlights: [
        getText("products.industrialChemicals", "Industrial applications"),
        getText("products.safePackaging", "Secure export packaging"),
        getText("products.documentation", "Documentation support"),
      ],
    },
    {
      icon: Hammer,
      number: "06",
      image: engineeringImage,
      title: getText("products.engineering", "Engineering Goods"),
      description: getText(
        "products.engineeringDesc",
        "Engineering components, machinery parts and industrial goods sourced from reliable Indian manufacturers."
      ),
      highlights: [
        getText("products.verifiedManufacturers", "Verified manufacturers"),
        getText("products.technicalSourcing", "Technical product sourcing"),
        getText("products.commercialSupply", "Commercial supply support"),
      ],
    },
    {
      icon: Recycle,
      number: "07",
      image: scrapImage,
      title: getText("products.scrap", "Scrap Materials"),
      description: getText(
        "products.scrapDesc",
        "Ferrous and non-ferrous scrap materials available for responsible sourcing and bulk international supply."
      ),
      highlights: [
        getText("products.metalScrap", "Metal scrap sourcing"),
        getText("products.bulkScrap", "Bulk supply support"),
        getText("products.responsibleTrade", "Responsible trade practices"),
      ],
    },
    {
      icon: Gem,
      number: "08",
      image: mineralsImage,
      title: getText("products.minerals", "Minerals & Ores"),
      description: getText(
        "products.mineralsDesc",
        "Selected minerals and ores sourced for industrial buyers with dependable supply coordination."
      ),
      highlights: [
        getText("products.mineralQuality", "Quality-focused sourcing"),
        getText("products.bulkMinerals", "Bulk shipment support"),
        getText("products.globalIndustries", "Industrial market supply"),
      ],
    },
  ];

  const openWhatsAppEnquiry = (productTitle) => {
    const message = `Hello Saiyed Global Exports, I would like to enquire about ${productTitle}. Please share product details, pricing, MOQ and export information.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="products-section" id="products">
      <div className="products-background" aria-hidden="true">
        <div className="products-glow products-glow-one" />
        <div className="products-glow products-glow-two" />
        <div className="products-pattern" />
      </div>

      <div className="container">
        <div className="products-heading-row">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-tag">
              <PackageCheck size={16} aria-hidden="true" />
              {getText("products.tag", "OUR EXPORT PRODUCTS")}
            </span>

            <h2>
              {getText(
                "products.heading",
                "Premium Indian Products, Trusted Worldwide"
              )}
            </h2>

            <p>
              {getText(
                "products.description",
                "We source quality products from India and supply them to global markets with professional coordination, reliable service and export-focused support."
              )}
            </p>
          </div>

          <div
            className="products-global-card"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="products-global-icon">
              <Globe2 size={27} aria-hidden="true" />
            </div>

            <div>
              <span>{getText("products.globalSupply", "Global Supply")}</span>
              <strong>
                {getText(
                  "products.indiaToWorld",
                  "India to International Markets"
                )}
              </strong>
            </div>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                key={product.number}
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 80}
              >
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    draggable="false"
                  />

                  <div className="product-image-overlay" />

                  <span className="product-number">{product.number}</span>

                  <span className="product-export-badge">
                    <Sparkles size={13} aria-hidden="true" />
                    {getText("products.exportQuality", "Export Quality")}
                  </span>
                </div>

                <div className="product-card-content">
                  <div className="product-card-top">
                    <div className="product-icon">
                      <Icon size={25} strokeWidth={1.9} aria-hidden="true" />
                    </div>

                    <div className="product-status">
                      <span className="product-status-dot" />
                      {getText(
                        "products.availableExport",
                        "Available for Export"
                      )}
                    </div>
                  </div>

                  <h3>{product.title}</h3>

                  <p className="product-description">{product.description}</p>

                  <div className="product-highlights">
                    {product.highlights.map((highlight) => (
                      <div className="product-highlight" key={highlight}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="product-shipping-row">
                    <Ship size={17} aria-hidden="true" />
                    <span>
                      {getText(
                        "products.globalShipping",
                        "Global shipping support"
                      )}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="product-btn"
                    onClick={() => openWhatsAppEnquiry(product.title)}
                    aria-label={`Send enquiry for ${product.title}`}
                  >
                    <MessageCircle size={18} aria-hidden="true" />

                    <span>
                      {getText("products.sendEnquiry", "Send Enquiry")}
                    </span>

                    <ArrowUpRight
                      className="product-btn-arrow"
                      size={18}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="products-bottom-banner"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="products-bottom-icon">
            <Package size={30} aria-hidden="true" />
          </div>

          <div className="products-bottom-content">
            <span>
              {getText(
                "products.customRequestLabel",
                "Can't find your required product?"
              )}
            </span>

            <h3>
              {getText(
                "products.customRequestTitle",
                "Share your requirement with us and we will help source it from India."
              )}
            </h3>
          </div>

          <button
            type="button"
            className="products-custom-button"
            onClick={() =>
              openWhatsAppEnquiry(
                getText(
                  "products.customRequirementName",
                  "a custom product requirement"
                )
              )
            }
          >
            <span>
              {getText("products.requestProduct", "Request a Product")}
            </span>

            <ArrowUpRight size={19} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;