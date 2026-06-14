"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.24),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.2),transparent_25%)]" />

      <div className="section-shell min-h-[calc(100vh-6rem)] pb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl flex-col justify-center"
        >
          <div className="pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            <Sparkles className="h-4 w-4" />
            Available for work
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.32em] text-slate-400">
            Senior Software Engineer & Assistant Team Lead
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-none sm:text-7xl">
            Ashvini Vora builds
            <span className="gradient-text">
              {" "}
              scalable software & modern web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Senior Software Engineer from Ahmedabad with 5+ years of experience building full-stack applications, backend systems, and production-ready software for real-world use.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="primary-btn">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}