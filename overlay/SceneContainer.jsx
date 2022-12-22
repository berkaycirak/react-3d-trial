import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { Suspense } from 'react';
import FloatingIsland from '../models/FloatingIsland';

function SceneContainer() {
	return (
		<Suspense>
			<Environment background={'only'} files={'/textures/bg.hdr'} />
			<Environment
				background={false}
				files={'/textures/envmap.hdr'}
			/>
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
		</Suspense>
	);
}

export default SceneContainer;