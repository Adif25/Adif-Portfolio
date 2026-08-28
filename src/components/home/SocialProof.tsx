"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Peak Web Technologies",
    role: "Founder & Software Developer",
    period: "January 2026 – Present",
    contribution:
      "Founded a web design and custom software agency serving 20+ Delaware small businesses, delivering 50+ projects with a 5.0 Google rating",
    learned: "Client relationships, custom CRMs, AI chatbots, and business automation",
    logo: "PW",
    color: "from-emerald-500",
  },
  {
    company: "City of Wilmington",
    role: "Human Resources Intern",
    period: "June 2026 – August 2026",
    contribution:
      "Organized hundreds of personnel records into Excel trackers using Munis ERP, supporting the full hiring cycle",
    learned: "Data integrity, applicant screening, and enterprise ERP systems",
    logo: "CW",
    color: "from-amber-500",
  },
  {
    company: "Code Differently",
    role: "Software Developer Intern",
    period: "June 2025 – August 2025",
    contribution:
      "Developed a web app making drone programming accessible through Python and taught it to first-time middle-school coders",
    learned: "Collaborative development practices; earned IC3 Certification",
    logo: "CD",
    color: "from-blue-500",
  },
  {
    company: "Buccini Pollin Group",
    role: "IT Intern",
    period: "April 2024 – August 2024",
    contribution:
      "Analyzed and modeled financial data for a commercial real estate property, building projections and cash-flow reports",
    learned: "Enterprise IT systems and stakeholder communication",
    logo: "BPG",
    color: "from-red-500",
  },
];

export default function SocialProof() {
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
            WHERE I&apos;VE <span className="gradient-text">CONTRIBUTED</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Building perspective through diverse experiences.
          </p>
        </motion.div>

        {/* Company Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.company}
              experience={exp}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative p-8 rounded-2xl bg-card border border-border h-full transition-all duration-500 group-hover:border-accent/50"
        data-cursor-hover
      >
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Logo */}
        <div
          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} to-transparent flex items-center justify-center mb-6`}
        >
          <span className="text-xl font-bold text-white">{experience.logo}</span>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {experience.company}
          </h3>
          <p className="text-accent text-sm font-medium mb-1">{experience.role}</p>
          <p className="text-muted text-sm mb-4">{experience.period}</p>

          {/* Expandable content */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border">
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wider text-muted">
                      What I contributed
                    </span>
                    <p className="text-sm text-foreground mt-1">
                      {experience.contribution}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted">
                      What I learned
                    </span>
                    <p className="text-sm text-foreground mt-1">
                      {experience.learned}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-muted">Hover for details</span>
        </div>
      </div>
    </motion.div>
  );
}
