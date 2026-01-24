import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, TrendingUp, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        service: "UI/UX & Frontend",
        result: "Increased conversion by 45%",
        description: "A modern shopping experience with seamless checkout flow. Built with React and optimized for performance.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "Stripe"],
        link: "#",
    },
    {
        id: 2,
        title: "SaaS Dashboard",
        category: "UI/UX Design",
        service: "Full Design System",
        result: "Reduced churn by 30%",
        description: "Analytics dashboard for enterprise clients with real-time data visualization and intuitive controls.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Figma", "React", "D3.js"],
        link: "#",
    },
    {
        id: 3,
        title: "Mobile Banking App",
        category: "Full-Stack",
        service: "End-to-End Development",
        result: "1M+ downloads in 6 months",
        description: "Secure fintech application with real-time transactions and biometric authentication.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        technologies: ["React Native", "Node.js", "PostgreSQL"],
        link: "#",
    },
    {
        id: 4,
        title: "Brand Identity System",
        category: "Design System",
        service: "Brand Strategy & Design",
        result: "200% brand recognition increase",
        description: "Complete visual identity for tech startup including logo, guidelines, and marketing assets.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        technologies: ["Illustrator", "Figma", "After Effects"],
        link: "#",
    },
    {
        id: 5,
        title: "Restaurant Ordering System",
        category: "Web & Mobile",
        service: "Full-Stack Development",
        result: "40% increase in orders",
        description: "Online ordering platform with real-time kitchen updates and delivery tracking.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        technologies: ["Next.js", "Firebase", "Stripe"],
        link: "#",
    },
    {
        id: 6,
        title: "Fitness Tracking App",
        category: "Mobile Development",
        service: "iOS & Android",
        result: "500K+ active users",
        description: "Health and fitness app with workout tracking, nutrition planning, and social features.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        technologies: ["Flutter", "Firebase", "HealthKit"],
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
            className="group relative"
        >
            <div
                className="block portfolio-image aspect-[16/10] bg-card relative cursor-pointer overflow-hidden rounded-3xl"
                style={{ boxShadow: "0 0 80px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.02)" }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-black/99 via-void-black/70 via-50% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Service badge */}
                    <span
                        className="inline-flex items-center gap-1 text-neon-emerald text-xs font-bold tracking-widest mb-3 bg-neon-emerald/15 backdrop-blur-xl px-4 py-2 rounded-full w-fit border border-neon-emerald/50"
                        style={{ boxShadow: "0 0 20px rgba(95, 149, 152, 0.3)" }}
                    >
                        {project.service}
                    </span>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-2 tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-light">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Result */}
                    <div className="flex items-center gap-2 text-neon-emerald text-sm font-bold tracking-wide">
                        <TrendingUp className="w-4 h-4" />
                        <span>{project.result}</span>
                    </div>
                </div>

                {/* Corner Icon */}
                <div
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neon-emerald/20 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-emerald/50"
                    style={{ boxShadow: "0 0 30px rgba(95, 149, 152, 0.4)" }}
                >
                    <ExternalLink className="w-5 h-5 text-neon-emerald" />
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
                            A selection of projects that showcase our expertise in design and development.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            Want to be our next success story?
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
