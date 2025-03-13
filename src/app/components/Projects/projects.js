'use client';

import React from 'react';
import myFirst from '../../../../public/first.gif';
import mySecond from '../../../../public/second.gif';
import myThird from '../../../../public/third.gif';
import myFourth from '../../../../public/fourth.gif';
import Retro from '../../../../public/retroShop.gif';
import Ramro from '../../../../public/RamroLife.gif';
import Image3 from 'next/image';

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12 mt-12">
          <div className="font-mono text-[#DA5F34] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Projects
          </div>
          <div className="text-white text-base md:text-lg lg:text-xl mx-auto max-w-3xl">
            <p>
              I'm thrilled to share with you some of the exciting projects I've worked on! It's been an incredible
              journey crafting dynamic and captivating videos for some of the biggest names out there like
              booking.com, Dyson, Bol, Squarespace.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center place-items-center max-w-[1100px] mx-auto px-4">
          {/* Project 1 */}
          <div className="relative group overflow-hidden rounded-lg">
            <Image3
              src={myFirst}
              alt="first project"
              className="transform transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group overflow-hidden rounded-lg">
            <Image3
              src={mySecond}
              alt="second project"
              className="transform transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group overflow-hidden rounded-lg">
            <Image3
              src={myThird}
              alt="third project"
              className="transform transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative group overflow-hidden rounded-lg">
            <Image3
              src={myFourth}
              alt="fourth project"
              className="transform transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="text-white mb-12 mt-12 mx-auto max-w-3xl text-base md:text-lg lg:text-xl">
          <p>
            Using my skills in JavaScript, React, HTML, CSS and Tailwind. I've had the privilege of building custom UI templates
            that helped clients automate their video production process.
            Working building those UI templates made me want more, that's why I decided to continue my journey also using Shopify, Wordpress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center place-items-center max-w-[1100px] mx-auto px-4">
          <div className="relative group overflow-hidden rounded-lg h-[180px] md:h-[220px] lg:h-[250px] w-full md:w-[400px] lg:w-[500px] max-w-[500px]">
            <Image3
              src={Retro}
              alt="retro project"
              className="transform transition duration-300 ease-in-out group-hover:scale-105 h-full object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-lg h-[180px] md:h-[220px] lg:h-[250px] w-full md:w-[400px] lg:w-[500px] max-w-[500px]">
            <Image3
              src={Ramro}
              alt="Ramro project"
              className="transform transition duration-300 ease-in-out group-hover:scale-105 h-full object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}