import {
	Environment,
	OrbitControls,
	ScrollControls,
	useScroll,
	Html,
} from '@react-three/drei';
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Suspense, forwardRef, useRef } from 'react';
import Sphere from '../models/Sphere';
import { Physics } from '@react-three/cannon';
import Floor from '../models/Floor';
import BoxTrigger from '../models/BoxTrigger';
import { useState } from 'react';

function SceneContainer() {
	const [bg, setBg] = useState('white');
	return (
		<Suspense>
			<ambientLight />
			<Physics>
				<Sphere />
				<Floor />
				<BoxTrigger
					args={[4, 1, 4]}
					onCollide={(e) => {
						setBg('green');
					}}
					position={[-3, 0, 0]}
					bg={bg}
				/>
				<BoxTrigger
					args={[4, 1, 4]}
					onCollide={(e) => {
						console.log(e.body);
					}}
					position={[3, 0, 0]}
				/>
			</Physics>
		</Suspense>
	);
}

export default SceneContainer;
