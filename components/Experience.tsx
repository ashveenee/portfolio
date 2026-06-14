const experiences = [
  {
    role: "Senior Software Engineer / Assistant Team Lead",
    company: "Nuwave Communication Pvt Ltd",
    period: "May 2025 - Present",
    location: "Ahmedabad",
    points: [
      "Leading the development team and managing project workflows for product-based applications.",
      "Designing and developing scalable backend solutions and maintaining application performance.",
      "Collaborating with cross-functional teams to implement new features and optimize system architecture.",
      "Mentoring developers, conducting code reviews, and ensuring code quality standards.",
    ],
    stack: [],
  },
  {
    role: "Senior Software Engineer",
    company: "Intelivita Pvt Ltd",
    period: "Dec 2022 - Apr 2025",
    location: "Ahmedabad",
    points: [
      "Developed, analyzed, tested, and deployed scalable web applications and software solutions.",
      "Wrote clean, maintainable, and optimized backend code for multiple projects.",
      "Performed debugging, routine maintenance, and server deployments.",
      "Collaborated with cross-functional teams to implement new features and improve system performance.",
    ],
    stack: [],
  },
  {
    role: "Software Developer",
    company: "Vindaloo Softtech Pvt Ltd",
    period: "Oct 2020 - Nov 2022",
    location: "Ahmedabad",
    points: [
      "Maintained and tested core product software and databases.",
      "Handled module development, debugging, and root cause analysis for production issues.",
      "Optimized application functionality and improved overall system performance.",
      "Participated throughout the complete software development lifecycle.",
    ],
    stack: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-16 sm:py-20">
      <p className="section-kicker">04 - Experience</p>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Where I&apos;ve worked</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            A portfolio-style timeline for production work, delivery ownership, and backend engineering specialization.
          </p>
        </div>
        <div className="pill px-4 py-2 text-sm text-slate-300">Available for backend roles</div>
      </div>

      <div className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <div key={experience.role} className="panel rounded-[1.75rem] p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{experience.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{experience.role}</h3>
                <p className="mt-2 text-lg text-orange-300">{experience.company}</p>
                <p className="mt-1 text-sm text-slate-500">{experience.location}</p>
              </div>

              <div className="max-w-2xl">
                <ul className="space-y-3 text-base leading-7 text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span key={item} className="pill px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}