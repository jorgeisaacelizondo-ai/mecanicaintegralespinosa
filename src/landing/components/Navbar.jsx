import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, Menu, X, Lock } from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function Navbar({ onOpenPortal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hola Mecánica Integral Espinosa! Quiero agendar un turno o cotización para mi vehículo.'
  )}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-brand-dark/95 border-b border-slate-800/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Marca */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-brand-lime/40 bg-slate-900 shadow-md flex items-center justify-center p-0.5 group-hover:border-brand-lime transition-colors">
              <img 
                src="/images/mie-logo.jpg" 
                alt="Logo Mecánica Integral Espinosa" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-brand-lime leading-none">
                  {WORKSHOP_INFO.shortName}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lime animate-ping"></span>
              </div>
              <span className="font-display text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase leading-tight">
                {WORKSHOP_INFO.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {WORKSHOP_INFO.city}
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium text-slate-300 hover:text-brand-lime transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-medium text-slate-300 hover:text-brand-lime transition-colors">Servicios</a>
            <a href="#diferenciadores" className="text-sm font-medium text-slate-300 hover:text-brand-lime transition-colors">Por qué elegirnos</a>
            <a href="#resenas" className="text-sm font-medium text-slate-300 hover:text-brand-lime transition-colors">Reseñas</a>
            <a href="#ubicacion" className="text-sm font-medium text-slate-300 hover:text-brand-lime transition-colors">Ubicación y Horarios</a>
          </nav>

          {/* Botones de Acción (Header) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Botón Acceso Personal / Portal */}
            <button
              type="button"
              onClick={onOpenPortal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-all hover:border-brand-lime/50"
              title="Portal de Administración y Mecánicos"
            >
              <Lock className="w-3.5 h-3.5 text-brand-lime" />
              <span>Acceso Personal</span>
            </button>

            {/* Botón WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-subtle flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-slate-950 shadow-lg shadow-whatsapp/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>

          {/* Botón Mobile Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenPortal}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              title="Portal Colaboradores"
            >
              <Lock className="w-4 h-4 text-brand-lime" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#inicio" 
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-brand-lime"
          >
            Inicio
          </a>
          <a 
            href="#servicios" 
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-brand-lime"
          >
            Servicios
          </a>
          <a 
            href="#diferenciadores" 
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-brand-lime"
          >
            Por qué elegirnos
          </a>
          <a 
            href="#resenas" 
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-brand-lime"
          >
            Reseñas
          </a>
          <a 
            href="#ubicacion" 
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-brand-lime"
          >
            Ubicación y Horarios
          </a>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-whatsapp text-slate-950 font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Agendar por WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 text-slate-300 font-semibold text-xs border border-slate-800"
            >
              <Lock className="w-4 h-4 text-brand-lime" />
              <span>Portal Personal / Colaboradores</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

