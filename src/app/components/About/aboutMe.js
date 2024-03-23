'use client';
import React from 'react';
import myImage from '../../../../public/image.jpg';
import Image from 'next/image';

export default function About() {
	return (
		<div id="about">
			<div class="container mx-auto flex flex-col items-center px-5 py-10 md:flex-row md:items-center">
				<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<div class="font-mono sm:text-4xl text-3xl mb-4 font-medium from-slate-200">
						I am a Frontend Developer
					</div>
					<div class="mb-8 leading-relaxed">
						Hey there! 🌟 With four years under my belt as a frontend developer, I'm all
						about bringing digital experiences to life with flair. I'm the kind of
						person who sees challenges as just another chance to shine. Whether things
						get tricky or not, I keep my cool and stay laser focused on the task at
						hand.
					</div>
					<div class="mb-8 leading-relaxed">
						Mistakes? Oh, they're just part of the journey! I've learned that they're
						like little nuggets of wisdom that help me level up my skills and become
						even better at what I do. Stepping out of my comfort zone? You bet! That's
						where the magic happens, where I get to push boundaries and discover new
						ways to make things awesome.
					</div>
					<div class="mb-8 leading-relaxed">
						Being a frontend developer isn't just a job for me it's a passion. I'm all
						about soaking up knowledge, trying out new ideas, and making cool stuff
						happen on the screen. And hey, I'm not stopping anytime soon. Bring on the
						challenges I'm ready to tackle them head-on and keep on rocking in the
						digital world! 🚀
					</div>
					<a href="/JuliaCV.pdf" target="_blank">
						<button
							type="button"
							class="font-mono rounded-full bg-white hover:bg-b0 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
						>
							<div>Resume</div>
						</button>
					</a>
				</div>
				<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<Image className="rounded-2xl" src={myImage} />
				</div>
			</div>
		</div>
	);
}
