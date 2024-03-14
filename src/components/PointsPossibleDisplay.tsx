import React from 'react';

interface PlayerDisplayProps {
  remainingPoints: number;
}

const PointsPossibleDisplay: React.FC<PlayerDisplayProps> = ({ remainingPoints }) => {
  return (
    <div className=" tw-justify-center">
      <div className="tw-text-white tw-font-bold tw-flex tw-justify-center">
        <h2 className="tw-text-center tw-text-xl">Points Remaining</h2>
      </div>
      <br></br>
      <p className='tw-text-[50px] tw-font-bold tw-flex tw-justify-center tw-text-white'>{remainingPoints}</p>
    </div>
  );
};

export default PointsPossibleDisplay;
