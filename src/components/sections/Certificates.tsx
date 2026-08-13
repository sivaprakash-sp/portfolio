import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { CERTIFICATES } from '@/data/portfolio';

export function Certificates() {
  return (
    <section id="certificates" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05 / CERTIFICATES"
          title={<>Certifications &amp; <span className="text-accent-500 text-glow">Credentials</span></>}
          subtitle="Proof of continuous learning and skill validation."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, rotateY: -12, y: 24 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-accent-500/30 glass-strong p-6 neon-border-hover"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* ribbon corner */}
              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                <div className="absolute right-[-30px] top-[10px] w-40 rotate-45 bg-accent-600/30 text-center font-mono text-[9px] text-accent-300">
                  VERIFIED
                </div>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/40 bg-accent-600/10 text-accent-400 group-hover:glow-red-sm">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <Award className="h-4 w-4 text-accent-500/60" />
              </div>

              <h3 className="font-display text-base font-bold text-neutral-100">{c.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{c.issuer}</p>

              <div className="mt-4 flex items-center gap-2 border-t border-neutral-800 pt-4 font-mono text-xs text-neutral-400">
                <Calendar size={12} className="text-accent-500" /> {c.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
