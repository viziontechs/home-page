import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function GlassesModel() {
  const frameRef = useRef();
  const lensRefL = useRef();
  const lensRefR = useRef();

  // Rotate slightly for animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    frameRef.current.rotation.y = Math.sin(t / 2) * 0.6;
  });

  return (
    <group ref={frameRef}>
      {/* Frame */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00b4ff" emissive="#0088cc" emissiveIntensity={0.5} />
      </mesh>

      {/* Bridge */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="#00b4ff" emissive="#0077aa" />
      </mesh>

      {/* Left lens */}
      <mesh ref={lensRefL} position={[-0.6, 0, -0.01]}>
        <planeGeometry args={[0.8, 0.5]} />
        <meshPhysicalMaterial
          color="#66ccff"
          transmission={0.9}
          thickness={0.1}
          roughness={0.05}
          reflectivity={0.8}
        />
      </mesh>

      {/* Right lens */}
      <mesh ref={lensRefR} position={[0.6, 0, -0.01]}>
        <planeGeometry args={[0.8, 0.5]} />
        <meshPhysicalMaterial
          color="#66ccff"
          transmission={0.9}
          thickness={0.1}
          roughness={0.05}
          reflectivity={0.8}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-1.2, 0, -0.1]}>
        <boxGeometry args={[0.6, 0.05, 0.05]} />
        <meshStandardMaterial color="#00b4ff" emissive="#0099cc" />
      </mesh>
      <mesh position={[1.2, 0, -0.1]}>
        <boxGeometry args={[0.6, 0.05, 0.05]} />
        <meshStandardMaterial color="#00b4ff" emissive="#0099cc" />
      </mesh>
    </group>
  );
}

export default function FloatingGlasses() {
  return (
    <div style={{ width: "100%", height: "70vh" }}>
      <Canvas>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 2, 5]} intensity={1.5} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.3}>
          <GlassesModel />
        </Float>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
