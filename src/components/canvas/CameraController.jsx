import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CameraController({ nodes, onActiveIndexChange, onFinalSceneChange }) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 15));
  const targetPos = useRef(new THREE.Vector3(0, 0, 15));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    // Total scroll journey triggers
    const numNodes = nodes.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#scroll-story-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1

          if (progress < 0.05) {
            // Hero intro state
            targetPos.current.set(0, 0, 15);
            targetLookAt.current.set(0, 0, 0);
            onActiveIndexChange(-1);
            onFinalSceneChange(false);
          } else if (progress >= 0.95) {
            // Final Scene: Ecosystem Neural Network Galaxy zoom out
            targetPos.current.set(0, 35, -50);
            targetLookAt.current.set(0, -10, -150);
            onActiveIndexChange(numNodes);
            onFinalSceneChange(true);
          } else {
            // Technology journey fly-through
            onFinalSceneChange(false);
            const journeyProgress = (progress - 0.05) / 0.90; // Normalized 0 to 1
            const rawIndex = journeyProgress * (numNodes - 1);
            const activeIndex = Math.min(Math.floor(rawIndex), numNodes - 1);
            onActiveIndexChange(activeIndex);

            const currentNode = nodes[activeIndex];
            const nextNode = nodes[Math.min(activeIndex + 1, numNodes - 1)];
            const factor = rawIndex - activeIndex;

            // Interpolate position along node positions
            const posX = THREE.MathUtils.lerp(currentNode.position[0], nextNode.position[0], factor);
            const posY = THREE.MathUtils.lerp(currentNode.position[1], nextNode.position[1], factor);
            const posZ = THREE.MathUtils.lerp(currentNode.position[2], nextNode.position[2], factor);

            // Position camera slightly offset behind the active node for cinematic angle
            const offsetX = Math.sin(journeyProgress * Math.PI * 4) * 3;
            const offsetY = Math.cos(journeyProgress * Math.PI * 2) * 1.5;

            targetPos.current.set(posX + offsetX, posY + offsetY + 1.2, posZ + 8);
            targetLookAt.current.set(posX, posY, posZ);
          }
        }
      });
    });

    return () => ctx.revert();
  }, [nodes, onActiveIndexChange, onFinalSceneChange]);

  useFrame((_, delta) => {
    // Smooth lerp camera movement
    currentPos.current.lerp(targetPos.current, delta * 4);
    currentLookAt.current.lerp(targetLookAt.current, delta * 4);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
