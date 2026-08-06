import { useEffect, useState } from "react";

import logo from "../../assets/saiyed-logo.webp";

import "./PageLoader.css";

function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const minimumLoaderTime = window.setTimeout(() => {
      setIsLeaving(true);

      const removeLoaderTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, 650);

      return () => {
        window.clearTimeout(removeLoaderTimer);
      };
    }, 1450);

    return () => {
      window.clearTimeout(minimumLoaderTime);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`page-loader ${
        isLeaving ? "page-loader--leaving" : ""
      }`}
      role="status"
      aria-label="Loading Saiyed Global Exports"
    >
      <div
        className="page-loader__glow page-loader__glow--one"
        aria-hidden="true"
      />

      <div
        className="page-loader__glow page-loader__glow--two"
        aria-hidden="true"
      />

      <div
        className="page-loader__grid"
        aria-hidden="true"
      />

      <div className="page-loader__content">
        <div className="page-loader__logo-wrap">
          <span
            className="page-loader__orbit page-loader__orbit--one"
            aria-hidden="true"
          />

          <span
            className="page-loader__orbit page-loader__orbit--two"
            aria-hidden="true"
          />

          <span
            className="page-loader__logo-glow"
            aria-hidden="true"
          />

          <img
            src={logo}
            alt="Saiyed Global Exports"
            className="page-loader__logo"
            width="180"
            height="180"
            decoding="async"
            draggable="false"
          />
        </div>

        <div className="page-loader__brand">
          <span className="page-loader__eyebrow">
            India • Global Trade
          </span>

          <h1>
            Saiyed
            <span>Global Exports</span>
          </h1>

          <p>
            Connecting Indian Products With Global Markets
          </p>
        </div>

        <div className="page-loader__progress">
          <span className="page-loader__progress-line" />
        </div>

        <div className="page-loader__status">
          <span className="page-loader__status-dot" />
          Preparing global connections
        </div>
      </div>
    </div>
  );
}

export default PageLoader;