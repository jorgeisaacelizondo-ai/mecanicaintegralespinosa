import React from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  PlusCircle, 
  LogOut, 
  Globe, 
  Wrench, 
  ShieldCheck,
  User
} from 'lucide-react';
import { useAuth } from '../../shared/context/AuthContext';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function PortalSidebar({ currentTab, setCurrentTab, onOpenNewOrder, onBackToLanding }) {
  const { currentUser, logout } = useAuth();

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0">
      
      {/* Parte Superior: Marca & Menú */}
      <div>
        {/* Cabecera del Sidebar */}
        <div className="p-5 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-lime/40 bg-slate-900 p-0.5 flex-shrink-0">
            <img src="/images/mie-logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <span className="font-display font-black text-lg text-brand-lime leading-none block">
              {WORKSHOP_INFO.shortName}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">
              Sistema de Taller
            </span>
          </div>
        </div>

        {/* Perfil del Usuario Activo */}
        <div className="p-4 mx-3 my-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
              <User className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-white block truncate">
                {currentUser?.name || 'Administrador'}
              </span>
              <span className="text-[10px] text-brand-lime block uppercase font-mono">
                Rol: {currentUser?.role === 'admin' ? 'Administración' : 'Mecánico'}
              </span>
            </div>
          </div>
        </div>

        {/* Navegación del Sistema */}
        <nav className="p-3 space-y-1">
          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'dashboard'
                ? 'bg-brand-lime text-slate-950 shadow-md font-bold'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Tablero General</span>
          </button>

          <button
            onClick={() => setCurrentTab('orders')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'orders'
                ? 'bg-brand-lime text-slate-950 shadow-md font-bold'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Órdenes de Trabajo</span>
          </button>

          {/* Botón Acción Rápida: Nueva Orden */}
          <div className="pt-2">
            <button
              onClick={onOpenNewOrder}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-lime-500/15 hover:bg-lime-500/25 text-brand-lime border border-brand-lime/40 text-xs font-bold transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Nueva Orden de Auto</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Parte Inferior: Volver a la Web y Salir */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <button
          onClick={onBackToLanding}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
        >
          <Globe className="w-4 h-4 text-brand-lime" />
          <span>Ver Sitio Web Público</span>
        </button>

        <button
          onClick={logout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar Sesión</span>
        </button>
      </div>

    </aside>
  );
}

