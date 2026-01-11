import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form after close animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", projectType: "", budget: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, hsl(199 58% 15% / 0.9), hsl(198 78% 12% / 0.95))",
              backdropFilter: "blur(20px)",
              border: "1px solid hsl(199 40% 30% / 0.5)",
              boxShadow: "0 25px 50px -12px hsl(198 78% 5% / 0.5), inset 0 1px 0 hsl(182 23% 48% / 0.1)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                        Start Your Project
                      </h3>
                      <p className="text-muted-foreground">
                        Tell us about your vision and we'll bring it to life.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="bg-secondary/30 border-border/50 focus:border-muted-sage h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="bg-secondary/30 border-border/50 focus:border-muted-sage h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-foreground">
                          Project Type
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, projectType: value })
                          }
                          required
                        >
                          <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-muted-sage h-12">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="web-design">Web Design</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="full-development">
                              Full Development
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-foreground">
                          Budget Range
                        </Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData({ ...formData, budget: value })
                          }
                          required
                        >
                          <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-muted-sage h-12">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k+">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                        <span>Submit Request</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted-sage/20 flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-muted-sage" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      We've received your request! Our team will reach out within 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary/30 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
