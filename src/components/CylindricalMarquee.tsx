import { motion } from "framer-motion";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Framer Motion",
  "Java",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
  "UI/UX",
  "Figma",
  "REST APIs",
  "AI-Assisted Development"
];

// Duplicate for infinite loop
const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies];

const CylindricalMarquee = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Section Header - Premium Typography */}
      <div className="text-center mb-20 relative z-5 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400/60 text-xs tracking-[0.3em] uppercase font-light mb-8">
            Our Technology Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white max-w-3xl mx-auto leading-tight">
            Built with the world's most <span className="font-semibold bg-gradient-to-r from-green-400 via-green-400 to-green-400/70 bg-clip-text text-transparent">powerful tools</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent z-10" />

        <motion.div
          className="flex gap-12 md:gap-16 w-fit py-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 80,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{
            willChange: "transform",
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full
                         border border-green-400/20 bg-green-400/5
                         hover:bg-green-400/10 hover:border-green-400/40
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <span className="text-green-400 text-sm">⚡</span>
              <span className="text-white text-lg md:text-xl font-medium tracking-wide">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CylindricalMarquee;
