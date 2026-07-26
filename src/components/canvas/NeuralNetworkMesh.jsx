import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NeuralNetworkMesh({ nodes, isFinalScene }) {
  const linesRef = useRef();

  // Create connecting line pairs between adjacent tech nodes
  const { linePositions, lineColors } = useMemo(() => {
    const positions = [];
    const colors = [];

    // Connect node[i] with node[i+1] and some cross connections
    for (let i = 0; i < nodes.length; i++) {
      const p1 = nodes[i].position;

      // Primary sequential path connection
      if (i < nodes.length - 1) {
        const p2 = nodes[i + 1].position;
        positions.push(...p1, ...p2);

        const c1 = new THREE.Color(nodes[i].color || '#00ff88');
        const c2 = new THREE.Color(nodes[i + 1].color || '#00f0ff');

        colors.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b);
      }

      // Cross neural network connections for ecosystem mesh look
      if (i + 2 < nodes.length) {
        const p3 = nodes[i + 2].position;
        positions.push(...p1, ...p3);

        const c1 = new THREE.Color(nodes[i].color || '#00ff88');
        const c3 = new THREE.Color(nodes[i + 2].color || '#ff2a5f');

        colors.push(c1.r, c1.g, c1.b, c3.r, c3.g, c3.b);
      }
    }

    return {
      linePositions: new Float32Array(positions),
      lineColors: new Float32Array(colors)
    };
  }, [nodes]);

  useFrame((state, delta) => {
    if (linesRef.current && isFinalScene) {
      linesRef.current.rotation.z += delta * 0.05;
    }
  });

  if (!isFinalScene) return null;

  return (
    <group>
      {/* Interconnecting Neon Beams */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          linewidth={2}
        />
      </lineSegments>

      {/* Pulsing Light Cluster at Ecosystem Center */}
      <pointLight position={[0, 0, -150]} color="#00ff88" intensity={15} distance={120} />
      <pointLight position={[0, 10, -150]} color="#00f0ff" intensity={12} distance={100} />
    </group>
  );
}
