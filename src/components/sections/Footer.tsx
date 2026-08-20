import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/BrandIcons';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { label: 'Email', href: 'mailto:sivaprakashsiva0008@gmail.com', icon: Mail },
];

const TECH = ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-neutral-800 px-6 py-12 md:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button onClick={scrollTop} className="group flex items-center gap-2" data-cursor="hover">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-accent-500/30 font-display text-lg font-black text-accent-500 glow-red-sm overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Sivaprakash V"
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="absolute inset-0 rounded-lg border border-accent-500/25 animate-pulse-glow" />
                <span className="relative z-10 font-display text-lg font-black text-accent-500">S</span>
              </span>
              <span className="font-display text-sm font-bold tracking-wider text-neutral-100">
                Sivaprakash V<span className="text-accent-500">.</span>
              </span>
            </button>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
              Full Stack Developer
            </p>
            <p className="mt-2 max-w-xs text-sm text-neutral-400">
              Building modern digital experiences from Nayanur, Viluppuram.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-cursor="hover"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-400 transition-all hover:-translate-y-1 hover:border-accent-500 hover:text-accent-400 hover:glow-red-sm"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Made with */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-neutral-500">
            <span>Made with</span>
            <Heart size={12} className="text-accent-500" />
            <span>using</span>
            {TECH.map((t, i) => (
              <span key={t} className="text-neutral-300">
                {t}
                {i < TECH.length - 1 && <span className="text-neutral-600"> · </span>}
              </span>
            ))}
          </p>

          <button
            onClick={scrollTop}
            data-cursor="hover"
            className="group flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-600/10 px-4 py-2 font-mono text-xs text-accent-300 transition-all hover:bg-accent-600/20"
          >
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            Back to top
          </button>
        </div>

        <p className="mt-6 text-center font-mono text-[11px] text-neutral-600">
          © {new Date().getFullYear()} Sivaprakash V. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
