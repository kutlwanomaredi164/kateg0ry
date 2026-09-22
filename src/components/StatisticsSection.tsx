import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATISTICS } from '../data/agencyData';
import { StatisticItem } from '../types';

function CounterNumber({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2200; // ms
    const startTime = performance.now();
    const isDecimal = targetValue % 1 !== 0;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out expo for natural luxury deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = easeProgress * targetValue;

      if (isDecimal) {
        setCurrent(parseFloat(val.toFixed(1)));
      } else {
        setCurrent(Math.floor(val));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrent(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="font-['Syne',sans-serif] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
      {current}
      <span className="text-3xl sm:text-4xl text-zinc-400 font-normal ml-0.5">{suffix}</span>
    </span>
  );
}

export default function StatisticsSection() {
  return (
    <section
      id="statistics"
      className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#09090c] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              TRACK RECORD & METRICS
            </span>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mt-2">
              DISCIPLINED EXCELLENCE BY THE NUMBERS
            </h2>
          </motion.div>
        </div>

        {/* 4 Animated Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {STATISTICS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center group hover:bg-white/[0.03]"
            >
              <div className="mb-4">
                <CounterNumber targetValue={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="font-['Syne',sans-serif] text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-200 mb-2">
                {stat.label}
              </h3>

              <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
