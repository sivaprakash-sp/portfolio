import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 16 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(onDone, 600);
      }
      setProgress(Math.floor(p));
    }, 130);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-neutral-950"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/15 blur-[100px]" />

      <div className="relative flex flex-col items-center gap-8">
        {/* rotating ring logo */}
        <div className="relative h-28 w-28">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent-500/30 border-t-accent-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-accent-500/20 border-b-accent-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
            <img
              src="/profile.jpg"
              alt="Sivaprakash V"
              className="h-full w-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="sr-only">Sivaprakash V</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-neutral-300">
            Sivaprakash V
          </p>
          <p className="mt-1 font-mono text-xs text-neutral-500">INITIALIZING SYSTEM</p>
        </div>

        <div className="h-1 w-64 overflow-hidden rounded-full bg-neutral-800">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent-700 via-accent-500 to-accent-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-mono text-xs text-neutral-500">{progress}%</p>
      </div>
    </motion.div>
  );
}
