'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import { Suspense, useState, useRef } from 'react';
import * as THREE from 'three';

// Loading component
const Loader = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
    <div className="text-white text-xl font-medium">Loading construction site...</div>
    <div className="text-white text-sm opacity-75 mt-2">Setting up the 3D scene</div>
  </div>
);

// Excavator Component
const Excavator = ({ position = [0, 0, 0] as [number, number, number], rotation = [0, 0, 0] as [number, number, number] }) => {
  const excavatorRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const bucketRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (armRef.current && bucketRef.current) {
      // Animate the excavator arm
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      bucketRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + 1) * 0.2;
    }
  });
  
  return (
    <group ref={excavatorRef} position={position} rotation={rotation}>
      {/* Base/Tracks */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[3, 0.6, 1.5]} />
        <meshStandardMaterial color="#ffa500" />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0.5, 1.2, 0]} castShadow>
        <boxGeometry args={[1.5, 1.2, 1.2]} />
        <meshStandardMaterial color="#ffb84d" />
      </mesh>
      
      {/* Main Arm */}
      <group ref={armRef} position={[-1, 1, 0]}>
        <mesh position={[-1, 0, 0]} castShadow>
          <boxGeometry args={[2, 0.3, 0.3]} />
          <meshStandardMaterial color="#ff8c00" />
        </mesh>
        
        {/* Secondary Arm */}
        <group ref={bucketRef} position={[-2, 0, 0]}>
          <mesh position={[-0.8, 0, 0]} castShadow>
            <boxGeometry args={[1.6, 0.25, 0.25]} />
            <meshStandardMaterial color="#ff7700" />
          </mesh>
          
          {/* Bucket */}
          <mesh position={[-1.5, -0.2, 0]} castShadow>
            <boxGeometry args={[0.8, 0.4, 0.6]} />
            <meshStandardMaterial color="#ff6600" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

// Dump Truck Component
const DumpTruck = ({ position = [0, 0, 0] as [number, number, number], rotation = [0, 0, 0] as [number, number, number] }) => {
  const truckRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={truckRef} position={position} rotation={rotation}>
      {/* Truck Cab */}
      <mesh position={[1.5, 1, 0]} castShadow>
        <boxGeometry args={[1.5, 1.5, 1.8]} />
        <meshStandardMaterial color="#ffa500" />
      </mesh>
      
      {/* Truck Bed */}
      <mesh position={[-0.5, 1.2, 0]} castShadow>
        <boxGeometry args={[3, 1.5, 2]} />
        <meshStandardMaterial color="#ffb84d" />
      </mesh>
      
      {/* Chassis */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[4, 0.3, 1.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[1.5, 0.2, 1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.3]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[1.5, 0.2, -1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.3]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-1.5, 0.2, 1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.3]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-1.5, 0.2, -1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.3]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
};

