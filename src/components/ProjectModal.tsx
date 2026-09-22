import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, MapPin, Calendar, CheckCircle2, Film } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onCommission: (category: string) => void;
}

export default function ProjectModal({ project, onClose, onCommission }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
          className="relative w-full max-w-5xl rounded-3xl bg-[#0d0d11] border border-white/15 overflow-hidden shadow-2xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Cover Image */}
          <div className="relative w-full h-[380px] sm:h-[460px] bg-black">
            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-[#0d0d11]/40 to-transparent" />

            {/* In-hero Title Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-400 mb-2">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-white font-medium">
                  {project.category}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {project.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {project.year}
                </span>
              </div>

              <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
                {project.title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base font-light mt-1">
                {project.subtitle} — Commissioned by <span className="text-white font-medium">{project.client}</span>
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 sm:p-12 space-y-10">
            {/* Overview & Deliverables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold">
                  PRODUCTION NARRATIVE
                </h4>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="pt-2 text-xs text-zinc-400 flex items-center gap-2">
                  <Film className="w-4 h-4 text-zinc-300" />
                  <span>Role: <strong className="text-white">{project.role}</strong></span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-3">
                  DELIVERABLES SUPPLIED
                </h4>
                {project.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Stills Showcase */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold">
                  ADDITIONAL ARCHIVAL STILLS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 group"
                    >
                      <img
                        src={img}
                        alt={`${project.title} Still ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Client: {project.client} • {project.year} Archives
              </span>
              <button
                onClick={() => {
                  onClose();
                  onCommission(project.category);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Commission Similar Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
