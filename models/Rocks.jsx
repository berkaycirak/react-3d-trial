import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Rocks() {
	const gltf = useLoader(GLTFLoader, 'glb/rocks.glb');

	return <primitive object={gltf.scene} />;
}

export default Rocks;
