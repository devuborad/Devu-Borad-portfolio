import { motion } from "motion/react";
import { Laptop, Cpu, Settings } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import SkillIcon from "./SkillIcon";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <Laptop className="w-5 h-5 text-red-500" />,
      skills: skillsData.filter((s) => s.category === "Languages"),
    },
    {
      title: "Frameworks & Libraries",
      icon: <Cpu className="w-5 h-5 text-red-500" />,
      skills: skillsData.filter((s) => s.category === "Frameworks/Libraries"),
    },
    {
      title: "Tools & Version Control",
      icon: <Settings className="w-5 h-5 text-red-500" />,
      skills: skillsData.filter((s) => s.category === "Version Control/Tools"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Background visual elements */}
      <div className="absolute left-10 top-1/3 w-[250px] h-[250px] rounded-full bg-red-950/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-red-500 uppercase tracking-widest mb-2"
        >
          <Cpu className="w-4 h-4" />
          <span>Core Capabilities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          My Technical <span className="text-red-500">Skills</span>
        </motion.h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className="rounded-3xl glass-panel-glow border border-white/5 p-6 hover:border-red-500/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/15 text-red-500 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List inside Category */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="p-3.5 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-red-500/20 hover:bg-neutral-900/60 transition-all duration-300 group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {/* Icon with Hover color swap */}
                        <div className="text-neutral-400 group-hover/skill:text-red-500 transition-colors duration-300">
                          <SkillIcon name={skill.iconName} className="w-6 h-6 drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]" />
                        </div>
                        <span className="text-sm font-medium text-neutral-200 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 group-hover/skill:text-red-400 transition-colors">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Proficiency progress bar */}
                    <div className="w-full h-1.5 bg-neutral-800/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subtle card bottom accent decoration */}
            <div className="h-1 w-0 bg-gradient-to-r from-red-500 to-transparent group-hover:w-1/2 transition-all duration-500 mt-6 rounded-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
