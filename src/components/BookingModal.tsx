import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(preselectedService || 'Events & Festivals');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('£10k - £25k');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Katography Studio, I'm enquiring about booking a ${selectedService} production.`
    );
    window.open(`https://wa.me/${AGENCY_INFO.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0e0e13] border border-white/15 p-6 sm:p-10 shadow-2xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Booking Modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white uppercase tracking-tight mb-2">
                Booking Brief Received
              </h3>
              <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed mb-6">
                Thank you, {name || 'Partner'}. Our executive producer will inspect our production calendar for {date || 'your requested window'} and respond within 24 hours.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-semibold block mb-1">
                  OFFICIAL ENQUIRY PORTAL
                </span>
                <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                  BOOK / ENQUIRE A SHOOT
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light mt-1">
                  Worldwide availability • Studio & On-Location Production
                </p>
              </div>

              {/* Quick WhatsApp option */}
              <div className="mb-6 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="text-emerald-400 font-medium block">Need immediate booking assistance?</span>
                    <span className="text-zinc-400 text-[11px]">Chat on WhatsApp directly with our team</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-black text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Discipline buttons */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                    Service Discipline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.title)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center transition-all ${
                          selectedService === s.title
                            ? 'bg-white text-black font-semibold'
                            : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                        }`}
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@agency.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7900 000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                      Target Date / Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="Nov 2026 or Flexible"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="London / Paris / Studio"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                      Budget Bracket
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#15151b] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40"
                    >
                      <option value="£5k - £10k">£5,000 — £10,000</option>
                      <option value="£10k - £25k">£10,000 — £25,000</option>
                      <option value="£25k - £50k">£25,000 — £50,000</option>
                      <option value="£50k+">£50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-medium">
                    Creative Brief & Scope *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe the concept, mood, deliverables, and vision..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Booking Brief'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
