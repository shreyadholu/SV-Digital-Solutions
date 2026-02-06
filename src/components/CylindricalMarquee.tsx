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
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Subtle green glow background */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent" />

      {/* Section Header - Premium Typography */}
      <div className="text-center mb-16 relative z-5 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400/60 text-xs tracking-[0.3em] uppercase font-light mb-6">
            Our Technology Stack
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white max-w-4xl mx-auto leading-tight">
            Built with the world's most <span className="font-semibold bg-gradient-to-r from-green-400 via-green-400 to-green-400/70 bg-clip-text text-transparent">powerful tools</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 w-fit"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 60,
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
              className="flex-shrink-0 text-white text-lg md:text-xl font-medium tracking-wide"
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400/10 to-transparent" />
    </section>
  );
};

export default CylindricalMarquee;
