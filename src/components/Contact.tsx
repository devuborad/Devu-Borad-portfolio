import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, MapPin, GraduationCap, Github, Linkedin, Sparkles, CheckCircle2 } from "lucide-react";
import { heroDetails } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate real API dispatch lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute right-10 top-1/2 w-[300px] h-[300px] rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-red-500 uppercase tracking-widest mb-2"
        >
          <Mail className="w-4 h-4" />
          <span>Connect</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Get In <span className="text-red-500">Touch</span>
        </motion.h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl glass-panel-glow border border-white/5 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl pointer-events-none" />

          <div className="grow">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span>Send a message</span>
            </h3>

            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-2xl bg-red-950/20 border border-red-500/25 p-6 text-center space-y-4 my-8"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Your submission has been simulated. I will respond to your email as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-2 px-5 py-2 rounded-full bg-[#121217] hover:bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/40 border border-white/5 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 text-sm text-white placeholder-neutral-600 transition-all font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/40 border border-white/5 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 text-sm text-white placeholder-neutral-600 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Question"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/40 border border-white/5 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 text-sm text-white placeholder-neutral-600 transition-all font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/40 border border-white/5 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 text-sm text-white placeholder-neutral-600 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-orange-600 disabled:from-red-950 disabled:to-neutral-900 text-white font-medium text-sm transition-all shadow-lg shadow-red-950/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 border border-red-500/20"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column: Contact Details & Social Handles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Contact Cards Info */}
          <div className="rounded-3xl glass-panel-glow border border-white/5 p-6 sm:p-8 space-y-6 grow flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
              Contact Information
            </h3>
            
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Feel free to drop an email or connect through LinkedIn. I am always open to discussing new software opportunities, collaborative dev-work, or engineering topics.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Detail */}
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-neutral-950/30 border border-white/5">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Email Address</h4>
                  <a href={`mailto:${heroDetails.email}`} className="text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors">
                    {heroDetails.email}
                  </a>
                </div>
              </div>

              {/* University Detail */}
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-neutral-950/30 border border-white/5">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">University</h4>
                  <p className="text-xs sm:text-sm font-medium text-white leading-tight">
                    {heroDetails.university}
                  </p>
                </div>
              </div>

              {/* Geographic Coordinates */}
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-neutral-950/30 border border-white/5">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Geographic Region</h4>
                  <p className="text-xs sm:text-sm font-medium text-white">
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Platforms */}
          <div className="rounded-3xl glass-panel-glow border border-white/5 p-6 sm:p-8 flex items-center justify-around">
            <a
              href={heroDetails.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/5 group-hover:border-red-500/40 flex items-center justify-center text-neutral-400 group-hover:text-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] transition-all duration-300">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">GitHub</span>
            </a>

            <a
              href={heroDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/5 group-hover:border-red-500/40 flex items-center justify-center text-neutral-400 group-hover:text-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] transition-all duration-300">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">LinkedIn</span>
            </a>

            <a
              href={`mailto:${heroDetails.email}`}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/5 group-hover:border-red-500/40 flex items-center justify-center text-neutral-400 group-hover:text-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] transition-all duration-300">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">Email</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Recruiter-ready Portfolio Footer */}
      <footer className="mt-24 pt-8 border-t border-white/5 text-center space-y-2 select-none">
        <p className="text-xs text-neutral-500 font-mono">
          &copy; 2026 Devu Borad. All rights reserved.
        </p>
        <p className="text-[10px] text-neutral-600 font-mono tracking-wide">
          Designed & built with React &bull; Tailwind CSS &bull; motion
        </p>
      </footer>
    </section>
  );
}
