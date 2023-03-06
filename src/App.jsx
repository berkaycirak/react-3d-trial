import SceneContainer from '../overlay/SceneContainer';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function App() {
	return (
		<>
			<div
				className=' relative'
				style={{ height: '100vh', backgroundColor: 'black' }}>
				<Canvas>
					<PerspectiveCamera
						makeDefault={true}
						position={[0, 0, 7]}
					/>
					<SceneContainer />
				</Canvas>
			</div>
		</>
	);
}

export default App;
