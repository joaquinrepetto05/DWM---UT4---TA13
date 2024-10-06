import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveer el contexto a la aplicación
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedUserName = '';
    setUserName(savedUserName);
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};