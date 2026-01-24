import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, TrendingUp, ArrowRight, Layers, Code2 } from "lucide-react";
import Footer from "@/components/Footer";

const projects = [
    {
        id: 1,
        title: "Vaidik Enterprises",
        category: "Construction Website",
        service: "Full Website Development",
        result: "Professional Online Presence",
        description: "Modern construction company website featuring project portfolios, service showcases, and seamless contact integration. Built for performance and device compatibility.",
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
        description: "Elegant custom stitching platform for ethnic wear. Features catalog browsing, direct WhatsApp order integration, and a seamless mobile-first experience.",
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
        description: "A high-performance shopping experience with seamless checkout flow, optimized for speed and conversion rates.",
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
        description: "Comprehensive analytics dashboard for enterprise clients featuring real-time data visualization and intuitive navigation controls.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Figma", "React", "D3.js"],
        link: "#",
    },
    {
        id: 5,
        title: "Brand Identity System",
        category: "Branding",
        service: "Brand Strategy & Design",
        result: "200% Recognition Boost",
        description: "Complete visual identity for a tech startup including logo design, brand guidelines, typography system, and marketing assets.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        technologies: ["Illustrator", "Figma", "After Effects"],
        link: "#",
    },
    {
        id: 6,
        title: "Mobile Banking App",
        category: "Fintech",
        service: "End-to-End Development",
        result: "1M+ App Downloads",
        description: "Secure fintech application with real-time transaction processing, biometric authentication, and financial planning tools.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        technologies: ["React Native", "Node.js", "PostgreSQL"],
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
            {/* Image Section - Always Visible */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent opacity-60" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-void-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-neon-emerald" />
                    {project.category}
                </div>
            </div>

            {/* Content Section - Always Visible */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-neon-emerald transition-colors duration-300">
                        {project.title}
                    </h3>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/50 hover:bg-neon-emerald text-muted-foreground hover:text-white transition-all duration-300"
                        aria-label={`Visit ${project.title}`}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/30 border border-border/50 text-xs font-medium text-muted-foreground"
                        >
                            <Code2 className="w-3 h-3 text-neon-emerald/70" />
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border/40 flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-wider text-muted-sage font-semibold">Impact</span>
                        <div className="flex items-center gap-2 text-neon-emerald text-sm font-bold">
                            <TrendingUp className="w-4 h-4" />
                            <span>{project.result}</span>
                        </div>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs sm:text-sm px-4 py-2 border-neon-emerald/20 hover:border-neon-emerald/50 hover:bg-neon-emerald/5"
                    >
                        Visit Project
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Work = () => {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    return (
        <main className="min-h-screen bg-void-black text-foreground">
            {/* Navigation */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-void-black/80 backdrop-blur-sm border-b border-border/50">
                <div className="section-container py-5 flex items-center justify-between">
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/sv-digi-solution-logo.png"
                            alt="SV Digital Solutions"
                            className="h-8 md:h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
                        />
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className="pt-24 pb-32">
                <div className="section-container">
                    {/* Header */}
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                            Our <span className="text-gradient-emerald">Portfolio</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                            Explore our latest projects where design meets functionality to create exceptional digital experiences.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mt-20"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Want to see your project here?
                        </h2>
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Work;
