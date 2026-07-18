import { motion } from "motion/react";
import { Award, Trophy, Code2, ShieldCheck, Milestone } from "lucide-react";
import { achievementsData } from "../data/portfolioData";
import { Achievement } from "../types";

export default function Achievements() {
  const getIcon = (type: Achievement["iconType"]) => {
    const classStyle = "w-5 h-5 text-red-500";
    switch (type) {
      case "award":
        return <Award className={classStyle} />;
      case "trophy":
        return <Trophy className={classStyle} />;
      case "code":
        return <Code2 className={classStyle} />;
      case "cert":
        return <ShieldCheck className={classStyle} />;
      default:
        return <Milestone className={classStyle} />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background visual anchor */}
      <div className="absolute right-1/2 bottom-10 w-[200px] h-[200px] rounded-full bg-red-950/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-red-500 uppercase tracking-widest mb-2"
        >
          <Trophy className="w-4 h-4" />
          <span>Track Record</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Key <span className="text-red-500">Achievements</span>
        </motion.h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Rail Container */}
      <div className="relative mt-12 sm:mt-20">
        {/* Continuous timeline line - central on desktop, left-offset on mobile */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-900 -translate-x-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-orange-500 to-red-950 opacity-60" />
        </div>

        {/* Timeline Entries */}
        <div className="space-y-12 sm:space-y-16">
          {achievementsData.map((ach, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={ach.id}
                className="relative flex flex-col md:flex-row items-start md:items-center w-full"
              >
                {/* Node Dot on the timeline - absolute positioned */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="w-8 h-8 rounded-full bg-[#050505] border-2 border-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)] group"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  </motion.div>
                </div>

                {/* Left side card space (Desktop-only) */}
                <div className={`hidden md:block w-1/2 pr-12 text-right ${isLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-panel-glow border border-red-500/10 rounded-3xl p-6 hover:border-red-500/25 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-red-950/40 border border-red-500/10 text-[10px] font-mono text-red-400 uppercase tracking-widest">
                          {ach.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">{ach.date}</span>
                      </div>
                      <h3 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                        {getIcon(ach.iconType)}
                        <span>{ach.title}</span>
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{ach.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Middle spacing node placeholder (Desktop-only helper) */}
                <div className="hidden md:block w-0" />

                {/* Right side card space */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${!isLeft ? "md:block" : "md:opacity-0 md:pointer-events-none"}`}>
                  {/* On mobile: render all items here regardless. On desktop: render only even items */}
                  {(!isLeft || window.innerWidth < 768) && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-panel-glow border border-red-500/10 rounded-3xl p-6 hover:border-red-500/25 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-red-950/40 border border-red-500/10 text-[10px] font-mono text-red-400 uppercase tracking-widest">
                          {ach.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">{ach.date}</span>
                      </div>
                      <h3 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                        {getIcon(ach.iconType)}
                        <span>{ach.title}</span>
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{ach.description}</p>
                    </motion.div>
                  )}
                  
                  {/* Fallback rendering duplicate inside mobile views so Left-items also render in the right column */}
                  {isLeft && (
                    <div className="md:hidden">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel-glow border border-red-500/10 rounded-3xl p-6 hover:border-red-500/25 transition-all duration-300 text-left"
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-red-950/40 border border-red-500/10 text-[10px] font-mono text-red-400 uppercase tracking-widest">
                            {ach.category}
                          </span>
                          <span className="text-xs font-mono text-neutral-500">{ach.date}</span>
                        </div>
                        <h3 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                          {getIcon(ach.iconType)}
                          <span>{ach.title}</span>
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">{ach.description}</p>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
