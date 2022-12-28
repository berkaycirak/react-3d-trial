import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { SingleCardModel } from './SingleCard';

const mockArray = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	20,
];
gsap.registerPlugin();
function NFTCarousel({ gap = 3 }) {
	const carouselRef = useRef();

	// "gap" is the distance between two items' center in the carousel.

	useEffect(() => {
		if (carouselRef.current) {
			// gsap.to(carouselRef.current.position, { x: 2 });
		}
	}, []);

	return (
		<group>
			<group ref={carouselRef}>
				{mockArray.map((card, index) => (
					<SingleCardModel
						key={index}
						position={[index * gap, 0, 0]}
					/>
				))}
			</group>
			{/* HTML */}
			<Html className='absolute -bottom-[20rem] left-[10rem] '>
				<h1 className='flex justify-between  w-[1000px] bg-white  '>
					<FaArrowLeft
						onClick={() =>
							gsap.to(carouselRef.current.position, {
								x: carouselRef.current.position.x + 2,
							})
						}
					/>
					<FaArrowRight
						onClick={() =>
							gsap.to(carouselRef.current.position, {
								x: carouselRef.current.position.x - 2,
							})
						}
					/>
				</h1>
			</Html>
		</group>
	);
}

export default NFTCarousel;
