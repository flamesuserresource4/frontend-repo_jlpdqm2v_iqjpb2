import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-wide text-white/90">
            <span className="bg-gradient-to-r from-teal-300 to-sky-300 bg-clip-text text-transparent">@yourname</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
