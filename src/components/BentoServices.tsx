import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Palette, Server, Sparkles, Zap, Code2 } from "lucide-react";
import MouseSpotlight from "./MouseSpotlight";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Pixel-perfect, responsive websites built with modern frameworks.",
    tags: ["React", "Next.js", "TypeScript"],
    size: "medium", // spans 1 column
    accent: "emerald",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts.",
    tags: ["Figma", "Prototyping"],
    size: "medium",
    accent: "gold",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times.",
    tags: ["Core Vitals", "SEO"],
    size: "small",
    accent: "emerald",
  },
  {
    icon: Server,
    title: "Full-Stack Solutions",
    description: "End-to-end development with scalable backends and APIs.",
    tags: ["Node.js", "PostgreSQL", "Cloud"],
    size: "medium",
    accent: "emerald",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Smart automation and ML features.",
    tags: ["OpenAI", "LLMs"],
    size: "small",
    accent: "gold",
  },
  {
    icon: Code2,
    title: "Custom Solutions",
    description: "Tailored applications for your unique needs.",
    tags: ["APIs", "Integrations"],
    size: "medium",
    accent: "emerald",
  },
];

const BentoCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getSizeClasses = () => {
    switch (service.size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "";
    }
  };

  const accentColor = service.accent === "gold" 
    ? "group-hover:border-warm-gold/60 group-hover:shadow-[0_0_40px_hsl(45_100%_55%_/_0.2)]"
    : "group-hover:border-neon-emerald/60 group-hover:shadow-[0_0_40px_hsl(160_100%_50%_/_0.2)]";

  const iconBg = service.accent === "gold"
    ? "bg-warm-gold/10 text-warm-gold"
    : "bg-neon-emerald/10 text-neon-emerald";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group cursor-pointer ${getSizeClasses()}`}
    >
      <div className={`bento-card h-full p-6 md:p-8 ${accentColor} transition-all duration-500`}>
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, hsl(160 100% 50% / 0.1) 0%, transparent 60%)`
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110`}>
            <service.icon className="w-6 h-6 md:w-7 md:h-7" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3 tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-graphite/50 text-silver border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoServices = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      {/* Watermark */}
      <div className="watermark -top-40 -right-40 rotate-12">S</div>

      <MouseSpotlight className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-neon-emerald text-xs tracking-[0.4em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Our <span className="text-gradient-emerald">Services</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <BentoCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </MouseSpotlight>
    </section>
  );
};

export default BentoServices;