"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const narrativeScenes = [
  {
    text: "Better software starts with better conversations.",
    color: "from-accent/20",
  },
  {
    text: "I uncover perspectives hidden behind code.",
    color: "from-accent-secondary/20",
  },
  {
    text: "I connect backgrounds, align minds, and turn talk into execution.",
    color: "from-accent-tertiary/20",
  },
  {
    text: "This is perspective-driven engineering.",
    color: "from-accent/30",
  },
];

export default function ScrollNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${narrativeScenes.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient that shifts */}
        {narrativeScenes.map((scene, index) => {
          const start = index / narrativeScenes.length;
          const end = (index + 1) / narrativeScenes.length;
          
          return (
            <SceneBackground
              key={index}
              progress={scrollYProgress}
              start={start}
              end={end}
              colorClass={scene.color}
            />
          );
        })}

        {/* Text scenes */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {narrativeScenes.map((scene, index) => (
            <SceneText
              key={index}
              text={scene.text}
              progress={scrollYProgress}
              index={index}
              total={narrativeScenes.length}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {narrativeScenes.map((_, index) => (
            <ProgressDot
              key={index}
              progress={scrollYProgress}
              index={index}
              total={narrativeScenes.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SceneBackground({
  progress,
  start,
  end,
  colorClass,
}: {
  progress: any;
  start: number;
  end: number;
  colorClass: string;
}) {
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className={`absolute inset-0 bg-gradient-radial ${colorClass} to-transparent`}
    />
  );
}

function SceneText({
  text,
  progress,
  index,
  total,
}: {
  text: string;
  progress: any;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [50, 0, 0, -50]
  );

  const scale = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0.9, 1, 1, 0.9]
  );

  return (
    <motion.p
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center headline text-foreground"
    >
      {text}
    </motion.p>
  );
}

function ProgressDot({
  progress,
  index,
  total,
}: {
  progress: any;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const isActive = useTransform(progress, (v: number) => v >= start && v < end);
  const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [1, 1.5, 1.5, 1]);
  const backgroundColor = useTransform(
    progress,
    [start, start + 0.05],
    ["var(--border)", "var(--accent)"]
  );

  return (
    <motion.div
      style={{ scale, backgroundColor }}
      className="w-2 h-2 rounded-full"
    />
  );
}
