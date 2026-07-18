import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { heroDetails } from "../data/portfolioData";

export default function Hero() {
  const nameLetters = Array.from(heroDetails.name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-24 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl w-full text-center z-10 flex flex-col items-center">
        {/* Academic status tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/20 backdrop-blur-md flex items-center gap-2 text-xs sm:text-sm text-red-400 font-mono tracking-wider uppercase font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          {heroDetails.title}
        </motion.div>

        {/* Name with typography stagger reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold font-display tracking-tight leading-none text-white select-none relative mb-4"
        >
          {nameLetters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`inline-block ${
                char === " " ? "mr-4 sm:mr-6" : ""
              } bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent hover:text-red-500 transition-colors duration-300`}
              style={{
                textShadow: "0 0 40px rgba(239, 68, 68, 0.1)",
              }}
            >
              {char}
            </motion.span>
          ))}
          {/* Animated red glow dot */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="text-red-500 inline-block drop-shadow-[0_0_15px_#ef4444]"
          >
            .
          </motion.span>
        </motion.h1>

        {/* Subtitle / University info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-sans mb-3 px-2 leading-relaxed"
        >
          {heroDetails.university}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-sm sm:text-base font-mono font-medium text-red-500 tracking-wider uppercase mb-8"
        >
          {heroDetails.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md px-4"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-orange-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-red-950/40 hover:shadow-red-600/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-red-500/30"
          >
            <span>View Projects</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#121217]/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/40 text-neutral-300 hover:text-white font-medium text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center gap-6 mt-12"
        >
          <a
            href={heroDetails.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
          <a
            href={heroDetails.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
          <a
            href={`mailto:${heroDetails.email}`}
            className="text-neutral-500 hover:text-white transition-colors duration-300"
            aria-label="Email Address"
          >
            <Mail className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Floating animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          opacity: { delay: 2.2, duration: 1 },
          repeat: Infinity,
          repeatDelay: 0.5,
          duration: 2,
        }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-2 group text-neutral-500 hover:text-red-500 transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-red-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
