import {
  ShieldCheck,
  Database,
  Cookie,
  Mail,
  LockKeyhole,
  UserCheck,
} from "lucide-react";

import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  const policyItems = [
    {
      icon: Database,
      title: "Information We Collect",
      description:
        "We may collect your name, email address, phone number, company name, country, product requirements and other information submitted through our enquiry forms.",
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      description:
        "Your information may be used to respond to enquiries, prepare quotations, communicate about products, process business requests and improve our services.",
    },
    {
      icon: LockKeyhole,
      title: "Information Security",
      description:
        "We take reasonable technical and organisational measures to protect personal information from unauthorised access, loss, misuse or disclosure.",
    },
    {
      icon: Cookie,
      title: "Cookies",
      description:
        "Our website may use essential cookies to remember preferences, improve website functionality and understand how visitors interact with the website.",
    },
    {
      icon: ShieldCheck,
      title: "Third-Party Services",
      description:
        "Some website features may use trusted third-party services such as email providers, analytics tools, map services or hosting platforms. Their own privacy policies may apply.",
    },
    {
      icon: Mail,
      title: "Contact Regarding Privacy",
      description:
        "For questions about this Privacy Policy or your personal information, contact us at info@saiyedglobalexports.com.",
    },
  ];

  return (
    <section
      className="privacy-policy-section"
      id="privacy-policy"
    >
      <div className="privacy-policy-container">
        <div
          className="privacy-policy-heading"
          data-aos="fade-up"
        >
          <span className="privacy-policy-tag">
            <ShieldCheck size={18} />
            PRIVACY POLICY
          </span>

          <h2>Your Privacy Is Important To Us</h2>

          <p>
            This Privacy Policy explains how Saiyed Global Exports may collect,
            use, store and protect information received through this website.
          </p>

          <div className="privacy-policy-date">
            Last updated: July 2026
          </div>
        </div>

        <div className="privacy-policy-grid">
          {policyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="privacy-policy-card"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="privacy-policy-icon">
                  <Icon size={26} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="privacy-policy-note"
          data-aos="fade-up"
        >
          <h3>Your Choices And Rights</h3>

          <p>
            You may request access, correction or deletion of personal
            information that you have submitted to us, subject to applicable
            legal and business record requirements.
          </p>

          <a href="mailto:info@saiyedglobalexports.com">
            Contact Privacy Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;