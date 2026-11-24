import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/skills';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative z-10 bg-[#0A1637]/30 border-y border-[#22396F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Competencies"
          title="Technical Skills"
          subtitle="A comprehensive toolkit engineered for robust server-side systems and responsive frontends"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => {
            const isLearning = cat.isLearning;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: catIndex * 0.08 }}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden ${
                  isLearning
                    ? 'border-[#FCF1D0]/60 bg-gradient-to-br from-[#0D1C42] to-[#132454]'
                    : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-[#FCF1D0] transition-colors">
                      {cat.category}
                    </h3>

                    {isLearning && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#FCF1D0] text-[#010736] animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        <span>Currently Learning</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#94A3B8] font-sans mb-5">
                    {cat.description}
                  </p>

                  {/* Skills List with matching icons */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#010736]/80 border border-[#22396F] text-[#E2E8F0] hover:text-[#FCF1D0] hover:border-[#FCF1D0] transition-all duration-200 group/skill"
                        >
                          <IconComponent
                            className="w-4 h-4 shrink-0 transition-transform group-hover/skill:scale-110"
                            style={{ color: skill.color }}
                          />
                          <span className="text-xs font-mono font-medium">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-5 pt-3 border-t border-[#22396F]/30 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>{cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}</span>
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
