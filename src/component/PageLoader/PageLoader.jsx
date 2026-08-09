import {
  useEffect,
  useRef,
  useState,
} from "react";

import logo from "../../assets/saiyed-logo.webp";

import "./PageLoader.css";

const DESKTOP_LOADER_DURATION = 1500;
const DESKTOP_EXIT_DURATION = 380;

const SESSION_KEY =
  "sge-page-loader-shown";

function shouldShowLoader() {
  if (typeof window === "undefined") {
    return false;
  }

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const mobileOrTouchDevice =
    window.matchMedia(
      "(max-width: 768px), (pointer: coarse)"
    ).matches;

  /*
   * Mobile Lighthouse aur real mobile devices par
   * loader render hi nahi hoga.
   */
  if (
    reduceMotion ||
    mobileOrTouchDevice
  ) {
    return false;
  }

  /*
   * Desktop par bhi loader ek session me
   * sirf pehli baar chalega.
   */
  try {
    return (
      sessionStorage.getItem(
        SESSION_KEY
      ) !== "true"
    );
  } catch {
    return true;
  }
}

function PageLoader() {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const percentageRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(shouldShowLoader);

  const [isLeaving, setIsLeaving] =
    useState(false);

  useEffect(() => {
    /*
     * Mobile/reduced-motion/session repeat me
     * component immediately inactive rahega.
     */
    if (!isVisible) {
      document.body.style.overflow =
        "";

      document.body.style.paddingRight =
        "";

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
    let removeTimer = 0;
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

    const renderProgress = (
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

    const markLoaderAsShown = () => {
      try {
        sessionStorage.setItem(
          SESSION_KEY,
          "true"
        );
      } catch {
        // Storage unavailable ho to
        // website behavior affect nahi hoga.
      }
    };

    const finishLoader = () => {
      if (
        completed ||
        destroyed
      ) {
        return;
      }

      completed = true;

      renderProgress(1);
      markLoaderAsShown();
      setIsLeaving(true);

      removeTimer =
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
        }, DESKTOP_EXIT_DURATION);
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
        1,
        elapsed /
          DESKTOP_LOADER_DURATION
      );

      renderProgress(progress);

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
        removeTimer
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
      className={`intro-loader ${
        isLeaving
          ? "intro-loader--exit"
          : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Saiyed Global Exports 0%"
    >
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
            fetchPriority="high"
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

            <strong>
              With Global Markets
            </strong>
          </p>
        </div>

        <div className="intro-loader__loading-row">
          <div
            className="intro-loader__progress"
            aria-hidden="true"
          >
            <span
              ref={progressRef}
              className="intro-loader__progress-fill"
            />
          </div>

          <span
            ref={percentageRef}
            className="intro-loader__percentage"
          >
            00%
          </span>
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
        {Array.from({
          length: 8,
        }).map((_, index) => (
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