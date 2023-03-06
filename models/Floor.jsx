import { usePlane } from '@react-three/cannon';
import React from 'react';

export default function Floor() {
	const [ref, api] = usePlane(() => ({
		type: 'Static',
		mass: 100,
		position: [0, -1, 0],
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh
			position={[0, -1, 0]}
			rotation={[-Math.PI / 2, 0, 0]}
			ref={ref}>
			<meshBasicMaterial color='red' />
			<planeGeometry args={[10, 10]} />
		</mesh>
	);
}
