import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { aboutPoints } from '../data/about';
import { Code2, Compass, Layers, Milestone, Sparkles, UserCheck } from 'lucide-react';

const icons = [Compass, Layers, Code2, Milestone, Sparkles, UserCheck];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Story & Foundation"
          title="About Khaled"
          subtitle="From analytical legal logic to high-performance software architecture"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top subtle glow badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#22396F]/40 border border-[#22396F] group-hover:border-[#FCF1D0] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#FCF1D0]" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#FCF1D0] tracking-wider uppercase">
                      {point.tag}
                    </span>
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#22396F] group-hover:text-[#FCF1D0]/40 transition-colors">
                    {point.number}
                  </span>
                </div>

                {/* Content text */}
                <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  {point.text}
                </p>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-[#22396F]/40 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>Perspective #{point.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22396F] group-hover:bg-[#FCF1D0] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
