import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-white backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Let’s build something remarkable</h3>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              I’m open to freelance work, collaborations, and full-time opportunities. Tell me about your vision—
              I’ll help bring it to life with craft and care.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Your Name — Designed & built with love.
      </p>
    </section>
  );
};

export default ContactSection;
