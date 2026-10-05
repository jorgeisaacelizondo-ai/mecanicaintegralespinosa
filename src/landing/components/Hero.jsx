import React from 'react';
import { MessageCircle, Wrench, Shield, Video, Laptop, Clock, Star, MapPin } from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hola Mecánica Integral Espinosa! Quiero solicitar una cotización para mi vehículo.'
  )}`;

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-mesh-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Copy de Conversión */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge de Confianza */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs sm:text-sm font-semibold">
              <Shield className="w-3.5 h-3.5 text-brand-lime" />
              <span>Taller Mecánico Oficial • La Rioja Capital</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
              <span className="text-slate-300 font-normal">{WORKSHOP_INFO.address}</span>
            </div>

            {/* Titular */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Tu auto en manos de expertos: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-lime-300 to-sky-400">
                diagnóstico honesto
              </span>{' '}
              y servicio garantizado.
            </h1>

            {/* Subtitular */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              En <strong className="text-white">{WORKSHOP_INFO.name}</strong> cuidamos tu seguridad y tu bolsillo. Te enviamos <span className="text-brand-lime font-medium">fotos y videos por WhatsApp</span> de cada pieza antes de cambiarla, con diagnóstico computarizado multimarca y garantía certificada por escrito.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-base shadow-xl shadow-whatsapp/25 transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 hover:border-brand-lime/50 transition-all"
              >
                <Wrench className="w-4 h-4 text-brand-lime" />
                <span>Ver Servicios & Precios</span>
              </a>
            </div>

            {/* 4 Beneficios Clave */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-brand-lime flex-shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium leading-snug">Evidencia por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-brand-lime flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium leading-snug">Garantía por Escrito</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-brand-lime flex-shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium leading-snug">Escáner OBD-II</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-brand-lime flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium leading-snug">Entrega Puntual</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta con Fachada 3D Real */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-lime/30 to-sky-500/20 rounded-3xl blur-xl opacity-70"></div>

            <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                <img
                  src="/images/mie-cartel-fachada.jpg"
                  alt="Fachada y cartel 3D Mecánica Integral Espinosa"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Badge flotante de dirección */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                  <span className="text-xs font-semibold text-white">{WORKSHOP_INFO.address}</span>
                </div>

                {/* Calificación Google */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-white">{WORKSHOP_INFO.googleRating}</span>
                  <span className="text-[10px] text-slate-400">(Google)</span>
                </div>
              </div>

              {/* Pie de la tarjeta */}
              <div className="p-6 space-y-4 bg-slate-950/90 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">{WORKSHOP_INFO.name}</h3>
                    <p className="text-xs text-slate-400">Atención personalizada y asesoramiento honesto</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
                    <Wrench className="w-5 h-5" />
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={WORKSHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-brand-lime transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                    <span>Ver cómo llegar en Maps</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

