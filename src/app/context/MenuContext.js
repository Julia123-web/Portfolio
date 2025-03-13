'use client';

import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen, closeMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
