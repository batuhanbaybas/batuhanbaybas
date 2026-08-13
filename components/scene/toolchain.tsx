"use client";

import { ContactShadows, RoundedBox, useCursor } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, type RefObject } from "react";
import * as THREE from "three";
import { site, type SiteSection } from "@/lib/site";

const PLATE_H = 0.11;
const GAP = 0.26;
const COLORS = ["#1c1c1c", "#3a3a3a", "#8f8f8f", "#ececec"];

const layers = site.sections;

function usePrefersReducedMotion() {
  const reduced = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = media.matches;
    const onChange = () => {
      reduced.current = media.matches;
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function Plate({
  layer,
  index,
  active,
  reducedMotion,
  onActive,
  onInspect,
}: {
  layer: SiteSection;
  index: number;
  active: string | null;
  reducedMotion: RefObject<boolean>;
  onActive: (id: string | null) => void;
  onInspect: (id: string) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const isActive = active === layer.id;
  const baseY = index * (PLATE_H + GAP);
  const width = 1.05 - index * 0.05;

  useCursor(hovered);

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    const lift = isActive && !reducedMotion.current ? 0.06 : 0;
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      baseY + lift,
      8,
      delta,
    );
  });

  return (
    <group ref={group} position={[0, baseY, 0]}>
      <RoundedBox
        args={[width, PLATE_H, width * 0.72]}
        onClick={(event) => {
          event.stopPropagation();
          onInspect(layer.id);
        }}
        onPointerOut={() => {
          setHovered(false);
          onActive(null);
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          onActive(layer.id);
        }}
        radius={0.02}
        smoothness={3}
      >
        <meshStandardMaterial
          color={isActive ? "#f2f2f2" : COLORS[index]}
          metalness={0.06}
          roughness={0.38}
        />
      </RoundedBox>
    </group>
  );
}

function System({
  active,
  onActiveChange,
  onInspect,
}: {
  active: string | null;
  onActiveChange: (id: string | null) => void;
  onInspect: (id: string) => void;
}) {
  const root = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const reducedMotion = usePrefersReducedMotion();
  const stackHeight = layers.length * PLATE_H + (layers.length - 1) * GAP;

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    if (!root.current || reducedMotion.current) {
      return;
    }

    const time = state.clock.elapsedTime;
    root.current.rotation.y =
      0.22 + Math.sin(time * 0.2) * 0.04 + pointer.current.x * 0.08;
    root.current.rotation.x = 0.12 + pointer.current.y * 0.04;
  });

  return (
    <group
      ref={root}
      position={[0, -stackHeight / 2, 0]}
      rotation={[0.12, 0.22, 0]}
    >
      <mesh position={[0, stackHeight / 2, 0]}>
        <cylinderGeometry args={[0.024, 0.024, stackHeight + 0.32, 12]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.2} roughness={0.35} />
      </mesh>
      {layers.map((layer, index) => (
        <Plate
          active={active}
          index={index}
          key={layer.id}
          layer={layer}
          onActive={onActiveChange}
          onInspect={onInspect}
          reducedMotion={reducedMotion}
        />
      ))}
    </group>
  );
}

export default function Toolchain({
  active,
  onActiveChange,
  onInspect,
}: {
  active: string | null;
  onActiveChange: (id: string | null) => void;
  onInspect: (id: string) => void;
}) {
  return (
    <Canvas
      camera={{ fov: 30, position: [0.08, 0.9, 5.4] }}
      dpr={[1, 1.6]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
      onPointerMissed={() => onActiveChange(null)}
    >
      <ambientLight intensity={0.6} />
      <directionalLight color="#ffffff" intensity={1.65} position={[3, 6, 4]} />
      <directionalLight color="#9a9a9a" intensity={0.28} position={[-3, 1, -2]} />
      <System
        active={active}
        onActiveChange={onActiveChange}
        onInspect={onInspect}
      />
      <ContactShadows
        blur={2.2}
        color="#000000"
        far={3.2}
        opacity={0.28}
        position={[0, -0.82, 0]}
        scale={2.6}
      />
    </Canvas>
  );
}
