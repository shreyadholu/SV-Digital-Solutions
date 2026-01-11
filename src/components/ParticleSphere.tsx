import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleCloud = () => {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  // Smooth mouse tracking
  const smoothMouse = useRef({ x: 0, y: 0 });
  const basePositions = useRef<Float32Array | null>(null);
  
  // Generate sphere points with golden ratio distribution for even spacing
  const particles = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;
    
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere for even distribution
      const t = i / count;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;
      
      // Layered radius for depth
      const baseRadius = 2.2;
      const radiusVariation = 0.15 * Math.sin(i * 0.1);
      const radius = baseRadius + radiusVariation;
      
      positions[i * 3] = radius * Math.sin(inclination) * Math.cos(azimuth);
      positions[i * 3 + 1] = radius * Math.sin(inclination) * Math.sin(azimuth);
      positions[i * 3 + 2] = radius * Math.cos(inclination);
      
      // Elegant emerald to soft gold gradient
      const colorT = t;
      const emerald = { r: 0.1, g: 0.85, b: 0.55 };
      const gold = { r: 0.95, g: 0.75, b: 0.35 };
      
      colors[i * 3] = emerald.r + (gold.r - emerald.r) * colorT * 0.6;
      colors[i * 3 + 1] = emerald.g + (gold.g - emerald.g) * colorT * 0.4;
      colors[i * 3 + 2] = emerald.b + (gold.b - emerald.b) * colorT * 0.3;
    }
    
    basePositions.current = positions.slice();
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current || !basePositions.current) return;
    
    // Smooth mouse interpolation for elegant movement
    const targetX = mouse.x * viewport.width * 0.5;
    const targetY = mouse.y * viewport.height * 0.5;
    smoothMouse.current.x += (targetX - smoothMouse.current.x) * 0.03;
    smoothMouse.current.y += (targetY - smoothMouse.current.y) * 0.03;
    
    // Gentle idle rotation
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    
    // Subtle mouse-based tilt with smooth easing
    ref.current.rotation.z = smoothMouse.current.x * 0.02;
    ref.current.rotation.x += smoothMouse.current.y * 0.015;
    
    // Organic breathing animation
    const breathe = Math.sin(state.clock.elapsedTime * 0.5) * 0.02 + 1;
    ref.current.scale.setScalar(breathe);
    
    // Gentle particle displacement based on mouse proximity
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    const mouseInfluence = 0.15;
    
    for (let i = 0; i < positions.length; i += 3) {
      const baseX = basePositions.current[i];
      const baseY = basePositions.current[i + 1];
      const baseZ = basePositions.current[i + 2];
      
      // Calculate distance from mouse influence point
      const dx = smoothMouse.current.x * 0.3 - baseX;
      const dy = smoothMouse.current.y * 0.3 - baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Soft attraction/repulsion with falloff
      const influence = Math.max(0, 1 - dist / 3) * mouseInfluence;
      const wave = Math.sin(state.clock.elapsedTime * 0.8 + i * 0.01) * 0.02;
      
      positions[i] = baseX + dx * influence * 0.1 + wave;
      positions[i + 1] = baseY + dy * influence * 0.1;
      positions[i + 2] = baseZ + Math.sin(state.clock.elapsedTime + i * 0.005) * 0.015;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.018}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.9}
      />
    </Points>
  );
};

const ParticleSphere = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#d4af37" />
        <ParticleCloud />
      </Canvas>
      
      {/* Soft glow overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, hsl(0 0% 2%) 75%)"
        }}
      />
    </div>
  );
};

export default ParticleSphere;