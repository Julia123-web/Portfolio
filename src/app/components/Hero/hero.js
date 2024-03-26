'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../backgroundAnimation/backgroundAnimation';

export default function Hero() {
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
				Hello, <br /> My name is Julia
			</motion.div>
			<div className="top-[200px] absolute h-[100px] lg:w-[900px] md:object-scale-down">
				<BackgroundAnimation></BackgroundAnimation>
			</div>
		</div>
	);
}
