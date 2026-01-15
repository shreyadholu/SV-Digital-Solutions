import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onOpenContact: () => void;
}

const Footer = ({ onOpenContact }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="py-20 border-t border-border relative overflow-hidden pointer-events-auto z-20"
    >
      {/* Background Watermark */}
      <div className="watermark bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
        SV
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
              Ready to start
              <span className="block text-gradient-cyan">your project?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Let's create something extraordinary together. Reach out and let's discuss your vision.
            </p>
            <button
              onClick={onOpenContact}
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Column - Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-8 lg:justify-self-end"
          >
            <div>
              <h3 className="text-sm font-semibold text-muted-sage tracking-[0.2em] uppercase mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {["Services", "Work", "Process", "Contact"].map((item) => (
                  <li key={item}>
                    {item === "Contact" ? (
                      <Link
                        to="/contact"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-sage tracking-[0.2em] uppercase mb-6">
                Connect
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@svdigital.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    hello@svdigital.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/sv_digital_solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 SV Digital Solutions. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-muted-sage group-hover:bg-muted-sage/10 transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
