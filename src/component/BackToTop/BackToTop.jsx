import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";

import "./BackToTop.css";

function BackToTop() {
  const buttonRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateState = () => {
      window.cancelAnimationFrame(animationFrame);

      animationFrame = window.requestAnimationFrame(() => {
        const scrollTop =
          window.scrollY ||
          document.documentElement.scrollTop ||
          0;

        const scrollHeight =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const nextProgress =
          scrollHeight > 0
            ? Math.min(
                100,
                Math.max(0, (scrollTop / scrollHeight) * 100)
              )
            : 0;

        setVisible(scrollTop > 420);
        setProgress(nextProgress);
      });
    };

    updateState();

    window.addEventListener("scroll", updateState, {
      passive: true,
    });

    window.addEventListener("resize", updateState);

    return () => {
      window.cancelAnimationFrame(animationFrame);

      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) {
      return undefined;
    }

    gsap.killTweensOf(button);

    gsap.to(button, {
      autoAlpha: visible ? 1 : 0,
      y: visible ? 0 : 18,
      scale: visible ? 1 : 0.9,
      duration: visible ? 0.38 : 0.26,
      ease: visible ? "back.out(1.7)" : "power2.in",
      pointerEvents: visible ? "auto" : "none",
    });

    return () => {
      gsap.killTweensOf(button);
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="back-to-top"
      onClick={scrollToTop}
      aria-label={`Back to top. Page scrolled ${Math.round(
        progress
      )} percent`}
      title="Back to top"
      style={{
        "--back-progress": `${progress * 3.6}deg`,
      }}
    >
      <span
        className="back-to-top__progress"
        aria-hidden="true"
      />

      <span className="back-to-top__core">
        <ArrowUp
          size={21}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>

      <span className="back-to-top__percentage">
        {Math.round(progress)}%
      </span>
    </button>
  );
}

export default BackToTop;