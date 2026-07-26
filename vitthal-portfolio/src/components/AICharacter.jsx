import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Wireframe } from '@react-three/drei';
import * as THREE from 'three';


const AICharacter = ({ position }) => {
  const meshRef = useRef();
  
  // PLACEHOLDER: Ensure you have an 'avatar.jpg' in your public folder.
  // We use a fallback error catch if the texture isn't found during dev.
  let texture;
  try {
    texture = useTexture('/avatar.jpg');
  } catch (e) {
    texture = null; // Fallback if image not yet uploaded
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position}>
      {/* Holographic Card Base */}
      <mesh ref={meshRef}>
        <planeGeometry args={[2, 2.5, 16, 16]} />
        {texture ? (
          <meshStandardMaterial map={texture} transparent opacity={0.8} />
        ) : (
          <meshStandardMaterial color="#0a0a0f" transparent opacity={0.8} />
        )}
        <Wireframe stroke={"#00ff9c"} thickness={0.02} fillMix={0} />
      </mesh>

      {/* Red/Green Rim Lighting Effects */}
      <pointLight position={[1, 1, 1]} color="#00ff9c" intensity={2} distance={3} />
      <pointLight position={[-1, -1, 1]} color="#ff2e4d" intensity={2} distance={3} />
    </group>
  );
};

export default AICharacter;