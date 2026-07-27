import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";
import "./FAQ.css";

function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const getText = (key, fallback) => {
    const value = t(key);
    return value && value !== key ? value : fallback;
  };

  const faqItems = [
    {
      question: getText(
        "faq.question1",
        "Which products does Saiyed Global Exports supply?"
      ),
      answer: getText(
        "faq.answer1",
        "We supply agricultural products, food items, textiles, garments, industrial products, packaging materials and custom-sourced products based on buyer requirements."
      ),
    },
    {
      question: getText(
        "faq.question2",
        "Which international markets do you serve?"
      ),
      answer: getText(
        "faq.answer2",
        "We support buyers across the Middle East, Europe, Africa and Asia. We can also discuss export opportunities for other international destinations."
      ),
    },
    {
      question: getText(
        "faq.question3",
        "Can you source a product that is not listed on the website?"
      ),
      answer: getText(
        "faq.answer3",
        "Yes. Share your product specifications, quantity, packaging requirements and destination country. Our team will check suitable sourcing options from reliable Indian suppliers."
      ),
    },
    {
      question: getText(
        "faq.question4",
        "Do you assist with export documentation?"
      ),
      answer: getText(
        "faq.answer4",
        "Yes. We coordinate the required commercial documents, shipment details and export-related processes according to the product and destination requirements."
      ),
    },
    {
      question: getText(
        "faq.question5",
        "What information should I provide for a quotation?"
      ),
      answer: getText(
        "faq.answer5",
        "Please provide the product name, required quantity, quality specifications, packaging preference, delivery destination and any certification requirements."
      ),
    },
    {
      question: getText(
        "faq.question6",
        "How can I contact Saiyed Global Exports?"
      ),
      answer: getText(
        "faq.answer6",
        "You can contact us through the website enquiry form, email or WhatsApp. Our team will respond and discuss your requirements."
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-background">
        <div className="faq-glow faq-glow-one" />
        <div className="faq-glow faq-glow-two" />
      </div>

      <div className="container faq-container">
        <div className="faq-heading" data-aos="fade-up">
          <span className="faq-tag">
            <HelpCircle size={17} />

            {getText(
              "faq.tag",
              "FREQUENTLY ASKED QUESTIONS"
            )}
          </span>

          <h2>
            {getText(
              "faq.heading",
              "Everything You Need To Know"
            )}
          </h2>

          <p>
            {getText(
              "faq.description",
              "Find quick answers about our products, international markets, sourcing process and export services."
            )}
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-item-active" : ""}`}
                key={item.question}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-chevron">
                    <ChevronDown size={22} />
                  </span>
                </button>

                <div
                  id={answerId}
                  className="faq-answer-wrapper"
                >
                  <div className="faq-answer">
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