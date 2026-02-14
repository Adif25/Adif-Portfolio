"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { LineReveal } from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { notFound } from "next/navigation";

const projectsData: Record<string, any> = {
  "ai-web-scraping": {
    title: "AI Web Scraping Engine",
    category: "AI/ML",
    year: "2024",
    tags: ["Python", "AI", "Multi-Agent", "Data Engineering"],
    color: "from-cyan-500",
    overview:
      "A sophisticated multi-agent system designed to scrape, process, and structure web data with 95% accuracy.",
    problem:
      "Traditional web scraping solutions struggled with dynamic content, rate limiting, and data quality issues. Stakeholders needed reliable, accurate data extraction at scale.",
    perspective:
      "Before writing any code, I interviewed data analysts, product managers, and end users. Each had different priorities: analysts wanted clean data, PMs wanted speed, users wanted reliability. My challenge was merging these into one solution.",
    decision:
      "I architected a multi-agent system where specialized agents handled different aspects: one for navigation, one for extraction, one for validation. This modular approach allowed each agent to excel at its specific task while maintaining overall system coherence.",
    outcome:
      "Achieved 95% data accuracy with 40% faster processing than previous solutions. The system now powers data pipelines serving multiple downstream applications.",
    learnings: [
      "Multi-agent architectures excel when tasks can be cleanly separated",
      "Data validation should be a first-class concern, not an afterthought",
      "Stakeholder alignment early saves engineering time later",
    ],
  },
  "better-calendar": {
    title: "BetterCalendar",
    category: "Full Stack",
    year: "2024",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    color: "from-purple-500",
    overview:
      "A next-generation scheduling system that combines intelligent time management with seamless team collaboration.",
    problem:
      "Existing calendar solutions were either too simple for professional use or too complex for everyday scheduling. Users needed something that understood their workflows without requiring extensive setup.",
    perspective:
      "I conducted user research across different personas: busy executives, remote teams, and freelancers. Each group had unique pain points around scheduling conflicts, timezone management, and integration with existing tools.",
    decision:
      "Rather than building another generic calendar, I focused on smart defaults and progressive complexity. The system learns from user behavior and suggests optimal meeting times, while advanced features remain accessible but non-intrusive.",
    outcome:
      "Achieved 3× faster scheduling compared to competitors and improved accuracy from 90% to 94%. User retention increased significantly due to the intuitive learning curve.",
    learnings: [
      "Smart defaults beat extensive configuration",
      "Progressive disclosure keeps interfaces clean while maintaining power",
      "Time-based features need rigorous timezone handling from day one",
    ],
  },
  "drone-curriculum": {
    title: "Python Drone Curriculum",
    category: "Education",
    year: "2024",
    tags: ["Python", "Education", "Drones", "Curriculum"],
    color: "from-pink-500",
    overview:
      "An educational curriculum teaching Python programming through hands-on drone missions and real-world applications.",
    problem:
      "Learning to code can feel abstract and disconnected from real-world applications. Students often struggle to see how programming concepts apply beyond simple exercises.",
    perspective:
      "Working with educators and students, I discovered that engagement skyrockets when learning has immediate, tangible results. Drones provide that instant feedback loop while teaching fundamental programming concepts.",
    decision:
      "I designed a progressive curriculum where each lesson builds on the previous one, culminating in complex autonomous missions. Students learn variables through altitude, loops through flight patterns, and functions through reusable maneuvers.",
    outcome:
      "The curriculum has been used to teach hundreds of students, with significantly higher engagement and retention compared to traditional programming courses.",
    learnings: [
      "Tangible outcomes dramatically improve learning retention",
      "Scaffolded complexity builds confidence progressively",
      "Real-world applications make abstract concepts concrete",
    ],
  },
  "internship-finder": {
    title: "Freshmen Internship Finder",
    category: "Web App",
    year: "2024",
    tags: ["Next.js", "AI", "Web Scraping", "UX"],
    color: "from-amber-500",
    overview:
      "An AI-powered platform helping freshmen students discover and apply for their first tech internships.",
    problem:
      "First-year students face a chicken-and-egg problem: they need experience to get internships, but need internships to get experience. Existing job boards don't cater to entry-level candidates.",
    perspective:
      "I interviewed dozens of freshmen and recent graduates, as well as hiring managers at tech companies. The gap wasn't just about finding opportunities—it was about understanding what skills to develop and how to present limited experience effectively.",
    decision:
      "I built a platform that combines intelligent job matching with skill gap analysis and application guidance. Instead of just listing jobs, it helps students understand what they need and guides them through the process.",
    outcome:
      "The platform has helped students discover opportunities they wouldn't have found otherwise and provided actionable guidance for improving their applications.",
    learnings: [
      "The best tools don't just inform—they guide",
      "Entry-level users need more context and support",
      "Personalization beats generic recommendations every time",
    ],
  },
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];
  
  if (!project) {
    notFound();
  }

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y }}
            className={`absolute inset-0 bg-gradient-to-br ${project.color}/5 to-transparent`}
          />
        </div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <Link
              href="/work"
              className="text-muted hover:text-accent transition-colors"
              data-cursor-hover
            >
              ← Back to Work
            </Link>
            <span className="text-border">|</span>
            <span className="text-muted">{project.category}</span>
            <span className="text-border">|</span>
            <span className="text-muted">{project.year}</span>
          </motion.div>

          <h1 className="display-text mb-8">
            <LineReveal delay={0.3}>{project.title.toUpperCase().split(" ")}</LineReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-muted text-xl max-w-2xl mb-8"
          >
            {project.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Problem */}
          <CaseStudySection
            label="The Problem"
            title="What challenge did we face?"
            content={project.problem}
            delay={0}
          />

          {/* Perspective */}
          <CaseStudySection
            label="The Perspective"
            title="Understanding all viewpoints"
            content={project.perspective}
            delay={0.1}
            accent
          />

          {/* Decision */}
          <CaseStudySection
            label="The Decision"
            title="How we approached the solution"
            content={project.decision}
            delay={0.2}
          />

          {/* Outcome */}
          <CaseStudySection
            label="The Outcome"
            title="Results and impact"
            content={project.outcome}
            delay={0.3}
            accent
          />

          {/* Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <span className="text-accent text-sm uppercase tracking-wider">
              Key Learnings
            </span>
            <h3 className="text-2xl font-bold mt-2 mb-8">
              What this project taught me
            </h3>
            <ul className="space-y-4">
              {project.learnings.map((learning: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 text-muted"
                >
                  <span className="text-accent mt-1">→</span>
                  {learning}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="headline mb-8">
              Interested in <span className="gradient-text">working together</span>?
            </h2>
            <MagneticButton
              href="/contact"
              className="px-8 py-4 bg-accent text-background font-bold rounded-full"
            >
              Start a Conversation
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CaseStudySection({
  label,
  title,
  content,
  delay,
  accent = false,
}: {
  label: string;
  title: string;
  content: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`py-12 ${accent ? "pl-8 border-l-2 border-accent" : ""}`}
    >
      <span className="text-accent text-sm uppercase tracking-wider">{label}</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">{title}</h3>
      <p className="text-muted text-lg leading-relaxed">{content}</p>
    </motion.div>
  );
}
