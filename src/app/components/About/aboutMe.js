'use client';
import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../../../../public/image.jpg';
import Image1 from 'next/image';

export default function About() {
	return (
		<div id="about">
			<div className="container mx-auto flex flex-col items-center px-5 py-10 md:flex-row md:items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<div className="font-mono text-4xl mb-4 font-medium">
						I am a Frontend Developer
					</div>
					<div className="mb-8 leading-relaxed">
						Hey there! 🌟 So, picture this: seven years ago, I packed my bags in Brazil
						and took a leap of faith, moving to the Netherlands. Crazy, right? But
						that's where the adventure began. Five years ago, I found myself itching for
						a change in career. Tech seemed like the perfect fit, so I started dabbling
						in building websites in my free time. Turns out, I fell head over heels for
						it. Four years ago, I proudly snagged my diploma, officially marking my
						transition into the tech world.
					</div>
					<div className="mb-8 leading-relaxed">
						Mistakes? Oh, they're just part of the journey! I've learned that they're
						like little nuggets of wisdom that help me level up my skills and become
						even better at what I do. Stepping out of my comfort zone? You bet! That's
						where the magic happens, where I get to push boundaries and discover new
						ways to make things awesome.
					</div>
					<div className="mb-8 leading-relaxed">
						Being a frontend developer isn't just a job for me it's a passion. I'm all
						about soaking up knowledge, trying out new ideas, and making cool stuff
						happen on the screen. And hey, I'm not stopping anytime soon. Bring on the
						challenges I'm ready to tackle them head-on and keep on rocking in the
						digital world! 🚀
					</div>
					<a href="/JuliaCV.pdf" target="_blank">
						<motion.button
							whileHover={{ scale: 1.2 }}
							type="button"
							className="font-mono rounded-full bg-white hover:bg-b0 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
						>
							<div>Resume</div>
						</motion.button>
					</a>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<Image1 className="rounded-2xl" src={myImage} alt="my image" />
				</div>
			</div>
		</div>
	);
}
