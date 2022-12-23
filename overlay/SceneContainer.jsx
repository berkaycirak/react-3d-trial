import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { Suspense } from 'react';
import FloatingIsland from '../models/FloatingIsland';
import * as THREE from 'three';
import Portal from '../models/Portal';
import Rocks from '../models/Rocks';

function SceneContainer() {
	return (
		<Suspense>
			<Environment background={'only'} files={'/textures/bg.hdr'} />
			<Environment
				background={false}
				files={'/textures/envmap.hdr'}
			/>
			<ambientLight intensity={100} color={'#ffffff'} />
			<color attach='background' args={['#101010']} />

			{/* <directionalLight intensity={1} position={[0, -5, 0]} /> */}

			<PerspectiveCamera
				makeDefault
				fov={50}
				position={[-1.75, 10.85, 20.35]}
			/>
			<OrbitControls
				target={[1, 5, 0]}
				maxPolarAngle={Math.PI * 0.5}
			/>

			<FloatingIsland />
			<Rocks />
			<Portal />
		</Suspense>
	);
}

export default SceneContainer;
