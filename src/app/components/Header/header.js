'use client';

import React, { useState, useEffect, useRef } from 'react';
import myLogo from '../../../../public/J.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
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
          whileHover={{ scale: 1.2 }}
          type="button"
          className="text-[#DA5F34] text-3xl focus:outline-none"
          onClick={toggleDropdown}
          aria-label="Open menu"
        >
          ☰
        </motion.button>

        {/* Dropdown Menu */}
        <div
          className={`fixed top-16 right-4 bg-[#DA5F34] w-[70%] max-w-md rounded-lg shadow-lg z-40 p-6 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          ref={menuRef}
        >
          <div className="flex justify-end mb-4">
            <button
              className="text-3xl text-white hover:text-gray-300 transition duration-200"
              onClick={toggleDropdown}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 text-2xl font-mono">
            <a
              href="#about"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => scrollToSection('about')}
            >
              About Me
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition duration-300"
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