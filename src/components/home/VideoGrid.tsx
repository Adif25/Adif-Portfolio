"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "../ui/TiltCard";

const videos = [
  {
    id: "85okIEc9E3Y",
    title: "Freshmen Internship Finder",
    description: "AI-powered tool to help freshmen find their first tech internships",
  },
  {
    id: "FOcgydHsG6g",
    title: "Python Drone Curriculum",
    description: "Educational curriculum teaching Python through drone programming",
  },
];

export default function VideoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="headline mb-4">
            HOW I <span className="gradient-text">THINK</span>.{" "}
            HOW I <span className="gradient-text">BUILD</span>.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Watch my projects in action — from concept to execution.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  index,
  isInView,
}: {
  video: (typeof videos)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <TiltCard className="group">
        <div
          className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 group-hover:border-accent/50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-cursor-hover
          data-cursor-text="Play"
        >
          {/* Thumbnail / Embed */}
          <div className="absolute inset-0">
            {isHovered ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

          {/* Play button */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 0 : 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur-sm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-background ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>

          {/* Neon glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-xl" style={{
              boxShadow: '0 0 30px var(--accent), 0 0 60px rgba(0, 240, 255, 0.3), inset 0 0 30px rgba(0, 240, 255, 0.1)',
            }} />
          </div>
        </div>

        {/* Video Info */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {video.title}
          </h3>
          <p className="text-muted">{video.description}</p>
        </div>
      </TiltCard>
    </motion.div>
  );
}
