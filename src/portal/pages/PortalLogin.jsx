import React, { useState } from 'react';
import { Lock, Key, ArrowLeft, ArrowRight, UserCheck, Wrench, Shield } from 'lucide-react';
import { useAuth } from '../../shared/context/AuthContext';
import { WORKSHOP_INFO } from '../../shared/data/workshopData';

export default function PortalLogin({ onBackToLanding }) {
  const { login } = useAuth();
  const [role, setRole] = useState('admin');
  const [username, setUsername] = useState('admin@mecanicaespinosa.com');
  const [password, setPassword] = useState('••••••••••••');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      login(role, username);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col justify-center items-center p-4 relative overflow-hidden bg-mesh-dark">
      {/* Botón Volver a la Landing Pública */}
      <button
        onClick={onBackToLanding}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-all shadow-md"
      >
        <ArrowLeft className="w-4 h-4 text-brand-lime" />
        <span>Volver a la Web Pública</span>
      </button>

      <div className="w-full max-w-md">
        
        {/* Cabecera del Portal */}
        <div className="text-center mb-8 space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-brand-lime/40 shadow-xl flex items-center justify-center mx-auto p-1">
            <img 
              src="/images/mie-logo.jpg" 
              alt="MIE Logo" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-brand-lime text-xs font-bold uppercase tracking-wider mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Portal de Gestión Interno</span>
            </div>
            <h1 className="font-display font-black text-2xl text-white">
              {WORKSHOP_INFO.name}
            </h1>
            <p className="text-xs text-slate-400">
              Sistema de Órdenes de Trabajo, Diagnóstico y Reparaciones
            </p>
          </div>
        </div>

        {/* Tarjeta de Formulario */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
          
          {/* Selector de Rol */}
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950 rounded-xl border border-slate-800 mb-6">
            <button
              type="button"
              onClick={() => {
                setRole('admin');
                setUsername('admin@mecanicaespinosa.com');
              }}
              className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                role === 'admin'
                  ? 'bg-brand-lime text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Administración</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRole('mecanico');
                setUsername('taller@mecanicaespinosa.com');
              }}
              className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                role === 'mecanico'
                  ? 'bg-brand-lime text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Mecánico / Taller</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {role === 'admin' ? 'Correo Electrónico Administrador' : 'Legajo o Usuario Mecánico'}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 text-sm">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-lime"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">Contraseña de Acceso</label>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 text-sm">
                  <Key className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-lime"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-lime hover:bg-brand-lime-hover text-slate-950 font-bold text-sm shadow-lg shadow-brand-lime/20 transition-all"
              >
                {loading ? (
                  <span>Validando credenciales...</span>
                ) : (
                  <>
                    <span>Ingresar al Sistema MIE</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[10px] text-slate-500 pt-2">
              Acceso exclusivo para colaboradores y personal autorizado de Mecánica Integral Espinosa.
            </p>
          </form>

        </div>

        {/* Credenciales demo para facilidad de prueba */}
        <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 text-center">
          <span className="text-brand-lime font-semibold">Modo Demo activo:</span> Podés hacer clic directo en "Ingresar al Sistema MIE" para explorar el panel de control.
        </div>

      </div>
    </div>
  );
}

