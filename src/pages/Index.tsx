import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CylindricalMarquee from "@/components/CylindricalMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";


import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-void-black text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <CylindricalMarquee />
      <Services />
      <Process />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Index;