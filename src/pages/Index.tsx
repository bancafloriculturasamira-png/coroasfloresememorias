import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-flowers.jpg";
import coroaImperial from "@/assets/coroa-imperial.jpg";
import coroaSerenidade from "@/assets/coroa-serenidade.jpg";
import coroaSaudade from "@/assets/coroa-saudade.jpg";
import coroaCelestial from "@/assets/coroa-celestial.jpg";
import coroaGratidao from "@/assets/coroa-gratidao.jpg";
import coroaEternidade from "@/assets/coroa-eternidade.jpg";
import coroaPazEterna from "@/assets/coroa-paz-eterna.jpg";
import coroaNobreza from "@/assets/coroa-nobreza.jpg";
import coroaMajestade from "@/assets/coroa-majestade.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero heroImage={heroImage} />
        <Catalog 
          images={{
            coroa1: coroaImperial,
            coroa2: coroaSerenidade,
            coroa3: coroaSaudade,
            coroa4: coroaCelestial,
            coroa5: coroaGratidao,
            coroa6: coroaEternidade,
            coroa7: coroaPazEterna,
            coroa8: coroaNobreza,
            coroa9: coroaMajestade,
          }}
        />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
