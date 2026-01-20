/*  */import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import ParticleSphere from "./ParticleSphere";

interface HeroProps {
  onOpenContact?: () => void;
}

// Stats component
const Stats = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 mt-16 sm:mt-20"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-emerald mb-1">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const Hero = ({ onOpenContact }: HeroProps) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
      {/* 3D Particle Sphere Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-void-black" />}>
        <ParticleSphere />
      </Suspense>

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left light ray */}
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, hsl(160 100% 50% / 0.3) 0%, transparent 70%)",
            transform: "rotate(-15deg)",
          }}
        />
        {/* Bottom glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px]"
          style={{
            background: "radial-gradient(ellipse at center bottom, hsl(160 100% 50% / 0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Logo Watermark */}
      <motion.div 
        className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      >
        SV
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center section-container" 
        style={{ y: contentY, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian/40 backdrop-blur-lg border border-neon-emerald/20 mb-8 shadow-lg"
          style={{
            boxShadow: "0 0 30px rgba(95, 149, 152, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
          }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse shadow-lg" style={{boxShadow: "0 0 10px rgba(95, 149, 152, 0.8)"}} />
          <span className="text-xs text-muted-foreground tracking-widest uppercase font-semibold">
            Digital Excellence
          </span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-hero mb-6 px-4 leading-[1.1]"
        >
          <span className="text-foreground">Building </span>
          <span className="text-gradient-emerald italic inline-block pr-[0.15em] overflow-visible">
              Digital
          </span>

          <br />
          <span className="text-gradient-emerald italic inline-block pr-1">Solutions</span>
          <span className="text-foreground text-3xl md:text-7xl lg:text-8xl"> That Matter</span>
        </motion.h1>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-10 font-light leading-relaxed"
        >
          We handle digital, you handle the business.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate('/contact')}
            className="btn-primary px-4 py-2 sm:px-8 sm:py-4 md:px-10 md:py-4 text-base font-semibold shadow-2xl"
          >
            Start Your Project
          </button>
          <a
            href="#work"
            className="btn-ghost px-4 py-2 sm:px-8 sm:py-4 md:px-10 md:py-4 text-base font-semibold"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <Stats />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;