import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

export default function Electron({
	radius = 2.5,
	speed = 2,
	...props
}) {
	const ref = useRef();
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * speed;
		ref.current.position.set(
			2 * Math.sin(t) * radius,
			(2 * 1 * radius * 1) / Math.PI / 1.25,
			2 * Math.cos(t)
		);
	});
	return (
		<group {...props}>
			<Trail
				local
				width={5}
				length={6}
				color={new THREE.Color(2, 1, 10)}
				attenuation={(t) => t * t}>
				<mesh ref={ref}>
					<meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
				</mesh>
			</Trail>
		</group>
	);
}
