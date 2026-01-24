import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Instagram,
  Palette,
  Globe,
  Smartphone,
  Megaphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Social Media Design",
    description:
      "High-engagement creatives built to grow brands and drive action.",
    tags: ["Instagram Posts", "Carousels", "Reels", "Stories"],
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Consistent, premium branding that makes your business instantly recognizable.",
    tags: ["Brand Identity", "Visual Systems", "Consistency"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, fast, and SEO-ready websites built to convert visitors.",
    tags: ["Responsive", "SEO", "UI/UX"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Scalable Android & iOS apps designed for real business use.",
    tags: ["Android", "iOS", "Scalable"],
  },
  {
    icon: Megaphone,
    title: "Ad Creative Design",
    description:
      "Scroll-stopping ad creatives focused on clicks, sales, and ROI.",
    tags: ["Instagram Ads", "E-commerce", "Conversions"],
  },
  {
    icon: Sparkles,
    title: "Custom Digital Solutions",
    description:
      "Tailored digital solutions built around specific business goals.",
    tags: ["Custom", "Strategy", "Growth"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-card/60 backdrop-blur-lg rounded-3xl p-8 border border-border/60 group-hover:border-neon-emerald/40 transition-all duration-500 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-neon-emerald/8 flex items-center justify-center group-hover:bg-neon-emerald/20 transition-all duration-300 border border-neon-emerald/30 group-hover:border-neon-emerald/60 shadow-lg">
          <service.icon className="w-8 h-8 text-neon-emerald" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-neon-emerald transition-colors duration-300 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-base font-light flex-1">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-2 text-xs font-semibold rounded-full bg-neon-emerald/8 text-muted-foreground border border-neon-emerald/30 hover:border-neon-emerald/60 hover:text-neon-emerald transition-all duration-300 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 relative">
      {/* Watermark */}
      <div className="watermark -top-20 -right-20 rotate-12">S</div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Our <span className="text-gradient-emerald">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
