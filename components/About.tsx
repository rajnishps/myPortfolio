import React from "react";
import Section from "./ui/Section";
import { ABOUT_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <Section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-20 lg:gap-32 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto md:mx-0 border border-white/10 shadow-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-20 pointer-events-none" />
            <Image
              src="/profile.jpg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Decorative Background Elements */}
          <div className="absolute -bottom-16 -right-16 w-3/4 h-3/4 bg-gradient-to-t from-primary/10 to-secondary/10 blur-[120px] -z-10 rounded-full animate-pulse" />
          <div className="absolute -top-16 -left-16 w-3/4 h-3/4 bg-accent/5 blur-[120px] -z-10 rounded-full" />
        </div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Beyond the <br />{" "}
              <span className="text-primary italic">Code</span>
            </h2>

            <div className="space-y-8 text-gray-400 leading-relaxed text-xl font-sans">
              <p>{ABOUT_CONTENT}</p>
              <p>
                I believe that great software is born from the intersection of
                clean code, intuitive design, and user-centric thinking. When
                I&apos;m not architecting systems, you can find me contributing
                to open-source or exploring the latest in AI technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5"
          >
            <div className="space-y-2">
              <h3 className="text-5xl font-display font-black text-white">
                4+
              </h3>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-[0.2em] font-sans">
                Years Experience
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-display font-black text-white">
                20+
              </h3>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-[0.2em] font-sans">
                Projects Launched
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
