import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  // Stagger animation for form fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen bg-void-black text-foreground relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-40 w-96 h-96 opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(160 100% 50% / 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-96 h-96 opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(160 100% 50% / 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-void-black/60 backdrop-blur-md border-b border-border/30"
      >
        <div className="section-container py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/sv-digi-solution-logo.png"
              alt="SV Digital Solutions"
              className="h-8 md:h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-neon-emerald transition-colors duration-300 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </motion.div>

      <div className="pt-32 pb-20 relative z-10">
        <div className="section-container">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto"
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-emerald/10 border border-neon-emerald/20 mb-6"
                  >
                    <Sparkles className="w-4 h-4 text-neon-emerald" />
                    <span className="text-sm text-neon-emerald font-medium">Let's Create Together</span>
                  </motion.div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6">
                    Get In <span className="text-gradient-emerald">Touch</span>
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Ready to bring your vision to life? Share your ideas and let's create something extraordinary.
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-3">
                      <Label htmlFor="name" className="text-foreground text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-card/40 border-border/40 focus:border-neon-emerald/60 h-14 text-base transition-all duration-300 hover:border-border/60"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-3">
                      <Label htmlFor="email" className="text-foreground text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-card/40 border-border/40 focus:border-neon-emerald/60 h-14 text-base transition-all duration-300 hover:border-border/60"
                      />
                    </motion.div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-3">
                      <Label htmlFor="projectType" className="text-foreground text-sm font-medium">
                        Project Type
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, projectType: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-card/40 border-border/40 focus:border-neon-emerald/60 h-14 text-base transition-all duration-300 hover:border-border/60">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card/95 backdrop-blur-xl border-border">
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="full-development">Full Development</SelectItem>
                          <SelectItem value="brand-identity">Brand Identity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-3">
                      <Label htmlFor="budget" className="text-foreground text-sm font-medium">
                        Budget Range
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-card/40 border-border/40 focus:border-neon-emerald/60 h-14 text-base transition-all duration-300 hover:border-border/60">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-card/95 backdrop-blur-xl border-border">
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div variants={itemVariants} className="space-y-3">
                    <Label htmlFor="message" className="text-foreground text-sm font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vision, timeline, and requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-card/40 border-border/40 focus:border-neon-emerald/60 min-h-[160px] resize-none text-base transition-all duration-300 hover:border-border/60"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      className="btn-primary w-full h-14 flex items-center justify-center gap-3 text-base font-semibold group relative overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-emerald/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </button>
                  </motion.div>
                </motion.form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto text-center py-20"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="w-24 h-24 mx-auto mb-8 rounded-full bg-neon-emerald/10 border-2 border-neon-emerald/30 flex items-center justify-center"
                >
                  <CheckCircle className="w-12 h-12 text-neon-emerald" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                >
                  Thank You!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-muted-foreground text-lg max-w-md mx-auto mb-10"
                >
                  We've received your message! Our team will reach out within 24 hours to discuss your project.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-ghost"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Contact;
