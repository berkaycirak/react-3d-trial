import React, { useRef, useState } from 'react';
import { useGLTF, useAnimations, useCursor } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDrag } from '@use-gesture/react';
import useUIStore from '../store/UIStore';

export function SingleCardModel(props) {
	const group = useRef();

	const { nodes, materials, animations } = useGLTF(
		'/glb/cards_v2.glb'
	);
	const [hovered, setHovered] = useState(false);
	const { actions } = useAnimations(animations, group);
	useCursor(hovered);

	return (
		<group
			ref={group}
			dispose={null}
			{...props}
			onPointerEnter={() => setHovered(true)}
			onPointerLeave={() => setHovered(false)}>
			<group name='Scene'>
				<group
					name='Card_2_2'
					position={[0, 0, 0]}
					rotation={[-Math.PI, 0, 0]}
					scale={0.01}>
					<group name='Card_3'>
						<mesh
							name='BACKGROUNDMASK_2'
							geometry={nodes.BACKGROUNDMASK_2.geometry}
							material={materials.Mat}
							rotation={[0, 0, degToRad(90)]}
							position={[-0.5, 9.79, -0.38]}
						/>
						<mesh
							name='CARD_v3_2_2'
							geometry={nodes.CARD_v3_2_2.geometry}
							material={materials.Mat}
							position={[-0.5, 9.79, -0.38]}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/glb/cards_v2.glb');
