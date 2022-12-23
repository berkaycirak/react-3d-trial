import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Trees() {
	const gltf = useLoader(GLTFLoader, 'glb/trees.glb');
	useEffect(() => {
		if (gltf) {
			let mesh = gltf.scene.children[0];
			mesh.material.envMapIntensity = 3.5;
		}
	}, [gltf]);

	return <primitive object={gltf.scene} />;
}

export default Trees;
