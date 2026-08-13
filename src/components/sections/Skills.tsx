import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { SKILL_CATEGORIES, SKILL_BARS } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / SKILLS"
          title={<>My <span className="text-accent-500 text-glow">Arsenal</span></>}
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Categories */}
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-neutral-800 glass p-5 neon-border-hover"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-500/40 bg-accent-600/10 text-accent-400 group-hover:glow-red-sm">
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-neutral-100">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-neutral-700 bg-neutral-900/60 px-3 py-1.5 font-mono text-xs text-neutral-300 transition-colors hover:border-accent-500/60 hover:text-accent-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill bars */}
          <div className="rounded-2xl border border-neutral-800 glass-strong p-6 md:p-8">
            <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-wider text-accent-400">
              Proficiency
            </h3>
            <div className="space-y-5">
              {SKILL_BARS.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-sm text-neutral-200">{name}</span>
        <span className="font-mono text-xs text-accent-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: index * 0.06, duration: 1, ease: 'easeOut' }}
          className="relative h-full rounded-full bg-gradient-to-r from-accent-700 via-accent-500 to-accent-400"
        >
          <span className="absolute inset-0 rounded-full bg-accent-400/40 blur-sm" />
        </motion.div>
      </div>
    </div>
  );
}
