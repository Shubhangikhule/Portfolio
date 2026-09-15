import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Box, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";

function BackendModel() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} floatIntensity={0.5}>
        <Box args={[1.3, 0.35, 0.9]} position={[0, 0.7, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
          />
        </Box>

        <Box args={[1.3, 0.35, 0.9]} position={[0, 0.15, 0]}>
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.8}
            roughness={0.2}
          />
        </Box>

        <Box args={[1.3, 0.35, 0.9]} position={[0, -0.4, 0]}>
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </Float>
    </group>
  );
}

function FrontendModel() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.7) * 0.25;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} floatIntensity={0.7}>
        <Box args={[1.5, 0.08, 0.9]}>
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.7}
            roughness={0.25}
          />
        </Box>

        <Box args={[1.2, 0.7, 0.06]} position={[0, 0.4, -0.05]}>
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.5}
            roughness={0.25}
          />
        </Box>
      </Float>
    </group>
  );
}

function AIModel() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.45;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} floatIntensity={0.8}>
        <Sphere args={[0.7, 32, 32]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.2}
          />
        </Sphere>

        <Torus
          args={[1, 0.025, 16, 64]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={0.6}
          />
        </Torus>
      </Float>
    </group>
  );
}

function DatabaseModel() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} floatIntensity={0.6}>
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.35, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.35, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.35, 32]} />
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function SkillVisual3D({ type }) {
  const Model =
    type === "backend"
      ? BackendModel
      : type === "frontend"
        ? FrontendModel
        : type === "ai"
          ? AIModel
          : DatabaseModel;

  return (
    <div className="skill-3d">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 3, 4]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={3}
          color="#22d3ee"
        />

        <Model />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default SkillVisual3D;