import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeading
 * Reusable header with badge, title, and descriptive subtitle
 */
export default function SectionHeading({ badge, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#22396F]/40 border border-[#22396F] text-[#FCF1D0] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCF1D0] animate-pulse" />
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#94A3B8] font-sans leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative accent divider */}
      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[2px] bg-[#22396F]" />
        <div className="w-4 h-[2px] bg-[#FCF1D0]" />
        <div className="w-2 h-[2px] bg-[#22396F]" />
      </div>
    </motion.div>
  );
}
