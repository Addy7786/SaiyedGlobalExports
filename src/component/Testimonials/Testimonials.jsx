import {
  Quote,
  Star,
} from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import "./Testimonials.css";

function Testimonials() {
  const { t } = useLanguage();

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const testimonials = [
    {
      name: getText(
        "testimonials.client1Name",
        "Ahmed Al Mansoori"
      ),
      role: getText(
        "testimonials.client1Role",
        "Importer, UAE"
      ),
      message: getText(
        "testimonials.client1Message",
        "Saiyed Global Exports provided professional communication, dependable sourcing and smooth export support throughout our order."
      ),
      initials: "AM",
    },
    {
      name: getText(
        "testimonials.client2Name",
        "Daniel Okoro"
      ),
      role: getText(
        "testimonials.client2Role",
        "Distributor, South Africa"
      ),
      message: getText(
        "testimonials.client2Message",
        "We were impressed with the product quality, transparent process and timely coordination. A reliable business partner from India."
      ),
      initials: "DO",
    },
    {
      name: getText(
        "testimonials.client3Name",
        "Yusuf Rahman"
      ),
      role: getText(
        "testimonials.client3Role",
        "Wholesale Buyer, Qatar"
      ),
      message: getText(
        "testimonials.client3Message",
        "The team understood our requirements and helped us source suitable products at competitive prices with professional service."
      ),
      initials: "YR",
    },
  ];

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-up"
        >
          <span className="section-tag">
            {getText(
              "testimonials.tag",
              "CLIENT FEEDBACK"
            )}
          </span>

          <h2>
            {getText(
              "testimonials.heading",
              "What Our Global Clients Say"
            )}
          </h2>

          <p>
            {getText(
              "testimonials.description",
              "Our focus is to build trusted, transparent and long-term business relationships with international buyers."
            )}
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
              data-aos="zoom-in"
              data-aos-delay={index * 140}
            >
              <div className="testimonial-quote-icon">
                <Quote size={30} />
              </div>

              <div
                className="testimonial-rating"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="testimonial-message">
                “{testimonial.message}”
              </p>

              <div className="testimonial-client">
                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="testimonial-trust-bar"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <strong>
              {getText(
                "testimonials.trust1Number",
                "100%"
              )}
            </strong>

            <span>
              {getText(
                "testimonials.trust1Text",
                "Transparent Communication"
              )}
            </span>
          </div>

          <div>
            <strong>
              {getText(
                "testimonials.trust2Number",
                "Global"
              )}
            </strong>

            <span>
              {getText(
                "testimonials.trust2Text",
                "Business Support"
              )}
            </span>
          </div>

          <div>
            <strong>
              {getText(
                "testimonials.trust3Number",
                "Reliable"
              )}
            </strong>

            <span>
              {getText(
                "testimonials.trust3Text",
                "Export Solutions"
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;