import React from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
          Technical <span className="text-secondary">Arsenal</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl font-sans">
          A curated suite of tools and technologies I use to build world-class
          digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-0 group">
              <div className="p-8">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/5 text-secondary group-hover:text-white group-hover:bg-secondary/20 transition-all duration-500 scale-110">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 font-display tracking-tight">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-400 text-sm font-sans transition-colors group-hover:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:bg-primary transition-all duration-300 group-hover:scale-125" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
