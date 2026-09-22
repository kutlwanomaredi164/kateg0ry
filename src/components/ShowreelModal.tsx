import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Disc, Sparkles } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function ShowreelModal({ isOpen, onClose, onOpenBooking }: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(25);

  const chapters = [
    { title: "ACT I: NIGHT ATLAS", type: "Flagship Festivals", time: "00:15" },
    { title: "ACT II: CHIAROSCURO", type: "Haute Couture Editorial", time: "01:20" },
    { title: "ACT III: SPEED & CHROME", type: "Automotive Cinema", time: "02:40" },
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 100);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 p-6 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <div className="text-left">
                <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.2em] text-white uppercase block">
                  KATOGRAPHY SHOWREEL 2025/2026
                </span>
                <span className="text-[10px] tracking-widest text-zinc-400 font-mono">
                  MASTER 4K DCI • DOLBY VISION HDR • ARRI LF
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Showreel"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Preview Canvas Simulation with Moody Cinematic Lighting */}
          <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=90"
              alt="Katography Cinema Showreel"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-100' : 'filter brightness-75 blur-xs'
              }`}
            />

            {/* Letterbox Bars for High-End Cinematic Ratio (2.39:1 Anamorphic) */}
            <div className="absolute top-0 left-0 right-0 h-6 sm:h-10 bg-black pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-10 bg-black pointer-events-none" />

            {/* Center Pause/Play overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Showreel" : "Play Showreel"}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group"
            >
              {!isPlaying && (
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 fill-black ml-1" />
                </div>
              )}
            </button>
          </div>

          {/* Video Controls & Chapters Bar */}
          <div className="p-6 bg-[#0a0a0d] border-t border-white/10 space-y-4">
            {/* Progress Scrubber Bar */}
            <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Play/Pause & Sound Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 text-white hover:text-zinc-300 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="font-mono text-xs text-zinc-400">
                  01:24 / 03:45
                </span>
              </div>

              {/* Chapters */}
              <div className="flex items-center gap-2 overflow-x-auto">
                {chapters.map((chap, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveChapter(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                      activeChapter === i
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'text-zinc-400 hover:text-white bg-white/5'
                    }`}
                  >
                    <span>{chap.time}</span> <span className="text-[10px] text-zinc-500">• {chap.type}</span>
                  </button>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors"
              >
                Book This Crew
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
