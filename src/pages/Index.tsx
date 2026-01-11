import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CylindricalMarquee from "@/components/CylindricalMarquee";
import BentoServices from "@/components/BentoServices";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import PremiumCursor from "@/components/PremiumCursor";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-void-black text-foreground overflow-x-hidden">
      <PremiumCursor />
      <Navigation />
      <Hero onOpenContact={() => setIsContactOpen(true)} />
      <CylindricalMarquee />
      <BentoServices />
      <Process />
      <Portfolio />
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
};

export default Index;