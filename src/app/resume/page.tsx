"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 border border-border rounded-full text-sm text-muted uppercase tracking-widest mb-6"
          >
            My Resume
          </motion.span>
          <h1 className="headline mb-4">
            <span className="gradient-text">ADIF HOSSAIN</span>
          </h1>
          <p className="text-muted text-lg mb-6">
            Software Engineer · University of Delaware · Expected Graduation May 2028
          </p>
          <motion.a
            href="/resume.pdf"
            download="Adif-Hossain-Resume.pdf"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
            data-cursor-hover
          >
            ↓ Download Resume
          </motion.a>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="rounded-2xl border border-border overflow-hidden shadow-2xl"
        >
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: "85vh" }}
          >
            <div className="flex flex-col items-center justify-center py-20 bg-card text-muted gap-4">
              <p className="text-lg">Your browser cannot display the PDF inline.</p>
              <a
                href="/resume.pdf"
                download="Adif-Hossain-Resume.pdf"
                className="px-6 py-3 bg-accent text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                ↓ Download Resume
              </a>
            </div>
          </object>
        </motion.div>
      </div>
    </div>
  );
}
