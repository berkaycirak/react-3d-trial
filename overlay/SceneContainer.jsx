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
import Trees from '../models/Trees';
import NFTCarousel from '../models/NFTCarousel';

function SceneContainer() {
	return (
		<Suspense>
			<ambientLight color={'#ffffff'} intensity={1} />
			{/* Camera */}
			<PerspectiveCamera fov={35} makeDefault position={[5, 0, 10]} />

			{/* <OrbitControls
				target={[1, 7, 0]}
				maxPolarAngle={Math.PI * 0.5}
			/> */}

			<NFTCarousel />
			<Environment background>
				<mesh scale={100}>
					<sphereGeometry args={[1, 64, 64]} />
					<meshBasicMaterial side={THREE.BackSide} color='#000000' />
				</mesh>
			</Environment>
		</Suspense>
	);
}

export default SceneContainer;
