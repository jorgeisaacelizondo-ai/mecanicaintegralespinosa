import React, { useState } from 'react';
import { X, PlusCircle, Car, User, Phone, Wrench, DollarSign } from 'lucide-react';
import { WORKSHOP_COLLABORATORS } from '../../shared/data/mockOrders';

export default function NewOrderModal({ isOpen, onClose, onAddOrder }) {
  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    vehicle: '',
    plate: '',
    year: '',
    service: 'Mantenimiento Preventivo y Cambio de Aceite',
    assignedMechanic: 'Carlos Espinosa (Jefe de Taller)',
    budget: '$ ',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.clientName || !formData.vehicle || !formData.plate) {
      alert('Por favor completá los campos principales (Cliente, Vehículo y Patente).');
      return;
    }

    const newOrder = {
      ...formData,
      id: `OT-${Math.floor(505 + Math.random() * 50)}`,
      status: 'received',
      statusLabel: 'Recibido / En Fila',
      dateIn: new Date().toISOString().replace('T', ' ').substring(0, 16),
      whatsappEvidenceSent: false
    };

    onAddOrder(newOrder);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
            <PlusCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">Nueva Orden de Trabajo</h3>
            <p className="text-xs text-slate-400">Ingreso de vehículo al taller Mecánica Espinosa</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre del Cliente *</label>
              <input
                type="text"
                required
                placeholder="Ej: Marcelo Castro"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-brand-lime"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp de Contacto *</label>
              <input
                type="tel"
                required
                placeholder="Ej: +54 9 380 4123456"
                value={formData.clientPhone}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-brand-lime"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1">Vehículo (Marca y Modelo) *</label>
              <input
                type="text"
                required
                placeholder="Ej: Fiat Cronos 1.3"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-brand-lime"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Patente *</label>
              <input
                type="text"
                required
                placeholder="AD 321 BC"
                value={formData.plate}
                onChange={(e) => setFormData({ ...formData, plate: e.target.value.toUpperCase() })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono font-bold focus:border-brand-lime uppercase"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Servicio / Falla a Reparar</label>
            <input
              type="text"
              placeholder="Ej: Cambio de kit de distribución y bomba de agua"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-brand-lime"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Mecánico Asignado</label>
              <select
                value={formData.assignedMechanic}
                onChange={(e) => setFormData({ ...formData, assignedMechanic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-brand-lime"
              >
                {WORKSHOP_COLLABORATORS.map(collab => (
                  <option key={collab.id} value={`${collab.name} (${collab.role})`}>
                    {collab.name} - {collab.role}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Presupuesto Estimado</label>
              <input
                type="text"
                placeholder="$ 150.000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-brand-lime"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Observaciones / Síntomas</label>
            <textarea
              rows="2"
              placeholder="Detalles recibidos por el cliente al ingresar el vehículo..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-brand-lime resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-brand-lime hover:bg-brand-lime-hover text-slate-950 font-bold text-xs shadow-lg transition-all"
            >
              Crear Orden de Trabajo
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

