import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../subcomponents/Loader";

const SpaceStars = ({ isMobile }) => {
  const stars = useGLTF("./space/scene.gltf");

  return (
    <mesh position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive object={stars.scene} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const SpaceStarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [-3, 3, 4], fov: 10 }} className="!h-screen !w-screen cursor-grab">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} rotateSpeed={0.25} />
        <SpaceStars isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SpaceStarsCanvas;
