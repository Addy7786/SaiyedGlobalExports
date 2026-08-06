import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.jsx";
import "./index.css";
import "./styles/aos-fix.css";

import { LanguageProvider } from "./Context/LanguageContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

const initializeAnimations = () => {
  AOS.init({
    duration: 760,
    easing: "ease-out-cubic",
    once: true,
    mirror: false,
    offset: 55,
    delay: 0,
    anchorPlacement: "top-bottom",
    disable: false,
  });

  window.requestAnimationFrame(() => {
    AOS.refreshHard();
  });
};

if (document.readyState === "complete") {
  window.setTimeout(initializeAnimations, 0);
} else {
  window.addEventListener("load", initializeAnimations, {
    once: true,
  });
}