'use client';

import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-12 mt-32">
      <div className="container mx-auto text-center">
        {/* Copyright Section */}
        <div className="mb-6 text-sm md:text-base">
          <span>&copy; 2024 Julia Silva. All Rights Reserved.</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-3xl md:text-4xl">
          <a
            href="https://github.com/Julia123-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#DA5F34] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/julia-silva-2b242b171/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#DA5F34] transition-colors"
            aria-label="LinkedIn"
          >
            <CiLinkedin />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-sm md:text-base">
          <p className="mb-2">
            Email:{' '}
            <a
              href="mailto:juliadesouzaesilva@gmail.com"
              className="text-white hover:text-[#DA5F34] transition-colors"
            >
              juliadesouzaesilva@gmail.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:+310615125932"
              className="text-white hover:text-[#DA5F34] transition-colors"
            >
              +310615125932
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;