"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent"
        />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-text mb-8">
            <span className="block">LET&apos;S BUILD</span>
            <span className="block gradient-text">SOMETHING BIG</span>
            <span className="block">TOGETHER.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted text-xl mb-12 max-w-xl mx-auto"
        >
          Have a project in mind? Let&apos;s align perspectives and create something amazing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <MagneticButton
            href="/contact"
            className="relative px-12 py-6 bg-accent text-background text-xl font-bold rounded-full overflow-hidden group"
          >
            <span className="relative z-10">Start a Conversation</span>
            {/* Pulse effect */}
            <motion.span
              className="absolute inset-0 bg-white/20 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </MagneticButton>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted"
        >
          <a
            href="mailto:adif9811@gmail.com"
            className="hover:text-accent transition-colors"
            data-cursor-hover
          >
            adif9811@gmail.com
          </a>
          <span className="hidden sm:block">•</span>
          <a
            href="https://linkedin.com/in/adif-hossain-6283b0314"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            data-cursor-hover
          >
            LinkedIn
          </a>
          <span className="hidden sm:block">•</span>
          <a
            href="https://github.com/adif25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            data-cursor-hover
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
