import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="antialiased text-gray-200 bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer or extra space */}
      <footer className="py-20 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} RPS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
