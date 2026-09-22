import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Award, Globe2, Sparkles, ChevronDown } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenShowreel: () => void;
}

export default function Hero({ onOpenBooking, onOpenShowreel }: HeroProps) {
  // Animation easing curve: easeInOut for smooth luxury feel
  const transitionEase = "easeInOut" as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center pt-28 pb-12 px-6 sm:px-8 overflow-hidden bg-[#08080a]"
    >
      {/* Cinematic Dark Background Layer with subtle gradient and film vignette */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter grayscale contrast-125 transition-transform duration-10000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=90')`,
          }}
        />
        {/* Multi-tier dark gradient vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-[#08080a]/80 to-[#08080a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08080a]/60 to-[#08080a]" />
        {/* Subtle noise grain simulation */}
        <div className="absolute inset-0 grain-overlay opacity-60" />
      </div>

      {/* Top spacer to ensure vertical breathing room */}
      <div className="w-full flex justify-between items-center z-10 max-w-7xl mx-auto pt-6 opacity-0 md:opacity-100 transition-opacity">
        <div className="text-[11px] tracking-[0.25em] text-zinc-500 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span>EST. 2012 • VOL. XXIV</span>
        </div>
        <div className="text-[11px] tracking-[0.25em] text-zinc-500 uppercase">
          FINE-ART CINEMA & EDITORIAL
        </div>
      </div>

      {/* Main Hero Staggered Sequence Container */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto flex flex-col items-center justify-center py-10 sm:py-16">
        
        {/* 1. Logo fades in first (Duration 700ms, easeInOut) */}
        <motion.div
          id="hero-logo-emblem"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: transitionEase, delay: 0.1 }}
          className="mb-8 sm:mb-10 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-zinc-300">
            <Sparkles className="w-3 h-3 text-amber-300/80" />
            <span>KATOGRAPHY ATELIER & CINEMA</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-xs sm:text-sm font-semibold tracking-[0.45em] text-zinc-400 uppercase">
            LONDON • LOS ANGELES • TOKYO
          </h2>
        </motion.div>

        {/* 2. Headline fades upward (Duration 700ms, easeInOut) */}
        <motion.div
          id="hero-headline-block"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: transitionEase, delay: 0.45 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="font-['Syne',sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[1.05] text-white uppercase max-w-4xl mx-auto">
            CRAFTING <br className="hidden sm:inline" />
            <span className="font-['Cormorant_Garamond',serif] italic font-normal lowercase tracking-normal text-zinc-300 text-5xl sm:text-7xl md:text-8xl lg:text-9xl px-2">
              cinematic
            </span>
            <br className="hidden sm:inline" /> VISUALS WORLDWIDE
          </h1>
        </motion.div>

        {/* 3. Description appears after headline (Duration 700ms, easeInOut) */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: transitionEase, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 font-sans tracking-wide"
        >
          An elite creative studio producing high-end festival cinematography, 
          magazine cover editorial portraits, and high-impact commercial campaigns 
          for visionary brands and global cultural icons.
        </motion.p>

        {/* 4. Credibility Points Display (Duration 700ms, easeInOut) */}
        <motion.div
          id="hero-credibility-points"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: transitionEase, delay: 1.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-xs tracking-wider text-zinc-300">
            <Globe2 className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="font-medium">Available Worldwide</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-xs tracking-wider text-zinc-300">
            <Award className="w-4 h-4 text-amber-400/90 shrink-0" />
            <span className="font-medium">Award Winning Creative Studio</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-xs tracking-wider text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-white/60 shrink-0" />
            <span className="font-medium">Photo | Video | Cinema</span>
          </div>
        </motion.div>

        {/* 5. Primary CTA appears last (Duration 700ms, easeInOut) */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: transitionEase, delay: 1.35 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          {/* Primary CTA named "Book / Enquire" */}
          <button
            onClick={onOpenBooking}
            id="hero-primary-book-cta"
            className="group relative px-8 sm:px-10 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-[3px] shadow-[0_0_35px_rgba(255,255,255,0.22)] active:translate-y-0"
          >
            <span className="flex items-center gap-2.5">
              <span>Book / Enquire</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>

          {/* Secondary Showreel Play button */}
          <button
            onClick={onOpenShowreel}
            id="hero-play-showreel-btn"
            className="group flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-[3px]"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-end text-zinc-500 text-[11px] tracking-[0.25em] uppercase pt-4"
      >
        <div className="hidden sm:block">
          SCROLL TO EXPLORE
        </div>
        <div className="mx-auto sm:mx-0 flex flex-col items-center gap-2">
          <a
            href="#services"
            className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Scroll to services"
          >
            <span className="text-[10px] tracking-widest">DISCOVER</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400" />
          </a>
        </div>
        <div className="hidden sm:block">
          LONDON • TOKYO • NYC
        </div>
      </motion.div>
    </section>
  );
}
