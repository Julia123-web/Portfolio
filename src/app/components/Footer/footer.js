'use client';

import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div id="contact" className="relative top-80 flex flex-col items-center">
			<div className="text-white">&copy; 2024 Julia Silva. All Rights Reserved.</div>
			<br />
			<div className="flex space-x-4 scale-150 relative top-1">
				<a
					href="https://github.com/Julia123-web"
					target="_blank"
					className="text-white hover:text-white"
				>
					<FaGithub></FaGithub>
				</a>

				<a
					href="https://www.linkedin.com/in/julia-silva-2b242b171/"
					target="_blank"
					className="text-white hover:text-white"
				>
					<CiLinkedin></CiLinkedin>
				</a>
			</div>
			<br />
			<div className="flex flex-col items-center text-white mt-2">
				<span>
					Email:{' '}
					<a href="mailto:juliadesouzaesilva@gmail.com">juliadesouzaesilva@gmail.com</a>
				</span>
				<span className="ml-4">
					Phone: <a href="tel:+310615125932">+310615125932</a>
				</span>
			</div>

			<br />
		</div>
	);
};

export default Footer;
