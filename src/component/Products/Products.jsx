import {
  Package,
  Leaf,
  UtensilsCrossed,
  Shirt,
  Factory,
  Boxes,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import "./Products.css";

function Products() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const products = [
    {
      icon: <Leaf size={34} />,
      title: getText("products.agriculture", "Agricultural Products"),
      description: getText(
        "products.agricultureDesc",
        "Premium grains, spices, fruits, vegetables and other farm products sourced from trusted suppliers."
      ),
    },
    {
      icon: <UtensilsCrossed size={34} />,
      title: getText("products.food", "Food Products"),
      description: getText(
        "products.foodDesc",
        "Processed food, snacks, beverages and high-quality packaged food items for global markets."
      ),
    },
    {
      icon: <Shirt size={34} />,
      title: getText("products.textile", "Textiles & Garments"),
      description: getText(
        "products.textileDesc",
        "Quality fabrics, garments, uniforms and fashion products manufactured in India."
      ),
    },
    {
      icon: <Factory size={34} />,
      title: getText("products.industrial", "Industrial Products"),
      description: getText(
        "products.industrialDesc",
        "Industrial equipment, engineering products and manufacturing materials."
      ),
    },
    {
      icon: <Boxes size={34} />,
      title: getText("products.packaging", "Packaging Materials"),
      description: getText(
        "products.packagingDesc",
        "Strong, eco-friendly and export-quality packaging solutions for every industry."
      ),
    },
    {
      icon: <Package size={34} />,
      title: getText("products.custom", "Custom Sourcing"),
      description: getText(
        "products.customDesc",
        "Need a specific product? We source it directly from reliable Indian manufacturers."
      ),
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-up"
        >
          <span className="section-tag">
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

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="product-icon">
                {product.icon}
              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <button
                type="button"
                className="product-btn"
              >
                {getText("products.learnMore", "Learn More")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;