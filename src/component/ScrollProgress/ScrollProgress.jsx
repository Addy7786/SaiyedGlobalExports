import { useEffect, useRef } from "react";

import "./ScrollProgress.css";

function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressElement = progressRef.current;

    if (!progressElement) {
      return undefined;
    }

    let animationFrame;

    const updateProgress = () => {
      window.cancelAnimationFrame(animationFrame);

      animationFrame = window.requestAnimationFrame(() => {
        const scrollTop =
          window.scrollY ||
          document.documentElement.scrollTop ||
          0;

        const scrollHeight =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const percentage =
          scrollHeight > 0
            ? Math.min(
                100,
                Math.max(0, (scrollTop / scrollHeight) * 100)
              )
            : 0;

        progressElement.style.transform = `scaleX(${
          percentage / 100
        })`;

        progressElement.setAttribute(
          "aria-valuenow",
          String(Math.round(percentage))
        );
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    window.addEventListener(
      "sge:content-loaded",
      updateProgress
    );

    window.addEventListener(
      "sge:refresh-animations",
      updateProgress
    );

    return () => {
      window.cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );

      window.removeEventListener(
        "sge:content-loaded",
        updateProgress
      );

      window.removeEventListener(
        "sge:refresh-animations",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="scroll-progress-shell"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="0"
    >
      <div
        ref={progressRef}
        className="scroll-progress"
      >
        <span
          className="scroll-progress__light"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default ScrollProgress;