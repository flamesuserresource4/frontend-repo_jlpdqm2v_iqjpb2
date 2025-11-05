import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white/95">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-teal-300" />
            <span className="text-xs font-medium tracking-wide text-teal-200/90">Interactive 3D • Modern • Playful</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">Your Name</span>.
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            I craft immersive web experiences that blend aesthetics, performance, and delightful interactions.
            Explore my favorite projects, skills, and ways we can build something amazing together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
