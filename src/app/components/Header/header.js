'use client';

import React, { useRef, useEffect } from 'react';
import myLogo from '../../../../public/J.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMenu } from '../../context/MenuContext';

const Header = () => {
  const { isMenuOpen, closeMenu, toggleMenu } = useMenu();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking the menu button
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }
      // Close if clicking outside menu and button
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image className="rounded-2xl" src={myLogo} alt="Julia Silva Logo" />
          </div>
          <span className="text-white font-mono text-xl md:text-2xl font-medium">
            Julia Silva
          </span>
        </div>

        {/* Menu Button */}
        <motion.button
          ref={buttonRef}
          whileHover={{ scale: 1.2 }}
          type="button"
          className="text-[#DA5F34] text-3xl focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </motion.button>

        {/* Dropdown Menu */}
        <div
          className={`fixed top-16 right-4 bg-[#DA5F34] w-[70%] max-w-md rounded-lg shadow-lg z-50 p-6 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          ref={menuRef}
        >
          <nav className="flex flex-col items-center gap-6 text-2xl font-mono">
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => scrollToSection('about')}
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;