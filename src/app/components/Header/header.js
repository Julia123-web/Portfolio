'use client';

import React, { useState, useEffect, useRef } from 'react';
import myLogo from '../../../../public/J.png';
import Image from 'next/image';

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

	return (
		<div className="container mx-auto flex py-10 md:flex-row flex-col relative justify-between items-center">
			<div>
				<div className="font-mono gap-4 px-10 flex sm:text-4xl text-3xl mb-4 font-medium">
					<div className="max-w-10 relative bottom-1">
						<Image className="rounded-2xl" src={myLogo} alt="logo" />
					</div>
					Julia Silva
				</div>
			</div>

			<div className="relative bottom-3 inline-block text-left" ref={menuRef}>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md px-10 py-2 text-5xl font-medium focus:outline-none"
					onClick={toggleDropdown}
				>
					☰
				</button>
				{isOpen && (
					<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
						<div
							className="py-1"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							<a
								href="#about"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								About me
							</a>
							<a
								href="#projects"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								Projects
							</a>
							<a
								href="#contact"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
