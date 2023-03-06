import React from 'react';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';

function Sphere() {
	const [ref, api] = useSphere(() => ({
		type: 'Kinematic',
		mass: 100,
		position: [0, 0, 0],
		arg: [0.5],
	}));
	const { viewport } = useThree();

	useFrame((state, dlt) => {
		api.position.set(
			(state.mouse.x * viewport.width) / 2,
			(state.mouse.y * viewport.height) / 2,
			0
		);
	});

	return (
		<mesh castShadow receiveShadow position={[0, 0, 0]} ref={ref}>
			<sphereGeometry args={[0.5]} />
			<meshLambertMaterial color='orange' />
		</mesh>
	);
}

export default Sphere;
