import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#09090c] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              ACCLAIM & REPUTATION
            </span>
            <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mt-2">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light mt-4">
              Direct perspectives from executive producers, creative directors, and luxury brand managers.
            </p>
          </motion.div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.18,
                ease: [0.42, 0, 0.58, 1],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#0e0e12] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]"
            >
              <div>
                {/* Header: Company Tier Badge & Star Ratings */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-[0.25em] font-mono text-zinc-400 uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {testimonial.companyTier}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote symbol */}
                <Quote className="w-8 h-8 text-white/15 mb-4 group-hover:text-white/30 transition-colors" />

                {/* Testimonial Quote */}
                <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-zinc-200 leading-snug italic mb-8">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-white/20 filter contrast-110"
                />
                <div>
                  <h4 className="font-['Syne',sans-serif] text-sm font-bold text-white tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {testimonial.role} • <span className="text-zinc-300 font-medium">{testimonial.company}</span>
                  </p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
                    Ref: {testimonial.projectTitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
