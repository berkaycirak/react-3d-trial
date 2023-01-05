import { MeshReflectorMaterial } from '@react-three/drei';

export function ReflectivePlane() {
	return (
		<group>
			<mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[50, 50]} />
				<MeshReflectorMaterial
					blur={[400, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={50}
					roughness={0.6}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color='#171717'
					metalness={0.4}
				/>
			</mesh>
			;
		</group>
	);
}

export default ReflectivePlane;
