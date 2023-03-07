import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "../subcomponents/Loader";

import { useRef, useState, useEffect } from "react";
export function Ball({ imgUrl }) {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={0.1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  );
}

export default function BallCanvas({ icon }) {
  const ballRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(ballRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ballRef}
      className="
      h-full w-full
    ">
      {inView && (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
