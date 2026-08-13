import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';
import { SectionHeading } from '@/components/SectionHeading';
import { PROJECTS, type Project } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 / PROJECTS"
          title={<>Featured <span className="text-accent-500 text-glow">Work</span></>}
          subtitle="A selection of projects I've designed and built end to end."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${py * -8}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.55 }}
      className="[transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-cursor="hover"
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 glass transition-transform duration-200 neon-border-hover"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* visual header */}
        <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute left-3 top-3 rounded-md border border-accent-500/40 bg-neutral-950/60 px-2 py-1 font-mono text-[10px] text-accent-300">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl drop-shadow-[0_0_20px_rgba(230,0,0,0.5)] transition-transform duration-500 group-hover:scale-110">
              {project.emoji}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-neutral-50">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-neutral-700 bg-neutral-900/60 px-2.5 py-1 font-mono text-[10px] text-accent-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/50 py-2.5 font-mono text-xs font-semibold text-neutral-200 transition-colors hover:border-accent-500/60 hover:text-accent-300"
            >
              <GithubIcon size={14} /> Code
            </a>
            <a
              href="#"
              data-cursor="hover"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-accent-500/50 bg-accent-600/15 py-2.5 font-mono text-xs font-semibold text-accent-300 transition-colors hover:bg-accent-600/25"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
