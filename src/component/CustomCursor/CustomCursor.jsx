import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!finePointer) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      dot.classList.add("custom-cursor-visible");
      ring.classList.add("custom-cursor-visible");
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      animationFrame = requestAnimationFrame(animateRing);
    };

    const hideCursor = () => {
      dot.classList.remove("custom-cursor-visible");
      ring.classList.remove("custom-cursor-visible");
    };

    const showCursor = () => {
      dot.classList.add("custom-cursor-visible");
      ring.classList.add("custom-cursor-visible");
    };

    const handlePointerOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (interactiveElement) {
        dot.classList.add("custom-cursor-hover");
        ring.classList.add("custom-cursor-hover");
      }
    };

    const handlePointerOut = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (interactiveElement) {
        dot.classList.remove("custom-cursor-hover");
        ring.classList.remove("custom-cursor-hover");
      }
    };

    document.documentElement.classList.add("custom-cursor-enabled");

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    animateRing();

    return () => {
      cancelAnimationFrame(animationFrame);

      document.documentElement.classList.remove("custom-cursor-enabled");

      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;