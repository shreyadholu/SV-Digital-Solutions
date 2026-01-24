import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp, Layers, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vaidik Enterprises",
    category: "Construction Website",
    service: "Full Website Development",
    result: "Professional Online Presence",
    description: "Modern construction company website featuring project portfolios, service showcases, and seamless contact integration.",
    image: "/projects/VE.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://vaidik-enterprises.vercel.app/",
  },
  {
    id: 2,
    title: "VastraKalā",
    category: "E-Commerce",
    service: "Custom E-Commerce Platform",
    result: "1000+ Customer Reviews",
    description: "Elegant custom stitching platform for ethnic wear. Features catalog browsing, direct WhatsApp order integration.",
    image: "/projects/vk.png",
    technologies: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
    link: "https://vastrakala.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Application",
    service: "UI/UX & Frontend",
    result: "45% Conversion Increase",
    description: "A modern shopping experience with seamless checkout flow. Built with React and optimized for performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Stripe"],
    link: "#",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Product Design",
    service: "Full Design System",
    result: "30% Churn Reduction",
    description: "Analytics dashboard for enterprise clients featuring real-time data visualization and intuitive navigation controls.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Figma", "React", "D3.js"],
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-neon-emerald/40 hover:bg-card/50 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-void-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-neon-emerald" />
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-neon-emerald transition-colors duration-300">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-secondary/50 hover:bg-neon-emerald text-muted-foreground hover:text-white transition-all duration-300"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/30 border border-border/50 text-[10px] font-medium text-muted-foreground"
            >
              <Code2 className="w-2.5 h-2.5 text-neon-emerald/70" />
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neon-emerald text-xs font-bold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.result}</span>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-foreground hover:text-neon-emerald transition-colors flex items-center gap-1 group/btn"
          >
            Visit Project
            <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-20 relative">
      {/* Watermark */}
      <div className="watermark top-40 -left-32 -rotate-12">V</div>

      <div className="section-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-muted-sage text-sm tracking-[0.3em] uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Our <span className="text-gradient-emerald">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
