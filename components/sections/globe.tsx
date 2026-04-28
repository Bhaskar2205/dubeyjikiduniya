"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Html,
  useTexture,
} from "@react-three/drei";

import * as THREE from "three";

/* ---------------- Helpers ---------------- */

function latLongToVector3(
  lat: number,
  lon: number,
  radius = 1
) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

/* ---------------- Cities ---------------- */

const cities = [
  {
    id: 0,
    name: "Jaipur",
    lat: 26.9,
    lon: -55.8,
    images: [
      "/gallery/jaipur1.jpg",
      "/gallery/jaipur2.jpg",
    ],
  },

 


  {
    id: 4,
    name: "Gurgaon",
    lat: 28.4,
    lon: -41.0,
    images: [
      "/gallery/gurgaon1.jpg",
      "/gallery/gurgaon2.jpg",
    ],
  },
];

/* ---------------- Particles ---------------- */

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 800;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 2;

      const theta = Math.random() * Math.PI * 2;

      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] =
        r * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] =
        r * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] =
        r * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#d6c7b2"
        transparent
        opacity={0.4}
      />
    </points>
  );
}

/* ---------------- Travel Lines ---------------- */

function TravelLine({
  start,
  end,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
}) {
  const curve = useMemo(() => {
    const mid = start
      .clone()
      .add(end)
      .multiplyScalar(0.5);

    mid.normalize().multiplyScalar(1.6);

    return new THREE.QuadraticBezierCurve3(
      start,
      mid,
      end
    );
  }, [start, end]);

  const points = curve.getPoints(50);

  const geometry = new THREE.BufferGeometry().setFromPoints(
    points
  );

  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({
            color: "#d6c7b2",
            transparent: true,
            opacity: 0.35,
          })
        )
      }
    />
  );
}

/* ---------------- Globe ---------------- */

function Globe({
  setSelectedCity,
}: {
  setSelectedCity: any;
}) {
  const ref = useRef<THREE.Group>(null);

  const earthTexture = useTexture(
    "/textures/earth_day.jpg"
  );

  const cloudTexture = useTexture(
    "/textures/earth_clouds.png"
  );

  return (
    <group
      ref={ref}
      rotation={[0, -2.2, 0]}
    >
      {/* 🌍 Earth */}
      <Sphere args={[1, 128, 128]}
   rotation={[
     THREE.MathUtils.degToRad(-20),
  THREE.MathUtils.degToRad(315),
   THREE.MathUtils.degToRad(-14)
]}
      >
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.9}
          metalness={0.1}
        />
      </Sphere>

      {/* ☁️ Clouds */}
      {/* <Sphere args={[1.01, 128, 128]}>
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </Sphere> */}

      {/* ✨ Atmosphere */}
      {/* <Sphere args={[1.18, 64, 64]}>
        <meshBasicMaterial
          color="#8fb8ff"
          transparent
          opacity={0.05}
        />
      </Sphere> */}

      {/* 📍 City Pins */}
      {cities.map((city) => {
        const pos = latLongToVector3(
          city.lat,
          city.lon,
          1.05
        );

        return (
          <group
            key={city.id}
            position={pos}
          >
            <Html center>
              <div
                onClick={() =>
                  setSelectedCity(city)
                }
                className="
                  relative
                  cursor-pointer
                  group
                "
              >
                {/* Pin */}
                <div
                  className="
                    w-4
                    h-4
                    bg-red-500
                    rounded-full
                    relative
                    shadow-lg
                  "
                >
                  <div
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      -translate-x-1/2
                      w-2
                      h-2
                      bg-red-500
                      rotate-45
                    "
                  />
                </div>

                {/* Pulse */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-red-400
                    animate-ping
                    opacity-40
                  "
                />

                {/* Label */}
                <div
                  className="
                    absolute
                    top-6
                    left-1/2
                    -translate-x-1/2
                    text-xs
                    bg-black
                    text-white
                    px-2
                    py-1
                    rounded
                    whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  {city.name}
                </div>
              </div>
            </Html>
          </group>
        );
      })}

      {/* ✈️ Travel Lines */}
      {cities.map((city, i) => {
        if (i === 0) return null;

        const start = latLongToVector3(
          cities[0].lat,
          cities[0].lon,
          1
        );

        const end = latLongToVector3(
          city.lat,
          city.lon,
          1
        );

        return (
          <TravelLine
            key={city.id}
            start={start}
            end={end}
          />
        );
      })}
    </group>
  );
}

/* ---------------- Camera ---------------- */

function CameraController({
  selectedCity,
}: {
  selectedCity: any;
}) {
  const { camera } = useThree();

  useFrame(() => {
    if (selectedCity) {
      camera.position.lerp(
        new THREE.Vector3(0, 0, 1.8),
        0.05
      );
    } else {
      camera.position.lerp(
        new THREE.Vector3(0, 0, 2.8),
        0.05
      );
    }

    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ---------------- Main Component ---------------- */

export default function GlobeSection() {
  const [selectedCity, setSelectedCity] =
    useState<any>(null);

  return (
    <section className="h-screen bg-[#f5efe6] relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={1.2}
        />

        {/* Stars */}
        <Particles />

        {/* Globe */}
        <Globe
          setSelectedCity={setSelectedCity}
        />

        {/* Camera */}
        <CameraController
          selectedCity={selectedCity}
        />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>

      {/* 🌆 Popup Gallery */}
      {selectedCity && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-lg
            flex
            flex-col
            items-center
            justify-center
            p-10
          "
          onClick={() =>
            setSelectedCity(null)
          }
        >
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {selectedCity.name}
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {selectedCity.images.map(
              (
                img: string,
                index: number
              ) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="
                    w-[320px]
                    h-[220px]
                    object-cover
                    rounded-2xl
                    shadow-2xl
                  "
                />
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}