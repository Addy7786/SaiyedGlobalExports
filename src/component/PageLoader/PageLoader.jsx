import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import logo from "../../assets/saiyed-logo.webp";

import "./PageLoader.css";

const LOADER_DURATION = 2700;
const EXIT_DURATION = 650;

function PageLoader() {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const percentageRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = loaderRef.current;
    const progressElement = progressRef.current;
    const percentageElement = percentageRef.current;

    if (!loader || !progressElement || !percentageElement) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPaddingRight =
      document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(progressElement, {
          scaleX: 1,
        });

        setProgress(100);

        const reducedLeaveTimer = window.setTimeout(() => {
          setIsLeaving(true);
        }, 350);

        const reducedRemoveTimer = window.setTimeout(() => {
          setIsVisible(false);
        }, 520);

        return () => {
          window.clearTimeout(reducedLeaveTimer);
          window.clearTimeout(reducedRemoveTimer);
        };
      }

      const progressState = {
        value: 0,
      };

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          ".intro-loader__emblem",
          {
            autoAlpha: 0,
            scale: 0.72,
            rotation: -5,
          },
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            duration: 0.9,
          }
        )
        .fromTo(
          ".intro-loader__kicker",
          {
            autoAlpha: 0,
            y: 16,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          },
          0.18
        )
        .fromTo(
          ".intro-loader__company > *",
          {
            autoAlpha: 0,
            y: 22,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
          },
          0.27
        )
        .fromTo(
          ".intro-loader__tagline",
          {
            autoAlpha: 0,
            y: 16,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          },
          0.48
        )
        .fromTo(
          ".intro-loader__progress, .intro-loader__percentage, .intro-loader__status",
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.06,
          },
          0.62
        );

      gsap.set(progressElement, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.to(progressElement, {
        scaleX: 1,
        duration: LOADER_DURATION / 1000,
        ease: "power2.inOut",
      });

      gsap.to(progressState, {
        value: 100,
        duration: LOADER_DURATION / 1000,
        ease: "power2.inOut",
        onUpdate: () => {
          const nextProgress = Math.round(progressState.value);
          setProgress(nextProgress);
        },
      });
    }, loader);

    const leaveTimer = window.setTimeout(() => {
      setProgress(100);
      setIsLeaving(true);
    }, LOADER_DURATION);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);

      window.dispatchEvent(
        new CustomEvent("sge:content-loaded", {
          detail: {
            sectionId: "page-loader",
          },
        })
      );
    }, LOADER_DURATION + EXIT_DURATION);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);

      context.revert();

      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight =
        previousBodyPaddingRight;
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={loaderRef}
      className={`intro-loader ${
        isLeaving ? "intro-loader--exit" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Loading Saiyed Global Exports ${progress}%`}
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
            <strong>With Global Markets</strong>
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
            {String(progress).padStart(2, "0")}%
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