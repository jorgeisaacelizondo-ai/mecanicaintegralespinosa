import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('mie_portal_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role, username) => {
    const userData = {
      role: role || 'admin',
      name: role === 'admin' ? 'Administrador General' : 'Mecánico de Turno',
      email: username || (role === 'admin' ? 'admin@mecanicaespinosa.com' : 'taller@mecanicaespinosa.com'),
      loginAt: new Date().toISOString()
    };
    setCurrentUser(userData);
    localStorage.setItem('mie_portal_user', JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('mie_portal_user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated: !!currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

