"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Post({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[0.18, 2.2, 0.18]} />
      <meshStandardMaterial color="#2D4A3E" roughness={0.85} />
    </mesh>
  );
}

function Plank({ y }: { y: number }) {
  return (
    <mesh position={[0, y, 0]} castShadow receiveShadow>
      <boxGeometry args={[1.55, 0.13, 0.05]} />
      <meshStandardMaterial color="#C7884A" roughness={0.7} />
    </mesh>
  );
}

export function ItakuraCanvas() {
  const planks = Array.from({ length: 14 }, (_, i) => -1.0 + i * 0.16);
  return (
    <Canvas shadows dpr={[1, 1.5]} aria-label="板倉工法の3Dモデル">
      <PerspectiveCamera makeDefault position={[2.4, 1.3, 2.6]} fov={42} />
      <OrbitControls enablePan={false} maxDistance={6} minDistance={2} autoRotate autoRotateSpeed={0.8} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 3]} intensity={1.1} castShadow />
      <directionalLight position={[-2, 2, -1]} intensity={0.4} />

      <Post position={[-0.85, 0, 0]} />
      <Post position={[0.85, 0, 0]} />
      {planks.map((y, i) => (
        <Plank key={i} y={y} />
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#FAF7F2" />
      </mesh>
    </Canvas>
  );
}
