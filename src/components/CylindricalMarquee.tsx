import { motion } from "framer-motion";

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

// Duplicate items for seamless infinite loop
const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies];

const CylindricalMarquee = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-void-black">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-emerald/20 to-transparent" />

      {/* Section Header - Premium Typography */}
      <div className="text-center mb-32 relative z-5 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-neon-emerald/60 text-xs tracking-[0.3em] uppercase font-light mb-6">
            Our Technology Stack
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground max-w-4xl mx-auto leading-tight">
            Built with the world's most <span className="font-semibold bg-gradient-to-r from-neon-emerald via-neon-emerald to-neon-emerald/70 bg-clip-text text-transparent">powerful tools</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative group w-full">
        {/* Premium fade edges - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-64 md:w-80 bg-gradient-to-r from-void-black via-void-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Premium fade edges - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-64 md:w-80 bg-gradient-to-l from-void-black via-void-black/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Content */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16 w-fit py-12"
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
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-4 cursor-default group/item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* Premium pill design */}
                <div className="relative px-6 md:px-8 py-4 rounded-full
                               border border-graphite/30 
                               hover:border-neon-emerald/40
                               transition-all duration-500
                               group-hover/item:bg-graphite/5
                               group-hover/item:shadow-[0_0_40px_rgba(95,149,152,0.15)]">
                  
                  {/* Subtle background glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, rgba(95, 149, 152, 0.1) 0%, transparent 70%)",
                    }}
                  />

                  {/* Content */}
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.span
                      className="text-2xl md:text-3xl"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      {tech.icon}
                    </motion.span>
                    <span className="text-foreground/90 font-medium text-sm md:text-base tracking-wide group-hover/item:text-neon-emerald/80 transition-colors duration-500">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements - minimal and premium */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-emerald/10 to-transparent" />

      {/* Floating ambient particles */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-neon-emerald/20 rounded-full"
        animate={{
          y: [-50, 50, -50],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-neon-emerald/10 rounded-full"
        animate={{
          y: [30, -30, 30],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default CylindricalMarquee;
