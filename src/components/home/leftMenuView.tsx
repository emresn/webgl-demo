import React from 'react';

import { allObjects } from '@/model/objectModel';

type Props = {
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
};

const LeftMenuView = ({ selectedIndex, setSelectedIndex }: Props) => {
  return (
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
  );
};

export default LeftMenuView;
