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
    <section className="py-24 relative overflow-hidden bg-void-black">
      {/* Ambient background glow to match Hero transition */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, hsl(160 100% 50% / 0.05) 0%, transparent 60%)",
        }}
      />



      {/* Section Header - Premium Typography */}
      <div className="text-center mb-5 relative z-10 px-6">
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
      <div 
        className="relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >

        <motion.div
          className="flex gap-12 md:gap-16 w-fit py-4"
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
                         border border-white/10 bg-white/5 backdrop-blur-sm
                         hover:bg-white/10 hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]
                         transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <span className="text-green-400 text-lg">⚡</span>
              <span className="text-white/90 text-lg font-medium tracking-wide">
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
