import { useEffect, useRef } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return undefined;
    }

    const canUsePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canUsePointer) {
      return undefined;
    }

    let animationFrame;

    const handleMouseMove = (event) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        glow.classList.add("cursor-glow-visible");
      });
    };

    const handleMouseLeave = () => {
      glow.classList.remove("cursor-glow-visible");
    };

    const handleMouseEnter = () => {
      glow.classList.add("cursor-glow-visible");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;