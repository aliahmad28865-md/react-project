import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Cube() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#7c3aed" />
    </mesh>
  );
}

export default function FloatingCube() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[3, 3, 3]} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}