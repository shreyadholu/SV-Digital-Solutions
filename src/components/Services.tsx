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
      className="card-glass group"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-neon-emerald/10 transition-colors duration-300">
          <service.icon className="w-7 h-7 text-neon-emerald" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      {/* Watermark */}
      <div className="watermark -top-20 -right-20 rotate-12">S</div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
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
