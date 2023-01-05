import { useState } from 'react';
import SceneContainer from '../overlay/SceneContainer';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='h-screen relative'>
				{/* <div className='h-[350px] w-[300px] z-[99] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] border absolute'></div> */}
				<Canvas camera={{ position: [0, 5, 50], fov: 30 }}>
					<SceneContainer />
				</Canvas>
			</div>
		</>
	);
}

export default App;
