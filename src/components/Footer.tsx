import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Instagram, ArrowUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="py-24 border-t border-border/50 relative overflow-hidden pointer-events-auto z-20 bg-gradient-to-b from-void-black via-void-black to-obsidian"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-emerald/8 to-transparent pointer-events-none" />

      {/* Top Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-neon-emerald/10 to-transparent pointer-events-none blur-3xl" />

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
            <h2 className="text-section mb-6">
              Ready to start
              <span className="block text-gradient-emerald">your project?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Let's create something extraordinary together. Reach out and let's discuss your vision.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
            <h3 className="text-sm font-semibold text-neon-emerald tracking-[0.2em] uppercase mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="space-y-2">
                  {/* Primary mailto link */}
                  <a
                    href="mailto:sv.digi.solution@outlook.com?subject=Inquiry from Website&body=Hi, I'm interested in your digital solutions services."
                    className="flex items-center gap-2 text-muted-foreground hover:text-neon-emerald transition-colors duration-300 font-medium cursor-pointer group"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="group-hover:underline">sv.digi.solution@outlook.com</span>
                  </a>

                  {/* Fallback web email buttons */}
                  <div className="flex gap-2 text-xs ml-6">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sv.digi.solution@outlook.com&su=Inquiry from Website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground/70 hover:text-neon-emerald underline"
                    >
                      Gmail
                    </a>
                    <span className="text-muted-foreground/50">|</span>
                    <a
                      href="https://outlook.office.com/mail/deeplink/compose?to=sv.digi.solution@outlook.com&subject=Inquiry from Website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground/70 hover:text-neon-emerald underline"
                    >
                      Outlook
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sv_digital_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-neon-emerald transition-colors duration-300 font-medium"
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
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 SV Digital Solutions. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-neon-emerald transition-colors duration-300 group font-medium"
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-border group-hover:border-neon-emerald group-hover:bg-neon-emerald/10 transition-all duration-300 flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
