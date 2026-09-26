import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => Array.from({ length: 18 }, (_, i) => {
    const phi = Math.acos(-1 + (2 * i) / 18); const theta = Math.sqrt(18 * Math.PI) * phi;
    return [Math.cos(theta) * Math.sin(phi) * 2.05, Math.sin(theta) * Math.sin(phi) * 2.05, Math.cos(phi) * 2.05] as [number, number, number];
  }), []);
  useFrame((state, rawDelta) => {
    if (!group.current) return; const delta = Math.min(rawDelta, .05);
    group.current.rotation.y += delta * .12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * .15, 1 - Math.exp(-3 * delta));
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.pointer.x * .12, 1 - Math.exp(-3 * delta));
  });
  return <Float speed={1.1} rotationIntensity={.18} floatIntensity={.3}><group ref={group}>
    <mesh><icosahedronGeometry args={[1.35, 2]} /><meshPhysicalMaterial color="#5dd9f5" metalness={.78} roughness={.18} transmission={.18} wireframe /></mesh>
    <mesh rotation={[.5, .25, .4]}><torusGeometry args={[1.8, .025, 10, 120]} /><meshBasicMaterial color="#7be7ff" transparent opacity={.48} /></mesh>
    <mesh rotation={[1.2, .4, -.5]}><torusGeometry args={[2.18, .012, 8, 120]} /><meshBasicMaterial color="#f3a55b" transparent opacity={.45} /></mesh>
    {nodes.map((position, i) => <mesh key={i} position={position}><sphereGeometry args={[i % 5 === 0 ? .085 : .045, 12, 12]} /><meshStandardMaterial color={i % 5 === 0 ? "#f3a55b" : "#b9f3ff"} emissive={i % 5 === 0 ? "#f3a55b" : "#5dd9f5"} emissiveIntensity={1.8} /></mesh>)}
  </group></Float>;
}
function Scene() { return <><ambientLight intensity={.55} /><pointLight position={[3, 3, 5]} intensity={22} color="#79e5ff" /><pointLight position={[-4, -2, 2]} intensity={14} color="#f0a561" /><Core /><Environment><Lightformer intensity={2} position={[0, 5, 2]} scale={[10, 10, 1]} /><Lightformer intensity={1.2} color="#74dff6" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} /></Environment></> }
export function HeroScene() {
  const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="scene-fallback" aria-hidden><span/><span/><span/></div>;
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 42 }} gl={{ antialias: true, alpha: true }} fallback={<div className="scene-fallback"/>}><Scene /></Canvas>;
}
