import React from 'react';
import { MapPin, Phone, Mail, Lock, Star } from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function Footer({ onOpenPortal }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Marca & Resumen */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/mie-logo.jpg" 
                alt="MIE Logo" 
                className="w-10 h-10 rounded-lg object-cover border border-brand-lime/40"
              />
              <div>
                <span className="font-display font-black text-xl text-brand-lime tracking-wider block">
                  {WORKSHOP_INFO.shortName}
                </span>
                <span className="font-display text-xs font-bold text-white uppercase">
                  {WORKSHOP_INFO.name}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Taller mecánico de alta precisión en La Rioja Capital. Mantenimiento preventivo, diagnóstico computarizado y mecánica integral con evidencia en fotos/videos y garantía por escrito.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={WORKSHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-lime hover:border-brand-lime transition-colors"
                title="Google Maps"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </a>
              <button
                type="button"
                onClick={onOpenPortal}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-lime hover:border-brand-lime transition-colors"
                title="Portal Interno de Colaboradores"
              >
                <Lock className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navegación Rápida */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-brand-lime transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Servicios Mecánicos</a></li>
              <li><a href="#diferenciadores" className="hover:text-brand-lime transition-colors">Por qué elegir MIE</a></li>
              <li><a href="#resenas" className="hover:text-brand-lime transition-colors">Reseñas en Google Maps</a></li>
              <li><a href="#ubicacion" className="hover:text-brand-lime transition-colors">Ubicación y Horarios</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPortal}
                  className="text-left hover:text-brand-lime transition-colors flex items-center gap-1.5 text-brand-lime"
                >
                  <Lock className="w-3 h-3" />
                  <span>Acceso Personal / Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Especialidades */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Especialidades</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Afinación & Cambio de Aceite</a></li>
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Escáner Check Engine OBD-II</a></li>
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Frenos ABS & Convencionales</a></li>
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Kit de Distribución & Bomba</a></li>
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Carga de Aire Acondicionado</a></li>
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Inspección Técnica Pre-RTO</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Taller La Rioja</h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-lime mt-0.5 flex-shrink-0" />
                <span>{WORKSHOP_INFO.address}, {WORKSHOP_INFO.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-lime flex-shrink-0" />
                <a href={`tel:${WORKSHOP_INFO.phoneDisplay}`} className="hover:text-white transition-colors">{WORKSHOP_INFO.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>{WORKSHOP_INFO.email}</span>
              </p>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  Lunes a Sábados
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {WORKSHOP_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href={WORKSHOP_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Google Maps</a>
            <span>&bull;</span>
            <button type="button" onClick={onOpenPortal} className="hover:text-slate-300">Portal Taller</button>
            <span>&bull;</span>
            <span>La Rioja, Argentina</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

