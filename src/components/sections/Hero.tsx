import { motion } from 'framer-motion';
import { Mail, Download, FolderGit2, UserPlus, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/BrandIcons';
import { useTyping } from '@/hooks/useTyping';
import { TYPING_ROLES } from '@/data/portfolio';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { label: 'Email', href: 'mailto:sivaprakash@example.com', icon: Mail },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const typed = useTyping(TYPING_ROLES);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-12">
      {/* AI Robot — left visual */}
      <div className="pointer-events-none absolute right-[-6%] top-1/2 hidden -translate-y-1/2 lg:block">
        <AIRobot />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:items-start lg:gap-16">
        {/* Left social rail */}
        <div className="hidden lg:flex absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 flex-col gap-4">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-400 transition-all hover:-translate-y-1 hover:border-accent-500 hover:text-accent-400 hover:glow-red-sm"
              aria-label={s.label}
            >
              <s.icon size={18} />
            </motion.a>
          ))}
          <div className="mx-auto h-20 w-px bg-gradient-to-b from-accent-500/60 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-center lg:gap-16">
          {/* Profile with glowing rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-56 w-56 shrink-0 md:h-72 md:w-72"
          >
            {/* outer rotating neon ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent-500/40" />
            <div className="absolute inset-3 animate-spin-rev rounded-full border border-accent-500/30" />
            {/* glow */}
            <div className="absolute inset-6 rounded-full bg-accent-600/25 blur-2xl animate-pulse-glow" />
            {/* dotted scan ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-accent-500 border-r-accent-500/40" />
            {/* avatar */}
            <div className="absolute inset-7 overflow-hidden rounded-full border-2 border-accent-500/60 glow-red bg-gradient-to-br from-neutral-800 to-neutral-950">
              <img
                src="/image/mypage.jpg"
                alt="Sivaprakash V"
                className="relative z-10 h-full w-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
              {/* scan line */}
              <div className="absolute inset-x-0 z-20 h-1/3 bg-gradient-to-b from-accent-500/30 to-transparent animate-scan" />
            </div>
            {/* corner ticks */}
            {[
              'left-0 top-0 border-l-2 border-t-2',
              'right-0 top-0 border-r-2 border-t-2',
              'left-0 bottom-0 border-l-2 border-b-2',
              'right-0 bottom-0 border-r-2 border-b-2',
            ].map((c) => (
              <span key={c} className={`absolute h-5 w-5 border-accent-500/70 ${c}`} />
            ))}
          </motion.div>

          {/* Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p custom={0} variants={fadeUp} initial="hidden" animate="show" className="font-mono text-sm uppercase tracking-[0.35em] text-neutral-400">
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-neutral-50 max-w-[22ch]"
            >
              Sivaprakash <span className="shimmer-text">V</span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 flex items-center gap-3"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500 glow-red-sm" />
              <span className="font-mono text-lg text-neutral-300 md:text-2xl">
                {typed}
                <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent-500 align-middle md:h-7" />
              </span>
            </motion.div>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-xl text-neutral-400 md:text-lg max-read"
            >
              Building Modern Digital Experiences. Based in Tamil Nadu, India — crafting fast,
              responsive, scalable web applications with a futuristic edge.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="#"
                data-cursor="hover"
                className="btn btn-lg btn-primary"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <button
                onClick={() => go('projects')}
                data-cursor="hover"
                className="btn btn-lg btn-outline"
              >
                <FolderGit2 size={16} /> View Projects
              </button>
              <button
                onClick={() => go('contact')}
                data-cursor="hover"
                className="btn btn-lg btn-ghost"
              >
                <UserPlus size={16} /> Hire Me
              </button>
              <button
                onClick={() => go('contact')}
                data-cursor="hover"
                className="btn btn-lg btn-outline"
              >
                <Send size={16} /> Contact Me
              </button>
            </motion.div>

            {/* mobile socials */}
            <div className="mt-8 flex gap-3 lg:hidden">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-400 hover:border-accent-500 hover:text-accent-400"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-neutral-600 pt-2">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-accent-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

function AIRobot() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 0.85, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="relative h-[440px] w-[360px]"
    >
      {/* halo */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-700/15 blur-3xl" />

      {/* head */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-6 -translate-x-1/2"
      >
        <div className="relative h-36 w-44 rounded-[2rem] border border-accent-500/40 bg-gradient-to-b from-neutral-800 to-neutral-900 glass-strong glow-red">
          {/* visor */}
          <div className="absolute left-1/2 top-7 h-9 w-32 -translate-x-1/2 rounded-full bg-accent-600/20 border border-accent-500/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-around px-3">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
                  className="h-2 w-2 rounded-full bg-accent-400 glow-red-sm"
                />
              ))}
            </div>
          </div>
          {/* mouth grid */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-1 w-3 rounded-full bg-accent-500/40" />
            ))}
          </div>
          {/* antenna */}
          <span className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-accent-500/60" />
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="absolute -top-4 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-500 glow-red-sm"
          />
        </div>
        {/* neck */}
        <div className="mx-auto h-6 w-10 rounded-b-lg border-x border-b border-accent-500/30 bg-neutral-900" />
      </motion.div>

      {/* body */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-52 -translate-x-1/2"
      >
        <div className="relative h-40 w-56 rounded-[1.5rem] border border-accent-500/40 bg-gradient-to-b from-neutral-800 to-neutral-950 glass glow-red-sm">
          {/* chest core */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute left-1/2 top-6 h-12 w-12 -translate-x-1/2 rounded-full border-2 border-accent-500 bg-accent-600/30 glow-red"
          />
          {/* circuit lines */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1.5">
            <div className="h-px w-full bg-accent-500/30" />
            <div className="h-px w-3/4 bg-accent-500/20" />
            <div className="h-px w-2/3 bg-accent-500/15" />
          </div>
          {/* shoulders */}
          <span className="absolute -left-3 top-4 h-8 w-8 rounded-full border border-accent-500/40 bg-neutral-800" />
          <span className="absolute -right-3 top-4 h-8 w-8 rounded-full border border-accent-500/40 bg-neutral-800" />
        </div>
      </motion.div>

      {/* floating HUD chips */}
      {[
        { label: 'AI.CORE', top: '8%', left: '-10%' },
        { label: 'NEURAL.NET', top: '40%', left: '102%' },
        { label: '01101', top: '72%', left: '-6%' },
      ].map((c, i) => (
        <motion.div
          key={c.label}
          animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute font-mono text-[10px] text-accent-400/80"
          style={{ top: c.top, left: c.left }}
        >
          <span className="rounded border border-accent-500/40 bg-neutral-900/80 px-2 py-1">{c.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
