import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import AOS from "aos";

import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";

import BackToTop from "./component/BackToTop/BackToTop";
import CookieConsent from "./component/CookieConsent/CookieConsent";
import CursorGlow from "./component/CursorGlow/CursorGlow";
import CustomCursor from "./component/CustomCursor/CustomCursor";
import FloatingSocial from "./component/FloatingSocial/FloatingSocial";
import ScrollProgress from "./component/ScrollProgress/ScrollProgress";
import WhatsAppButton from "./component/WhatsAppButton/WhatsAppButton";

import "./App.css";

const About = lazy(() =>
  import("./component/About/About")
);

const CompanyProfile = lazy(() =>
  import("./component/CompanyProfile/CompanyProfile")
);

const Products = lazy(() =>
  import("./component/Products/Products")
);

const Markets = lazy(() =>
  import("./component/Markets/Markets")
);

const WhyChooseUs = lazy(() =>
  import("./component/WhyChooseUs/WhyChooseUs")
);

const Gallery = lazy(() =>
  import("./component/Gallery/Gallery")
);

const Testimonials = lazy(() =>
  import("./component/Testimonials/Testimonials")
);

const FAQ = lazy(() =>
  import("./component/FAQ/FAQ")
);

const Contact = lazy(() =>
  import("./component/Contact/Contact")
);

const Newsletter = lazy(() =>
  import("./component/Newsletter/Newsletter")
);

const Footer = lazy(() =>
  import("./component/Footer/Footer")
);

function SectionFallback({ minHeight = 500 }) {
  return (
    <div
      className="section-loading-space"
      style={{
        width: "100%",
        minHeight: `${minHeight}px`,
      }}
      aria-hidden="true"
    />
  );
}

function DeferredSection({
  id,
  children,
  minHeight = 600,
  rootMargin = "850px 0px",
}) {
  const sectionRef = useRef(null);

  const [shouldRender, setShouldRender] =
    useState(false);

  useEffect(() => {
    const checkCurrentHash = () => {
      const currentHash =
        window.location.hash.replace("#", "");

      if (currentHash === id) {
        setShouldRender(true);
      }
    };

    checkCurrentHash();

    window.addEventListener(
      "hashchange",
      checkCurrentHash
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        checkCurrentHash
      );
    };
  }, [id]);

  useEffect(() => {
    if (shouldRender) {
      return undefined;
    }

    const currentElement = sectionRef.current;

    if (!currentElement) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.01,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, shouldRender]);

  useEffect(() => {
    if (!shouldRender) {
      return undefined;
    }

    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 180);

    return () => {
      window.clearTimeout(refreshTimer);
    };
  }, [shouldRender]);

  return (
    <div
      ref={sectionRef}
      id={shouldRender ? undefined : id}
      className="deferred-section"
      style={{
        width: "100%",
        minHeight: shouldRender
          ? undefined
          : `${minHeight}px`,
      }}
    >
      {shouldRender ? (
        <Suspense
          fallback={
            <SectionFallback minHeight={minHeight} />
          }
        >
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

function App() {
  useEffect(() => {
    const refreshAnimations = () => {
      window.setTimeout(() => {
        AOS.refreshHard();
      }, 120);
    };

    window.addEventListener(
      "resize",
      refreshAnimations
    );

    return () => {
      window.removeEventListener(
        "resize",
        refreshAnimations
      );
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <CursorGlow />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <DeferredSection
          id="about"
          minHeight={780}
          rootMargin="950px 0px"
        >
          <About />
        </DeferredSection>

        <DeferredSection
          id="company-profile"
          minHeight={760}
          rootMargin="850px 0px"
        >
          <CompanyProfile />
        </DeferredSection>

        <DeferredSection
          id="products"
          minHeight={1400}
          rootMargin="800px 0px"
        >
          <Products />
        </DeferredSection>

        <DeferredSection
          id="markets"
          minHeight={1400}
          rootMargin="800px 0px"
        >
          <Markets />
        </DeferredSection>

        <DeferredSection
          id="why-us"
          minHeight={900}
          rootMargin="750px 0px"
        >
          <WhyChooseUs />
        </DeferredSection>

        <DeferredSection
          id="gallery"
          minHeight={900}
          rootMargin="750px 0px"
        >
          <Gallery />
        </DeferredSection>

        <DeferredSection
          id="testimonials"
          minHeight={700}
          rootMargin="700px 0px"
        >
          <Testimonials />
        </DeferredSection>

        <DeferredSection
          id="faq"
          minHeight={700}
          rootMargin="700px 0px"
        >
          <FAQ />
        </DeferredSection>

        <DeferredSection
          id="contact"
          minHeight={850}
          rootMargin="700px 0px"
        >
          <Contact />
        </DeferredSection>

        <DeferredSection
          id="newsletter"
          minHeight={400}
          rootMargin="650px 0px"
        >
          <Newsletter />
        </DeferredSection>
      </main>

      <DeferredSection
        id="footer"
        minHeight={600}
        rootMargin="650px 0px"
      >
        <Footer />
      </DeferredSection>

      <FloatingSocial />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

export default App;