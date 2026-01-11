import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Palette, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Pixel-perfect, responsive websites built with modern frameworks. From landing pages to complex web applications.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. We craft intuitive interfaces that elevate your brand and delight users.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: Server,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development with scalable backends, APIs, and database architecture. Your complete digital foundation.",
    tags: ["Node.js", "PostgreSQL", "Cloud"],
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-glow group cursor-pointer"
    >
      <div className="mb-6">
        <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-muted-sage/20 transition-colors duration-300">
          <service.icon className="w-7 h-7 text-muted-sage" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
        {service.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-sage border border-border"
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
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-muted-sage text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Our Services
          </h2>
        </motion.div>

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
