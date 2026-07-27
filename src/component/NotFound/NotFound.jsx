import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound-section">

      <div className="notfound-container">

        <div
          className="notfound-content"
          data-aos="zoom-in"
        >
          <span className="error-code">
            404
          </span>

          <h1>
            Oops! Page Not Found
          </h1>

          <p>
            The page you are looking for might have been
            removed, renamed or is temporarily unavailable.
          </p>

          <div className="notfound-buttons">

            <Link
              to="/"
              className="home-btn"
            >
              <Home size={20} />
              Back To Home
            </Link>

            <button
              className="back-btn"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>

          </div>

          <div className="notfound-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search products..."
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default NotFound;