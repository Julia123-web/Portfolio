'use client';
import React from 'react';
import myFirst from '../../../../public/first.gif';
import mySecond from '../../../../public/second.gif';
import myThird from '../../../../public/third.gif';
import myFourth from '../../../../public/fourth.gif';
import Image3 from 'next/image';

export default function About() {
	return (
		<div id="projects">
			<div className="container mx-auto px-10 py-20">
				<div className="flex flex-col-reverse lg:flex-row items-center">
					<div className="lg:w-1/2 w-full">
						<div className="flex lg:flex-col md:flex-row">
							<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
								<Image3 src={myFirst} alt="first" />
							</div>
							<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
								<Image3 src={mySecond} alt="second" />
							</div>
						</div>
						<div className="flex lg:flex-col md:flex-row">
							<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
								<Image3 src={myThird} alt="third" />
							</div>
							<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
								<Image3 src={myFourth} alt="fourth" />
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 w-full md:p-4">
						<div className="font-mono text-center lg:text-8xl text-4xl py-6 mb-4 font-medium">
							Projects
						</div>
						<div className="max-w-[1000px]">
							<div className="sm:text-base md:text-lg lg:text-xl">
								<p className="mb-4">
									I'm thrilled to share with you some of the exciting projects
									I've been working on as a frontend developer at Ambassadors. You
									know, it's been an incredible journey crafting dynamic and
									captivating videos for some of the biggest names out there like
									booking.com, Dyson, Bol, Squarespace. I'm part of the creative
									automation team Cube, where we're all about revolutionizing the
									way brands approach their creative workflow.
								</p>
							</div>
							<div className="sm:text-base md:text-lg lg:text-xl">
								<p className="mb-4">
									Using my skills in JavaScript, React, HTML, CSS, I've had the
									privilege to build custom UI templates that help our clients
									automate their video production process. It's been amazing to
									see how these templates not only streamline their workflow but
									also enhance their brand presence in such a competitive
									landscape. It's an incredibly fulfilling experience knowing that
									the work I do contributes to pushing the boundaries of digital
									marketing and content creation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
