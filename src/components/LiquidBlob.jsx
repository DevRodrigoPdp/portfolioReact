import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Liquid blob shader material
const LiquidBlobShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uMouseVelocity: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uMouseVelocity;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                          -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
      
      // Center UVs
      vec2 centered = (uv - 0.5) * aspect;
      vec2 mouseCentered = (uMouse - 0.5) * aspect;
      
      // Distance from mouse
      float dist = length(centered - mouseCentered);
      
      // Animated noise
      float noise1 = snoise(centered * 2.0 + uTime * 0.15);
      float noise2 = snoise(centered * 4.0 - uTime * 0.1);
      float noise3 = snoise(centered * 1.5 + uTime * 0.08);
      
      // Mouse influence - creates a distortion field
      float mouseInfluence = smoothstep(0.8, 0.0, dist);
      float velocityInfluence = length(uMouseVelocity) * 2.0;
      
      // Combine noises with mouse interaction
      float combinedNoise = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;
      combinedNoise += mouseInfluence * (0.3 + velocityInfluence);
      
      // Create blob shape
      float blobRadius = 0.25 + combinedNoise * 0.08;
      float blobShape = smoothstep(blobRadius + 0.05, blobRadius - 0.05, dist);
      
      // Edge glow
      float edgeGlow = smoothstep(blobRadius + 0.15, blobRadius, dist) - blobShape;
      
      // Color - monochromatic grayscale with subtle variations
      vec3 baseColor = vec3(0.08, 0.08, 0.08); // Very dark gray
      vec3 blobColor = vec3(0.18, 0.18, 0.20); // Slightly lighter gray-blue tint
      vec3 glowColor = vec3(0.25, 0.25, 0.28); // Edge glow
      
      // Add subtle color variation based on noise
      blobColor += vec3(noise2 * 0.02, noise1 * 0.02, noise3 * 0.03);
      
      // Mix colors
      vec3 finalColor = baseColor;
      finalColor = mix(finalColor, glowColor, edgeGlow * 0.6);
      finalColor = mix(finalColor, blobColor, blobShape);
      
      // Add subtle grain
      float grain = fract(sin(dot(uv * uTime, vec2(12.9898, 78.233))) * 43758.5453);
      finalColor += grain * 0.015;
      
      // Mouse trail effect
      float trail = smoothstep(0.5, 0.0, dist) * velocityInfluence * 0.3;
      finalColor += vec3(trail * 0.1);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

function BlobMesh() {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0.5, y: 0.5, vx: 0, vy: 0, lastX: 0.5, lastY: 0.5 });
  const { viewport, size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseVelocity: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size]
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = 1 - e.clientY / window.innerHeight;
      
      // Calculate velocity
      mouseRef.current.vx = x - mouseRef.current.lastX;
      mouseRef.current.vy = y - mouseRef.current.lastY;
      
      mouseRef.current.lastX = x;
      mouseRef.current.lastY = y;
      
      // Smooth mouse position
      mouseRef.current.x += (x - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (y - mouseRef.current.y) * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms.uResolution]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
      meshRef.current.material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      meshRef.current.material.uniforms.uMouseVelocity.value.set(
        mouseRef.current.vx * 10,
        mouseRef.current.vy * 10
      );
      
      // Decay velocity
      mouseRef.current.vx *= 0.95;
      mouseRef.current.vy *= 0.95;
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={LiquidBlobShader.vertexShader}
        fragmentShader={LiquidBlobShader.fragmentShader}
      />
    </mesh>
  );
}

export function LiquidBlob() {
  return (
    <div className="about-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <BlobMesh />
      </Canvas>
    </div>
  );
}
