import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hola Mecánica Integral Espinosa! Quisiera hacerles una consulta.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip Flotante */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-3 w-56 p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-xs text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-whatsapp animate-ping"></span>
          <strong className="text-white">{WORKSHOP_INFO.shortName}</strong>
        </div>
        <p className="text-[11px] text-slate-300">¿Necesitás un presupuesto o auxilio rápido? Escribinos por WhatsApp.</p>
      </div>

      {/* Botón WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-slate-950 shadow-2xl shadow-whatsapp/50 transition-all transform hover:scale-110 focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 text-slate-950" />
      </a>
    </div>
  );
}

