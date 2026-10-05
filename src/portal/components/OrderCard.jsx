import React from 'react';
import { 
  Car, 
  User, 
  Phone, 
  MessageCircle, 
  Clock, 
  DollarSign, 
  Wrench, 
  CheckCircle2, 
  AlertCircle,
  FileCheck
} from 'lucide-react';

const statusConfig = {
  received: {
    label: 'Recibido / En Fila',
    badgeClass: 'bg-slate-700/50 text-slate-300 border-slate-600',
    icon: Clock
  },
  in_progress: {
    label: 'En Reparación',
    badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    icon: Wrench
  },
  waiting_parts: {
    label: 'Esperando Repuesto',
    badgeClass: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    icon: AlertCircle
  },
  completed: {
    label: 'Listo para Entrega',
    badgeClass: 'bg-lime-500/15 text-lime-400 border-lime-500/30',
    icon: CheckCircle2
  }
};

export default function OrderCard({ order, onUpdateStatus }) {
  const currentStatus = statusConfig[order.status] || statusConfig.received;
  const StatusIcon = currentStatus.icon;

  const handleSendEvidenceWhatsApp = () => {
    const cleanPhone = order.clientPhone.replace(/[^0-9]/g, '');
    const message = `Hola ${order.clientName}! Le escribimos desde Mecánica Integral Espinosa (Pasaje Florida 920) sobre su vehículo *${order.vehicle}* (Patente: *${order.plate}*).\n\nLe enviamos las fotos/videos de diagnóstico del trabajo de *${order.service}* para su tranquilidad.\n\nEstado actual: *${currentStatus.label}*.\nPresupuesto estimado: *${order.budget}*.\n\nCualquier consulta estamos a su entera disposición!`;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Cabecera de la Orden: ID y Estado */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-brand-lime">
              {order.id}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {order.dateIn.split(' ')[0]}
            </span>
          </div>

          {/* Badge de Estado con Selector Rápido */}
          <select
            value={order.status}
            onChange={(e) => onUpdateStatus(order.id, e.target.value)}
            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border bg-slate-900 cursor-pointer focus:outline-none ${currentStatus.badgeClass}`}
          >
            <option value="received">Recibido / En Fila</option>
            <option value="in_progress">En Reparación</option>
            <option value="waiting_parts">Esperando Repuesto</option>
            <option value="completed">Listo para Entrega</option>
          </select>
        </div>

        {/* Datos del Vehículo */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-brand-lime" />
              <strong className="text-white text-sm">{order.vehicle}</strong>
            </div>
            <span className="px-2 py-0.5 rounded bg-black/60 border border-slate-700 text-xs font-mono font-bold text-slate-200">
              {order.plate}
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-slate-500" />
            <span>{order.service}</span>
          </p>
        </div>

        {/* Cliente y Mecánico Asignado */}
        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-400">
              <User className="w-3.5 h-3.5" />
              <span>Cliente:</span>
            </div>
            <span className="font-semibold text-white">{order.clientName}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Wrench className="w-3.5 h-3.5" />
              <span>Mecánico:</span>
            </div>
            <span className="text-slate-300">{order.assignedMechanic}</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5 text-slate-400">
              <DollarSign className="w-3.5 h-3.5 text-brand-lime" />
              <span>Presupuesto:</span>
            </div>
            <span className="font-mono font-bold text-brand-lime">{order.budget}</span>
          </div>
        </div>

        {/* Notas del taller */}
        {order.notes && (
          <p className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 leading-snug">
            "{order.notes}"
          </p>
        )}

      </div>

      {/* Acciones de la Tarjeta */}
      <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2">
        <button
          onClick={handleSendEvidenceWhatsApp}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-whatsapp/15 hover:bg-whatsapp hover:text-slate-950 text-whatsapp border border-whatsapp/30 text-xs font-semibold transition-all"
          title="Enviar video/foto o estado al cliente"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>Enviar Evidencia WhatsApp</span>
        </button>
      </div>

    </div>
  );
}

