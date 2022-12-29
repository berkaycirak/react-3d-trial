import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { gsap } from 'gsap';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useGesture } from '@use-gesture/react';
import { useSpring, a } from '@react-spring/three';
import { SingleCardModel } from './SingleCard';
import { Vector3 } from 'three';

const mockArray = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	20,
];

function NFTCarousel({ gap = 3 }) {
	const carouselRef = useRef();
	// "gap" is the distance between two items' center in the carousel.
	console.log('hello');
	const { size, viewport } = useThree();

	const aspect = size.width / viewport.width;
	const [spring, set] = useSpring(() => ({
		position: [0, 0, 0],
		config: { friction: 40, tension: 100 },
	}));
	const [movementX, setMovementX] = useState(0);
	const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
	const { x, y, z } = position;

	const bind = useGesture(
		{
			onDrag: ({ movement: [x], offset: [ox] }) => {
				set.start({ position: [ox / aspect, 0, 0] });
			},
		},
		{ drag: { rubberband: 2 } }
	);

	const handleLeftClick = () => {
		setPosition({ ...position, x: x - 1 });
	};
	useFrame((state, dlt) => {
		const nV = new Vector3(x, y, z);
		carouselRef.current.position.lerp(nV, 0.1);
	});

	return (
		<group>
			<a.group {...spring} {...bind()} ref={carouselRef}>
				{mockArray.map((card, index) => (
					<SingleCardModel
						key={index}
						position={[index * gap, 0, 0]}
					/>
				))}
			</a.group>
			{/* HTML */}
			<Html className='absolute -bottom-[20rem] left-[10rem] '>
				<h1 className='flex justify-between  w-[1000px] '>
					<FaArrowLeft
						className='text-white text-4xl transition hover:cursor-pointer hover:text-red-300 '
						onClick={handleLeftClick}
					/>
					<FaArrowRight
						className='text-white text-4xl transition hover:cursor-pointer hover:text-red-300 '
						onClick={() =>
							gsap.to(carouselRef.current.position, {
								x: carouselRef.current.position.x - 2,
								duration: 1.5,
								ease: 'power2',
							})
						}
					/>
				</h1>
			</Html>
		</group>
	);
}

export default NFTCarousel;
