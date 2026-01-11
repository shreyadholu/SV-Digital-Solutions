import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Figma", icon: "🎯" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
];

// Double the array for seamless infinite scroll
const duplicatedTechs = [...technologies, ...technologies];

const TrustBar = () => {
  return (
    <section className="py-16 border-y border-border/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-card/30 to-background" />
      
      <div className="relative z-10">
        <p className="text-center text-muted-foreground text-sm tracking-[0.2em] uppercase mb-10">
          Technologies We Master
        </p>
        
        {/* Marquee Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling content */}
          <motion.div
            className="flex gap-16"
            animate={{
              x: [0, -50 * technologies.length * 8],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground/80 text-lg font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
