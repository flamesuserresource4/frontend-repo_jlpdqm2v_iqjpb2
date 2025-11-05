import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'A headless e-commerce experience with blazing-fast checkout and elegant animations.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#',
    accent: 'from-teal-400/20 to-cyan-400/10',
  },
  {
    title: 'Aurora Dashboard',
    description: 'Real-time analytics dashboard with delightful micro-interactions and theming.',
    tags: ['React', 'D3', 'Framer Motion'],
    link: '#',
    accent: 'from-purple-400/20 to-fuchsia-400/10',
  },
  {
    title: 'Orbit Studio',
    description: 'Portfolio builder with drag-and-drop 3D components powered by WebGL.',
    tags: ['Three.js', 'WebGL', 'Vite'],
    link: '#',
    accent: 'from-amber-400/20 to-orange-400/10',
  },
  {
    title: 'Pulse Chat',
    description: 'End-to-end encrypted real-time messaging with presence indicators and reactions.',
    tags: ['FastAPI', 'WebSocket', 'Redis'],
    link: '#',
    accent: 'from-emerald-400/20 to-lime-400/10',
  },
  {
    title: 'Nova Docs',
    description: 'MDX-powered docs system with powerful search and instant previews.',
    tags: ['MDX', 'Algolia', 'Vercel'],
    link: '#',
    accent: 'from-sky-400/20 to-blue-400/10',
  },
  {
    title: 'Voxel Playground',
    description: 'Playful voxel editor with export to glTF and AR previews.',
    tags: ['Three.js', 'Zustand', 'GLTF'],
    link: '#',
    accent: 'from-pink-400/20 to-rose-400/10',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Work</h2>
          <p className="mt-2 text-sm text-white/60">A few projects that reflect my focus on usable, performant, and delightful products.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur sm:flex">
          <Star className="h-4 w-4 text-amber-300" />
          Curated picks
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent} p-5 transition-transform hover:-translate-y-0.5 hover:border-white/20`}
          >
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-white/60 transition group-hover:text-white" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
