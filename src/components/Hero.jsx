import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { ArrowDown, Terminal, Sparkles, FolderGit2, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1C42] border border-[#22396F] text-[#FCF1D0] text-xs font-mono mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>Available for Full-Stack & Backend Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
              Hi, I'm <br />
              <span className="text-[#FCF1D0] text-glow">
                {personalInfo.name}
              </span>
            </h1>

            {/* Job Title */}
            <p className="mt-4 text-lg sm:text-xl font-mono font-medium text-[#94A3B8] flex items-center justify-center lg:justify-start gap-2">
              <Terminal className="w-5 h-5 text-[#FCF1D0]" />
              <span>{personalInfo.title}</span>
            </p>

            {/* Intro Statement */}
            <p className="mt-5 text-base sm:text-lg text-[#E2E8F0] max-w-2xl leading-relaxed font-sans">
              A high-precision software engineer specializing in scalable backend architectures,
              resilient microservices, and modern reactive web applications that are built to last and scale.
            </p>

            {/* Core Tech Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-2xl">
              {personalInfo.coreTechPills.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-[#0D1C42]/80 border border-[#22396F] text-[#FCF1D0] hover:border-[#FCF1D0] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons & Social Icons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScroll('projects')}
                className="px-6 py-3.5 rounded-xl text-sm font-display font-bold bg-[#FCF1D0] text-[#010736] hover:bg-white hover:shadow-[0_0_25px_rgba(252,241,208,0.4)] transition-all duration-300 transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="px-6 py-3.5 rounded-xl text-sm font-display font-medium bg-[#0D1C42] border border-[#22396F] text-white hover:border-[#FCF1D0] hover:text-[#FCF1D0] transition-all duration-300 transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 ml-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#0D1C42] border border-[#22396F] flex items-center justify-center text-[#E2E8F0] hover:text-[#FCF1D0] hover:border-[#FCF1D0] hover:shadow-[0_0_15px_rgba(252,241,208,0.25)] transition-all duration-300"
                  aria-label="Khaled's LinkedIn Profile"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#0D1C42] border border-[#22396F] flex items-center justify-center text-[#E2E8F0] hover:text-[#FCF1D0] hover:border-[#FCF1D0] hover:shadow-[0_0_15px_rgba(252,241,208,0.25)] transition-all duration-300"
                  aria-label="Khaled's GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#0D1C42] border border-[#22396F] flex items-center justify-center text-[#E2E8F0] hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.25)] transition-all duration-300"
                  aria-label="Chat with Khaled on WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.emailMailto}
                  className="w-11 h-11 rounded-xl bg-[#0D1C42] border border-[#22396F] flex items-center justify-center text-[#E2E8F0] hover:text-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.25)] transition-all duration-300"
                  aria-label="Send Email to Khaled"
                  title="Email"
                >
                  <SiGmail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stylized Profile Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group">
              {/* Animated glowing backdrop ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FCF1D0]/30 via-[#22396F] to-[#FCF1D0]/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 group-hover:duration-300 animate-pulse-subtle" />
              
              {/* Outer stylish container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-[#0D1C42] border-2 border-[#22396F] p-3 shadow-2xl overflow-hidden flex flex-col items-center justify-center group-hover:border-[#FCF1D0] transition-colors duration-500">
                
                {/* Tech watermark corner tag */}
                <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-md bg-[#010736]/90 border border-[#22396F] text-[10px] font-mono text-[#FCF1D0]">
                  Full-Stack
                </div>

                {/* Profile Image with graceful fallback */}
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#010736] relative flex items-center justify-center border border-[#22396F]/50">
                  {/* Replace with your personal photo in public/profile.jpg */}
                  <img
                    src={imgError ? personalInfo.photoFallback : personalInfo.photo}
                    alt={personalInfo.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010736] via-transparent to-transparent opacity-80" />
                  
                  {/* Name banner overlay */}
                  <div className="absolute bottom-3 inset-x-3 text-center bg-[#0D1C42]/85 backdrop-blur-md py-2 px-3 rounded-lg border border-[#22396F]">
                    <p className="font-display font-bold text-sm text-[#FCF1D0]">
                      {personalInfo.name}
                    </p>
                    <p className="text-[11px] font-mono text-[#94A3B8]">
                      Node.js • NestJS • React
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#0D1C42] border border-[#22396F] shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FCF1D0]" />
                <span className="text-xs font-mono font-semibold text-white">Clean Architecture</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => handleScroll('about')}
            className="flex flex-col items-center gap-2 text-[#94A3B8] hover:text-[#FCF1D0] transition-colors cursor-pointer group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#FCF1D0]" />
          </button>
        </div>
      </div>
    </section>
  );
}
