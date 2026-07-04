"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "iPilot",
    desc: "Working on the development and enhancement of the iPilot telecom product. Implemented scalable backend modules, optimized system performance, contributed to architecture design for high-volume telecom workflows, and handled feature development, bug fixing, and code optimization.",
    tags: ["Yii2", "Node.js", "Next.js", "MySQL"],
  },
  {
    title: "Better The Next Day",
    desc: "Developed an application and admin panel for managing daily and weekly exercise schedules with assigned coaches. Built scalable backend APIs and ensured secure and efficient database management.",
    tags: ["Laravel", "Node.js", "MongoDB"],
  },
  {
    title: "Lifetime",
    desc: "Built a finance analysis platform providing users with financial insights and personalized video recommendations. Designed and maintained backend modules with optimized database queries.",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Scan & Dine",
    desc: "Developed a restaurant application enabling QR-based menu access and information retrieval. Implemented backend APIs and database integration for a seamless user experience.",
    tags: ["Laravel", "Node.js", "MySQL"],
  },
  {
    title: "All Weather Roofline",
    desc: "Built an admin panel and application for managing weather-related data across multiple modules. Developed reporting features, data management workflows, and backend integrations to support efficient monitoring and administration. Improved system usability through optimized database operations and structured module architecture.",
    tags: ["Angular", "MySQL"],
  },
  {
    title: "Invite",
    desc: "Developed an event booking platform allowing users to create, manage, and promote events with co-hosting capabilities. Implemented event scheduling, attendee management, booking workflows, and notification features while ensuring secure data handling and smooth user experience.",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Automatic Number Identification",
    desc: "Developed a caller ID management system based on SIP trunk rules and configurations. Implemented routing logic, number mapping, and configuration management features to support telecom operations. Enhanced system reliability through validation mechanisms and optimized database queries.",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Multi-Tenant Contact Center",
    desc: "Built a multi-tenant architecture platform supporting multiple clients within a single application environment. Developed tenant-specific configurations, user management modules, role-based access controls, and shared infrastructure components while maintaining data isolation and scalability.",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Saunified",
    desc: "Developed a healthcare data management system for securely storing patient, caregiver, and staff information. Implemented modules for profile management, medical record handling, access controls, and reporting features while ensuring data integrity, security, and compliance-focused development practices.",
    tags: ["Yii2", "MySQL"],
  },
];

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const updateSliderState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      const maxScrollLeft = Math.max(scrollWidth - clientWidth, 0);

      setCanScrollPrev(scrollLeft > 8);
      setCanScrollNext(scrollLeft < maxScrollLeft - 8);
    };

    updateSliderState();
    slider.addEventListener("scroll", updateSliderState, { passive: true });
    window.addEventListener("resize", updateSliderState);

    return () => {
      slider.removeEventListener("scroll", updateSliderState);
      window.removeEventListener("resize", updateSliderState);
    };
  }, []);

  const handleScroll = (direction: "prev" | "next") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    slider.scrollBy({
      left: direction === "next" ? slider.clientWidth * 0.84 : -slider.clientWidth * 0.84,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section-shell py-16 sm:py-20">
      <p className="section-kicker">03 - Projects</p>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Things I&apos;ve built</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Selected work across backend services, business-critical APIs, and systems designed for reliability and scale.
          </p>
        </div>
        <a href="#contact" className="secondary-btn">Start a Project</a>
      </div>

      <div className="project-slider-shell mt-10">
        <div ref={sliderRef} className="project-slider flex gap-6 overflow-x-auto overflow-y-hidden pb-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="project-slide grid-glow panel flex min-h-[22rem] w-[88%] shrink-0 snap-start flex-col rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-1 sm:w-[30rem] lg:w-[24rem]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Featured Project</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{p.title}</h3>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-400">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="pill px-3 py-2 text-sm text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleScroll("prev")}
            disabled={!canScrollPrev}
            className="project-slider-btn h-11 w-11 disabled:cursor-not-allowed disabled:opacity-45"
            aria-label="Previous projects"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => handleScroll("next")}
            disabled={!canScrollNext}
            className="project-slider-btn h-11 w-11 disabled:cursor-not-allowed disabled:opacity-45"
            aria-label="Next projects"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}