
import Loader from "../components/landing/Loader";
import MouseGlow from "../components/landing/MouseGlow";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import PaymentTicker from "../components/landing/PaymentTicker";
import Services from "../components/landing/Services";
import HowItWorks from "../components/landing/HowItWorks";
import WhyHedera from "../components/landing/WhyHedera";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";


export default function Landing() {
  return (
    <>
      <Loader />
      <MouseGlow />
      <Navbar />
      <br />
      <Hero />
      <PaymentTicker />
      <Services />
      <HowItWorks />
      <WhyHedera />
      <CTA />
      <Footer />
    </>
  );
}