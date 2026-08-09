import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;

    if (!section || !container || !background || !content) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        section.querySelectorAll(
          ".company-profile-animate, .company-profile-feature, .company-profile-meta > *"
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
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      timeline
        .fromTo(
          container,
          {
            autoAlpha: 0,
            y: 70,
            scale: 0.975,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
          }
        )
        .fromTo(
          background,
          {
            scale: 1.12,
            filter: "brightness(0.65)",
          },
          {
            scale: 1,
            filter: "brightness(1)",
            duration: 1.5,
          },
          0
        )
        .fromTo(
          ".company-profile-badge",
          {
            autoAlpha: 0,
            y: -20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
          },
          0.28
        )
        .fromTo(
          ".company-profile-heading-line",
          {
            autoAlpha: 0,
            y: 48,
            rotateX: -12,
            transformOrigin: "50% 100%",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.13,
          },
          0.36
        )
        .fromTo(
          ".company-profile-title-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0.62
        )
        .fromTo(
          ".company-profile-description",
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
          },
          0.7
        )
        .fromTo(
          ".company-profile-feature",
          {
            autoAlpha: 0,
            y: 32,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.09,
          },
          0.82
        )
        .fromTo(
          ".company-profile-actions > *",
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          1.14
        )
        .fromTo(
          ".company-profile-meta > *",
          {
            autoAlpha: 0,
            y: 14,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
          },
          1.3
        );

      gsap.to(background, {
        yPercent: 7,
        scale: 1.045,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: false,
        },
      });
    }, section);

    const canUsePointerEffects =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth > 900;

    let resetTimer;
    let bounds = null;
    let pointerFrame = 0;
    let latestPointerEvent = null;

    gsap.set(container, {
      transformPerspective: 1400,
      transformOrigin: "center center",
    });

    const containerRotateX = gsap.quickTo(
      container,
      "rotateX",
      {
        duration: 0.8,
        ease: "power3.out",
      }
    );

    const containerRotateY = gsap.quickTo(
      container,
      "rotateY",
      {
        duration: 0.8,
        ease: "power3.out",
      }
    );

    const backgroundX = gsap.quickTo(
      background,
      "x",
      {
        duration: 0.9,
        ease: "power3.out",
      }
    );

    const backgroundY = gsap.quickTo(
      background,
      "y",
      {
        duration: 0.9,
        ease: "power3.out",
      }
    );

    const contentX = gsap.quickTo(
      content,
      "x",
      {
        duration: 0.9,
        ease: "power3.out",
      }
    );

    const contentY = gsap.quickTo(
      content,
      "y",
      {
        duration: 0.9,
        ease: "power3.out",
      }
    );

    const updateBounds = () => {
      if (!canUsePointerEffects) {
        return;
      }

      bounds = container.getBoundingClientRect();
    };

    const renderPointerEffects = () => {
      pointerFrame = 0;

      if (
        !canUsePointerEffects ||
        !latestPointerEvent ||
        !bounds
      ) {
        return;
      }

      const x =
        (latestPointerEvent.clientX -
          bounds.left) /
          bounds.width -
        0.5;

      const y =
        (latestPointerEvent.clientY -
          bounds.top) /
          bounds.height -
        0.5;

      containerRotateY(x * 2.4);
      containerRotateX(y * -2);

      backgroundX(x * -18);
      backgroundY(y * -12);

      contentX(x * 7);
      contentY(y * 5);
    };

    const handlePointerEnter = () => {
      window.clearTimeout(resetTimer);
      updateBounds();
    };

    const handlePointerMove = (event) => {
      if (!canUsePointerEffects) {
        return;
      }

      latestPointerEvent = event;

      if (!bounds) {
        updateBounds();
      }

      if (pointerFrame) {
        return;
      }

      pointerFrame =
        window.requestAnimationFrame(
          renderPointerEffects
        );
    };

    const resetPointerEffects = () => {
      if (!canUsePointerEffects) {
        return;
      }

      window.cancelAnimationFrame(
        pointerFrame
      );

      pointerFrame = 0;
      latestPointerEvent = null;
      bounds = null;

      window.clearTimeout(resetTimer);

      resetTimer = window.setTimeout(() => {
        containerRotateX(0);
        containerRotateY(0);

        backgroundX(0);
        backgroundY(0);

        contentX(0);
        contentY(0);
      }, 80);
    };

    container.addEventListener(
      "pointerenter",
      handlePointerEnter
    );

    container.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    container.addEventListener(
      "pointerleave",
      resetPointerEffects
    );

    return () => {
      window.clearTimeout(resetTimer);
      window.cancelAnimationFrame(
        pointerFrame
      );

      container.removeEventListener(
        "pointerenter",
        handlePointerEnter
      );

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerleave",
        resetPointerEffects
      );

      gsap.killTweensOf(container);
      gsap.killTweensOf(background);
      gsap.killTweensOf(content);

      context.revert();
    };
  }, []);

  const handleDownload = () => {
    window.alert("Company Profile PDF will be available soon.");
  };

  const handlePreview = () => {
    document
      .querySelector("#about")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      ref={sectionRef}
      className="company-profile-section"
      id="company-profile"
    >
      <div
        ref={containerRef}
        className="company-profile-container"
      >
        <img
          ref={backgroundRef}
          className="company-profile-background"
          src={companyProfileBook}
          alt=""
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          draggable="false"
          aria-hidden="true"
        />

        <div
          className="company-profile-overlay"
          aria-hidden="true"
        />

        <div
          ref={contentRef}
          className="company-profile-content"
        >
          <div className="company-profile-badge">
            Company Profile
          </div>

          <h2>
            <span className="company-profile-heading-line company-profile-heading-dark">
              Our Company Profile
            </span>

            <span className="company-profile-heading-line">
              Premium Export Guide
            </span>
          </h2>

          <div
            className="company-profile-title-line"
            aria-hidden="true"
          />

          <p className="company-profile-description">
            Learn more about Saiyed Global Exports, our products,
            international markets, quality-focused sourcing, export
            capabilities and business partnerships.
          </p>

          <div className="company-profile-features">
            {profileFeatures.map(({ icon: Icon, title, text }) => (
              <article
                className="company-profile-feature"
                key={title}
              >
                <div className="company-profile-feature-icon">
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
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
              <Download
                size={21}
                strokeWidth={1.9}
                aria-hidden="true"
              />

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
              <Eye
                size={21}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>
                <strong>Preview Online</strong>
                <small>View Company Profile</small>
              </span>
            </button>
          </div>

          <div className="company-profile-meta">
            <span>
              <ShieldCheck
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              Secure PDF
            </span>

            <i aria-hidden="true" />

            <span>Updated Information</span>

            <i aria-hidden="true" />

            <span>Easy To Share</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyProfile;