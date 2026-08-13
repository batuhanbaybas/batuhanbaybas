"use client";

import { ContactShadows, Html, RoundedBox, useCursor } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, type RefObject } from "react";
import * as THREE from "three";
import { site, type SiteSection } from "@/lib/site";

const PLATE_H = 0.11;
const GAP = 0.26;

const FINISH: Record<
  string,
  { color: string; metalness: number; roughness: number }
> = {
  about: { color: "#f2f2f2", metalness: 0.18, roughness: 0.36 },
  tools: { color: "#a8a8a8", metalness: 0.22, roughness: 0.34 },
  "open-source": { color: "#737373", metalness: 0.24, roughness: 0.34 },
  work: { color: "#4a4a4a", metalness: 0.26, roughness: 0.32 },
};

const layers = [...site.sections].reverse();

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
  const finish = FINISH[layer.id];
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
          color={finish.color}
          metalness={isActive ? finish.metalness + 0.12 : finish.metalness}
          roughness={isActive ? Math.max(finish.roughness - 0.1, 0.18) : finish.roughness}
        />
      </RoundedBox>
      {isActive ? (
        <Html
          center
          occlude={false}
          pointerEvents="none"
          position={[0, 0.28, 0]}
          zIndexRange={[50, 0]}
        >
          <div className="-translate-y-2 flex flex-col items-center">
            <div className="min-w-40 border border-line bg-background px-3 py-2 text-center">
              <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Go to
              </p>
              <p className="mt-1 font-display text-base font-medium tracking-tight text-foreground whitespace-nowrap">
                {layer.label}
              </p>
            </div>
            <div className="-mt-1 size-2 rotate-45 border-r border-b border-line bg-background" />
          </div>
        </Html>
      ) : null}
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
      <ambientLight intensity={0.58} />
      <directionalLight color="#f2f2f2" intensity={1.55} position={[3, 6, 4]} />
      <directionalLight color="#8a8a8a" intensity={0.34} position={[-3, 1, -2]} />
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
