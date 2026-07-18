import { motion } from "motion/react";

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050505]">
      {/* Subtle digital grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-75 pointer-events-none" />

      {/* Ambient Red Glow Blur Blob 1 - top-[-10%] left-[-10%] bg-red-900/20 blur-[120px] style */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-red-900/20 blur-[100px] sm:blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient Crimson/Orange Glow Blur Blob 2 - bottom-[-10%] right-[-10%] bg-orange-900/10 blur-[120px] style */}
      <motion.div
        className="absolute -bottom-[10%] -right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-orange-900/10 blur-[100px] sm:blur-[120px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent red-950 light center-right for perfect luxury depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-950/5 blur-[150px] pointer-events-none" />
    </div>
  );
}
