import { useAspect } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

function Video() {
	const scale = useAspect(1920, 1080, 1);

	const [video] = useState(() =>
		Object.assign(document.createElement('video'), {
			src: '/planet.mp4',
			crossOrigin: 'Anonymous',
			loop: true,
			muted: true,
		})
	);

	useEffect(() => void video.play(), [video]);

	return (
		<mesh scale={scale} position={[0, 2, 0]}>
			<planeGeometry />
			<meshBasicMaterial side={THREE.DoubleSide}>
				<videoTexture
					attach='map'
					args={[video]}
					encoding={THREE.sRGBEncoding}
				/>
			</meshBasicMaterial>
		</mesh>
	);
}

export default Video;