// Construction Crane Component
const ConstructionCrane = ({ position = [0, 0, 0] as [number, number, number] }) => {
  const craneRef = useRef<THREE.Group>(null);
  const jibRef = useRef<THREE.Group>(null);
  const hookRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (craneRef.current) {
      craneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
    if (hookRef.current) {
      hookRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.5 - 2;
    }
  });
  
  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[3, 1, 3]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      
      {/* Tower */}
      <mesh position={[0, 8, 0]} castShadow>
        <boxGeometry args={[0.8, 16, 0.8]} />
        <meshStandardMaterial color="#ffaa00" />
      </mesh>
      
      {/* Rotating top section */}
      <group ref={craneRef} position={[0, 15, 0]}>
        {/* Jib (horizontal arm) */}
        <mesh position={[8, 0, 0]} castShadow>
          <boxGeometry args={[16, 0.5, 0.5]} />
          <meshStandardMaterial color="#ffcc00" />
        </mesh>
        
        {/* Counter-jib */}
        <mesh position={[-4, 0, 0]} castShadow>
          <boxGeometry args={[8, 0.5, 0.5]} />
          <meshStandardMaterial color="#ffcc00" />
        </mesh>
        
        {/* Cab */}
        <mesh position={[2, -1, 0]} castShadow>
          <boxGeometry args={[2, 1.5, 1.5]} />
          <meshStandardMaterial color="#ff9900" />
        </mesh>
        
        {/* Hook */}
        <group ref={hookRef} position={[12, -2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.3, 0.6, 0.3]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

// Building Under Construction Component
const BuildingUnderConstruction = ({ position = [0, 0, 0] as [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Foundation */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[8, 0.4, 6]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      
      {/* First Floor Structure */}
      <mesh position={[0, 2, 0]} castShadow>
        <boxGeometry args={[7.5, 3, 5.5]} />
        <meshStandardMaterial color="#ddd" opacity={0.8} transparent />
      </mesh>
      
      {/* Second Floor (partial) */}
      <mesh position={[0, 4.5, 0]} castShadow>
        <boxGeometry args={[7.5, 2, 5.5]} />
        <meshStandardMaterial color="#ccc" opacity={0.6} transparent />
      </mesh>
      
      {/* Construction Framework */}
      <mesh position={[-3.5, 3, -2.5]} castShadow>
        <boxGeometry args={[0.2, 6, 0.2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      <mesh position={[3.5, 3, -2.5]} castShadow>
        <boxGeometry args={[0.2, 6, 0.2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      <mesh position={[-3.5, 3, 2.5]} castShadow>
        <boxGeometry args={[0.2, 6, 0.2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      <mesh position={[3.5, 3, 2.5]} castShadow>
        <boxGeometry args={[0.2, 6, 0.2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
    </group>
  );
};

// Background Buildings
const BackgroundBuilding = ({ position = [0, 0, 0] as [number, number, number], height = 5, color = "#ccc" }) => {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[4, height, 3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Construction Worker Component
const ConstructionWorker = ({ position = [0, 0, 0] as [number, number, number], color = "#ffaa00" }) => {
  const workerRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (workerRef.current) {
      // Simple walking animation
      workerRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.8) * 1;
      workerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) > 0 ? 0 : Math.PI;
    }
  });
  
  return (
    <group ref={workerRef} position={position}>
      {/* Body */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      
      {/* Hard Hat */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshStandardMaterial color="#ffa500" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.3, 1.2, 0]} castShadow>
        <boxGeometry args={[0.1, 0.6, 0.1]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.3, 1.2, 0]} castShadow>
        <boxGeometry args={[0.1, 0.6, 0.1]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.1, 0.4, 0]} castShadow>
        <boxGeometry args={[0.12, 0.8, 0.12]} />
        <meshStandardMaterial color="#0066cc" />
      </mesh>
      <mesh position={[0.1, 0.4, 0]} castShadow>
        <boxGeometry args={[0.12, 0.8, 0.12]} />
        <meshStandardMaterial color="#0066cc" />
      </mesh>
    </group>
  );
};

// Main 3D Scene Component
const ConstructionScene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <pointLight position={[-10, 5, -10]} intensity={0.4} color="#ffa500" />
      <pointLight position={[10, 5, 10]} intensity={0.3} color="#87ceeb" />
      
      {/* Sky and Environment */}
      <Sky 
        distance={450000}
        sunPosition={[10, 10, 5]}
        inclination={0}
        azimuth={0.25}
        turbidity={8}
      />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#87ceeb', 30, 100]} />
      
      {/* Ground Plane - Sandy Construction Site */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshLambertMaterial color="#d4a574" />
      </mesh>
      
      {/* Construction Site Elements */}
      {/* Dirt Piles */}
      <mesh position={[-8, -0.2, -5]} castShadow>
        <sphereGeometry args={[1.5, 8, 6]} />
        <meshLambertMaterial color="#8b4513" />
      </mesh>
      <mesh position={[12, -0.3, 8]} castShadow>
        <sphereGeometry args={[1.2, 8, 6]} />
        <meshLambertMaterial color="#8b4513" />
      </mesh>
      
      {/* Construction Barriers/Containers */}
      <mesh position={[-5, 0.5, 10]} castShadow>
        <boxGeometry args={[8, 1, 2]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      <mesh position={[8, 0.5, -8]} castShadow>
        <boxGeometry args={[6, 1, 2]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      {/* Construction Materials - Stacked Boxes */}
      <group position={[15, 0, -3]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[1.8, 1, 0.9]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>
      
      {/* Construction Vehicles */}
      <Excavator position={[-6, 0, -2]} rotation={[0, Math.PI / 4, 0]} />
      <Excavator position={[4, 0, 6]} rotation={[0, -Math.PI / 3, 0]} />
      <DumpTruck position={[10, 0, 2]} rotation={[0, Math.PI / 6, 0]} />
      <DumpTruck position={[-12, 0, 8]} rotation={[0, -Math.PI / 2, 0]} />
      
      {/* Main Building Under Construction */}
      <BuildingUnderConstruction position={[0, 0, -5]} />
      
      {/* Construction Crane */}
      <ConstructionCrane position={[8, 0, -8]} />
      
      {/* Background Buildings */}
      <BackgroundBuilding position={[-20, 2.5, -15]} height={5} color="#e5e5e5" />
      <BackgroundBuilding position={[-15, 3.5, -18]} height={7} color="#d0d0d0" />
      <BackgroundBuilding position={[18, 4, -20]} height={8} color="#ddd" />
      <BackgroundBuilding position={[22, 3, -16]} height={6} color="#e0e0e0" />
      <BackgroundBuilding position={[-25, 2, -12]} height={4} color="#ccc" />
      
      {/* Construction Workers */}
      <ConstructionWorker position={[2, 0, 1]} color="#ffaa00" />
      <ConstructionWorker position={[-3, 0, 3]} color="#ff6600" />
      <ConstructionWorker position={[6, 0, -1]} color="#ffcc00" />
      <ConstructionWorker position={[-8, 0, 5]} color="#ff9900" />
      <ConstructionWorker position={[1, 0, -8]} color="#ffbb33" />
    </>
  );
};

const Page3D = () => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-screen">
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ 
          position: [15, 10, 15], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        className="w-full h-full"
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <ConstructionScene />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
            minDistance={5}
            maxDistance={50}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Page3D;
