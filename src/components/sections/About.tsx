import { motion } from 'framer-motion';
import { Download, MapPin, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { STATS, EDUCATION } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01 / ABOUT"
          title={<>About <span className="text-accent-500 text-glow">Me</span></>}
          subtitle="Get to know the developer behind the code."
        />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-500/40 via-accent-700/10 to-transparent opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-3xl border border-accent-500/40 glass-strong p-8 neon-border-hover">
                <div className="relative mx-auto mb-6 h-44 w-44">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent-500/40" />
                  <div className="absolute inset-3 overflow-hidden rounded-full border-2 border-accent-500/60 glow-red bg-gradient-to-br from-neutral-800 to-neutral-950">
                    <img
                      src="/image/mypage.jpg"
                      alt="Sivaprakash V"
                      className="relative z-10 h-full w-full object-cover"
                      style={{ objectPosition: 'center 15%' }}
                    />
                    <div className="absolute inset-x-0 z-20 h-1/3 bg-gradient-to-b from-accent-500/30 to-transparent animate-scan" />
                  </div>
                </div>

                <h3 className="text-center font-display text-xl font-bold text-neutral-100">Sivaprakash V</h3>
                <p className="mt-1 text-center font-mono text-xs uppercase tracking-widest text-accent-400">
                  Full Stack Developer
                </p>

                <div className="mt-6 space-y-3 border-t border-neutral-800 pt-6 text-sm text-neutral-300">
                  <p className="flex items-center gap-3">
                    <MapPin size={16} className="text-accent-500" /> Nayanur, Viluppuram
                  </p>
                  <p className="flex items-start gap-3">
                    <GraduationCap size={16} className="mt-0.5 text-accent-500" />
                    <span>BE CSE (AI &amp; ML) · 2024–2028</span>
                  </p>
                </div>

                <a
                  href="#"
                  data-cursor="hover"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-accent-500/60 bg-accent-600/15 px-5 py-3 font-mono text-sm font-semibold text-accent-300 neon-border-hover hover:bg-accent-600/25"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Intro + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-neutral-300">
              I am <span className="font-semibold text-accent-400">Sivaprakash V</span>, a passionate
              Full Stack Developer and Artificial Intelligence &amp; Machine Learning student. I
              specialize in developing modern, responsive, scalable web applications using the latest
              technologies. I enjoy solving real-world problems through clean code and innovative
              software solutions while continuously learning new technologies.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-neutral-800 glass p-4 text-center neon-border-hover"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/40 bg-accent-600/10 text-accent-400 group-hover:glow-red-sm">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <p className="font-display text-2xl font-black text-neutral-50">{s.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education timeline */}
            <div className="mt-10">
              <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
                Education
              </h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="relative pl-8"
              >
                <span className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-accent-500 via-accent-700/40 to-transparent" />
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent-500 bg-neutral-950 glow-red-sm" />
                <div className="rounded-2xl border border-neutral-800 glass p-5 neon-border-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-display text-base font-bold text-neutral-100">
                      {EDUCATION.degree}
                    </h5>
                    <span className="rounded-full border border-accent-500/40 bg-accent-600/10 px-3 py-1 font-mono text-[10px] text-accent-300">
                      {EDUCATION.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent-400">{EDUCATION.spec}</p>
                  <p className="mt-1 text-sm text-neutral-400">{EDUCATION.college}</p>
                  <p className="mt-3 font-mono text-xs text-neutral-300">
                    CGPA: <span className="text-accent-400 font-semibold">{EDUCATION.cgpa}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
