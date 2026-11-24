import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { servicesData } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Solutions"
          title="Engineering Services"
          subtitle="Architectural capabilities focused on speed, resilience, security, and developer ergonomics"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#22396F]/50 border border-[#22396F] group-hover:border-[#FCF1D0] flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6 text-[#FCF1D0]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FCF1D0] transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#94A3B8] font-sans leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-6 pt-5 border-t border-[#22396F]/50">
                  <ul className="space-y-2">
                    {svc.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FCF1D0] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
