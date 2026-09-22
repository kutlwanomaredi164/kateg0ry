import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08080a] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-zinc-800/10 via-white/[0.02] to-zinc-800/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with generous spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          >
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>CAPABILITIES & DISCIPLINES</span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
              OUR SERVICES
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            className="text-zinc-400 max-w-md text-sm sm:text-base font-light leading-relaxed"
          >
            End-to-end cinematic direction, high-resolution medium format stills, 
            and precision post-production engineered for discerning global creators.
          </motion.p>
        </div>

        {/* 3 Premium Service Cards with Scroll Animation & Stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Staggered reveal
                ease: [0.42, 0, 0.58, 1],
              }}
              // Hover effects: Border highlight, slight lift animation, soft glow effect
              whileHover={{
                y: -10,
                transition: { duration: 0.35, ease: 'easeOut' },
              }}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#0e0e12]/80 border border-white/10 transition-colors duration-500 hover:border-white/40 hover:bg-[#121217] hover:shadow-[0_15px_45px_-10px_rgba(255,255,255,0.07)]"
            >
              {/* Subtle top image preview thumbnail */}
              <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl border border-white/5">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-black/30" />
                
                {/* Turnaround Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] tracking-widest text-zinc-300 uppercase">
                  {service.turnaround}
                </div>
              </div>

              {/* Service Header: Large Number & Title */}
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-['Cormorant_Garamond',serif] text-5xl sm:text-6xl font-light text-zinc-600 transition-colors duration-300 group-hover:text-white">
                    {service.number}
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase">
                    SERVICE
                  </span>
                </div>

                <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-zinc-400 mb-6 font-medium">
                  {service.subtitle}
                </p>

                {/* Brief description */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Service Deliverable Highlights */}
                <div className="space-y-2.5 mb-10 pt-4 border-t border-white/5">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button at bottom of card */}
              <button
                onClick={() => onSelectService(service.title)}
                id={`service-enquire-btn-${service.id}`}
                className="w-full py-3.5 px-4 rounded-xl border border-white/10 group-hover:border-white/30 bg-white/[0.02] group-hover:bg-white text-zinc-300 group-hover:text-black text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Enquire This Discipline</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
