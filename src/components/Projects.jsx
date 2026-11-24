import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { projectsData } from '../data/projects';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Featured Projects"
          subtitle="Production-grade architectures, real-time messaging, and high-concurrency backend services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group relative"
            >
              <div>
                {/* 16:9 Image Container with Hover Zoom */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#010736] border-b border-[#22396F]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C42] via-transparent to-transparent opacity-60" />

                  {/* Project ID Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#010736]/90 border border-[#22396F] text-[10px] font-mono font-bold text-[#FCF1D0]">
                    Project 0{project.id}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FCF1D0] transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* 2-line concise description */}
                  <p className="mt-2 text-sm text-[#94A3B8] font-sans line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-[#010736] border border-[#22396F] text-[#FCF1D0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Architecture & Stack Overview Box (if defined) */}
                  {project.stackOverview && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#010736]/70 border border-[#22396F] space-y-2">
                      <div className="flex items-center justify-between border-b border-[#22396F]/60 pb-2">
                        <span className="text-xs font-bold font-mono text-[#FCF1D0] tracking-wide">
                          Stack Overview
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          READY
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-0.5 text-xs font-mono">
                        {project.stackOverview.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px]">
                            <span className="text-[#94A3B8]">{item.label}:</span>
                            <span className="font-bold text-white tracking-tight">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub Repo */}
              <div className="p-6 pt-0 mt-2 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-display font-bold bg-[#FCF1D0] text-[#010736] hover:bg-white hover:shadow-[0_0_15px_rgba(252,241,208,0.4)] transition-all duration-200 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-display font-medium bg-[#010736] border border-[#22396F] text-[#E2E8F0] hover:text-[#FCF1D0] hover:border-[#FCF1D0] transition-all duration-200 cursor-pointer"
                  aria-label="View Project GitHub Repository"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Repo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
