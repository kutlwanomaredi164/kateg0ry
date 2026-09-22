import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Check, 
  Send,
  ExternalLink 
} from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: preselectedService || 'Events & Festivals',
    date: '',
    location: '',
    budget: '£10k - £25k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if preselectedService prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate luxury agency processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Katography Studio, I would like to inquire about booking a ${formData.serviceType || 'production'} shoot.`
    );
    window.open(`https://wa.me/${AGENCY_INFO.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08080a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Studio Information & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>COMMISSION & BOOKINGS</span>
              </div>

              <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-6">
                LET'S CREATE <br />
                <span className="font-['Cormorant_Garamond',serif] italic font-normal lowercase tracking-normal text-zinc-300 text-4xl sm:text-6xl">
                  something
                </span>{' '}
                ICONIC
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-10">
                Whether you require high-altitude festival cinematography in Europe, a confidential high-fashion cover shoot, or a global commercial campaign, our studio directors are ready to mobilize.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6 mb-10">
                {/* Email */}
                <a
                  href={`mailto:${AGENCY_INFO.contact.email}`}
                  id="contact-email-link"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-0.5">
                      Direct Studio Email
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-zinc-200">
                      {AGENCY_INFO.contact.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${AGENCY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  id="contact-phone-link"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-0.5">
                      London Head Office
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-zinc-200">
                      {AGENCY_INFO.contact.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  id="contact-whatsapp-btn"
                  className="w-full group flex items-center justify-between p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/30 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block">
                        Direct Producer WhatsApp
                      </span>
                      <span className="text-sm font-medium text-zinc-200">
                        Chat Instantly with Head of Production
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* Locations */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 block">
                        London Studio
                      </span>
                      <p className="text-zinc-300">{AGENCY_INFO.contact.primaryStudio}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 block">
                        Los Angeles Hub
                      </span>
                      <p className="text-zinc-300">{AGENCY_INFO.contact.intlHub}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-3">
                Follow Archives
              </span>
              <div className="flex flex-wrap gap-2.5">
                {AGENCY_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-white transition-colors border border-white/5 flex items-center gap-1.5"
                  >
                    <span>{social.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Generation Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0e12] border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white mb-2">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white uppercase tracking-tight">
                    Enquiry Received
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md font-light">
                    Thank you, {formData.name || 'valued partner'}. Our executive producer has received your brief and will review dates, availability, and tailored treatment within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest text-zinc-300 hover:text-white hover:border-white transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-1">
                      Commission A Production
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Please supply preliminary dates, location, and creative scope.
                    </p>
                  </div>

                  {/* Service Selection Pills */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2 font-medium">
                      Select Primary Discipline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: s.title })}
                          className={`py-2.5 px-3 rounded-xl text-xs text-center font-medium transition-all ${
                            formData.serviceType === s.title
                              ? 'bg-white text-black font-semibold shadow-md'
                              : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5 hover:bg-white/[0.06]'
                          }`}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Julian Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Work / Studio Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="julian@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Target Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+44 7900 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-date" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Target Shoot Date / Window
                      </label>
                      <input
                        id="contact-date"
                        type="text"
                        placeholder="e.g. October 2026 or Q4"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Location & Budget Tier */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-location" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Shoot Location / City
                      </label>
                      <input
                        id="contact-location"
                        type="text"
                        placeholder="e.g. London, Paris, Tokyo, Studio"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Estimated Budget Bracket
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                      >
                        <option value="£5k - £10k">£5,000 — £10,000</option>
                        <option value="£10k - £25k">£10,000 — £25,000 (Standard)</option>
                        <option value="£25k - £50k">£25,000 — £50,000 (Commercial/Festival)</option>
                        <option value="£50k+">£50,000+ (Global Campaign)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                      Project Vision & Deliverable Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Tell us about your brand, visual inspirations, expected deliverables (aftermovie, stills, social cuts), and specific timeline requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Primary & Secondary CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    {/* Primary CTA: "Book A Shoot" */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-book-shoot-btn"
                      className="w-full sm:flex-1 py-4 px-8 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-[3px] shadow-[0_0_25px_rgba(255,255,255,0.18)] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Transmitting Brief...' : 'Book A Shoot'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    {/* Secondary CTA: "View Portfolio" */}
                    <a
                      href="#portfolio"
                      id="contact-secondary-view-portfolio-btn"
                      className="w-full sm:w-auto py-4 px-6 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.08] text-white text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-[3px] text-center"
                    >
                      View Portfolio
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
