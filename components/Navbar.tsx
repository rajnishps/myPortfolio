import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_ITEMS, CONTACT_INFO } from "../constants";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/70 border-b border-white/5"
    >
      {/* Logo */}
      <a
        href="#"
        className="text-2xl font-display font-extrabold tracking-tight text-white group"
      >
        RAJNISH
        <span className="text-primary transition-colors group-hover:text-secondary">
          .TECH
        </span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-bold text-gray-400 hover:text-white transition-all relative group font-sans tracking-wide uppercase"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Desktop Socials / CTA */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} strokeWidth={1.5} />
        </a>
        <a
          href={CONTACT_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 text-sm font-bold text-white glass border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-sans tracking-tight"
        >
          Resume
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-white/10">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
