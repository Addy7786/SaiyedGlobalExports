import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

import {
  ChevronRight,
  Globe2,
  Headphones,
  Instagram,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  message: "",
};

const phoneNumber = "917867869243";
const displayPhoneNumber = "+91 786786 9243";

const instagramUrl =
  "https://instagram.com/saiyed_global_exports";

function Contact() {
  const sectionRef = useRef(null);
  const formPanelRef = useRef(null);

  const [formData, setFormData] =
    useState(initialForm);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] =
    useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const formPanel = formPanelRef.current;

    if (!section || !formPanel) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".contact-luxury__info > *, .contact-luxury__card, .contact-luxury__world-card, .contact-luxury__form-panel, .contact-luxury__form > *, .contact-luxury__quick"
        ),
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      introTimeline
        .fromTo(
          ".contact-luxury__eyebrow",
          {
            autoAlpha: 0,
            y: -18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
          }
        )
        .fromTo(
          ".contact-luxury__title > *",
          {
            autoAlpha: 0,
            y: 44,
            rotateX: -12,
            transformOrigin: "50% 100%",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.86,
            stagger: 0.12,
          },
          0.12
        )
        .fromTo(
          ".contact-luxury__title-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.75,
            ease: "power3.inOut",
          },
          0.45
        )
        .fromTo(
          ".contact-luxury__description",
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
          },
          0.52
        );

      gsap.fromTo(
        ".contact-luxury__card",
        {
          autoAlpha: 0,
          y: 30,
          scale: 0.94,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.68,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-luxury__cards",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-luxury__world-card",
        {
          autoAlpha: 0,
          y: 28,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-luxury__world-card",
            start: "top 90%",
            once: true,
          },
        }
      );

      const formTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: formPanel,
          start: "top 84%",
          once: true,
        },
      });

      formTimeline
        .fromTo(
          formPanel,
          {
            autoAlpha: 0,
            x: 62,
            y: 36,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.95,
          }
        )
        .fromTo(
          ".contact-luxury__form-eyebrow, .contact-luxury__form-panel h3, .contact-luxury__form-line, .contact-luxury__form-intro",
          {
            autoAlpha: 0,
            y: 22,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.09,
          },
          0.24
        )
        .fromTo(
          ".contact-luxury__field",
          {
            autoAlpha: 0,
            y: 22,
            scale: 0.97,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.56,
            stagger: 0.07,
          },
          0.5
        )
        .fromTo(
          ".contact-luxury__submit, .contact-luxury__privacy",
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.56,
            stagger: 0.08,
          },
          0.92
        );

      gsap.fromTo(
        ".contact-luxury__quick",
        {
          autoAlpha: 0,
          y: 42,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-luxury__quick",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.to(".contact-luxury__glow--one", {
        x: 65,
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(".contact-luxury__glow--two", {
        x: -60,
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });
    }, section);

    const canTilt =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    const cleanupHandlers = [];

    if (canTilt) {
      const tiltTargets = [
        ...section.querySelectorAll(".contact-luxury__card"),
        section.querySelector(".contact-luxury__world-card"),
        formPanel,
      ].filter(Boolean);

      tiltTargets.forEach((target) => {
        const handleMove = (event) => {
          const bounds = target.getBoundingClientRect();
          const x =
            (event.clientX - bounds.left) / bounds.width - 0.5;
          const y =
            (event.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to(target, {
            rotateY: x * 3.8,
            rotateX: y * -3.2,
            transformPerspective: 1100,
            transformOrigin: "center center",
            duration: 0.42,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleLeave = () => {
          gsap.to(target, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.62,
            ease: "power3.out",
          });
        };

        target.addEventListener("pointermove", handleMove);
        target.addEventListener("pointerleave", handleLeave);

        cleanupHandlers.push(() => {
          target.removeEventListener("pointermove", handleMove);
          target.removeEventListener("pointerleave", handleLeave);
        });
      });
    }

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "sge:refresh-animations",
      handleRefresh
    );

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());

      window.removeEventListener(
        "sge:refresh-animations",
        handleRefresh
      );

      context.revert();
    };
  }, []);

  useEffect(() => {
    if (!status.message) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      gsap.fromTo(
        ".contact-luxury__status",
        {
          autoAlpha: 0,
          y: 10,
          scale: 0.98,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.38,
          ease: "power2.out",
        }
      );
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [status]);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.country.trim() ||
      !formData.product.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message:
          "Please complete all required fields.",
      });

      return;
    }

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          country: formData.country,
          product_requirement: formData.product,
          message: formData.message,
        },
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message:
          "Your enquiry has been sent successfully.",
      });

      setFormData(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Enquiry could not be sent. Please try again or contact us on WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Saiyed Global Exports, I would like to discuss a product requirement."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-luxury"
    >
      <div
        className="contact-luxury__glow contact-luxury__glow--one"
        aria-hidden="true"
      />

      <div
        className="contact-luxury__glow contact-luxury__glow--two"
        aria-hidden="true"
      />

      <div className="contact-luxury__container">
        <div className="contact-luxury__info">
          <div className="contact-luxury__eyebrow">
            <span
              className="contact-luxury__eyebrow-dot"
              aria-hidden="true"
            />

            <span>Let&apos;s Connect</span>
          </div>

          <h2 className="contact-luxury__title">
            Get In Touch With
            <span>Saiyed Global Exports</span>
          </h2>

          <div
            className="contact-luxury__title-line"
            aria-hidden="true"
          />

          <p className="contact-luxury__description">
            We are here to help with product requirements,
            export enquiries and business collaboration.
            Share your requirement and our team will guide
            you through the next steps.
          </p>

          <div className="contact-luxury__cards">
            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <Phone
                  size={27}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>Phone</span>

                <a href={`tel:+${phoneNumber}`}>
                  {displayPhoneNumber}
                </a>

                <small>
                  Monday–Saturday, 10 AM–7 PM
                </small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <Mail
                  size={27}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:info@saiyed-global-exports.com">
                  info@saiyed-global-exports.com
                </a>

                <small>
                  We usually reply within 24 hours
                </small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <MapPin
                  size={28}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>Location</span>

                <strong>
                  Petlad, Anand, Gujarat
                </strong>

                <small>India</small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <MessageCircle
                  size={28}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>WhatsApp</span>

                <button
                  type="button"
                  onClick={openWhatsApp}
                >
                  {displayPhoneNumber}
                </button>

                <small>
                  Fast enquiry support
                </small>
              </div>
            </article>

            <article className="contact-luxury__card">
              <div className="contact-luxury__card-icon">
                <Instagram
                  size={28}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>Instagram</span>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @saiyed_global_exports
                </a>

                <small>
                  Follow our export updates
                </small>
              </div>
            </article>
          </div>

          <div className="contact-luxury__world-card">
            <div className="contact-luxury__world-icon">
              <Globe2
                size={31}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <strong>
                India Based. Globally Focused.
              </strong>

              <span>
                Connecting quality Indian products with
                international buyers.
              </span>
            </div>
          </div>
        </div>

        <div
          ref={formPanelRef}
          className="contact-luxury__form-panel"
        >
          <div className="contact-luxury__form-eyebrow">
            <Send
              size={17}
              strokeWidth={1.8}
            />

            <span>Send Your Requirement</span>
          </div>

          <h3>Send Us Your Enquiry</h3>

          <span
            className="contact-luxury__form-line"
            aria-hidden="true"
          />

          <p className="contact-luxury__form-intro">
            Fill in the form and our team will respond
            with the best available sourcing and export
            support.
          </p>

          <form
            className="contact-luxury__form"
            onSubmit={handleSubmit}
          >
            <label className="contact-luxury__field">
              <UserRound
                size={19}
                strokeWidth={1.7}
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </label>

            <label className="contact-luxury__field">
              <Mail
                size={19}
                strokeWidth={1.7}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </label>

            <label className="contact-luxury__field">
              <Phone
                size={19}
                strokeWidth={1.7}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </label>

            <label className="contact-luxury__field">
              <Globe2
                size={19}
                strokeWidth={1.7}
              />

              <input
                type="text"
                name="country"
                placeholder="Country *"
                value={formData.country}
                onChange={handleChange}
                autoComplete="country-name"
                required
              />
            </label>

            <label className="contact-luxury__field contact-luxury__field--full">
              <Headphones
                size={19}
                strokeWidth={1.7}
              />

              <input
                type="text"
                name="product"
                placeholder="Product Requirement *"
                value={formData.product}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-luxury__field contact-luxury__field--message">
              <MessageCircle
                size={19}
                strokeWidth={1.7}
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            {status.message && (
              <div
                className={`contact-luxury__status contact-luxury__status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="contact-luxury__submit"
              disabled={isSending}
            >
              <Send
                size={20}
                strokeWidth={1.9}
              />

              <span>
                {isSending
                  ? "Sending..."
                  : "Send Enquiry"}
              </span>

              <ChevronRight
                size={19}
                strokeWidth={1.9}
              />
            </button>

            <div className="contact-luxury__privacy">
              <LockKeyhole
                size={15}
                strokeWidth={1.8}
              />

              <span>
                Your information is kept private and
                secure.
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-luxury__quick">
        <div className="contact-luxury__quick-icon">
          <Headphones
            size={29}
            strokeWidth={1.7}
          />
        </div>

        <div>
          <strong>
            Need Quick Assistance?
          </strong>

          <span>
            Our team is ready to help with your
            requirement.
          </span>
        </div>

        <button
          type="button"
          onClick={openWhatsApp}
        >
          <MessageCircle
            size={19}
            strokeWidth={1.8}
          />

          Chat On WhatsApp
        </button>
      </div>
    </section>
  );
}

export default Contact;