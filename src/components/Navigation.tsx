import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  onOpenContact: () => void;
}

const Navigation = ({ onOpenContact }: NavigationProps) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "nav-glass"
          : "bg-transparent"
          }`}
      >
        <nav className="section-container py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold tracking-tighter">
              <span className="text-foreground group-hover:text-neon-emerald transition-colors duration-300">SV</span>
              <span className="text-gradient-emerald">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-muted-foreground hover:text-neon-emerald transition-colors duration-300 text-sm font-semibold tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-neon-emerald to-neon-emerald/50 transition-all duration-400 group-hover:w-full rounded-full" />
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="btn-ghost text-sm py-3 px-6 border-neon-emerald/30 hover:border-neon-emerald"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-neon-emerald transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden nav-glass"
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-base font-medium py-2 hover:text-neon-emerald transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/contact');
              }}
              className="btn-primary text-center mt-4"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      </motion.header>

    </>
  );
};

export default Navigation;