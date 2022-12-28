import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import {
	DoubleSide,
	EquirectangularReflectionMapping,
	LinearEncoding,
	Scene,
	TextureLoader,
	WebGLRenderTarget,
	AlwaysStencilFunc,
	ReplaceStencilOp,
	Color,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FillQuad } from './FillQuad';

const scene = new Scene();
scene.background = new TextureLoader().load(
	'/textures/galaxy.jpg',
	(texture) => {
		texture.encoding = LinearEncoding;
		texture.mapping = EquirectangularReflectionMapping;
	}
);

const target = new WebGLRenderTarget(500, 600, {
	stencilBuffer: false,
});

window.addEventListener('resize', () => {
	target.setSize(window.innerHeight, window.innerHeight);
});

function Portal() {
	const model = useLoader(GLTFLoader, 'glb/portal_frame.glb');
	const mask = useLoader(GLTFLoader, 'glb/portal_mask.glb');

	useFrame((state) => {
		state.gl.setRenderTarget(target);

		state.gl.render(scene, state.camera);
		state.gl.setRenderTarget(null);
	});

	useEffect(() => {
		if (!model) return;
		let mesh = model.scene.children[0];

		let maskMesh = mask.scene.children[0];
		// This makes object visible in both sides.
		maskMesh.material.side = DoubleSide;

		maskMesh.material.stencilWrite = true;
		maskMesh.material.stencilRef = 1;
		maskMesh.material.stencilFunc = AlwaysStencilFunc;
		maskMesh.material.stencilZPass = ReplaceStencilOp;
	}, [model, mask]);

	return (
		<>
			<primitive
				object={model.scene}
				scale={0.015}
				position={[1.2, 6, -4]}
			/>

			<primitive
				object={mask.scene}
				position={[0.07, 0.5, 0]}
				scale={[1.05, 1.01, 1.01]}
			/>
			<FillQuad map={target.texture} maskId={1} />
		</>
	);
}

export default Portal;
