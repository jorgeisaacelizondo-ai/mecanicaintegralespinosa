import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Compass, 
  ExternalLink, 
  MessageCircle, 
  Lock 
} from 'lucide-react';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Mantenimiento Preventivo (Aceite y Filtros)',
    notes: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(`${WORKSHOP_INFO.address}, ${WORKSHOP_INFO.city}, Argentina`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.vehicle) {
      alert('Por favor completá los campos principales.');
      return;
    }

    const message = `👋 *Hola Mecánica Integral Espinosa!*\n` +
      `Quisiera coordinar un turno o cotización para mi vehículo:\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📞 *Teléfono:* ${formData.phone}\n` +
      `🚗 *Vehículo:* ${formData.vehicle}\n` +
      `🔧 *Servicio:* ${formData.service}\n` +
      (formData.notes ? `📝 *Detalle/Falla:* ${formData.notes}\n\n` : `\n`) +
      `📍 *Taller:* ${WORKSHOP_INFO.address}, ${WORKSHOP_INFO.city}.`;

    const url = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ubicacion" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Encontranos Fácilmente</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Ubicación, Horarios y Turnos en La Rioja Capital
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Estamos en {WORKSHOP_INFO.address}. Vení directamente o coordiná tu visita por WhatsApp para una recepción ágil sin esperas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Horarios y Contacto (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Horarios */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-brand-lime" />
                  <h3 className="font-display font-bold text-white text-base">Horarios de Atención</h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-300 font-medium">Lunes a Viernes:</span>
                  <span className="text-white font-mono font-semibold">08:30 a 13:00 hs &bull; 16:30 a 20:30 hs</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-300 font-medium">Sábados:</span>
                  <span className="text-white font-mono font-semibold">08:30 a 13:00 hs</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-medium">Domingos:</span>
                  <span className="text-amber-400 font-medium">Cerrado (Urgencias WhatsApp)</span>
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-lime" />
                <span>Dirección y Teléfono</span>
              </h3>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div>
                    <strong className="text-white text-base">{WORKSHOP_INFO.address}</strong><br />
                    <span className="text-slate-400 text-xs">{WORKSHOP_INFO.city}, {WORKSHOP_INFO.province}, Argentina</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Compass className="w-4 h-4 text-slate-500" />
                  <span>GPS: {WORKSHOP_INFO.coordinates.lat}, {WORKSHOP_INFO.coordinates.lng}</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-brand-lime" />
                  <div>
                    <span className="text-xs text-slate-400 block">Llamadas y WhatsApp:</span>
                    <a href={`tel:${WORKSHOP_INFO.phoneDisplay}`} className="text-white font-bold hover:text-brand-lime transition-colors">
                      {WORKSHOP_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex items-center gap-2">
                <a
                  href={WORKSHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
                >
                  <MapPin className="w-4 h-4 text-brand-lime" />
                  <span>Cómo llegar (Google Maps)</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium"
                  title="Copiar dirección exacta"
                >
                  {copied ? <Check className="w-4 h-4 text-brand-lime" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario de Turno Express (7 cols) */}
          <div className="lg:col-span-7" id="contacto-turno">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-brand-lime/20 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">Solicitar Turno o Cotización</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Completá los datos y te enviamos la confirmación por WhatsApp en minutos.</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 border border-whatsapp/30 flex items-center justify-center text-whatsapp text-2xl">
                  <MessageCircle className="w-6 h-6 fill-whatsapp" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Tu Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-brand-lime placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 380 4123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-brand-lime placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Marca, Modelo y Año *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Toyota Corolla 2018"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-brand-lime placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Servicio Principal</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-brand-lime"
                    >
                      <option value="Mantenimiento Preventivo (Aceite y Filtros)">Mantenimiento Preventivo (Aceite y Filtros)</option>
                      <option value="Diagnóstico Computarizado / Check Engine">Diagnóstico Computarizado / Check Engine</option>
                      <option value="Frenos y Tren Delantero">Frenos y Tren Delantero</option>
                      <option value="Embrague y Distribución">Embrague y Distribución</option>
                      <option value="Aire Acondicionado y Climatización">Aire Acondicionado y Climatización</option>
                      <option value="Inspección Pre-VTV / RTO">Inspección Pre-VTV / RTO</option>
                      <option value="Mecánica General / Otro problema">Mecánica General / Otro problema</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Describí qué síntoma o falla tiene el auto (opcional)</label>
                  <textarea
                    rows="3"
                    placeholder="Ej: Hace un ruido al frenar, o se encendió el testigo del motor en el tablero..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-brand-lime placeholder-slate-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-base shadow-xl shadow-whatsapp/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>Enviar Turno por WhatsApp a Mecánica Espinosa</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-slate-600" />
                    <span>Respuesta inmediata en horario comercial. Sin compromisos ni cargos ocultos.</span>
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>

        {/* Mapa Embebido Google Maps */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
          <div className="bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-brand-lime" />
              <span>Google Maps: <strong>{WORKSHOP_INFO.address}, {WORKSHOP_INFO.city}</strong></span>
            </div>
            <a
              href={WORKSHOP_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-lime hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Abrir app de Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="h-80 sm:h-96 w-full bg-slate-950">
            <iframe
              src="https://maps.google.com/maps?q=-29.4072331,-66.8619793&hl=es&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mecánica Integral Espinosa en Google Maps"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

