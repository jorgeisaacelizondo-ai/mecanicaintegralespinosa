import React from 'react';
import { Award, Video, FileText, Laptop, UserCheck, Star } from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function WhyUs() {
  return (
    <section id="diferenciadores" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>La Diferencia MIE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Por qué los conductores de La Rioja eligen Mecánica Integral Espinosa
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Desterramos los vicios de los talleres tradicionales: acá sabés exactamente qué se le hace a tu auto, por qué y con qué costo antes de iniciar.
          </p>
        </div>

        {/* 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-card rounded-2xl p-6 space-y-4 border border-slate-800 hover:border-brand-lime/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Transparencia Total</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Te enviamos fotos y videos en tiempo real por WhatsApp antes de reemplazar cualquier repuesto. Vos aprobás con total certeza y sin sorpresas finales.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4 border border-slate-800 hover:border-brand-lime/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Garantía por Escrito</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Cada trabajo mecánico y repuesto colocado cuenta con respaldo documentado y certificado por escrito para tu total tranquilidad.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4 border border-slate-800 hover:border-brand-lime/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Tecnología de Diagnóstico</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Equipos de escaneo digital multimarca nacional e importada. Detectamos fallas ocultas en sensores e inyección sin cambiar piezas al azar.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4 border border-slate-800 hover:border-brand-lime/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Trato Directo & Puntualidad</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hablás directamente con el mecánico a cargo de tu auto. Cumplimos con las fechas de entrega pactadas para no alterar tu rutina.
            </p>
          </div>

        </div>

        {/* Métricas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-brand-lime font-display">{WORKSHOP_INFO.vehiclesRepaired}</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Vehículos Atendidos</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-display flex items-center justify-center gap-1">
              <span>{WORKSHOP_INFO.googleRating}</span>
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Google Maps Rating</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-brand-lime font-display">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Garantía Certificada</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-sky-400 font-display">{WORKSHOP_INFO.yearsExperience}</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Años de Trayectoria</div>
          </div>
        </div>

      </div>
    </section>
  );
}

