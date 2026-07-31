
import { useState } from "react";
import {
  ChevronRight,
  CircleHelp,
  Headphones,
  Minus,
  Plus,
  Ship,
} from "lucide-react";

import "./FAQ.css";

const faqItems = [
  {
    number: "01",
    question: "Which products does Saiyed Global Exports supply?",
    answer:
      "We supply agricultural products, food items, textiles, garments, industrial products, packaging materials and custom-sourced products based on buyer requirements.",
  },
  {
    number: "02",
    question: "Which international markets do you serve?",
    answer:
      "We are focused on connecting Indian products with buyers across the Middle East, Europe, Africa, Asia and other international markets based on product demand and trade requirements.",
  },
  {
    number: "03",
    question: "Can you source a product that is not listed on the website?",
    answer:
      "Yes. Buyers can share their required product, specifications, quantity, packaging and destination. Our team can review suitable sourcing options from India.",
  },
  {
    number: "04",
    question: "Do you assist with export documentation?",
    answer:
      "We support export coordination and documentation guidance based on the product, destination country, shipment method and applicable trade requirements.",
  },
  {
    number: "05",
    question: "What information should I provide for a quotation?",
    answer:
      "Please provide the product name, required specifications, quantity, preferred packaging, destination country, delivery terms and any quality or certification requirements.",
  },
  {
    number: "06",
    question: "How can I contact Saiyed Global Exports?",
    answer:
      "You can contact us through the enquiry form, email, phone or WhatsApp. Share your requirement and our team will respond with the next steps.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? -1 : index,
    );
  };

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="faq" className="faq-luxury">
      <div className="faq-luxury__glow faq-luxury__glow--one" />
      <div className="faq-luxury__glow faq-luxury__glow--two" />

      <div className="faq-luxury__container">
        <div className="faq-luxury__intro">
          <div className="faq-luxury__eyebrow">
            <CircleHelp size={18} strokeWidth={1.8} />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="faq-luxury__title">
            Everything You
            <span>
              Need To <strong>Know</strong>
            </span>
          </h2>

          <div className="faq-luxury__title-line" />

          <p className="faq-luxury__description">
            Find quick answers about our products, international markets,
            sourcing process and export services.
          </p>

          <div className="faq-luxury__promise">
            <div className="faq-luxury__promise-icon">
              <Ship size={34} strokeWidth={1.45} />
            </div>

            <div>
              <span>Buyer-Focused Service</span>
              <strong>Clear Export Support</strong>
              <p>
                Practical guidance for sourcing, product coordination and
                international enquiries.
              </p>
            </div>
          </div>

          <div className="faq-luxury__contact-card">
            <div className="faq-luxury__contact-icon">
              <Headphones size={28} strokeWidth={1.6} />
            </div>

            <div className="faq-luxury__contact-content">
              <strong>Still Have Questions?</strong>
              <span>We are here to help with your requirement.</span>
            </div>

            <button type="button" onClick={scrollToContact}>
              Contact Us
              <ChevronRight size={17} strokeWidth={1.9} />
            </button>
          </div>
        </div>

        <div className="faq-luxury__accordion">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`faq-luxury__item ${
                  isOpen ? "faq-luxury__item--open" : ""
                }`}
                key={item.number}
              >
                <button
                  type="button"
                  className="faq-luxury__question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-luxury__number">
                    {item.number}
                  </span>

                  <span className="faq-luxury__question-text">
                    {item.question}
                  </span>

                  <span className="faq-luxury__toggle">
                    {isOpen ? (
                      <Minus size={19} strokeWidth={1.8} />
                    ) : (
                      <Plus size={19} strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-luxury__answer-wrap"
                >
                  <div className="faq-luxury__answer">
                    <span className="faq-luxury__answer-line" />
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;