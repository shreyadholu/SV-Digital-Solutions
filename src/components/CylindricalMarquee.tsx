import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Figma", icon: "🎯" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Three.js", icon: "🔺" },
  { name: "Docker", icon: "🐳" },
];

// Duplicate items multiple times for seamless infinite loop
const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies];

const CylindricalMarquee = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-void-black">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-neon-emerald text-xs tracking-[0.4em] uppercase">
          Technologies We Master
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-void-black via-void-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-void-black via-void-black/90 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-fit group-hover:[animation-play-state:paused]"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 40,
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
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full 
                           bg-graphite/30 backdrop-blur-md border border-graphite/50
                           hover:border-neon-emerald/50 hover:bg-graphite/50
                           transition-all duration-300 cursor-default"
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(95, 149, 152, 0.3)",
                }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground text-sm font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-gradient-to-t from-neon-emerald/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
};

export default CylindricalMarquee;
