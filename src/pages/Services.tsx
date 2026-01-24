import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Palette, Globe, Smartphone, Megaphone, Sparkles, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const services = [
    {
        icon: Instagram,
        title: "Social Media Design",
        description: "High-engagement creatives built to grow brands and drive action. We create scroll-stopping content that converts followers into customers.",
        features: ["Instagram Posts & Carousels", "Reels & Stories", "Content Calendars", "Brand Consistency"],
        tags: ["Instagram", "Facebook", "LinkedIn"],
    },
    {
        icon: Palette,
        title: "Brand Identity Design",
        description: "Consistent, premium branding that makes your business instantly recognizable. From logos to complete visual systems.",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Stationery Design"],
        tags: ["Branding", "Identity", "Guidelines"],
    },
    {
        icon: Globe,
        title: "Website Development",
        description: "Modern, fast, and SEO-ready websites built to convert visitors. Responsive designs that work flawlessly across all devices.",
        features: ["Responsive Design", "SEO Optimization", "Performance Focus", "CMS Integration"],
        tags: ["React", "Next.js", "WordPress"],
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Scalable Android & iOS apps designed for real business use. Native and cross-platform solutions that delight users.",
        features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
        tags: ["React Native", "Flutter", "Native"],
    },
    {
        icon: Megaphone,
        title: "Ad Creative Design",
        description: "Scroll-stopping ad creatives focused on clicks, sales, and ROI. Data-driven designs that maximize your ad spend.",
        features: ["Meta Ads", "Google Ads", "A/B Testing", "Performance Analytics"],
        tags: ["PPC", "Social Ads", "Display"],
    },
    {
        icon: Sparkles,
        title: "Custom Digital Solutions",
        description: "Tailored digital solutions built around specific business goals. From automation to custom tools, we build what you need.",
        features: ["Custom Development", "Automation", "Integrations", "Consulting"],
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
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
        >
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

                {/* Features */}
                <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-3 h-3 text-neon-emerald" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
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
                        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
                            What We Do
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                            Our <span className="text-gradient-emerald">Services</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                            We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
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
                            Ready to get started?
                        </h2>
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Let's Talk
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Services;
