import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "../subcomponents/Loader";
import { useRef, useState, useEffect } from "react";

function Ball({ imgUrl }) {
  const [decal] = useTexture([imgUrl]);
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </>
  );
}

export default function BallCanvas({ icon }) {
  const ballRef = useRef();
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(ballRef.current);
    return () => {
      observer.unobserve(ballRef.current);
    };
  }, []);

  useEffect(() => {
    if (inView && !loaded) {
      setLoaded(true);
    }
  }, [inView, loaded]);

  return (
    <div className="relative h-full w-full">
      <div ref={ballRef} className="absolute top-0 left-0 h-full w-full"></div>
      {loaded && (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }} className={`h-full w-full ${inView ? "visible" : "hidden"}`}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
