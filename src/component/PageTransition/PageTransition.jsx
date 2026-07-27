import { useEffect, useState } from "react";
import "./PageTransition.css";

function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 250);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1200);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`page-transition ${
        isVisible ? "page-transition-visible" : "page-transition-hidden"
      }`}
      aria-hidden="true"
    >
      <div className="page-transition-panel page-transition-panel-one" />
      <div className="page-transition-panel page-transition-panel-two" />
      <div className="page-transition-panel page-transition-panel-three" />
    </div>
  );
}

export default PageTransition;