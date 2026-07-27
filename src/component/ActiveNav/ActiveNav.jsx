import { useEffect } from "react";

function ActiveNav() {
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "products",
      "markets",
      "why-us",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const navLinks = document.querySelectorAll('a[href^="#"]');

    const setActiveLink = (activeId) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        link.classList.toggle("nav-link-active", href === `#${activeId}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveLink(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();

      navLinks.forEach((link) => {
        link.classList.remove("nav-link-active");
      });
    };
  }, []);

  return null;
}

export default ActiveNav;