import {
  useEffect,
  useRef,
  useState,
} from "react";

import logo from "../../assets/saiyed-logo.webp";

import "./PageLoader.css";

const LOADER_DURATION = 2400;
const EXIT_DURATION = 550;
const COMPLETION_DELAY = 160;

function PageLoader() {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const percentageRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(true);

  const [isLeaving, setIsLeaving] =
    useState(false);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const loader = loaderRef.current;
    const progressElement =
      progressRef.current;
    const percentageElement =
      percentageRef.current;

    if (
      !loader ||
      !progressElement ||
      !percentageElement
    ) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    const previousPaddingRight =
      document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.style.overflow =
      "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight =
        `${scrollbarWidth}px`;
    }

    let animationFrame = 0;
    let completionTimer = 0;
    let exitTimer = 0;
    let loadedEventFrame = 0;

    let startTime = 0;
    let previousPercentage = -1;
    let completed = false;
    let destroyed = false;

    const restoreBody = () => {
      document.body.style.overflow =
        previousOverflow;

      document.body.style.paddingRight =
        previousPaddingRight;
    };

    const dispatchLoadedEvent = () => {
      window.dispatchEvent(
        new CustomEvent(
          "sge:content-loaded",
          {
            detail: {
              sectionId:
                "page-loader",
            },
          }
        )
      );
    };

    const updateProgress = (
      progress
    ) => {
      const safeProgress = Math.min(
        1,
        Math.max(0, progress)
      );

      progressElement.style.transform =
        `scaleX(${safeProgress})`;

      const percentage =
        Math.round(
          safeProgress * 100
        );

      if (
        percentage ===
        previousPercentage
      ) {
        return;
      }

      previousPercentage =
        percentage;

      percentageElement.textContent =
        `${String(
          percentage
        ).padStart(2, "0")}%`;

      loader.setAttribute(
        "aria-label",
        `Loading Saiyed Global Exports ${percentage}%`
      );
    };

    const finishLoader = () => {
      if (
        completed ||
        destroyed
      ) {
        return;
      }

      completed = true;

      updateProgress(1);

      loader.classList.add(
        "gold-loader--complete"
      );

      completionTimer =
        window.setTimeout(() => {
          if (destroyed) {
            return;
          }

          setIsLeaving(true);
        }, COMPLETION_DELAY);

      exitTimer =
        window.setTimeout(() => {
          if (destroyed) {
            return;
          }

          restoreBody();
          setIsVisible(false);

          loadedEventFrame =
            window.requestAnimationFrame(
              dispatchLoadedEvent
            );
        }, COMPLETION_DELAY + EXIT_DURATION);
    };

    const animate = (time) => {
      if (destroyed) {
        return;
      }

      if (!startTime) {
        startTime = time;
      }

      const elapsed =
        time - startTime;

      const progress = Math.min(
        elapsed /
          LOADER_DURATION,
        1
      );

      updateProgress(progress);

      if (progress < 1) {
        animationFrame =
          window.requestAnimationFrame(
            animate
          );

        return;
      }

      finishLoader();
    };

    animationFrame =
      window.requestAnimationFrame(
        animate
      );

    return () => {
      destroyed = true;

      window.cancelAnimationFrame(
        animationFrame
      );

      window.cancelAnimationFrame(
        loadedEventFrame
      );

      window.clearTimeout(
        completionTimer
      );

      window.clearTimeout(
        exitTimer
      );

      restoreBody();
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={loaderRef}
      className={`gold-loader ${
        isLeaving
          ? "gold-loader--exit"
          : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Saiyed Global Exports 0%"
    >
      <div
        className="gold-loader__noise"
        aria-hidden="true"
      />

      <div
        className="gold-loader__ambient gold-loader__ambient--left"
        aria-hidden="true"
      />

      <div
        className="gold-loader__ambient gold-loader__ambient--right"
        aria-hidden="true"
      />

      <div
        className="gold-loader__line gold-loader__line--top"
        aria-hidden="true"
      />

      <div
        className="gold-loader__line gold-loader__line--bottom"
        aria-hidden="true"
      />

      <div
        className="gold-loader__beam gold-loader__beam--one"
        aria-hidden="true"
      />

      <div
        className="gold-loader__beam gold-loader__beam--two"
        aria-hidden="true"
      />

      <div className="gold-loader__content">
        <div className="gold-loader__monogram">
          <span
            className="gold-loader__halo gold-loader__halo--outer"
            aria-hidden="true"
          />

          <span
            className="gold-loader__halo gold-loader__halo--middle"
            aria-hidden="true"
          />

          <span
            className="gold-loader__halo gold-loader__halo--inner"
            aria-hidden="true"
          />

          <span
            className="gold-loader__crosshair gold-loader__crosshair--horizontal"
            aria-hidden="true"
          />

          <span
            className="gold-loader__crosshair gold-loader__crosshair--vertical"
            aria-hidden="true"
          />

          <div className="gold-loader__logo-frame">
            <span
              className="gold-loader__logo-light"
              aria-hidden="true"
            />

            <span
              className="gold-loader__logo-sweep"
              aria-hidden="true"
            />

            <span
              className="gold-loader__logo-sweep gold-loader__logo-sweep--second"
              aria-hidden="true"
            />

            <img
              src={logo}
              alt="Saiyed Global Exports"
              className="gold-loader__logo"
              width="420"
              height="420"
              decoding="async"
              fetchPriority="high"
              draggable="false"
            />
          </div>

          <span
            className="gold-loader__spark gold-loader__spark--one"
            aria-hidden="true"
          />

          <span
            className="gold-loader__spark gold-loader__spark--two"
            aria-hidden="true"
          />

          <span
            className="gold-loader__spark gold-loader__spark--three"
            aria-hidden="true"
          />

          <span
            className="gold-loader__spark gold-loader__spark--four"
            aria-hidden="true"
          />
        </div>

        <div className="gold-loader__identity">
          <div className="gold-loader__eyebrow">
            <span />

            INDIA • GLOBAL TRADE • 2026

            <span />
          </div>

          <h1 className="gold-loader__title">
            <span className="gold-loader__title-saiyed">
              Saiyed
            </span>

            <span className="gold-loader__title-global">
              Global Exports
            </span>
          </h1>

          <div
            className="gold-loader__divider"
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </div>

          <p className="gold-loader__tagline">
            Connecting Indian Products

            <strong>
              With Global Markets
            </strong>
          </p>
        </div>

        <div className="gold-loader__loading">
          <div className="gold-loader__loading-head">
            <span>
              Global Trade Network
            </span>

            <strong
              ref={percentageRef}
            >
              00%
            </strong>
          </div>

          <div className="gold-loader__track">
            <span
              ref={progressRef}
              className="gold-loader__progress"
            />

            <span
              className="gold-loader__track-glow"
              aria-hidden="true"
            />

            <span
              className="gold-loader__tracking-dot"
              aria-hidden="true"
            />
          </div>

          <div className="gold-loader__loading-footer">
            <span className="gold-loader__live-dot" />

            Establishing Secure Connection
          </div>
        </div>
      </div>

      <div
        className="gold-loader__final-flash"
        aria-hidden="true"
      />

      <div
        className="gold-loader__final-ring"
        aria-hidden="true"
      />
    </div>
  );
}

export default PageLoader;