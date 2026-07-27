import { useEffect } from "react";
import "./ScrollReveal.css";

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "main section, body > #root > div section, #root > section, #root footer"
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");

      if (index === 0) {
        element.classList.add("scroll-reveal-visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      if (!element.classList.contains("scroll-reveal-visible")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();

      elements.forEach((element) => {
        element.classList.remove(
          "scroll-reveal",
          "scroll-reveal-visible"
        );
      });
    };
  }, []);

  return null;
}

export default ScrollReveal;