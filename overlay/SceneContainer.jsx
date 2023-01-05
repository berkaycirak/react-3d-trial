import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { Suspense } from 'react';
import Electron from '../models/Electron';
import Video from '../models/Video';
import ReflectivePlane from '../models/ReflectivePlane';

function SceneContainer() {
	return (
		<Suspense>
			<ambientLight color={'#ffffff'} intensity={1} />
			<directionalLight intensity={0.5} />
			{/* Camera */}

			<OrbitControls
				makeDefault
				autoRotate
				autoRotateSpeed={0.9}
				minPolarAngle={Math.PI / 2.5}
				maxPolarAngle={Math.PI / 2.5}
			/>
			<Video />
			<ReflectivePlane />
			<Electron speed={8} />
			<Environment background preset='sunset' blur={0.8} />
		</Suspense>
	);
}

export default SceneContainer;
