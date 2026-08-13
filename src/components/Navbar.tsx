import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-[8000] flex justify-center px-4 pt-3"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-3xl px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled ? 'glass-strong neon-border shadow-lg' : 'glass'
        }`}
      >
        <button onClick={() => go('home')} className="group flex items-center gap-3" data-cursor="hover" aria-label="Home">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-accent-500/30 font-display text-lg font-black text-accent-500 glow-red-sm overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Sivaprakash V"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="absolute inset-0 rounded-xl border border-accent-500/25 animate-pulse-glow" />
            {/* fallback initials shown if image not available */}
            <span className="relative z-10 font-display text-lg font-black text-accent-500">S</span>
          </span>
          <span className="font-display text-sm font-extrabold tracking-wide leading-none text-neutral-50">
            SIVAPRAKASH<span className="text-accent-500">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                data-cursor="hover"
                className={`relative rounded-lg px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all ${
                  active === item.id
                    ? 'text-accent-300 bg-accent-600/10 glass-strong neon-border-hover'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/25'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg border border-accent-500/30 bg-accent-600/8"
                  />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-neutral-700 p-2 text-neutral-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-[68px] glass-strong neon-border rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left font-mono text-sm uppercase tracking-wider ${
                      active === item.id ? 'bg-accent-600/15 text-accent-400' : 'text-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
