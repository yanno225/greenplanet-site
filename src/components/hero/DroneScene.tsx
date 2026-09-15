"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { Suspense } from "react";
import Drone from "./Drone";

export default function DroneScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 2.1, 9.5], fov: 30, near: 0.1, far: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 7, 6]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-6, 3, -2]} intensity={0.7} color="#dff3f1" />
      <spotLight position={[0, 6, 4]} intensity={1.1} angle={0.6} penumbra={0.9} color="#fff7e0" />

      <Suspense fallback={null}>
        <Drone />
        <Environment resolution={256}>
          <Lightformer intensity={2.6} rotation-x={Math.PI / 2} position={[0, 5, -2]} scale={[10, 10, 1]} />
          <Lightformer intensity={1.3} rotation-y={Math.PI / 2} position={[-6, 1, 0]} scale={[6, 3, 1]} color="#e9fbf9" />
          <Lightformer intensity={1.3} rotation-y={-Math.PI / 2} position={[6, 1, 0]} scale={[6, 3, 1]} color="#fff9e6" />
          <Lightformer intensity={0.7} rotation-x={-Math.PI / 2} position={[0, -4, 0]} scale={[10, 10, 1]} color="#dfe8e8" />
        </Environment>
        <ContactShadows position={[0, -1.6, 0]} opacity={0.3} scale={12} blur={2.8} far={4} color="#0b3a3d" />
      </Suspense>
    </Canvas>
  );
}
