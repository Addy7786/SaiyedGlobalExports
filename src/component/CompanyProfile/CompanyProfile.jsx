import {
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";
import "./CompanyProfile.css";

function CompanyProfile() {
  return (
    <section
      className="company-profile-section"
      id="company-profile"
    >
      <div className="container">

        <div
          className="profile-card"
          data-aos="zoom-in"
        >

          <div className="profile-icon">
            <FileText size={55} />
          </div>

          <div className="profile-content">

            <span className="profile-tag">
              COMPANY PROFILE
            </span>

            <h2>
              Download Our Company Profile
            </h2>

            <p>
              Learn more about Saiyed Global Exports,
              our products, international markets,
              quality standards, export capabilities
              and business partnerships.
            </p>

            <div className="profile-buttons">

              <a
                href="/Saiyed-Global-Exports-Profile.pdf"
                download
                className="download-btn"
              >
                <Download size={20} />

                Download PDF
              </a>

              <a
                href="#contact"
                className="contact-btn"
              >
                Contact Us

                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CompanyProfile;