'use client';
import React from 'react';
import styled from 'styled-components';
import BackgroundAnimation from '../backgroundAnimation/backgroundAnimation';

export default function Hero() {
	return (
		<div className="flex justify-center items-center text-center text-4xl" id="hero">
			<div className="font-mono lg:text-9xl text-8xl">
				Hi, <br /> I'm Julia
			</div>
			<div className="top-[200px] absolute h-[100px] lg:w-[900px] md:object-scale-down">
				<BackgroundAnimation></BackgroundAnimation>
			</div>
		</div>
	);
}
