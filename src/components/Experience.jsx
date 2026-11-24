import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hands-on Practice"
          title="Practical Experience"
          subtitle="Real-world engineering pipelines, API architectures, and collaborative development tracks"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#22396F] -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline central dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010736] border-2 border-[#FCF1D0] items-center justify-center z-10 shadow-[0_0_12px_#FCF1D0]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FCF1D0]" />
                  </div>

                  {/* Card container */}
                  <div className={`w-full md:w-[46%] ${isEven ? 'md:pl-6' : 'md:pr-6'}`}>
                    <div className="glass-card rounded-2xl p-6 sm:p-7 relative group">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#22396F]/50 text-[#FCF1D0] border border-[#22396F]">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                          <Calendar className="w-3.5 h-3.5 text-[#FCF1D0]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FCF1D0] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-[#FCF1D0] mt-1 mb-4">
                        {exp.organization}
                      </p>

                      {/* Responsibilities list */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#FCF1D0] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="pt-4 border-t border-[#22396F]/50 flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#010736] text-[#94A3B8] border border-[#22396F]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
