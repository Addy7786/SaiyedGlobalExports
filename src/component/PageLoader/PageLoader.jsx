import { useEffect, useState } from "react";

import logo from "../../assets/saiyed-logo.webp";

import "./PageLoader.css";

function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 2400);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 3100);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
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
      className={`intro-loader ${
        isLeaving ? "intro-loader--exit" : ""
      }`}
      role="status"
      aria-label="Loading Saiyed Global Exports"
    >
      <div
        className="intro-loader__background"
        aria-hidden="true"
      />

      <div
        className="intro-loader__grid"
        aria-hidden="true"
      />

      <div
        className="intro-loader__beam intro-loader__beam--one"
        aria-hidden="true"
      />

      <div
        className="intro-loader__beam intro-loader__beam--two"
        aria-hidden="true"
      />

      <div className="intro-loader__content">
        <div className="intro-loader__emblem">
          <span
            className="intro-loader__orbit intro-loader__orbit--outer"
            aria-hidden="true"
          />

          <span
            className="intro-loader__orbit intro-loader__orbit--inner"
            aria-hidden="true"
          />

          <span
            className="intro-loader__emblem-glow"
            aria-hidden="true"
          />

          <span
            className="intro-loader__sweep"
            aria-hidden="true"
          />

          <img
            src={logo}
            alt="Saiyed Global Exports"
            className="intro-loader__logo"
            width="420"
            height="420"
            decoding="async"
            draggable="false"
          />
        </div>

        <div className="intro-loader__identity">
          <div className="intro-loader__kicker">
            <span />
            India • Global Trade
            <span />
          </div>

          <h1 className="intro-loader__company">
            <span className="intro-loader__saiyed">
              Saiyed
            </span>

            <span className="intro-loader__global">
              Global Exports
            </span>
          </h1>

          <p className="intro-loader__tagline">
            Connecting Indian Products
            <strong>With Global Markets</strong>
          </p>
        </div>

        <div
          className="intro-loader__progress"
          aria-hidden="true"
        >
          <span className="intro-loader__progress-fill" />
        </div>

        <div className="intro-loader__status">
          <span className="intro-loader__status-dot" />
          Establishing Global Connections
        </div>
      </div>

      <div
        className="intro-loader__particles"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className={`intro-loader__particle intro-loader__particle--${
              index + 1
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default PageLoader;