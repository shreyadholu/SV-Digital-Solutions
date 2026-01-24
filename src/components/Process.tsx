import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Code } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business goals, target audience, and competitive landscape to craft a tailored strategy.",
    color: "from-cyan-start/20 to-transparent",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "Our designers create stunning, user-centric interfaces that align with your brand and convert visitors into customers.",
    color: "from-muted-sage/20 to-transparent",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "We build pixel-perfect, performant applications using modern technologies that scale with your business.",
    color: "from-deep-teal/30 to-transparent",
  },
];

const ProcessStep = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
      )}

      <div className="relative z-10 group">
        {/* Background glow */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative bg-card/60 backdrop-blur-lg rounded-3xl p-8 border border-border/60 group-hover:border-neon-emerald/40 transition-all duration-500">
          {/* Step number - enhanced styling */}
          <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-neon-emerald/10 flex items-center justify-center border-2 border-neon-emerald/30 group-hover:border-neon-emerald/80 transition-all duration-300 font-bold text-neon-emerald text-sm">
            {step.number}
          </div>

          {/* Icon - enhanced */}
          <div className="w-16 h-16 rounded-2xl bg-neon-emerald/5 flex items-center justify-center mb-6 group-hover:bg-neon-emerald/15 transition-all duration-300 border border-neon-emerald/20 group-hover:border-neon-emerald/40">
            <step.icon className="w-8 h-8 text-neon-emerald" />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-neon-emerald transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 relative">
      {/* Watermark */}
      <div className="watermark top-20 right-0 translate-x-1/4 rotate-12">P</div>

      <div className="section-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-muted-sage text-sm tracking-[0.3em] uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Our Process
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
