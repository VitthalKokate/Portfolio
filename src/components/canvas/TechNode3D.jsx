import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TechLogo } from '../common/TechLogos';

export function TechNode3D({ node, isFocused, isFinalScene, onClick }) {
  const groupRef = useRef();
  const innerMeshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x += delta * 0.3;
      innerMeshRef.current.rotation.z += delta * 0.15;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.7;
      ringRef1.current.rotation.x = Math.sin(time * 1.5) * 0.25;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.5;
      ringRef2.current.rotation.y = Math.cos(time * 1.5) * 0.25;
    }
  });

  const mainColor = node.color || '#00ff88';
  const glowColor = node.glowColor || '#00f0ff';

  const renderTechVisual = () => {
    switch (node.id) {
      case 'java':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <octahedronGeometry args={[1.2, 0]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={1.5} wireframe />
            </mesh>
            <mesh ref={ringRef1}>
              <torusGeometry args={[2.2, 0.08, 16, 100]} />
              <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2} />
            </mesh>
            <mesh ref={ringRef2} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[2.8, 0.05, 16, 100]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={1.5} />
            </mesh>
          </group>
        );

      case 'springboot':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <icosahedronGeometry args={[1.3, 2]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} roughness={0.1} metalness={0.8} />
            </mesh>
            <mesh ref={ringRef1}>
              <torusGeometry args={[2.5, 0.1, 16, 64]} />
              <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={2.5} wireframe />
            </mesh>
          </group>
        );

      case 'springsecurity':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <cylinderGeometry args={[1.5, 0.2, 2.5, 6]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={1.8} wireframe />
            </mesh>
            <mesh ref={ringRef1}>
              <torusGeometry args={[2.4, 0.06, 16, 8]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
            </mesh>
          </group>
        );

      case 'react':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <sphereGeometry args={[0.9, 32, 32]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2.5} />
            </mesh>
            <mesh rotation={[0, 0, 0]}>
              <torusGeometry args={[2.6, 0.05, 16, 100]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} />
            </mesh>
            <mesh rotation={[Math.PI / 3, Math.PI / 3, 0]}>
              <torusGeometry args={[2.6, 0.05, 16, 100]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} />
            </mesh>
            <mesh rotation={[-Math.PI / 3, -Math.PI / 3, 0]}>
              <torusGeometry args={[2.6, 0.05, 16, 100]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} />
            </mesh>
          </group>
        );

      case 'redux':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <dodecahedronGeometry args={[1.2]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} wireframe />
            </mesh>
            {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
              <mesh key={i} position={[Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2.5} />
              </mesh>
            ))}
          </group>
        );

      case 'threejs':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <icosahedronGeometry args={[1.6, 1]} />
              <meshStandardMaterial color="#ffffff" emissive="#00f0ff" emissiveIntensity={2} wireframe />
            </mesh>
            <mesh ref={ringRef1}>
              <boxGeometry args={[2.8, 2.8, 2.8]} />
              <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={1.2} wireframe />
            </mesh>
          </group>
        );

      case 'aws':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <sphereGeometry args={[1.1, 16, 16]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} />
            </mesh>
            {[...Array(8)].map((_, i) => (
              <mesh key={i} position={[(Math.random() - 0.5) * 3.5, (Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 3.5]}>
                <boxGeometry args={[0.25, 0.25, 0.25]} />
                <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2} />
              </mesh>
            ))}
          </group>
        );

      case 'docker':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <boxGeometry args={[1.8, 1.8, 1.8]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={1.5} wireframe />
            </mesh>
            <mesh ref={ringRef1}>
              <boxGeometry args={[2.4, 2.4, 2.4]} />
              <meshStandardMaterial color="#00aeff" emissive="#00aeff" emissiveIntensity={1.8} wireframe />
            </mesh>
          </group>
        );

      case 'linux':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <cylinderGeometry args={[1.4, 1.4, 2.2, 16, 8, true]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} wireframe />
            </mesh>
            <mesh ref={ringRef1}>
              <torusGeometry args={[2.2, 0.05, 16, 64]} />
              <meshStandardMaterial color="#ffea00" emissive="#ffea00" emissiveIntensity={2} />
            </mesh>
          </group>
        );

      case 'postgresql':
        return (
          <group>
            <group ref={innerMeshRef}>
              {[1, 0, -1].map((yOffset, idx) => (
                <mesh key={idx} position={[0, yOffset * 0.9, 0]}>
                  <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
                  <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={1.8} wireframe />
                </mesh>
              ))}
            </group>
          </group>
        );

      case 'redis':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <octahedronGeometry args={[1.3, 1]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2.5} />
            </mesh>
            <mesh ref={ringRef1}>
              <torusGeometry args={[2.5, 0.12, 16, 64]} />
              <meshStandardMaterial color="#ff3b30" emissive="#ff3b30" emissiveIntensity={3} />
            </mesh>
          </group>
        );

      case 'rabbitmq':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <sphereGeometry args={[1.2, 32, 32]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} />
            </mesh>
          </group>
        );

      case 'kafka':
        return (
          <group>
            <mesh ref={innerMeshRef}>
              <torusKnotGeometry args={[1.1, 0.35, 128, 32]} />
              <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} wireframe />
            </mesh>
          </group>
        );

      default:
        return (
          <mesh ref={innerMeshRef}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial color={mainColor} emissive={mainColor} emissiveIntensity={2} />
          </mesh>
        );
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8} position={node.position}>
      <group ref={groupRef} onClick={onClick}>
        {/* Core Procedural 3D Graphic */}
        {renderTechVisual()}

        {/* Outer Glow Light */}
        <pointLight color={mainColor} intensity={isFocused ? 12 : 5} distance={12} />

        {/* Official Technology SVG Logo Badge overlay inside 3D space */}
        <Html position={[0, 0, 0]} center distanceFactor={16} style={{ pointerEvents: 'none' }}>
          <div className="w-12 h-12 rounded-full bg-[#07070a]/90 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.4)]">
            <TechLogo id={node.id} size={28} />
          </div>
        </Html>

        {/* Floating Futuristic HUD Label */}
        <Html
          position={[0, -3.2, 0]}
          center
          distanceFactor={18}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div
            className={`px-4 py-2 rounded-lg border backdrop-blur-md transition-all duration-500 text-center min-w-[200px] ${
              isFocused
                ? 'bg-[#0a0f1d]/95 border-[#00ff88] shadow-[0_0_25px_rgba(0,255,136,0.6)] scale-110'
                : isFinalScene
                ? 'bg-[#0a0f1d]/80 border-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'bg-[#0a0f1d]/60 border-white/10 opacity-75'
            }`}
          >
            <div className="text-xs font-mono tracking-widest text-[#00f0ff] uppercase mb-0.5 flex items-center justify-center gap-1.5">
              <TechLogo id={node.id} size={14} />
              <span>{node.category}</span>
            </div>
            <div className="text-lg font-black tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              {node.name}
            </div>
            <div className="text-xs font-medium text-slate-300 mt-0.5">
              {node.subtitle}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}
