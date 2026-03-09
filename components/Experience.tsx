import React from "react";
import Section from "./ui/Section";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const startYears = EXPERIENCE.map((item) =>
    Number.parseInt(item.period.split("-")[0].trim(), 10),
  ).filter((year) => !Number.isNaN(year));

  const earliestYear = startYears.length
    ? Math.min(...startYears)
    : new Date().getFullYear();

  const yearsExperience = Math.max(
    1,
    new Date().getFullYear() - earliestYear + 1,
  );

  const tones = [
    {
      dot: "bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.55)]",
      badge:
        "bg-cyan-400/10 text-cyan-200 border-cyan-300/30",
    },
    {
      dot: "bg-violet-300 shadow-[0_0_22px_rgba(167,139,250,0.55)]",
      badge:
        "bg-violet-400/10 text-violet-200 border-violet-300/30",
    },
    {
      dot: "bg-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.5)]",
      badge:
        "bg-emerald-400/10 text-emerald-200 border-emerald-300/30",
    },
  ];

  return (
    <Section id="experience" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute -top-24 left-4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="mb-14 md:mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gray-300">
            PROFESSIONAL PATH
          </span>
          <h2 className="mt-5 text-4xl md:text-7xl font-display font-extrabold text-white tracking-tight">
            Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Journey
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-xl font-sans leading-relaxed max-w-2xl">
            Building scalable fintech and platform products across mobile, web,
            and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 min-w-[130px]">
            <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
              Experience
            </p>
            <p className="mt-1 text-2xl font-display font-bold text-white">
              {yearsExperience}+ yrs
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 min-w-[130px]">
            <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
              Roles
            </p>
            <p className="mt-1 text-2xl font-display font-bold text-white">
              {EXPERIENCE.length}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[1.15rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-12 md:pl-16"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div
                className={`absolute left-3 top-9 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-background z-10 ${tones[index % tones.length].dot}`}
              />

              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.34)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase ${tones[index % tones.length].badge}`}
                      >
                        {exp.period}
                      </span>
                      <h3 className="mt-4 text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <h4 className="mt-2 text-primary font-bold font-sans tracking-wide">
                        {exp.company}
                      </h4>
                    </div>

                    <span className="text-xs font-semibold tracking-[0.2em] text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="space-y-3 text-gray-300 font-sans leading-relaxed">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-[0.95rem]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
