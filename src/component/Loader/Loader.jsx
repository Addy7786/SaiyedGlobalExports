import { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen">
      <div className="loader-content">
        <div className="loader-logo">
          <span>S</span>
        </div>

        <h1>Saiyed Global Exports</h1>

        <p>Connecting India With Global Markets</p>

        <div className="loader-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;