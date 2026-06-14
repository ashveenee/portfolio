export default function About() {
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="section-kicker">01 - About Me</p>

          <h2 className="mt-4 max-w-xl text-4xl font-bold text-white sm:text-5xl">
            Building reliable systems, scalable applications, and digital experiences that create real business value.          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I'm a Senior Software Engineer with expertise across both backend and
            frontend development. I design and build high-performance applications
            that balance scalability, maintainability, and exceptional user
            experience.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            From architecting distributed backend services and APIs to crafting
            intuitive web interfaces, I enjoy solving complex engineering
            challenges and delivering solutions that create measurable business
            value. My focus is on clean architecture, performance optimization,
            and building products that stand the test of growth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="panel rounded-[1.75rem] p-6 sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Snapshot
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Years delivering production software
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Full Stack</p>
                <p className="mt-1 text-sm text-slate-400">
                  Backend architecture & modern frontend
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">Ahmedabad</p>
                <p className="mt-1 text-sm text-slate-400">
                  Gujarat, India
                </p>
              </div>
            </div>
          </div>

          <div className="panel rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              What I bring
            </p>
            <p className="mt-4 text-lg font-semibold text-white">
              System design, technical leadership, performance optimization, and
              product-focused engineering.
            </p>
          </div>

          <div className="panel rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              What I build
            </p>
            <p className="mt-4 text-lg font-semibold text-white">
              From backend architecture to frontend excellence—building products that perform at every layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}