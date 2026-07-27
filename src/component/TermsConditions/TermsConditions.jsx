import {
  FileText,
  Scale,
  ShieldCheck,
  Globe,
  AlertTriangle,
  Mail,
} from "lucide-react";

import "./TermsConditions.css";

function TermsConditions() {
  const terms = [
    {
      icon: FileText,
      title: "Website Usage",
      description:
        "By accessing this website, you agree to use it only for lawful purposes and in accordance with these Terms and Conditions.",
    },
    {
      icon: Globe,
      title: "Information Accuracy",
      description:
        "Product information, specifications and availability are provided for general reference and may change without prior notice.",
    },
    {
      icon: ShieldCheck,
      title: "Intellectual Property",
      description:
        "All website content including text, logos, graphics, images and design remains the property of Saiyed Global Exports unless otherwise stated.",
    },
    {
      icon: Scale,
      title: "Business Transactions",
      description:
        "All quotations, export orders, payments and shipments are subject to separate commercial agreements between both parties.",
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      description:
        "Saiyed Global Exports shall not be liable for indirect, incidental or consequential damages arising from the use of this website.",
    },
    {
      icon: Mail,
      title: "Contact",
      description:
        "For any questions regarding these Terms and Conditions, please contact us via email.",
    },
  ];

  return (
    <section
      className="terms-section"
      id="terms"
    >
      <div className="container">

        <div
          className="terms-heading"
          data-aos="fade-up"
        >
          <span className="terms-tag">
            TERMS & CONDITIONS
          </span>

          <h2>
            Terms & Conditions
          </h2>

          <p>
            Please read these terms carefully before
            using the Saiyed Global Exports website.
          </p>
        </div>

        <div className="terms-grid">

          {terms.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="terms-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="terms-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}

        </div>

        <div
          className="terms-footer"
          data-aos="fade-up"
        >
          <p>
            Continued use of this website indicates
            your acceptance of these Terms &
            Conditions.
          </p>

          <a href="mailto:info@saiyedglobalexports.com">
            info@saiyedglobalexports.com
          </a>
        </div>

      </div>
    </section>
  );
}

export default TermsConditions;