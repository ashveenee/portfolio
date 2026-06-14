"use client";

import { ArrowRight, Briefcase, Globe, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        
        <div className="grid-glow panel rounded-[2rem] p-8 sm:p-10">
          <p className="section-kicker">05 - Contact</p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Let’s build something impactful
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m open to Senior Software Engineer roles, full-stack opportunities,
            and product collaborations. I enjoy building reliable backend systems,
            scalable web applications, and user-focused digital products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:ashvinidoshi3004@gmail.com" className="primary-btn">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#hero" className="secondary-btn">
              Back to Top
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Contact Information
            </p>

            <div className="mt-6 space-y-4 text-slate-300">
              <a
                href="mailto:ashvinidoshi3004@gmail.com"
                className="flex items-center gap-3 text-lg text-white"
              >
                <Mail className="h-5 w-5 text-orange-300" />
                ashvinidoshi3004@gmail.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-300" />
                Ahmedabad, Gujarat, India
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="#hero"
                className="pill inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-200"
              >
                <Globe className="h-4 w-4" />
                Portfolio
              </a>

              <a
                href="https://www.linkedin.com/in/ashvinidoshi"
                target="_blank"
                className="pill inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-200"
              >
                <Briefcase className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href="#"
                className="pill inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-200"
              >
                <Briefcase className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}