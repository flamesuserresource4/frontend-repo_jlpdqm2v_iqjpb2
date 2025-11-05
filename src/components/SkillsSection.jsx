import React from 'react';
import { Code2, Cpu, Paintbrush } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="h-5 w-5 text-sky-300" />,
    title: 'Frontend Engineering',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: <Cpu className="h-5 w-5 text-teal-300" />,
    title: 'Backend & Infra',
    items: ['FastAPI', 'Node', 'PostgreSQL', 'MongoDB', 'CI/CD'],
  },
  {
    icon: <Paintbrush className="h-5 w-5 text-purple-300" />,
    title: 'Design & Craft',
    items: ['UX/UI', 'Prototyping', 'Accessibility', 'Motion Design', '3D'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skills & Focus</h2>
        <p className="mt-2 text-sm text-white/60">A blend of engineering, design, and systems thinking.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                {s.icon}
                <span className="font-medium">{s.title}</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-white/75">
                {s.items.map((item) => (
                  <li key={item} className="">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
