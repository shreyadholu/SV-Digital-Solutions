import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    service: "UI/UX & Frontend",
    result: "Increased conversion by 45%",
    description: "A modern shopping experience with seamless checkout flow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    service: "Full Design System",
    result: "Reduced churn by 30%",
    description: "Analytics dashboard for enterprise clients",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Full-Stack",
    service: "End-to-End Development",
    result: "1M+ downloads in 6 months",
    description: "Secure fintech application with real-time transactions",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Design System",
    service: "Brand Strategy & Design",
    result: "200% brand recognition increase",
    description: "Complete visual identity for tech startup",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    link: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative ${
        index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <div className="block portfolio-image aspect-[16/10] bg-card relative cursor-pointer project-card-hover">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Service badge */}
          <span className="inline-flex items-center gap-1 text-muted-sage text-xs font-medium tracking-wide mb-2 bg-secondary/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
            {project.service}
          </span>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-3">
            {project.description}
          </p>
          
          {/* Result */}
          <div className="flex items-center gap-2 text-muted-sage text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>{project.result}</span>
          </div>
          
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline w-fit"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Corner Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-4 h-4 text-foreground" />
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 relative">
      {/* Watermark */}
      <div className="watermark top-40 -left-32 -rotate-12">V</div>

      <div className="section-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-muted-sage text-sm tracking-[0.3em] uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Our Portfolio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
