import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ChevronRight,
  CircleHelp,
  Headphones,
  Minus,
  Plus,
  Ship,
} from "lucide-react";

import "./FAQ.css";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const accordionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const refreshFrameRef = useRef(0);

  const requestAnimationRefresh = () => {
    window.cancelAnimationFrame(
      refreshFrameRef.current
    );

    refreshFrameRef.current =
      window.requestAnimationFrame(() => {
        window.dispatchEvent(
          new CustomEvent(
            "sge:refresh-animations"
          )
        );
      });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const accordion = accordionRef.current;

    if (!section || !accordion) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".faq-luxury__intro > *, .faq-luxury__item"
        ),
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      introTimeline
        .fromTo(
          ".faq-luxury__eyebrow",
          {
            autoAlpha: 0,
            y: -18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".faq-luxury__title > *",
          {
            autoAlpha: 0,
            y: 42,
            rotateX: -12,
            transformOrigin: "50% 100%",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.84,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.12
        )
        .fromTo(
          ".faq-luxury__title-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.75,
            ease: "power3.inOut",
          },
          0.44
        )
        .fromTo(
          ".faq-luxury__description",
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.5
        )
        .fromTo(
          ".faq-luxury__promise",
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.72,
            ease: "power3.out",
          },
          0.62
        )
        .fromTo(
          ".faq-luxury__contact-card",
          {
            autoAlpha: 0,
            y: 30,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.72,
            ease: "power3.out",
          },
          0.72
        );

      gsap.fromTo(
        ".faq-luxury__item",
        {
          autoAlpha: 0,
          x: 48,
          y: 24,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: accordion,
            start: "top 86%",
            once: true,
            invalidateOnRefresh: false,
          },
        }
      );

      gsap.to(
        section.querySelector(
          ".faq-luxury__glow--one"
        ),
        {
        x: 65,
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
          invalidateOnRefresh: false,
        },
      }
      );

      gsap.to(
        section.querySelector(
          ".faq-luxury__glow--two"
        ),
        {
        x: -60,
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      }
      );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const items = Array.from(
      section.querySelectorAll(".faq-luxury__item")
    );

    items.forEach((item, index) => {
      const answerWrap = item.querySelector(
        ".faq-luxury__answer-wrap"
      );
      const answer = item.querySelector(".faq-luxury__answer");
      const line = item.querySelector(".faq-luxury__answer-line");
      const paragraph = item.querySelector(".faq-luxury__answer p");
      const toggle = item.querySelector(".faq-luxury__toggle");
      const isOpen = activeIndex === index;

      if (!answerWrap || !answer || !line || !paragraph || !toggle) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(answerWrap, {
          height: isOpen ? "auto" : 0,
        });

        gsap.set([line, paragraph], {
          autoAlpha: isOpen ? 1 : 0,
          y: 0,
        });

        return;
      }

      if (isOpen) {
        gsap.killTweensOf([answerWrap, line, paragraph, toggle]);

        gsap.set(answerWrap, {
          height: "auto",
        });

        const targetHeight = answerWrap.offsetHeight;

        gsap.fromTo(
          answerWrap,
          {
            height: 0,
          },
          {
            height: targetHeight,
            duration: 0.45,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(answerWrap, {
                height: "auto",
              });

              requestAnimationRefresh();
            },
          }
        );

        gsap.fromTo(
          line,
          {
            autoAlpha: 0,
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            scaleX: 1,
            duration: 0.42,
            delay: 0.12,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          paragraph,
          {
            autoAlpha: 0,
            y: 14,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            delay: 0.16,
            ease: "power2.out",
          }
        );

        gsap.to(toggle, {
          rotation: 180,
          duration: 0.35,
          ease: "power2.out",
        });
      } else {
        gsap.killTweensOf([answerWrap, line, paragraph, toggle]);

        gsap.to([line, paragraph], {
          autoAlpha: 0,
          y: -6,
          duration: 0.18,
          ease: "power1.out",
        });

        gsap.to(answerWrap, {
          height: 0,
          duration: 0.36,
          ease: "power2.inOut",
          onComplete: () => {
            requestAnimationRefresh();
          },
        });

        gsap.to(toggle, {
          rotation: 0,
          duration: 0.35,
          ease: "power2.out",
        });
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(
        refreshFrameRef.current
      );
    };
  }, []);

  const handleToggle = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      ref={sectionRef}
      className="faq-luxury"
      id="faq"
    >
      <div
        className="faq-luxury__glow faq-luxury__glow--one"
        aria-hidden="true"
      />

      <div
        className="faq-luxury__glow faq-luxury__glow--two"
        aria-hidden="true"
      />

      <div className="faq-luxury__container">
        <div className="faq-luxury__intro">
          <div className="faq-luxury__eyebrow">
            <CircleHelp
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="faq-luxury__title">
            <span>Everything You</span>

            <span>
              Need To <strong>Know</strong>
            </span>
          </h2>

          <div
            className="faq-luxury__title-line"
            aria-hidden="true"
          />

          <p className="faq-luxury__description">
            Find quick answers about our products, international
            markets, sourcing process and export services.
          </p>

          <div className="faq-luxury__promise">
            <div className="faq-luxury__promise-icon">
              <Ship
                size={34}
                strokeWidth={1.45}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>Buyer-Focused Service</span>
              <strong>Clear Export Support</strong>

              <p>
                Practical guidance for sourcing, product coordination
                and international enquiries.
              </p>
            </div>
          </div>

          <div className="faq-luxury__contact-card">
            <div className="faq-luxury__contact-icon">
              <Headphones
                size={28}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>

            <div className="faq-luxury__contact-content">
              <strong>Still Have Questions?</strong>
              <span>
                We are here to help with your requirement.
              </span>
            </div>

            <button type="button" onClick={scrollToContact}>
              Contact Us
              <ChevronRight
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div
          ref={accordionRef}
          className="faq-luxury__accordion"
        >
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
                      <Minus
                        size={19}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        size={19}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-luxury__answer-wrap"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-luxury__answer">
                    <span
                      className="faq-luxury__answer-line"
                      aria-hidden="true"
                    />

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