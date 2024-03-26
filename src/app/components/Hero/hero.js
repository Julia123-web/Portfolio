'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../backgroundAnimation/backgroundAnimation';

export default function Hero() {
	const [typedText, setTypedText] = useState('');
	const texts = ['Hello,', 'My name is Julia'];

	useEffect(() => {
		let currentTextIndex = 0;
		let currentText = '';
		let intervalId;

		const type = () => {
			if (currentTextIndex === texts.length) {
				currentTextIndex = 0;
			}
			const targetText = texts[currentTextIndex];
			const typingInterval = setInterval(() => {
				currentText = targetText.slice(0, currentText.length + 1);
				setTypedText(currentText);
				if (currentText === targetText) {
					clearInterval(typingInterval);
					setTimeout(() => {
						currentTextIndex++;
						type();
					}, 1000);
				}
			}, 150);
			intervalId = typingInterval;
		};

		type();

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="flex justify-center items-center text-center text-4xl" id="hero">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 180,
					damping: 20,
				}}
				className="font-mono lg:text-9xl text-8xl"
			>
				{typedText && (
					<>
						{typedText}
						<motion.span
							className="inline-block h-[40px] w-[3px] bg-orange-500 ml-1"
							animate={{ scaleY: [0, 1, 0] }}
							transition={{ duration: 0.5, repeat: Infinity }}
						/>
					</>
				)}
			</motion.div>
			<div className="top-[200px] absolute h-[100px] lg:w-[900px] md:object-scale-down">
				<BackgroundAnimation />
			</div>
		</div>
	);
}
