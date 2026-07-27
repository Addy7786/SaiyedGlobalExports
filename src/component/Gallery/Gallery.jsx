import "./Gallery.css";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">

        <div
          className="section-title"
          data-aos="fade-up"
        >
          <span>OUR GALLERY</span>

          <h2>
            Export Excellence In Every Shipment
          </h2>

          <p>
            A glimpse of our products, packaging,
            quality inspection and worldwide export
            operations.
          </p>
        </div>

        <div className="gallery-grid">

          {images.map((image, index) => (

            <div
              key={index}
              className="gallery-card"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
              />
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;