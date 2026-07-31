import { useEffect } from "react";
import "./ScrollReveal.css";

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "main section, #root footer"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("scroll-reveal-visible");
      });

      return;
    }

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
        threshold: 0.03,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");

      if (index === 0) {
        element.classList.add("scroll-reveal-visible");
      } else {
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