import {
  Award,
  Building2,
  Download,
  Eye,
  Globe2,
  Package,
  Phone,
  ShieldCheck,
  Ship,
} from "lucide-react";

import "./CompanyProfile.css";
import companyProfileBook from "../../assets/company-profile/company-profile-book.webp";

const profileFeatures = [
  {
    icon: Package,
    title: "Our Products",
    text: "Wide range of quality Indian products",
  },
  {
    icon: Globe2,
    title: "Export Markets",
    text: "International buyers and global markets",
  },
  {
    icon: Ship,
    title: "Our Services",
    text: "Professional export coordination",
  },
  {
    icon: Building2,
    title: "Company Overview",
    text: "About us, vision and business approach",
  },
  {
    icon: Award,
    title: "Quality Focus",
    text: "Product checks and buyer requirements",
  },
  {
    icon: Phone,
    title: "Contact Details",
    text: "Connect directly with our export team",
  },
];

function CompanyProfile() {
  const handleDownload = () => {
    window.alert("Company Profile PDF will be available soon.");
  };

  const handlePreview = () => {
    document
      .querySelector("#about")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="company-profile" className="company-profile-section">
      <div className="company-profile-container">
        <img
          src={companyProfileBook}
          alt=""
          className="company-profile-background"
          aria-hidden="true"
        />

        <div className="company-profile-overlay" aria-hidden="true" />

        <div className="company-profile-content">
          <div className="company-profile-badge">Company Profile</div>

          <h2>
            Our Company Profile
            <span>Premium Export Guide</span>
          </h2>

          <div className="company-profile-title-line" />

          <p className="company-profile-description">
            Learn more about Saiyed Global Exports, our products, international
            markets, quality-focused sourcing, export capabilities and business
            partnerships.
          </p>

          <div className="company-profile-features">
            {profileFeatures.map(({ icon: Icon, title, text }) => (
              <article className="company-profile-feature" key={title}>
                <div className="company-profile-feature-icon">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="company-profile-actions">
            <button
              type="button"
              className="company-profile-download"
              onClick={handleDownload}
            >
              <Download size={21} strokeWidth={1.9} />
              <span>
                <strong>Download PDF</strong>
                <small>Company Profile</small>
              </span>
            </button>

            <button
              type="button"
              className="company-profile-preview"
              onClick={handlePreview}
            >
              <Eye size={21} strokeWidth={1.8} />
              <span>
                <strong>Preview Online</strong>
                <small>View Company Profile</small>
              </span>
            </button>
          </div>

          <div className="company-profile-meta">
            <span>
              <ShieldCheck size={16} strokeWidth={1.8} />
              Secure PDF
            </span>

            <i />

            <span>Updated Information</span>

            <i />

            <span>Easy To Share</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyProfile;