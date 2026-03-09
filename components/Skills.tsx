import React from "react";
import Section from "./ui/Section";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const totalSkills = SKILLS.reduce(
    (count, category) => count + category.skills.length,
    0,
  );

  const tones = [
    {
      glow: "from-cyan-400/20 via-transparent to-transparent",
      icon: "bg-cyan-500/10 text-cyan-300 border-cyan-300/20",
      chip: "hover:border-cyan-300/40",
    },
    {
      glow: "from-violet-400/20 via-transparent to-transparent",
      icon: "bg-violet-500/10 text-violet-300 border-violet-300/20",
      chip: "hover:border-violet-300/40",
    },
    {
      glow: "from-indigo-400/20 via-transparent to-transparent",
      icon: "bg-indigo-500/10 text-indigo-300 border-indigo-300/20",
      chip: "hover:border-indigo-300/40",
    },
    {
      glow: "from-emerald-400/20 via-transparent to-transparent",
      icon: "bg-emerald-500/10 text-emerald-300 border-emerald-300/20",
      chip: "hover:border-emerald-300/40",
    },
    {
      glow: "from-amber-400/20 via-transparent to-transparent",
      icon: "bg-amber-500/10 text-amber-300 border-amber-300/20",
      chip: "hover:border-amber-300/40",
    },
  ];

  return (
    <Section id="skills" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-12 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="mb-14 md:mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gray-300">
            ENGINEERING STACK
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
          Technical <span className="text-secondary">Arsenal</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-3xl font-sans leading-relaxed">
            A focused stack for building production-grade web, mobile, and
            distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 min-w-[130px]">
            <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
              Categories
            </p>
            <p className="mt-1 text-2xl font-display font-bold text-white">
              {SKILLS.length}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 min-w-[130px]">
            <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
              Tools
            </p>
            <p className="mt-1 text-2xl font-display font-bold text-white">
              {totalSkills}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6 md:gap-7 auto-rows-fr">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.title}
            className="h-full"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tones[idx % tones.length].glow} opacity-80`}
              />
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`inline-flex rounded-2xl border p-3 ${tones[idx % tones.length].icon}`}
                  >
                    {category.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-sans">
                  {category.skills.length} core tools
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm font-medium text-gray-200 transition-all duration-300 ${tones[idx % tones.length].chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
