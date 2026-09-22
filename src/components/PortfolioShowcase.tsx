import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { PROJECTS, CLIENT_LOGOS } from '../data/agencyData';
import { Project } from '../types';

interface PortfolioShowcaseProps {
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export default function PortfolioShowcase({ onSelectProject, onOpenBooking }: PortfolioShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Events & Festivals',
    'Portrait & Studio Shoots',
    'Commercial & Brand Media',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#09090c] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>SELECTED ARCHIVES 2024 — 2026</span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
              PORTFOLIO SHOWCASE
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 font-medium ${
                  activeCategory === cat
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Grid Layout with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.42, 0, 0.58, 1],
              }}
              data-cursor="view"
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Cinematic Thumbnail with Zoom 1.05 and Overlay fade */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-950 border border-white/10 mb-5">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter brightness-95 contrast-105"
                />

                {/* Dark Vignette Overlay that softly fades or transforms on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-zinc-300">
                    {project.client}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400">
                    {project.year}
                  </span>
                </div>

                {/* Hover Center Indicator Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-transform duration-300 scale-90 group-hover:scale-100">
                    {project.videoPreview ? (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Bottom Overlay Info in thumbnail */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                    {project.location}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Project Title & Category Info */}
              <div className="flex flex-col">
                <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1 group-hover:text-zinc-200 transition-colors">
                  {project.category}
                </div>
                <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white tracking-tight group-hover:text-white flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1 mt-1 font-light">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Clients Marquee / Grid */}
        <div className="pt-16 border-t border-white/5">
          <div className="text-center mb-8">
            <span className="text-[11px] tracking-[0.3em] uppercase text-zinc-500 font-medium">
              TRUSTED BY WORLD-CLASS BRANDS, EVENTS & ARTISTS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center py-5 px-3 rounded-xl bg-white/[0.015] hover:bg-white/[0.04] border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <span className="font-['Syne',sans-serif] text-xs sm:text-sm font-extrabold tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Portfolio CTA */}
          <div className="mt-14 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full border border-zinc-700 hover:border-white text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-[3px]"
            >
              Commission A Custom Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
