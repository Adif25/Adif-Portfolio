"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/adif25", label: "GitHub" },
  { href: "https://linkedin.com/in/adif-hossain-6283b0314", label: "LinkedIn" },
  { href: "mailto:adif9811@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4" data-cursor-hover>
              <span className="text-2xl font-bold tracking-tight">
                ADIF<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm max-w-xs">
              Engineering through perspective. Building software that aligns teams and creates momentum.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-accent transition-colors"
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-foreground hover:text-accent transition-colors"
                    data-cursor-hover
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-muted text-sm mt-4">
              Phone: 302-688-5567
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Adif Hossain. All rights reserved.
          </p>
          <motion.p
            className="text-muted text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Built with <span className="text-accent">perspective</span> and Next.js
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
