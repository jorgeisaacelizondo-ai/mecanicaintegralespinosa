import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  Disc, 
  Snowflake, 
  ClipboardCheck, 
  Check, 
  MessageCircle,
  Car
} from 'lucide-react';
import { SERVICES_DATA, WORKSHOP_INFO } from '../../shared/data/workshopData';

const iconMap = {
  OilCan: Wrench,
  Wrench: Wrench,
  Cpu: Cpu,
  Disc: Disc,
  Snowflake: Snowflake,
  ClipboardCheck: ClipboardCheck
};

export default function Services() {
  const [filter, setFilter] = useState('all');

  const filteredServices = SERVICES_DATA.filter(service => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  const getWhatsAppServiceLink = (serviceTitle) => {
    const text = `Hola Mecánica Integral Espinosa! Me comunico desde su página web para consultar por el servicio de: *${serviceTitle}*. Pasaje Florida 920.`;
    return `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicios" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Nuestros Servicios Especializados</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Soluciones integrales para todas las marcas y modelos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mantenimiento de rutina, reparaciones complejas y diagnóstico electrónico con instrumental calibrado en La Rioja Capital.
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-brand-lime text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Todos los Servicios
            </button>
            <button
              onClick={() => setFilter('preventivo')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === 'preventivo'
                  ? 'bg-brand-lime text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Mantenimiento Preventivo
            </button>
            <button
              onClick={() => setFilter('mecanica')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === 'mecanica'
                  ? 'bg-brand-lime text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Mecánica & Motor
            </button>
            <button
              onClick={() => setFilter('electronica')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === 'electronica'
                  ? 'bg-brand-lime text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Diagnóstico & Electricidad
            </button>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const IconComponent = iconMap[service.icon] || Wrench;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime text-2xl">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-lime uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-lime flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/80 hover:bg-whatsapp hover:text-slate-950 text-white font-semibold text-xs sm:text-sm transition-all border border-slate-700/80 hover:border-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Escaneo Express */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-brand-lime/30 p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-lime/10 border border-brand-lime/40 flex items-center justify-center text-brand-lime text-3xl flex-shrink-0">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-white">¿Tenés una luz de falla o ruido extraño?</h4>
              <p className="text-sm text-slate-300">Traé tu auto a {WORKSHOP_INFO.address} para un escaneo computarizado rápido y salí con un presupuesto claro.</p>
            </div>
          </div>
          <a
            href="#contacto-turno"
            className="px-6 py-3.5 rounded-xl bg-brand-lime hover:bg-brand-lime-hover text-slate-950 font-bold text-sm shadow-lg whitespace-nowrap transition-all"
          >
            Reservar Diagnóstico en el Taller
          </a>
        </div>

      </div>
    </section>
  );
}

