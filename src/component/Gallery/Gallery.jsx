import { useEffect, useState } from "react";
import {
  Expand,
  Globe2,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

import "./Gallery.css"; // final gallery styles

import deliveryBanner from "../../assets/gallery/delivery-banner.webp";
import globalNetworkImage from "../../assets/gallery/gallery-global-network.webp";
import airFreightImage from "../../assets/gallery/gallery-air-freight.webp";
import warehouseImage from "../../assets/gallery/gallery-warehouse-storage.webp";
import qualityInspectionImage from "../../assets/gallery/gallery-quality-inspection.webp";
import domesticTransportImage from "../../assets/gallery/gallery-domestic-transport.webp";
import globalPartnershipImage from "../../assets/gallery/gallery-global-partnership.webp";
import companyLogo from "../../assets/logo/saiyed-logo-no-tagline-transparent.png";

const galleryItems = [
  {
    id: 1,
    number: "01",
    title: "Global Network",
    subtitle: "Connecting Indian products with worldwide markets",
    image: globalNetworkImage,
    icon: Globe2,
  },
  {
    id: 2,
    number: "02",
    title: "Air Freight",
    subtitle: "Fast and dependable international cargo movement",
    image: airFreightImage,
    icon: Plane,
  },
  {
    id: 3,
    number: "03",
    title: "Warehouse Storage",
    subtitle: "Organised and secure product handling solutions",
    image: warehouseImage,
    icon: Warehouse,
  },
  {
    id: 4,
    number: "04",
    title: "Quality Inspection",
    subtitle: "Careful checks before every global shipment",
    image: qualityInspectionImage,
    icon: ShieldCheck,
  },
  {
    id: 5,
    number: "05",
    title: "Domestic Transport",
    subtitle: "Reliable movement from supplier to shipping point",
    image: domesticTransportImage,
    icon: Truck,
  },
  {
    id: 6,
    number: "06",
    title: "Global Partnership",
    subtitle: "Building trusted and lasting business relationships",
    image: globalPartnershipImage,
    icon: PackageCheck,
  },
];

const trustItems = [
  {
    id: 1,
    title: "Global Reach",
    description: "Worldwide trade connections",
    icon: Globe2,
  },
  {
    id: 2,
    title: "Quality Focus",
    description: "Carefully selected products",
    icon: PackageCheck,
  },
  {
    id: 3,
    title: "Secure Trade",
    description: "Reliable export coordination",
    icon: ShieldCheck,
  },
];

export default function Gallery() {
  const [activeItem, setActiveItem] = useState(null);

  const closeLightbox = () => setActiveItem(null);

  const showPreviousImage = () => {
    if (!activeItem) return;

    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeItem.id
    );

    const previousIndex =
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;

    setActiveItem(galleryItems[previousIndex]);
  };

  const showNextImage = () => {
    if (!activeItem) return;

    const currentIndex = galleryItems.findIndex(
      (item) => item.id === activeItem.id
    );

    const nextIndex =
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;

    setActiveItem(galleryItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!activeItem) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <>
      <section id="gallery" className="gallery-final">
        <div className="gallery-final__inner">
          <div className="gallery-final__top">
            <aside className="gallery-final__left">
              <div className="gallery-final__left-content">
                <img
                  className="gallery-final__logo"
                  src={companyLogo}
                  alt="Saiyed Global Exports"
                />

                <span className="gallery-final__eyebrow">
                  India To Global Markets
                </span>

                <h2 className="gallery-final__title">
                  Trade
                  <br />
                  Beyond
                  <span>Boundaries</span>
                </h2>

                <p className="gallery-final__intro">
                  Delivering quality Indian products to global markets through
                  reliable sourcing, professional coordination and trusted
                  partnerships.
                </p>

                <div className="gallery-final__left-bottom">
                  <article className="gallery-final__delivery-card">
                    <span>Saiyed Global Exports</span>

                    <h3>
                      Delivering Indian Quality
                      <em>Across The World</em>
                    </h3>

                    <p>
                      From sourcing and inspection to transport and international
                      coordination, every stage is managed with care.
                    </p>
                  </article>

                  <div className="gallery-final__trust-area">
                    {trustItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div className="gallery-final__trust" key={item.id}>
                          <div className="gallery-final__trust-icon">
                            <Icon size={18} strokeWidth={1.8} />
                          </div>

                          <div>
                            <strong>{item.title}</strong>
                            <small>{item.description}</small>
                          </div>
                        </div>
                      );
                    })}

                    <div className="gallery-final__mission">
                      <div className="gallery-final__mission-icon">
                        <Ship size={20} strokeWidth={1.8} />
                      </div>

                      <div>
                        <strong>Our Mission</strong>
                        <small>
                          To connect dependable Indian suppliers with buyers
                          across international markets.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div
              className="gallery-final__visual"
              style={{ backgroundImage: `url(${deliveryBanner})` }}
            >
              <div className="gallery-final__visual-overlay" />

              <div className="gallery-final__badge">
                <div className="gallery-final__badge-icon">
                  <Globe2 size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <strong>Global Trade</strong>
                  <small>Professional Export Solutions</small>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-final__operations">
            <div className="gallery-final__operations-heading">
              <div>
                <span>Our Operations</span>
                <h3>Inside Our Global Trade Network</h3>
              </div>

              <p>
                Explore the services, systems and partnerships that support our
                export operations.
              </p>
            </div>

            <div className="gallery-final__cards">
              {galleryItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="gallery-final__card" key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      aria-label={`Open ${item.title}`}
                    >
                      <div className="gallery-final__card-image-wrap">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="gallery-final__card-image"
                          loading="lazy"
                        />

                        <span className="gallery-final__number">
                          {item.number}
                        </span>

                        <span className="gallery-final__expand">
                          <Expand size={15} />
                        </span>
                      </div>

                      <div className="gallery-final__card-content">
                        <div className="gallery-final__card-icon">
                          <Icon size={19} strokeWidth={1.8} />
                        </div>

                        <div>
                          <strong>{item.title}</strong>
                          <small>{item.subtitle}</small>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          className="gallery-final-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-final-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="gallery-final-lightbox__nav gallery-final-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="gallery-final-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeItem.image} alt={activeItem.title} />

            <div className="gallery-final-lightbox__caption">
              <span>{activeItem.number}</span>

              <div>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.subtitle}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="gallery-final-lightbox__nav gallery-final-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}