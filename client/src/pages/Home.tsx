import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <CallToAction />
        <Pricing />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
