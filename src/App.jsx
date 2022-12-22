import { useState } from 'react';
import SceneContainer from '../overlay/SceneContainer';
import { Canvas } from '@react-three/fiber';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Canvas>
			<SceneContainer />
		</Canvas>
	);
}

export default App;
