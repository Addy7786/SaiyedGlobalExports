import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import CompanyProfile from "./component/CompanyProfile/CompanyProfile";
import Products from "./component/Products/Products";
import Markets from "./component/Markets/Markets";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";
import Gallery from "./component/Gallery/Gallery";
import FAQ from "./component/FAQ/FAQ";
import Contact from "./component/Contact/Contact";
import Newsletter from "./component/Newsletter/Newsletter";
import Footer from "./component/Footer/Footer";

import BackToTop from "./component/BackToTop/BackToTop";
import CookieConsent from "./component/CookieConsent/CookieConsent";
import FloatingSocial from "./component/FloatingSocial/FloatingSocial";
import ScrollProgress from "./component/ScrollProgress/ScrollProgress";
import ScrollReveal from "./component/ScrollReveal/ScrollReveal";
import WhatsAppButton from "./component/WhatsAppButton/WhatsAppButton";

import "./App.css";

function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollReveal />

      <Navbar />

      <main>
        <Hero />
        <About />
        <CompanyProfile />
        <Products />
        <Markets />
        <WhyChooseUs />
        <Gallery />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>

      <Footer />

      <FloatingSocial />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

export default App;