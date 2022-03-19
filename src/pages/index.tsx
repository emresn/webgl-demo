import React, { useState } from 'react';

import BuildCheckbox from '@/components/buildCheckbox';
import CanvasView from '@/components/home/canvasView';
import LeftMenuView from '@/components/home/leftMenuView';

import { allObjects } from '@/model/objectModel';

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEnviromentActive, setEnviroment] = useState(true);
  const [isOrbitControlActive, setOrbitControl] = useState(true);
  const [isTransformationActive, setTransformation] = useState(true);

  const buildControlPanel = (
    <div className='flex flex-row gap-4'>
      <BuildCheckbox
        label={'Enviroment'}
        value={isEnviromentActive}
        setValue={setEnviroment}
      />
      <BuildCheckbox
        label={'Orbit Control'}
        value={isOrbitControlActive}
        setValue={setOrbitControl}
      />
      <BuildCheckbox
        label={'Transformation'}
        value={isTransformationActive}
        setValue={setTransformation}
      />
    </div>
  );

  return (
    <div className='bg-zinc-800 min-w-screen flex flex-col items-start min-h-screen'>
      <div className='flex flex-row justify-between p-4 w-full text-center text-white'>
        <h3> WebGL Demo</h3>
        {buildControlPanel}
      </div>
      <div className='flex flex-row flex-auto items-stretch w-full'>
        <LeftMenuView
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div className='flex-auto p-4'>
          <CanvasView
            key={selectedIndex}
            object={allObjects[selectedIndex]}
            isEnviromentActive={isEnviromentActive}
            isOrbitControlActive={isOrbitControlActive}
            isTransformationActive={isTransformationActive}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
