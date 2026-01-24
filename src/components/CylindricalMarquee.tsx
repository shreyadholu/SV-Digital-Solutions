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
    <section className="py-24 relative overflow-hidden bg-void-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-emerald/5 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-neon-emerald text-xs tracking-[0.4em] uppercase font-semibold">
          Technologies We Master
        </p>
        <p className="text-muted-foreground text-sm mt-2">Built with modern, industry-leading tools</p>
      </div>

      {/* Marquee Container */}
      <div className="relative group">
        {/* Enhanced fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 bg-gradient-to-r from-void-black via-void-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 bg-gradient-to-l from-void-black via-void-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-fit group-hover:[animation-play-state:paused]"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 45,
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
                           bg-graphite/20 backdrop-blur-md border border-graphite/40
                           hover:border-neon-emerald/60 hover:bg-graphite/40
                           transition-all duration-300 cursor-default group/item"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(95, 149, 152, 0.4)",
                }}
              >
                <span className="text-2xl group-hover/item:animate-float">{tech.icon}</span>
                <span className="text-foreground text-sm font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-t from-neon-emerald/8 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
};

export default CylindricalMarquee;
