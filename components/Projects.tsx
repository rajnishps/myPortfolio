import React from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { PROJECTS, CONTACT_INFO } from "../constants";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="py-24 md:py-32">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">
            Selected <span className="text-accent">Work</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed font-sans">
            Showcasing architectures and products that define my journey in
            building scalable fintech systems and cross-platform applications.
          </p>
        </div>
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-3 text-white font-bold border-b-2 border-primary/40 pb-2 hover:border-primary transition-all duration-300 hover:text-primary group"
        >
          Explore More{" "}
          <Github
            size={20}
            className="transition-transform group-hover:rotate-12"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            <Card
              className="group overflow-hidden p-4 bg-transparent border-0"
              hoverEffect={false}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-900 border border-white/5 mb-8">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Overlay Buttons */}
                <div className="absolute top-6 right-6 flex gap-4 z-20 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16, 1, 0.3, 1]">
                  <a
                    href={project.repoUrl}
                    className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-4 bg-primary backdrop-blur-xl rounded-2xl text-white hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="space-y-6 px-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-primary transition-colors cursor-pointer tracking-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-4 py-1.5 text-xs font-black tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="text-gray-400 leading-relaxed text-lg font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-bold text-gray-500 glass px-4 py-2 rounded-xl hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden mt-16 text-center">
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-primary/40 pb-2"
        >
          Explore on Github <Github size={20} />
        </a>
      </div>
    </Section>
  );
};

export default Projects;
