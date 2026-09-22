import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, Maximize2, X, SlidersHorizontal } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/agencyData';
import { GalleryPhoto } from '../types';

export default function CinematicGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Events & Festivals', 'Portrait & Studio', 'Commercial Media'];

  const filteredPhotos = filter === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category.includes(filter) || filter.includes(p.category));

  return (
    <section
      id="gallery"
      className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#08080a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 px-4 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>IMMERSIVE VISUAL ARCHIVES</span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
              CINEMATIC GALLERY
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? 'bg-white text-black'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Masonry Edge-to-Edge Grid with Parallax-feel scroll and scale-up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[340px]">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.42, 0, 0.58, 1],
              }}
              data-cursor="view"
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 border border-white/10 ${photo.spanClass}`}
            >
              {/* Progressive loading image */}
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter brightness-90 group-hover:brightness-100 contrast-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Hover technical badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px]">
                  {photo.cameraInfo}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Metadata info */}
              <div className="absolute bottom-4 left-4 right-4 transition-transform duration-300">
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-1">
                  {photo.category}
                </p>
                <h3 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {photo.location}
                  </span>
                  <span>•</span>
                  <span className="font-mono text-zinc-500 text-[10px]">{photo.isoAperture}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen Photo Inspection */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close Lightbox"
                className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-h-[75vh] w-auto">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Lightbox Footer Bar */}
              <div className="w-full mt-4 p-4 rounded-xl bg-zinc-900/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div>
                  <h4 className="font-['Syne',sans-serif] text-base font-bold text-white uppercase">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-zinc-400 text-xs">
                    {selectedPhoto.category} • {selectedPhoto.location}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-zinc-300 font-mono text-[11px]">
                  <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <Camera className="w-3.5 h-3.5 text-zinc-400" />
                    {selectedPhoto.cameraInfo}
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400" />
                    {selectedPhoto.isoAperture}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
