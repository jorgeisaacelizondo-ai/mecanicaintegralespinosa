import React, { useState } from 'react';
import { 
  Car, 
  Wrench, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  PlusCircle, 
  Filter
} from 'lucide-react';
import OrderCard from '../components/OrderCard';

export default function Dashboard({ orders, onUpdateStatus, onOpenNewOrder }) {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Estadísticas del taller
  const totalVehicles = orders.length;
  const inProgress = orders.filter(o => o.status === 'in_progress').length;
  const waitingParts = orders.filter(o => o.status === 'waiting_parts').length;
  const completed = orders.filter(o => o.status === 'completed').length;

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      order.plate.toLowerCase().includes(query) ||
      order.vehicle.toLowerCase().includes(query) ||
      order.clientName.toLowerCase().includes(query) ||
      order.id.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 lg:p-8 space-y-8 flex-1 overflow-y-auto">
      
      {/* Cabecera del Dashboard */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white">
            Tablero de Órdenes de Trabajo
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Seguimiento de reparaciones, evidencias de WhatsApp y entrega de vehículos en Pasaje Florida 920.
          </p>
        </div>

        <button
          onClick={onOpenNewOrder}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-lime hover:bg-brand-lime-hover text-slate-950 font-bold text-xs shadow-lg transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Ingresar Vehículo</span>
        </button>
      </div>

      {/* Tarjetas de Métricas Rápidas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Vehículos en Taller</span>
            <span className="text-2xl sm:text-3xl font-black text-white font-display mt-1 block">
              {totalVehicles}
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <Car className="w-5 h-5 text-brand-lime" />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">En Reparación</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-display mt-1 block">
              {inProgress}
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Wrench className="w-5 h-5" />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Esperando Repuestos</span>
            <span className="text-2xl sm:text-3xl font-black text-sky-400 font-display mt-1 block">
              {waitingParts}
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Listos para Entrega</span>
            <span className="text-2xl sm:text-3xl font-black text-brand-lime font-display mt-1 block">
              {completed}
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-brand-lime">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
        
        {/* Buscador por Patente o Cliente */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Buscar por patente, cliente, auto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-brand-lime"
          />
        </div>

        {/* Pestañas de Estado */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterStatus === 'all'
                ? 'bg-brand-lime text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            Todos ({totalVehicles})
          </button>
          <button
            onClick={() => setFilterStatus('in_progress')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterStatus === 'in_progress'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            En Reparación ({inProgress})
          </button>
          <button
            onClick={() => setFilterStatus('waiting_parts')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterStatus === 'waiting_parts'
                ? 'bg-sky-400 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            Repuestos ({waitingParts})
          </button>
          <button
            onClick={() => setFilterStatus('completed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterStatus === 'completed'
                ? 'bg-brand-lime text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            Listos ({completed})
          </button>
        </div>

      </div>

      {/* Grid de Órdenes */}
      {filteredOrders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredOrders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
              onUpdateStatus={onUpdateStatus}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-slate-900/30 border border-slate-800 text-slate-500">
          <Car className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No se encontraron órdenes con los filtros seleccionados.</p>
        </div>
      )}

    </div>
  );
}

