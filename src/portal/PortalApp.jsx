import React, { useState } from 'react';
import { useAuth } from '../shared/context/AuthContext';
import { INITIAL_WORK_ORDERS } from '../shared/data/mockOrders';
import PortalLogin from './pages/PortalLogin';
import PortalSidebar from './components/PortalSidebar';
import Dashboard from './pages/Dashboard';
import NewOrderModal from './components/NewOrderModal';

export default function PortalApp({ onBackToLanding }) {
  const { isAuthenticated } = useAuth();
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('mie_orders');
    return saved ? JSON.parse(saved) : INITIAL_WORK_ORDERS;
  });
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  // Si no ha iniciado sesión, mostramos la pantalla de login del portal
  if (!isAuthenticated) {
    return <PortalLogin onBackToLanding={onBackToLanding} />;
  }

  const handleUpdateStatus = (orderId, newStatus) => {
    const updated = orders.map(o => {
      if (o.id === orderId) {
        return { ...o, status: newStatus };
      }
      return o;
    });
    setOrders(updated);
    localStorage.setItem('mie_orders', JSON.stringify(updated));
  };

  const handleAddOrder = (newOrder) => {
    const updated = [newOrder, ...orders];
    setOrders(updated);
    localStorage.setItem('mie_orders', JSON.stringify(updated));
  };

  return (
    <div className="flex h-screen bg-brand-dark overflow-hidden">
      {/* 1. Menú Lateral del Sistema */}
      <PortalSidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenNewOrder={() => setIsNewOrderModalOpen(true)}
        onBackToLanding={onBackToLanding}
      />

      {/* 2. Área de Trabajo Principal */}
      <Dashboard
        orders={orders}
        onUpdateStatus={handleUpdateStatus}
        onOpenNewOrder={() => setIsNewOrderModalOpen(true)}
      />

      {/* 3. Modal de Ingreso de Nuevo Auto */}
      <NewOrderModal
        isOpen={isNewOrderModalOpen}
        onClose={() => setIsNewOrderModalOpen(false)}
        onAddOrder={handleAddOrder}
      />
    </div>
  );
}

