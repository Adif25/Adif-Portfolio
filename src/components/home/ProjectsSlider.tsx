"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "../ui/TiltCard";
import Link from "next/link";

const projects = [
  {
    slug: "ai-web-scraping",
    title: "AI Web Scraping Engine",
    description:
      "Engineered a multi-agent scraping system achieving 95% data accuracy. Aligned decisions between data, structure, and stakeholder constraints.",
    tags: ["Python", "AI", "Multi-Agent", "Data Engineering"],
    image: "/projects/scraping.png",
    color: "from-accent",
  },
  {
    slug: "better-calendar",
    title: "BetterCalendar",
    description:
      "Built a scheduling system 3× faster than competitors, improving accuracy from 90% to 94%. Merged UX, backend, and user needs into one solution.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    image: "/projects/calendar.png",
    color: "from-accent-secondary",
  },
  {
    slug: "drone-curriculum",
    title: "Python Drone Curriculum",
    description:
      "Created educational content teaching Python through drone programming. Translated complex concepts into accessible lessons for beginners.",
    tags: ["Python", "Education", "Drones", "Curriculum"],
    image: "/projects/drone.png",
    color: "from-accent-tertiary",
  },
  {
    slug: "internship-finder",
    title: "Freshmen Internship Finder",
    description:
      "AI-powered platform helping freshmen discover and apply for their first tech internships. Built with perspective-driven engineering.",
    tags: ["Next.js", "AI", "Web Scraping", "UX"],
    image: "/projects/internship.png",
    color: "from-accent",
  },
];

export default function ProjectsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="headline mb-4">
            FEATURED <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Each project represents a journey of aligning perspectives and engineering solutions.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <motion.div style={{ x }} className="flex gap-8 pl-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <Link href={`/work/${project.slug}`}>
      <TiltCard className="group flex-shrink-0 w-[500px]">
        <div
          className="relative h-[350px] rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 group-hover:border-accent/50"
          data-cursor-hover
          data-cursor-text="View"
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Placeholder image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${project.color} to-transparent opacity-20`} />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-card border border-border rounded-full text-muted group-hover:border-accent/30 group-hover:text-accent transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted line-clamp-2">{project.description}</p>
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.div>
        </div>
      </TiltCard>
    </Link>
  );
}
