import React, { useState, useEffect } from 'react';
import { MapPin, Copy, Check, Star } from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function TopBar() {
  const [copied, setCopied] = useState(false);
  const [statusText, setStatusText] = useState('Verificando horario...');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function calculateStatus() {
      const now = new Date();
      const day = now.getDay(); // 0: Dom, 1: Lun, ..., 6: Sab
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      if (day >= 1 && day <= 5) {
        // Lun a Vie: 08:30 - 13:00 y 16:30 - 20:30
        const mStart = 8 * 60 + 30;
        const mEnd = 13 * 60;
        const aStart = 16 * 60 + 30;
        const aEnd = 20 * 60 + 30;

        if (currentMinutes >= mStart && currentMinutes < mEnd) {
          setIsOpen(true);
          setStatusText('Abierto ahora • Cierra a las 13:00 hs');
        } else if (currentMinutes >= aStart && currentMinutes < aEnd) {
          setIsOpen(true);
          setStatusText('Abierto ahora • Cierra a las 20:30 hs');
        } else if (currentMinutes < mStart) {
          setIsOpen(false);
          setStatusText('Cerrado por ahora • Abre a las 08:30 hs');
        } else if (currentMinutes >= mEnd && currentMinutes < aStart) {
          setIsOpen(false);
          setStatusText('Receso de siesta • Abre a las 16:30 hs');
        } else {
          setIsOpen(false);
          setStatusText('Cerrado por hoy • Abre mañana 08:30 hs');
        }
      } else if (day === 6) {
        // Sabados: 08:30 - 13:00
        const sStart = 8 * 60 + 30;
        const sEnd = 13 * 60;
        if (currentMinutes >= sStart && currentMinutes < sEnd) {
          setIsOpen(true);
          setStatusText('Abierto ahora • Cierra a las 13:00 hs');
        } else if (currentMinutes < sStart) {
          setIsOpen(false);
          setStatusText('Cerrado • Abre hoy a las 08:30 hs');
        } else {
          setIsOpen(false);
          setStatusText('Cerrado hasta el lunes 08:30 hs');
        }
      } else {
        setIsOpen(false);
        setStatusText('Cerrado domingo • Guardia WhatsApp');
      }
    }

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${WORKSHOP_INFO.address}, ${WORKSHOP_INFO.city}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-slate-950 border-b border-slate-800/80 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Ubicación y botón copiar */}
        <div className="flex items-center gap-3 text-slate-300">
          <a 
            href={WORKSHOP_INFO.googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-lime transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-lime" />
            <span><strong>{WORKSHOP_INFO.address}</strong> - {WORKSHOP_INFO.city}</span>
          </a>
          <span className="hidden md:inline text-slate-700">|</span>
          <button 
            onClick={handleCopy}
            className="hidden md:flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            title="Copiar dirección"
          >
            {copied ? <Check className="w-3 h-3 text-brand-lime" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? '¡Copiado!' : 'Copiar dir.'}</span>
          </button>
        </div>

        {/* Semáforo en vivo y enlace a Google Maps */}
        <div className="flex items-center gap-3">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            isOpen 
              ? 'border-lime-500/30 bg-lime-500/10 text-lime-400' 
              : 'border-amber-500/30 bg-amber-500/10 text-amber-300'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-lime-400 animate-pulse' : 'bg-amber-400'}`}></span>
            <span>{statusText}</span>
          </div>

          <a 
            href={WORKSHOP_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-slate-400 hover:text-brand-lime transition-colors"
          >
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>Google Maps (4.9★)</span>
          </a>
        </div>

      </div>
    </div>
  );
}

