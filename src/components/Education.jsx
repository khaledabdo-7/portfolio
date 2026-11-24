import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative z-10 bg-[#0A1637]/30 border-y border-[#22396F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Training"
          title="Education & Diplomas"
          subtitle="A solid foundation combining rigorous analytical thinking with modern full-stack engineering"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22396F]/50 border border-[#22396F] group-hover:border-[#FCF1D0] flex items-center justify-center transition-colors">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6 text-[#FCF1D0]" />
                    ) : index === 1 ? (
                      <Award className="w-6 h-6 text-[#FCF1D0]" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-[#FCF1D0]" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FCF1D0] text-[#010736]">
                    {item.year}
                  </span>
                </div>

                {/* Degree & Institution */}
                <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FCF1D0] transition-colors leading-snug">
                  {item.degree}
                </h3>
                <p className="mt-1 font-mono text-sm text-[#FCF1D0]">
                  {item.institution}
                </p>

                {/* Grade / Distinction pill */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#22396F]/40 border border-[#22396F] text-xs font-mono text-white">
                  <span>Grade / Standing:</span>
                  <span className="text-[#FCF1D0] font-bold">{item.grade}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[#E2E8F0] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-5 border-t border-[#22396F]/50">
                <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                  Key Takeaways
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FCF1D0] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
