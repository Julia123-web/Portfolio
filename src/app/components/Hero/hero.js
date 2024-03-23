'use client';
import React from 'react';
import styled from 'styled-components';
import BackgroundAnimation from '../backgroundAnimation/backgroundAnimation';

const Section = styled.section`
	background-color: #f101623;
	padding: 80px 0;
`;

export default function Hero() {
	return (
		<Section className="flex justify-center items-center text-center text-4xl" id="hero">
			<div className="font-mono text-9xl">Hi, I'm Julia</div>
			<div className="top-[200px] absolute h-[100px] w-[900px]">
				<BackgroundAnimation></BackgroundAnimation>
			</div>
		</Section>
	);
}
