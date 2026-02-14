"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import { LineReveal } from "@/components/ui/TextReveal";

const projects = [
  {
    slug: "ai-web-scraping",
    title: "AI Web Scraping Engine",
    category: "AI/ML",
    description:
      "Engineered a multi-agent scraping system achieving 95% data accuracy. Built with Python, leveraging AI to align decisions between data structure and stakeholder constraints.",
    tags: ["Python", "AI", "Multi-Agent", "Data Engineering"],
    color: "from-cyan-500",
    featured: true,
  },
  {
    slug: "better-calendar",
    title: "BetterCalendar",
    category: "Full Stack",
    description:
      "Built a scheduling system 3× faster than competitors, improving accuracy from 90% to 94%. Merged UX, backend logic, and user needs into one cohesive solution.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    color: "from-purple-500",
    featured: true,
  },
  {
    slug: "drone-curriculum",
    title: "Python Drone Curriculum",
    category: "Education",
    description:
      "Created an educational curriculum teaching Python through drone programming. Translated complex programming concepts into accessible lessons for beginners.",
    tags: ["Python", "Education", "Drones", "Curriculum"],
    color: "from-pink-500",
    featured: true,
  },
  {
    slug: "internship-finder",
    title: "Freshmen Internship Finder",
    category: "Web App",
    description:
      "AI-powered platform helping freshmen discover and apply for their first tech internships. Built with perspective-driven engineering principles.",
    tags: ["Next.js", "AI", "Web Scraping", "UX"],
    color: "from-amber-500",
    featured: true,
  },
];

const categories = ["All", "AI/ML", "Full Stack", "Education", "Web App"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 border border-border rounded-full text-sm text-muted uppercase tracking-widest mb-6"
          >
            My Work
          </motion.span>

          <h1 className="display-text mb-8">
            <LineReveal delay={0.3}>{["FEATURED", "PROJECTS"]}</LineReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted text-xl max-w-2xl"
          >
            Each project represents a journey of understanding perspectives, aligning
            stakeholders, and engineering solutions that create real impact.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-background"
                  : "bg-card border border-border hover:border-accent/50 text-muted hover:text-foreground"
              }`}
              data-cursor-hover
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted text-lg">
              No projects in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <TiltCard className="group h-full">
        <div
          className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 group-hover:border-accent/50"
          data-cursor-hover
          data-cursor-text="View Case Study"
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Decorative element */}
          <div className="absolute top-8 right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent" />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col">
            {/* Category */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color}/20 to-transparent text-foreground mb-auto w-fit`}
            >
              {project.category}
            </span>

            {/* Title & Description */}
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted mb-6 line-clamp-3">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted group-hover:border-accent/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
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
        </div>
      </TiltCard>
    </Link>
  );
}
