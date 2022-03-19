import {
  Environment,
  Html,
  OrbitControls,
  TransformControls,
  useProgress,
} from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { ObjectModel } from '@/model/objectModel';
type Props = {
  object: ObjectModel;
  isEnviromentActive: boolean;
  isOrbitControlActive: boolean;
  isTransformationActive: boolean;
};

const CanvasView = ({
  object,
  isEnviromentActive,
  isOrbitControlActive,
  isTransformationActive,
}: Props) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 30 }}
      className='bg-gray-500 rounded-3xl'
    >
      <ambientLight intensity={0.2} />
      <directionalLight color='white' position={[0, 0, 5]} />

      <TransformControls
        showX={isTransformationActive}
        showY={isTransformationActive}
        showZ={isTransformationActive}
        enabled={isTransformationActive}
        mode='translate'
      >
        <mesh>
          <Suspense fallback={<Loader />}>
            <ObjectWidget url={object.href} />
            {isOrbitControlActive && <OrbitControls />}
            <Environment preset='sunset' background={isEnviromentActive} />
          </Suspense>
        </mesh>
      </TransformControls>
    </Canvas>
  );
};

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function ObjectWidget({ url }: { url: string }) {
  const { scene } = useLoader(GLTFLoader, url);
  return <primitive object={scene} />;
}

export default CanvasView;
