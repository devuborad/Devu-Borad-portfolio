import { motion } from "motion/react";
import { FolderGit2, Github, ExternalLink, Code2 } from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
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
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-10 w-[200px] h-[200px] rounded-full bg-red-950/5 blur-[90px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-red-500 uppercase tracking-widest mb-2"
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Product Engineering</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Featured <span className="text-red-500">Projects</span>
        </motion.h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="rounded-3xl glass-panel-glow border border-white/5 overflow-hidden hover:border-red-500/20 hover:shadow-2xl hover:shadow-red-950/15 transition-all duration-300 flex flex-col group h-full"
          >
            {/* Project Thumbnail CSS Mockup */}
            <div
              className="h-48 sm:h-56 relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5 select-none"
              style={{ background: project.imagePlaceholderGradient }}
            >
              {/* Overlay Glass Panel for wireframe feeling */}
              <div className="absolute inset-0 bg-[#000000]/25 backdrop-blur-[2px] pointer-events-none" />
              <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

              {/* Central Mock Visual */}
              <div className="relative w-full max-w-[280px] h-32 bg-[#09090b]/80 rounded-xl border border-white/10 p-3 shadow-2xl flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500">devuborad://project-{index + 1}</span>
                </div>
                
                {/* Visual lines mimicking a web framework */}
                <div className="space-y-1.5 py-2 grow flex flex-col justify-center">
                  <div className="w-2/3 h-2 bg-neutral-800 rounded-full group-hover:bg-red-500/25 transition-colors" />
                  <div className="w-4/5 h-1.5 bg-neutral-800/60 rounded-full" />
                  <div className="w-1/2 h-1.5 bg-neutral-800/60 rounded-full" />
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <Code2 className="w-3.5 h-3.5 text-neutral-500 group-hover:text-red-500 transition-colors" />
                  <span className="text-[8px] font-mono text-neutral-600">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project Info details */}
            <div className="p-6 sm:p-8 flex flex-col grow justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-white tracking-wide group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-neutral-900/60 border border-white/5 text-[11px] font-mono text-neutral-400 group-hover:border-red-500/10 group-hover:text-red-400/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Codebase</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-400 hover:text-red-400 transition-colors duration-200 ml-auto"
                  >
                    <span>Live Showcase</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
