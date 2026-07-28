import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Factory,
  Globe2,
  Leaf,
  MessageCircle,
  Package,
  PackageCheck,
  Plane,
  Shirt,
  Ship,
  UtensilsCrossed,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
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
      icon: Leaf,
      number: "01",
      title: getText("products.agriculture", "Agricultural Products"),
      description: getText(
        "products.agricultureDesc",
        "Premium grains, spices, fruits, vegetables and other agricultural products sourced from trusted Indian suppliers."
      ),
      highlights: [
        getText("products.farmFresh", "Farm-fresh sourcing"),
        getText("products.bulkSupply", "Bulk order supply"),
        getText("products.exportPackaging", "Export-ready packaging"),
      ],
    },
    {
      icon: UtensilsCrossed,
      number: "02",
      title: getText("products.food", "Food Products"),
      description: getText(
        "products.foodDesc",
        "Processed foods, snacks, beverages and quality packaged food products prepared for international markets."
      ),
      highlights: [
        getText("products.qualityFood", "Quality-focused products"),
        getText("products.privateLabel", "Private-label support"),
        getText("products.globalDelivery", "Global delivery support"),
      ],
    },
    {
      icon: Shirt,
      number: "03",
      title: getText("products.textile", "Textiles & Garments"),
      description: getText(
        "products.textileDesc",
        "Quality fabrics, garments, uniforms and fashion products manufactured and sourced from India."
      ),
      highlights: [
        getText("products.customDesign", "Custom design support"),
        getText("products.bulkGarments", "Bulk garment orders"),
        getText("products.fabricVariety", "Wide fabric selection"),
      ],
    },
    {
      icon: Factory,
      number: "04",
      title: getText("products.industrial", "Industrial Products"),
      description: getText(
        "products.industrialDesc",
        "Industrial equipment, engineering products, tools and manufacturing materials for global buyers."
      ),
      highlights: [
        getText("products.verifiedManufacturers", "Verified manufacturers"),
        getText("products.technicalSourcing", "Technical product sourcing"),
        getText("products.commercialSupply", "Commercial supply support"),
      ],
    },
    {
      icon: Boxes,
      number: "05",
      title: getText("products.packaging", "Packaging Materials"),
      description: getText(
        "products.packagingDesc",
        "Strong, practical and export-quality packaging materials suitable for different industries."
      ),
      highlights: [
        getText("products.customPackaging", "Custom packaging options"),
        getText("products.ecoFriendly", "Eco-friendly solutions"),
        getText("products.exportStrength", "Export-grade strength"),
      ],
    },
    {
      icon: Package,
      number: "06",
      title: getText("products.custom", "Custom Product Sourcing"),
      description: getText(
        "products.customDesc",
        "Need a specific product? We help source it from reliable Indian suppliers and manufacturers."
      ),
      highlights: [
        getText("products.productSearch", "Product search assistance"),
        getText("products.supplierCoordination", "Supplier coordination"),
        getText("products.customRequirement", "Custom requirements"),
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
              <PackageCheck size={16} />

              {getText("products.tag", "OUR PRODUCTS")}
            </span>

            <h2>
              {getText(
                "products.heading",
                "Products We Export Worldwide"
              )}
            </h2>

            <p>
              {getText(
                "products.description",
                "We supply high-quality Indian products to international buyers with reliable sourcing, competitive pricing and professional export services."
              )}
            </p>
          </div>

          <div
            className="products-global-card"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="products-global-icon">
              <Globe2 size={27} />
            </div>

            <div>
              <span>
                {getText("products.globalSupply", "Global Supply")}
              </span>

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
                key={product.title}
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="product-card-top">
                  <div className="product-icon">
                    <Icon size={31} strokeWidth={1.8} />
                  </div>

                  <span className="product-number">
                    {product.number}
                  </span>
                </div>

                <div className="product-status-row">
                  <span className="product-status">
                    <span className="product-status-dot" />

                    {getText(
                      "products.availableExport",
                      "Available for Export"
                    )}
                  </span>

                  <Globe2 size={16} />
                </div>

                <h3>{product.title}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-highlights">
                  {product.highlights.map((highlight) => (
                    <div
                      className="product-highlight"
                      key={highlight}
                    >
                      <CheckCircle2 size={16} />

                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="product-shipping-row">
                  <div className="product-shipping-item">
                    <Ship size={17} />

                    <span>
                      {getText("products.seaFreight", "Sea Freight")}
                    </span>
                  </div>

                  <div className="product-shipping-divider" />

                  <div className="product-shipping-item">
                    <Plane size={17} />

                    <span>
                      {getText("products.airCargo", "Air Cargo")}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="product-btn"
                  onClick={() =>
                    openWhatsAppEnquiry(product.title)
                  }
                  aria-label={`Send enquiry for ${product.title}`}
                >
                  <MessageCircle size={18} />

                  <span>
                    {getText(
                      "products.sendEnquiry",
                      "Send Enquiry"
                    )}
                  </span>

                  <ArrowUpRight
                    className="product-btn-arrow"
                    size={18}
                  />
                </button>
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
            <Package size={30} />
          </div>

          <div className="products-bottom-content">
            <span>
              {getText(
                "products.customRequestLabel",
                "Looking for another product?"
              )}
            </span>

            <h3>
              {getText(
                "products.customRequestTitle",
                "Tell us your requirement and we will help source it from India."
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
              {getText(
                "products.requestProduct",
                "Request a Product"
              )}
            </span>

            <ArrowUpRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;