const skillGroups = [
  {
    title: "Backend Development",
    items: [
      { label: "PHP (Laravel / Yii2) / Node.js & REST APIs", level: "100%" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { label: "React / Next.js / Angular", level: "100%" },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { label: "MySQL / MongoDB", level: "100%" },
    ],
  },
];

const technologies = [
  "PHP",
  "Yii2",
  "Laravel",
  "JavaScript",
  "jQuery",
  "Node.js",
  "REST APIs",
  "Angular",
  "React",
  "Next.js",
  "MySQL",
  "MongoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-16 sm:py-20">
      <p className="section-kicker">02 - Skills</p>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">My tech stack</h2>
        <p className="max-w-2xl text-lg leading-8 text-slate-400">
          Technologies I use daily to ship reliable services, data-backed applications,
          and maintainable backend foundations.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="panel rounded-[1.75rem] p-6">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-6 space-y-5">
              {group.items.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 text-sm text-slate-300">
                    <span>{item.label}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/6">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-orange-400 via-sky-400 to-pink-400"
                      style={{ width: item.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div><br></br><br></br><br></br>

      <div className="section-shell pb-12">
        <div className="marquee pill py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
          <div className="marquee-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <span key={`${tech}-${index}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}