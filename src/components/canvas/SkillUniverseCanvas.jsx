import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BackgroundParticles } from './BackgroundParticles';
import { TechNode3D } from './TechNode3D';
import { NeuralNetworkMesh } from './NeuralNetworkMesh';
import { CameraController } from './CameraController';

export function SkillUniverseCanvas({ nodes, activeIndex, isFinalScene, onActiveIndexChange, onFinalSceneChange }) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#07070a']} />
        <fogExp2 attach="fog" args={['#07070a', 0.003]} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 15]} intensity={1.2} color="#00f0ff" />
        <directionalLight position={[-10, -20, -15]} intensity={0.8} color="#00ff88" />

        {/* Background Particles & Grid */}
        <BackgroundParticles count={1500} />

        {/* 13 Interactive 3D Technology Nodes */}
        {nodes.map((node, idx) => (
          <TechNode3D
            key={node.id}
            node={node}
            isFocused={idx === activeIndex}
            isFinalScene={isFinalScene}
          />
        ))}

        {/* Ecosystem Connections in Final Scene */}
        <NeuralNetworkMesh nodes={nodes} isFinalScene={isFinalScene} />

        {/* GSAP Scroll Triggered Camera Flight Controller */}
        <CameraController
          nodes={nodes}
          onActiveIndexChange={onActiveIndexChange}
          onFinalSceneChange={onFinalSceneChange}
        />
      </Canvas>
    </div>
  );
}
