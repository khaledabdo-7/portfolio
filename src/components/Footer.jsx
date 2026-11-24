import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#010736] border-t border-[#22396F]/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0D1C42] border border-[#22396F] flex items-center justify-center">
              <span className="font-display font-bold text-xs text-[#FCF1D0]">
                {personalInfo.monogram}
              </span>
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs font-mono text-[#94A3B8]">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="text-xs font-mono text-[#94A3B8] text-center">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D1C42] border border-[#22396F] text-xs font-mono text-[#E2E8F0] hover:text-[#FCF1D0] hover:border-[#FCF1D0] transition-all cursor-pointer group shadow-sm"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FCF1D0] group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
