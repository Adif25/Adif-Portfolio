"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 200, x: "80%", y: "10%", delay: 2, duration: 25 },
  { size: 150, x: "70%", y: "60%", delay: 4, duration: 18 },
  { size: 250, x: "20%", y: "70%", delay: 1, duration: 22 },
  { size: 180, x: "50%", y: "40%", delay: 3, duration: 24 },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-[0.03]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `linear-gradient(135deg, var(--accent), var(--accent-secondary))`,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
