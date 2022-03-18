import {
  Environment,
  Html,
  OrbitControls,
  TransformControls,
  useProgress,
} from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { allObjects } from '@/model/character';

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='bg-zinc-800 flex flex-col items-start min-h-screen min-w-screen'>
      <div className='justify-center p-4 text-center text-white w-full'>
        <h3> WebGL Demo</h3>
      </div>
      <div className='flex flex-auto flex-row items-stretch w-full'>
        <div className='flex flex-col gap-4 items-center py-4 text-gray-50 w-1/6'>
          <div className='text-center w-full'>
            <h4>Models</h4>
            <hr className='mx-2' />
          </div>
          {allObjects.map((e, idx) => (
            <button
              className={`${
                selectedIndex == idx && 'text-lime-300'
              } font-medium text-lg hover:text-gray-300`}
              onClick={() => setSelectedIndex(idx)}
              key={idx}
            >
              {e.name}
            </button>
          ))}
        </div>
        <div className='flex-auto p-4'>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 30 }}
            className='rounded-3xl'
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
