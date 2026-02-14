"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { LineReveal } from "@/components/ui/TextReveal";
import Image from "next/image";

const philosophyItems = [
  {
    title: "Perspective-Driven",
    description:
      "Every line of code represents a decision. I seek to understand all stakeholder viewpoints before engineering solutions.",
    icon: "👁️",
  },
  {
    title: "Alignment-Focused",
    description:
      "Great software emerges when teams share understanding. I bridge gaps between designers, developers, and stakeholders.",
    icon: "🎯",
  },
  {
    title: "Momentum-Building",
    description:
      "Progress compounds. I build systems and habits that accelerate development and create lasting impact.",
    icon: "🚀",
  },
];

const stats = [
  { value: "4.0", label: "GPA" },
  { value: "3+", label: "Internships" },
  { value: "95%", label: "Data Accuracy" },
  { value: "3×", label: "Faster Systems" },
];

export default function AboutPage() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 border border-border rounded-full text-sm text-muted uppercase tracking-widest mb-6"
              >
                About Me
              </motion.span>

              <h1 className="headline mb-8">
                <LineReveal delay={0.3}>
                  {[
                    "I ENGINEER",
                    "CONNECTION.",
                    "I BUILD",
                    "ALIGNMENT.",
                    "I CREATE",
                    "MOMENTUM.",
                  ]}
                </LineReveal>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-muted text-lg mb-8"
              >
                I&apos;m <span className="text-foreground">Adif Hossain</span>, a Computer
                Science student at the University of Delaware with a passion for building
                software that brings people together. My approach combines technical
                excellence with deep understanding of human perspectives.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ y }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-accent-secondary/10 to-transparent" />
              <div className="absolute inset-4 rounded-xl bg-card border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                    <span className="text-5xl font-bold text-background">AH</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Adif Hossain</h3>
                  <p className="text-muted text-sm">
                    University of Delaware
                    <br />
                    B.S. Computer Science
                    <br />
                    Class of 2029
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={ref} className="section">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="headline mb-4">
              MY <span className="gradient-text">PHILOSOPHY</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              The principles that guide my approach to software engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500"
                data-cursor-hover
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg mx-auto"
          >
            <h2 className="headline text-center mb-12">
              THE <span className="gradient-text">JOURNEY</span>
            </h2>

            <div className="space-y-8 text-muted">
              <p>
                My journey into software engineering began with a simple realization:{" "}
                <span className="text-foreground">
                  the best code isn&apos;t written in isolation—it&apos;s shaped by understanding.
                </span>
              </p>

              <p>
                During my time at Buccini Pollin Group, I learned that enterprise IT
                systems are more about people than technology. Every workflow I automated
                started with conversations—understanding pain points, aligning expectations,
                and building solutions that actually got used.
              </p>

              <p>
                At A.I Whoo, I dove deep into AI research, discovering how to translate
                complex technical concepts into practical applications. This experience
                taught me that innovation without communication is just noise.
              </p>

              <p>
                Now, as I continue my studies at the University of Delaware, I carry these
                lessons forward. Every project I undertake begins with the same question:{" "}
                <span className="text-accent">
                  &quot;What perspectives am I missing?&quot;
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="headline mb-4">
              TECHNICAL <span className="gradient-text">SKILLS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <SkillCategory
              title="Languages"
              skills={["Python", "TypeScript", "JavaScript", "Java", "SQL", "HTML/CSS"]}
            />
            <SkillCategory
              title="Frameworks"
              skills={["React", "Next.js", "Node.js", "Express", "TailwindCSS", "GSAP"]}
            />
            <SkillCategory
              title="Tools"
              skills={["Git", "MongoDB", "PostgreSQL", "Docker", "AWS", "Figma"]}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="p-8 rounded-2xl bg-card border border-border">
      <h3 className="text-lg font-bold mb-6 text-accent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-background border border-border rounded-full text-sm hover:border-accent/50 hover:text-accent transition-colors"
            data-cursor-hover
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
