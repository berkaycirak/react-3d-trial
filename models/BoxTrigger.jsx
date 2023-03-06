import React, { useState } from 'react';
import { useBox } from '@react-three/cannon';

function BoxTrigger({ position, onCollide, bg }) {
	const [boxRef, api] = useBox(() => ({
		position,
		isTrigger: true,
		onCollide,
		type: 'Dynamic',
	}));
	return (
		<mesh name='box-1' {...{ position, boxRef }}>
			<meshBasicMaterial color={bg} />
			<boxGeometry args={[1, 1, 1]} />
		</mesh>
	);
}

export default BoxTrigger;
