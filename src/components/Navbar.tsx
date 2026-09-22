import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Globe, Clock } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenBooking: (servicePreselect?: string) => void;
  onOpenShowreel: () => void;
}

export default function Navbar({ onOpenBooking, onOpenShowreel }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live real-time studio clock (London GMT/BST & Local)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position for dynamic glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left: Location & Live Time Indicator */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase text-zinc-400">
            <div className="flex items-center gap-1.5" id="nav-location-indicator">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
              <span>London • Tokyo • Worldwide</span>
            </div>
            <div className="h-3 w-px bg-zinc-800" />
            <div className="flex items-center gap-1.5 font-mono text-zinc-400" id="nav-live-time-indicator">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>LON {currentTime || '11:55:00'} GMT</span>
            </div>
          </div>

          {/* Center: Centered Luxury Brand Logo */}
          <div className="flex-1 lg:flex-initial flex justify-start lg:justify-center">
            <a
              href="#"
              id="brand-logo-link"
              className="group flex flex-col items-start lg:items-center text-left lg:text-center focus:outline-none"
            >
              <span className="font-['Syne',sans-serif] text-xl sm:text-2xl font-extrabold tracking-[0.3em] text-white transition-all duration-300 group-hover:tracking-[0.35em]">
                {AGENCY_INFO.name}
              </span>
              <span className="text-[9px] tracking-[0.35em] text-zinc-500 uppercase -mt-0.5 group-hover:text-zinc-300 transition-colors">
                Creative Studio
              </span>
            </a>
          </div>

          {/* Right: Minimal Navigation Links & Primary CTA */}
          <div className="hidden md:flex items-center gap-7">
            <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.16em] text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <button
              onClick={onOpenShowreel}
              id="nav-showreel-button"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-zinc-400 hover:text-white transition-colors py-2 px-3 border border-transparent hover:border-zinc-800 rounded-full"
            >
              <span>Showreel</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            </button>

            {/* Primary CTA: "Book / Enquire" */}
            <button
              onClick={() => onOpenBooking()}
              id="nav-book-enquire-btn"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.18em] text-black bg-white transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-[3px] shadow-[0_0_20px_rgba(255,255,255,0.15)] active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Book / Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              id="mobile-nav-book-btn"
              className="px-3 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] text-black bg-white"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="p-2 text-zinc-400 hover:text-white focus:outline-none rounded-lg border border-zinc-800 bg-zinc-950/60"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            id="mobile-navigation-drawer"
            className="fixed inset-0 top-[60px] z-40 bg-[#08080a]/98 backdrop-blur-xl border-b border-zinc-800 p-8 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-zinc-500 pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>London Studio</span>
                </div>
                <div className="font-mono text-zinc-400">
                  {currentTime} GMT
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-['Syne',sans-serif] text-2xl font-bold tracking-wider text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShowreel();
                }}
                className="w-full py-3 rounded-full border border-zinc-700 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2"
              >
                <span>Watch 2025 Showreel</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Book / Enquire</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] tracking-widest uppercase text-zinc-500">
                Worldwide Productions • London • Los Angeles
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
