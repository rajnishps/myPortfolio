import React from "react";
import Section from "./ui/Section";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-background py-24 md:py-32">
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">
          Career{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Journey
          </span>
        </h2>
        <p className="text-gray-400 text-xl font-sans max-w-2xl mx-auto">
          Over 4 years of experience building scalable products and leading
          engineering initiatives.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="space-y-24">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-white border-4 border-background transform -translate-x-[5.5px] md:-translate-x-1.2 mt-2.5 z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-150 transition-transform duration-500" />

              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-1/2">
                <div
                  className={`glass-card p-8 group hover:border-primary/30 transition-all duration-500 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"} mb-6`}
                  >
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/60 text-xs font-black tracking-widest uppercase mb-4 border border-white/5">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-primary font-bold font-sans tracking-wide">
                      {exp.company}
                    </h4>
                  </div>

                  <ul
                    className={`space-y-4 text-gray-400 font-sans leading-relaxed text-sm ${
                      index % 2 === 0 ? "md:items-start" : "md:items-end"
                    } flex flex-col`}
                  >
                    {exp.description.map((desc, i) => (
                      <li key={i} className="relative pl-6 md:pl-0">
                        <span
                          className={`absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 ${
                            index % 2 === 0 ? "md:hidden" : "md:hidden"
                          }`}
                        />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty Space for alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
