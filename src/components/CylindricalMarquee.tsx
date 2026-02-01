import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
  { name: "HTML", icon: "🏗️" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Android", icon: "🤖" },
  { name: "Figma", icon: "✏️" },
  { name: "Git", icon: "🔗" },
];

// Duplicate items multiple times for seamless infinite loop
const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies];

const CylindricalMarquee = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden bg-void-black">
      {/* Ambient top glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-80 bg-gradient-to-b from-neon-emerald/15 via-neon-emerald/5 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-24 relative z-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-neon-emerald text-xs tracking-[0.5em] uppercase font-bold mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies We <span className="text-neon-emerald">Master</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            From cutting-edge frontend frameworks to robust backend solutions
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative group px-6">
        {/* Fade edges - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-void-black via-void-black/70 to-transparent z-20 pointer-events-none" />
        
        {/* Fade edges - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-void-black via-void-black/70 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-10 w-fit py-8"
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
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-4 px-8 py-8 
                           rounded-2xl relative group/item
                           cursor-default transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300
                              bg-gradient-to-br from-neon-emerald/10 to-neon-emerald/5 pointer-events-none" />
                
                {/* Border with glow effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none
                              border border-graphite/40 group-hover/item:border-neon-emerald/60
                              transition-colors duration-300
                              group-hover/item:shadow-[inset_0_0_20px_rgba(95,149,152,0.1),0_0_30px_rgba(95,149,152,0.2)]"
                />

                {/* Icon */}
                <motion.div
                  className="text-4xl md:text-5xl relative z-10 filter drop-shadow-lg"
                  animate={hoveredIndex === index ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  {tech.icon}
                </motion.div>

                {/* Text */}
                <motion.span 
                  className="text-foreground text-sm font-bold whitespace-nowrap tracking-wide relative z-10
                             group-hover/item:text-neon-emerald transition-colors duration-300"
                >
                  {tech.name}
                </motion.span>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-neon-emerald to-transparent
                             group-hover/item:w-12 transition-all duration-300 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom ambient glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1200px] h-80 bg-gradient-to-t from-neon-emerald/10 via-neon-emerald/5 to-transparent blur-3xl pointer-events-none" />

      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-emerald/40 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-neon-emerald/30 rounded-full"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default CylindricalMarquee;
