import {
  Environment,
  OrbitControls,
  TransformControls,
} from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Button from '@/components/buttons/Button';

import { allObjects } from '@/model/character';

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='bg-gray-800 flex flex-col items-center justify-center min-h-screen min-w-screen'>
      <div className='flex h-20 items-center justify-center text-white w-full'>
        <h3> three.js playground</h3>
      </div>
      <div className='bg-gray-300 container flex-auto h-96 m-0 rounded-3xl'>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 30 }}
          className='h-96 rounded-3xl'
        >
          <ambientLight intensity={0.1} />
          <directionalLight color='red' position={[0, 0, 5]} />

          <TransformControls mode='translate'>
            <mesh>
              <Suspense fallback={<Loader />}>
                <Test url={allObjects[selectedIndex].href} />
                <OrbitControls />
                <Environment preset='sunset' background />
              </Suspense>
            </mesh>
          </TransformControls>
        </Canvas>
      </div>
      <div className='flex h-20 items-center justify-center w-full'>
        <Button
          onClick={() => setSelectedIndex(selectedIndex === 0 ? 1 : 0)}
          variant='primary'
        >
          Change Object
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Test({ url }: { url: string }) {
  const { scene } = useLoader(GLTFLoader, url);
  return <primitive object={scene} />;
}
