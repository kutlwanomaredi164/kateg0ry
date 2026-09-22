import React from 'react';
import { ArrowUp, Globe, Clock, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-20 pb-28 md:pb-16 px-6 sm:px-8 text-zinc-400 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-['Syne',sans-serif] text-2xl font-extrabold tracking-[0.3em] text-white uppercase block">
              {AGENCY_INFO.name}
            </span>
            <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase">
              CREATIVE STUDIO & PRODUCTION HOUSE
            </p>
            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm pt-2">
              Sculpting atmosphere, tension, and enduring legacy through cinema-grade optics and master lighting architectures worldwide.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BOOKINGS OPEN FOR 2026/2027 CALENDAR</span>
            </div>
          </div>

          {/* Hubs Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-bold mb-4">
              STUDIO ATELIERS
            </h4>
            <div className="text-xs space-y-4">
              <div>
                <span className="text-white font-medium block">London Flagship</span>
                <p className="text-zinc-500">{AGENCY_INFO.contact.primaryStudio}</p>
              </div>
              <div>
                <span className="text-white font-medium block">Los Angeles Production Hub</span>
                <p className="text-zinc-500">{AGENCY_INFO.contact.intlHub}</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="text-xs space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Cinematic Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Acclaim & Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book A Shoot</a></li>
            </ul>
          </div>

          {/* Socials & Compliance */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-bold mb-4">
              CONNECT
            </h4>
            <ul className="text-xs space-y-2.5">
              {AGENCY_INFO.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {AGENCY_INFO.fullName}. All Rights Reserved.</span>
            <span>•</span>
            <span>Confidentiality & NDA Guaranteed</span>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Back To Top</span>
            <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
