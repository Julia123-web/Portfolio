'use client';

import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../../../../public/image.jpg';
import Image1 from 'next/image';

export default function About() {
  return (
    <div id="about" className="bg-gray-900">
      <div className="container mx-auto flex flex-col items-center px-5 md:flex-row md:items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <div className="text-[#DA5F34] font-mono text-4xl mb-4 font-semibold">
            I am a Freelancer Frontend Developer
          </div>
          <div className="text-white mb-8 leading-relaxed text-lg">
            Hey there! 🌟 So, picture this: seven years ago, I packed my bags in Brazil
            and took a leap of faith, moving to the Netherlands. Crazy, right? But
            that's where the adventure began. Five years ago, I found myself itching for
            a change in career. Tech seemed like the perfect fit, so I started dabbling
            in building websites in my free time. Turns out, I fell head over heels for
            it. Four years ago, I proudly snagged my diploma, officially marking my
            transition into the tech world.
          </div>
          <div className="text-white mb-8 leading-relaxed text-lg">
            Mistakes? Oh, they're just part of the journey! I've learned that they're
            like little nuggets of wisdom that help me level up my skills and become
            even better at what I do. Stepping out of my comfort zone? You bet! That's
            where the magic happens, where I get to push boundaries and discover new
            ways to make things awesome.
          </div>
          <div className="text-white mb-8 leading-relaxed text-lg">
            Being a frontend developer isn't just a job for me—it's a passion. I'm all
            about soaking up knowledge, trying out new ideas, and making cool stuff
            happen on the screen. And hey, I'm not stopping anytime soon. Bring on the
            challenges—I'm ready to tackle them head-on and keep on rocking in the
            digital world! 🚀
          </div>
          <a href="/Julia Silva developer.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.2 }}
              type="button"
              className="font-mono rounded-full bg-[#DA5F34] text-white font-bold py-3 px-8 mt-6 focus:outline-none focus:shadow-outline hover:bg-orange-600 transition duration-300"
            >
              <div>Resume</div>
            </motion.button>
          </a>
        </motion.div>

        {/* Right Column: Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image1 className="rounded-2xl shadow-lg" src={myImage} alt="My image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}