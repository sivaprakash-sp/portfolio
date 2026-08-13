import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-14 flex flex-col items-center text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-500">
        {index}
      </span>
      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-neutral-50 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base max-read">{subtitle}</p>
      )}
      <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-accent-700 via-accent-500 to-transparent" />
    </motion.div>
  );
}
