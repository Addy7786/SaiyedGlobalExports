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

const root = createRoot(rootElement);

root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

/* =========================================================
   AOS
   Existing animation appearance/timing preserved.
========================================================= */

let aosInitialized = false;

const initializeAnimations = () => {
  if (aosInitialized) {
    return;
  }

  aosInitialized = true;

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

  /*
   * IMPORTANT:
   * Do NOT call AOS.refreshHard() here.
   *
   * AOS.init() already performs its initial setup.
   * refreshHard() immediately afterwards causes another
   * full AOS element scan and unnecessary style/layout work.
   */
};

if (document.readyState === "complete") {
  initializeAnimations();
} else {
  window.addEventListener(
    "load",
    initializeAnimations,
    {
      once: true,
      passive: true,
    }
  );
}