import { useEffect, useRef } from "react";

import "./ScrollProgress.css";

function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressElement = progressRef.current;
    const documentElement =
      document.documentElement;

    if (!progressElement) {
      return undefined;
    }

    let animationFrame = 0;
    let previousValue = -1;

    const renderProgress = () => {
      animationFrame = 0;

      const scrollTop =
        window.scrollY ||
        documentElement.scrollTop ||
        0;

      const scrollHeight =
        documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? Math.min(
              1,
              Math.max(
                0,
                scrollTop / scrollHeight
              )
            )
          : 0;

      progressElement.style.transform =
        `scaleX(${progress})`;

      const roundedValue = Math.round(
        progress * 100
      );

      if (roundedValue !== previousValue) {
        previousValue = roundedValue;

        progressElement.setAttribute(
          "aria-valuenow",
          String(roundedValue)
        );
      }
    };

    const requestProgressUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame =
        window.requestAnimationFrame(
          renderProgress
        );
    };

    requestProgressUpdate();

    window.addEventListener(
      "scroll",
      requestProgressUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      requestProgressUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "sge:content-loaded",
      requestProgressUpdate
    );

    window.addEventListener(
      "sge:refresh-animations",
      requestProgressUpdate
    );

    return () => {
      window.cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "scroll",
        requestProgressUpdate
      );

      window.removeEventListener(
        "resize",
        requestProgressUpdate
      );

      window.removeEventListener(
        "sge:content-loaded",
        requestProgressUpdate
      );

      window.removeEventListener(
        "sge:refresh-animations",
        requestProgressUpdate
      );
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="0"
    />
  );
}

export default ScrollProgress;