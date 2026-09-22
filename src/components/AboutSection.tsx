import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Film, Compass, Target, Sparkles } from 'lucide-react';
import { ABOUT_STORY } from '../data/agencyData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08080a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images slide from left */}
          <motion.div
            id="about-images-col"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.42, 0, 0.58, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Main Cinematic Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85"
                alt="Katography Creative Direction On Set"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-110 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Camera Rig Technical Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  <span>ATELIER DIRECTORS</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ACTIVE PRODUCTION
                  </span>
                </div>
                <p className="text-xs text-white font-medium">
                  ARRI Alexa Mini LF • Cooke Anamorphic /i Optics
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Still Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-56 rounded-xl overflow-hidden border-2 border-[#08080a] shadow-2xl bg-zinc-900"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85"
                alt="Studio High-Fashion Portrait"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-125 brightness-95"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[9px] uppercase tracking-widest text-zinc-300 font-mono">
                100MP
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Text slides from right */}
          <motion.div
            id="about-content-col"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.42, 0, 0.58, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow marker */}
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>ABOUT THE ATELIER</span>
            </div>

            <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
              SCULPTING ATMOSPHERE, <br />
              <span className="font-['Cormorant_Garamond',serif] italic font-normal lowercase tracking-normal text-zinc-300 text-4xl sm:text-6xl">
                tension
              </span>{' '}
              & LASTING LEGACY
            </h2>

            {/* Manifesto Quote */}
            <div className="p-6 rounded-xl bg-white/[0.02] border-l-2 border-white/60 mb-8">
              <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-zinc-200 italic leading-snug">
                "{ABOUT_STORY.manifesto}"
              </p>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase text-zinc-400">
                — {ABOUT_STORY.founder}, {ABOUT_STORY.title}
              </div>
            </div>

            {/* Story & Experience Paragraphs */}
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
              {ABOUT_STORY.story}
            </p>

            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white mt-1">
                  <Compass className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-['Syne',sans-serif] text-sm font-bold uppercase tracking-wider text-white mb-1">
                    OUR VISION
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {ABOUT_STORY.vision}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white mt-1">
                  <Target className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-['Syne',sans-serif] text-sm font-bold uppercase tracking-wider text-white mb-1">
                    OUR MISSION
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {ABOUT_STORY.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA button underneath */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                id="about-cta-btn"
                className="group px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-[3px] shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center gap-2"
              >
                <span>Book / Enquire Collaboration</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
