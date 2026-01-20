  import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowLeft } from "lucide-react";
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
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        subject: `New Contact Form Submission from ${formData.name}`,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-void-black text-foreground">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-void-black/80 backdrop-blur-sm border-b border-border/50">
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
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Get In <span className="text-gradient-emerald">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="card-glass p-8 md:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-secondary/30 border-border/50 focus:border-neon-emerald h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
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
                        className="bg-secondary/30 border-border/50 focus:border-neon-emerald h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-foreground">
                        Project Type *
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, projectType: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-neon-emerald h-12">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="full-development">
                            Full Development
                          </SelectItem>
                          <SelectItem value="brand-identity">Brand Identity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-foreground">
                        Budget Range *
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-neon-emerald h-12">
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-secondary/30 border-border/50 focus:border-neon-emerald min-h-[120px] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    <Send className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 card-glass"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted-sage/20 flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-muted-sage" />
                </motion.div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Thank You!
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We've received your message! Our team will reach out within 24 hours to discuss your project.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-ghost"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
