'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMenu } from '../../context/MenuContext';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const texts = ['Hello,', 'I’m Julia', 'a Frontend Developer'];
  const typingSpeed = 100;
  const { closeMenu } = useMenu();

  useEffect(() => {
    let currentTextIndex = 0;
    let currentText = '';
    let timeoutId;

    const type = () => {
      if (currentTextIndex === texts.length) {
        return;
      }
      const targetText = texts[currentTextIndex];
      const typingInterval = setInterval(() => {
        currentText = targetText.slice(0, currentText.length + 1);
        setTypedText(currentText);
        if (currentText === targetText) {
          clearInterval(typingInterval);
          timeoutId = setTimeout(() => {
            currentTextIndex++;
            if (currentTextIndex === texts.length) {
              return;
            }
            setTypedText('');
            type();
          }, 1000);
        }
      }, typingSpeed);
    };

    type();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleButtonClick = () => {
    closeMenu();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        className="text-white font-mono lg:text-6xl md:text-5xl text-4xl mb-4"
      >
        {typedText && (
          <>
            {typedText}
            <motion.span
              className="text-white inline-block h-[40px] w-[3px] bg-orange-500 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </>
        )}
      </motion.div>

      <p className="text-gray-400 text-lg md:text-2xl mb-6">
        Crafting beautiful, responsive, and user-friendly websites and webshop.
      </p>

      <motion.button
        onClick={handleButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#DA5F34] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
      >
        Let’s Work Together!
      </motion.button>

      {/* <div className="absolute bottom-0 w-full h-[100px]">
        <BackgroundAnimation />
      </div> */}
    </section>
  );
}