import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { ACHIEVEMENTS } from '@/data/portfolio';

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04 / ACHIEVEMENTS"
          title={<>Milestones &amp; <span className="text-accent-500 text-glow">Wins</span></>}
          subtitle="Recognition and events that shaped my journey."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 glass p-6 neon-border-hover"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent-600/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/40 bg-accent-600/10 text-accent-400 group-hover:glow-red-sm">
                <Icon name={a.icon} className="h-6 w-6" />
              </div>

              <h3 className="font-display text-base font-bold text-neutral-100">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{a.desc}</p>

              <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest text-accent-500/70">
                Achievement {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
