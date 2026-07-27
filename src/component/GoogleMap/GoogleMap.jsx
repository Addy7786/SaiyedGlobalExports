import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import "./GoogleMap.css";

function GoogleMap() {
  return (
    <section
      className="map-section"
      id="location"
    >
      <div className="container">

        <div
          className="section-title"
          data-aos="fade-up"
        >
          <span>OUR LOCATION</span>

          <h2>Visit Our Office</h2>

          <p>
            We'd love to discuss your import-export
            requirements. Feel free to visit us or
            contact us anytime.
          </p>
        </div>

        <div className="map-wrapper">

          <div
            className="map-card"
            data-aos="fade-right"
          >

            <div className="info-item">
              <MapPin size={22} />
              <div>
                <h4>Address</h4>
                <p>
                  Petlad,
                  Anand,
                  Gujarat,
                  India
                </p>
              </div>
            </div>

            <div className="info-item">
              <Phone size={22} />
              <div>
                <h4>Phone</h4>
                <a href="tel:+917867869243">
                  +91 7867869243
                </a>
              </div>
            </div>

            <div className="info-item">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <a href="mailto:info@saiyedglobalexports.com">
                  info@saiyedglobalexports.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <Clock size={22} />
              <div>
                <h4>Business Hours</h4>
                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

          </div>

          <div
            className="google-map"
            data-aos="fade-left"
          >
            <iframe
              title="Saiyed Global Exports"
              src="https://www.google.com/maps?q=Petlad,Gujarat&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default GoogleMap;