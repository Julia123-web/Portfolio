'use client';

import React, { useState, useEffect, useRef } from 'react';
import myLogo from '../../../../public/J.png';
import Image2 from 'next/image';
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
		<div className="container mx-auto flex py-10 md:flex-row flex-col relative justify-between items-center">
			<div>
				<div className="text-white font-mono gap-4 px-10 flex sm:text-4xl text-3xl mb-4 font-medium">
					<div className="max-w-10 relative bottom-1">
						<Image2 className="rounded-2xl" src={myLogo} alt="logo" />
					</div>
					Julia Silva
				</div>
			</div>

			<div
				className="fixed inset-x-0 top-0 bg-[#DA5F34] h-full text-white z-50 overflow-hidden"
				style={{ display: isOpen ? 'block' : 'none' }}
				ref={menuRef}
			>
				<div className="flex justify-end p-4">
					<button className="text-3xl" onClick={toggleDropdown}>
						✕
					</button>
				</div>
				<div className="font-mono lg:flex lg:flex-row flex flex-col justify-around items-center h-[80%]">
					<a
						href="#about"
						className="text-white text-5xl mr-4"
						onClick={() => scrollToSection('about')}
					>
						About me
					</a>
					<a
						href="#projects"
						className="text-white text-5xl mr-4"
						onClick={() => scrollToSection('projects')}
					>
						Projects
					</a>
					<a
						href="#contact"
						className="text-white text-5xl"
						onClick={() => scrollToSection('contact')}
					>
						Contact
					</a>
				</div>
			</div>

			<div className="relative bottom-3 inline-block text-left">
				<motion.button
					whileHover={{ scale: 1.5 }}
					type="button"
					className={`relative z-10 inline-flex justify-center w-full rounded-md px-10 py-2 text-5xl font-medium focus:outline-none ${
						isOpen ? 'text-white' : 'text-white'
					}`}
					onClick={toggleDropdown}
				>
					☰
				</motion.button>
			</div>
		</div>
	);
};

export default Header;
