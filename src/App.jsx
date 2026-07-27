import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";

import "./App.css";

import { LanguageProvider } from "./Context/LanguageContext";

import SEO from "./component/SEO/SEO";
import Loader from "./component/Loader/Loader";
import ScrollProgress from "./component/ScrollProgress/ScrollProgress";
import CookieConsent from "./component/CookieConsent/CookieConsent";

import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Products from "./component/Products/Products";
import Markets from "./component/Markets/Markets";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";
import Counter from "./component/Counter/Counter";
import Gallery from "./component/Gallery/Gallery";
import Testimonials from "./component/Testimonials/Testimonials";
import FAQ from "./component/FAQ/FAQ";
import Newsletter from "./component/Newsletter/Newsletter";
import CompanyProfile from "./component/CompanyProfile/CompanyProfile";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./component/TermsConditions/TermsConditions";
import Contact from "./component/Contact/Contact";
import GoogleMap from "./component/GoogleMap/GoogleMap";
import NotFound from "./component/NotFound/NotFound";

import Footer from "./component/Footer/Footer";
import FloatingSocial from "./component/FloatingSocial/FloatingSocial";
import WhatsAppButton from "./component/WhatsAppButton/WhatsAppButton";
import ThemeToggle from "./component/ThemeToggle/ThemeToggle";
import BackToTop from "./component/BackToTop/BackToTop";

function HomePage() {
  return (
    <>
      <SEO />

      <Loader />
      <ScrollProgress />
      <CookieConsent />

      <div className="app">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Products />
          <Markets />
          <WhyChooseUs />
          <Counter />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Newsletter />
          <CompanyProfile />
          <PrivacyPolicy />
          <TermsConditions />
          <Contact />
          <GoogleMap />
        </main>

        <Footer />

        <FloatingSocial />
        <WhatsAppButton />
        <ThemeToggle />
        <BackToTop />
      </div>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Saiyed Global Exports"
        description="The requested page could not be found on the Saiyed Global Exports website."
        canonicalUrl="https://www.saiyedglobalexports.com/404"
      />

      <NotFound />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;