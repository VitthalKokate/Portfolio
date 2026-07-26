import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BackgroundParticles({ count = 1200 }) {
  const pointsRef = useRef();

  // Create random 3D particle distribution along the long z-tunnel
  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const palette = [
      new THREE.Color('#00ff88'),
      new THREE.Color('#00f0ff'),
      new THREE.Color('#ff2a5f'),
      new THREE.Color('#61dafb'),
      new THREE.Color('#764abc')
    ];

    for (let i = 0; i < count; i++) {
      // Spread across x [-25, 25], y [-20, 20], z [30, -350]
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.55) * 400 + 20;

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      sz[i] = Math.random() * 0.18 + 0.05;
    }

    return { positions: pos, colors: col, sizes: sz };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group>
      {/* Dynamic Starfield Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Cyber Grid Floor */}
      <gridHelper
        args={[100, 50, 0x00f0ff, 0x002b3d]}
        position={[0, -8, -150]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}
