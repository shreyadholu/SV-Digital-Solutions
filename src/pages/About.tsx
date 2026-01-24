import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, Heart, Zap, Users } from "lucide-react";
import Footer from "@/components/Footer";

const values = [
    {
        icon: Target,
        title: "Results-Driven",
        description: "Every project is measured by the impact it creates for your business.",
    },
    {
        icon: Heart,
        title: "Client-Focused",
        description: "Your success is our success. We build long-term partnerships, not just projects.",
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "We stay ahead of trends to bring you cutting-edge solutions.",
    },
    {
        icon: Users,
        title: "Collaborative",
        description: "We work as an extension of your team, transparent and communicative.",
    },
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "3+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
];

const About = () => {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    const storyRef = useRef(null);
    const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

    const valuesRef = useRef(null);
    const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
                        className="text-center mb-20"
                    >
                        <p className="text-muted-sage text-sm tracking-[0.3em] uppercase mb-4">
                            Who We Are
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                            About <span className="text-gradient-emerald">SV Digital</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                            We're a passionate team of designers and developers dedicated to creating exceptional digital experiences.
                        </p>
                    </motion.div>

                    {/* Our Story */}
                    <motion.div
                        ref={storyRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-2 gap-12 items-center mb-24"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                                Our <span className="text-gradient-emerald">Story</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    SV Digital Solutions was founded with a simple mission: to help businesses thrive in the digital age. We believe that great design and technology should be accessible to everyone.
                                </p>
                                <p>
                                    What started as a small team with big dreams has grown into a full-service digital agency. We've worked with startups, established businesses, and everything in between.
                                </p>
                                <p>
                                    Our approach is simple – we listen, we understand, and we deliver. Every project is treated with the same level of dedication and attention to detail, regardless of size.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isStoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/60 text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-gradient-emerald mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Our Values */}
                    <motion.div
                        ref={valuesRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Our <span className="text-gradient-emerald">Values</span>
                            </h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                The principles that guide everything we do.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/60 group-hover:border-neon-emerald/40 transition-all duration-500 h-full">
                                        <div className="w-12 h-12 rounded-xl bg-neon-emerald/10 flex items-center justify-center mb-4 group-hover:bg-neon-emerald/20 transition-all duration-300 border border-neon-emerald/30">
                                            <value.icon className="w-6 h-6 text-neon-emerald" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-neon-emerald transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Ready to work together?
                        </h2>
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default About;
