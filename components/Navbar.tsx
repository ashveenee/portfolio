"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell mt-4">
        <div className="panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#hero" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-sm font-bold text-orange-300">
              AV
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Ashvini Vora</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Senior Software Engineer Portfolio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="secondary-btn hidden sm:inline-flex">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}