import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/feedback';
import { Quote, Star } from 'lucide-react';

export default function Feedback() {
  return (
    <section id="feedback" className="py-20 lg:py-28 relative z-10 bg-[#0A1637]/30 border-y border-[#22396F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Endorsements"
          title="Peer & Client Feedback"
          subtitle="What collaborators, technical leads, and product teams say about working together"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Quote Icon & 5 Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22396F]/40 border border-[#22396F] group-hover:border-[#FCF1D0] flex items-center justify-center transition-colors">
                    <Quote className="w-5 h-5 text-[#FCF1D0]" />
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FCF1D0] text-[#FCF1D0]" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-[#E2E8F0] italic font-sans leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-[#22396F]/50 flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.avatarBg} border border-[#22396F] group-hover:border-[#FCF1D0] flex items-center justify-center font-display font-bold text-sm text-[#FCF1D0] shadow-inner transition-colors`}
                >
                  {t.initials}
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-[#FCF1D0] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs font-mono text-[#94A3B8]">
                    {t.role} • <span className="text-[#FCF1D0]">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
