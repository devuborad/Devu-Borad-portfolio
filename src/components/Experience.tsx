import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { experiencesData } from "../data/portfolioData";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute right-10 bottom-1/4 w-[300px] h-[300px] rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-red-500 uppercase tracking-widest mb-2"
        >
          <Briefcase className="w-4 h-4" />
          <span>Professional Milestones</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Engineering <span className="text-red-500">Experience</span>
        </motion.h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Experience List/Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.role + exp.organization}
            variants={cardVariants}
            className="relative rounded-3xl glass-panel-glow border border-red-500/10 p-6 sm:p-10 hover:border-red-500/25 transition-all duration-300 shadow-xl group overflow-hidden"
          >
            {/* Visual top accent border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-orange-500 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Left Column: Organization & Role */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-mono tracking-wider uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        Active
                      </span>
                    )}
                    <span className="text-xs font-mono text-neutral-400">Position</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-wide group-hover:text-red-500 transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-neutral-300 text-sm sm:text-base font-medium">
                    <Sparkles className="w-4.5 h-4.5 text-red-500 shrink-0" />
                    <span>{exp.organization}</span>
                  </div>

                  <div className="flex flex-col gap-2.5 text-neutral-400 text-xs sm:text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Contributions */}
              <div className="lg:col-span-7 lg:border-l lg:border-white/5 lg:pl-8 space-y-4">
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Key Accomplishments
                </h4>
                
                <ul className="space-y-3.5">
                  {exp.description.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bulletIndex}
                      variants={bulletVariants}
                      className="flex items-start gap-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed"
                    >
                      {/* Stylized Red Dot Bullet */}
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5 shadow-[0_0_8px_#ef4444]" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
