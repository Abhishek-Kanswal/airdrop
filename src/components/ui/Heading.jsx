import React from 'react';
import { useDispatch } from 'react-redux';
import { setTaskReset } from '../../app/features/TaskSlice'; // Correctly import the action

const Heading = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center justify-center"
      onClick={() => {
        dispatch(setTaskReset()); // Dispatch the action correctly
      }}
    >
      <span className="bg-gradient-to-r from-[#2a2a2e] to-[#414148] p-2 rounded-xl m-2 text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wide text-[#d3d3d3]">
        {text}
      </span>
    </div>
  );
};

export default Heading;