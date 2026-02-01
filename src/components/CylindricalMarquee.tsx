import { motion } from "framer-motion";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-void-black">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-40 bg-gradient-to-b from-neon-emerald/10 via-neon-emerald/5 to-transparent blur-3xl pointer-events-none" />

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-emerald/5 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20 relative z-5">
        <p className="text-neon-emerald text-xs tracking-[0.4em] uppercase font-semibold">
          Technologies We Master
        </p>
        <p className="text-muted-foreground text-sm mt-3">Built with modern, industry-leading tools</p>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced fade edges - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-48 md:w-64 bg-gradient-to-r from-void-black via-void-black/90 via-void-black/50 to-transparent z-20 pointer-events-none" />
        
        {/* Enhanced fade edges - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-48 md:w-64 bg-gradient-to-l from-void-black via-void-black/90 via-void-black/50 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex gap-6 md:gap-8 w-fit py-2"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 50,
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
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl 
                           bg-gradient-to-br from-graphite/30 to-graphite/10 
                           backdrop-blur-md border border-graphite/50
                           hover:border-neon-emerald/80 hover:bg-gradient-to-br hover:from-graphite/50 hover:to-graphite/20
                           transition-all duration-300 cursor-default group/item
                           shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.12,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(95, 149, 152, 0.3), 0 0 40px rgba(95, 149, 152, 0.2)",
                }}
                whileTap={{ scale: 1.08 }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={isHovered ? { rotate: 12 } : { rotate: 0 }}
                  whileHover={{ 
                    rotate: 24,
                    scale: 1.15,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {tech.icon}
                </motion.span>
                <motion.span 
                  className="text-foreground text-sm font-semibold whitespace-nowrap tracking-wide"
                  whileHover={{ letterSpacing: "0.05em" }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Glowing border effect on hover */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              boxShadow: "inset 0 0 30px rgba(95, 149, 152, 0.2), 0 0 40px rgba(95, 149, 152, 0.15)",
            }}
          />
        )}
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-40 bg-gradient-to-t from-neon-emerald/10 via-neon-emerald/5 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle particle accents */}
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-neon-emerald/20 rounded-full blur-sm pointer-events-none" />
      <div className="absolute top-2/3 right-20 w-1 h-1 bg-neon-emerald/30 rounded-full blur-sm pointer-events-none" />
    </section>
  );
};

export default CylindricalMarquee;
