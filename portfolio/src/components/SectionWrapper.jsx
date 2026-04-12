import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref} className={`py-24 px-6 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <span className="inline-block text-xs font-mono text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
        {label}
      </span>
      <h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}
