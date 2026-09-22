import React from 'react';
import { MessageSquare, Calendar, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface MobileActionButtonsProps {
  onOpenBooking: () => void;
}

export default function MobileActionButtons({ onOpenBooking }: MobileActionButtonsProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Katography Studio, I would like to inquire about booking a production shoot."
    );
    window.open(`https://wa.me/${AGENCY_INFO.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Action Button for Desktop & Mobile */}
      <button
        onClick={handleWhatsApp}
        aria-label="Direct WhatsApp Message"
        id="floating-whatsapp-btn"
        className="fixed bottom-20 md:bottom-8 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <MessageSquare className="w-5 h-5 text-black" />
        <span className="hidden group-hover:inline-block ml-2 text-xs font-bold uppercase tracking-wider text-black pr-1">
          WhatsApp Direct
        </span>
      </button>

      {/* Mobile Sticky Bottom Bar (Visible on mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#08080a]/95 backdrop-blur-xl border-t border-white/10 flex items-center gap-3">
        <button
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={onOpenBooking}
          className="flex-[2] py-3 px-4 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-lg"
        >
          <span>Book A Shoot</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
}
