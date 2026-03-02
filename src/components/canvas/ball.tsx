import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../loader";

type BallProps = {
  imgUrl: string;
};

const Ball = ({ imgUrl }: BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 2]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
        />

        {/* FRONT */}
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          map={decal}
        />

        {/* BACK */}
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          map={decal}
        />

        {/* RIGHT */}
        <Decal
          position={[1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          map={decal}
        />

        {/* LEFT */}
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          map={decal}
        />

        {/* TOP */}
        <Decal
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          map={decal}
        />

        {/* BOTTOM */}
        <Decal
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};
type BallCanvasProps = {
  icon: string;
};

// Ball Canvas
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Show canvas loader on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
