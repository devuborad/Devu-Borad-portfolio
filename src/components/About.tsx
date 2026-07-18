import { motion } from "motion/react";
import { User, GraduationCap, MapPin, Sparkles, Terminal } from "lucide-react";
import { heroDetails } from "../data/portfolioData";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Visual background anchor */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-red-950/10 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-red-500 uppercase tracking-widest mb-2"
        >
          <User className="w-4 h-4" />
          <span>Biography</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          About <span className="text-red-500">Me</span>
        </motion.h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Profile Image/Graphic Column */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Glowing red gradient border wrapper */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-orange-500 to-red-900 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
            
            {/* Futuristic Tech Frame inside */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-red-500 to-red-900 opacity-30 group-hover:scale-102 transition-transform duration-300" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel-glow border border-red-500/25 flex flex-col items-center justify-center p-6 text-center select-none">
              {/* Abstract avatar or initials with futuristic ring */}
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-red-500/40 p-1 flex items-center justify-center mb-4 group-hover:border-red-500 transition-colors duration-300">
                <div className="absolute inset-0 rounded-full border border-dashed border-red-500/35 animate-[spin_40s_linear_infinite]" />
                <div className="w-full h-full rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center text-red-500 shadow-inner">
                  <Terminal className="w-12 h-12 text-red-500/80 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              
              <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                Devu Borad
              </h3>
              <p className="text-xs font-mono text-red-400 mt-1 uppercase tracking-widest">
                BE-2 CS Student
              </p>
              
              {/* Mini tech statistics placeholder */}
              <div className="mt-4 pt-4 border-t border-white/5 w-full grid grid-cols-2 gap-2 text-left">
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase">Focus</span>
                  <span className="text-xs font-medium text-neutral-300">Full-Stack</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase">Affiliation</span>
                  <span className="text-xs font-medium text-neutral-300 text-red-400">Dev Infinity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative bio Column */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 space-y-6 text-neutral-300"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span>Building digital solutions with focus and craft</span>
            </h3>
            
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              {heroDetails.bio}
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
              I am currently completing my second year (BE-2) of Computer Science Engineering at the historic 
              <strong> The Maharaja Sayajirao University of Baroda</strong>. Ever since writing my first lines of C and C++, I became enamored with solving complex structural problems. Today, my training is directed towards full-stack development, making use of React, Node, and Tailwind CSS to build apps that perform beautifully across all devices.
            </p>

            {/* Structured details bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase">University</h4>
                  <p className="text-xs sm:text-sm font-medium text-white">The Maharaja Sayajirao University of Baroda</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase">Location</h4>
                  <p className="text-xs sm:text-sm font-medium text-white">Vadodara, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
