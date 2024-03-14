import React from 'react';

interface BallProps {
  points: number;
  onClick: () => void;
  finalSequence: boolean;
  remainingBalls: number;
  remainingReds: number;
  lastPot: number;
}

const getColorForPoints = (points: number): string => {
  switch (points) {
    case 1:
      return 'red';
    case 2:
      return 'yellow';
    case 3:
      return 'green';
    case 4:
      return 'chocolate';
    case 5:
      return 'blue';
    case 6:
      return 'pink';
    case 7:
      return 'black';
    default:
      return 'red'; // default color if points are out of range
  }
};

const isButtonEnabled = (points: number, lastPot : number, remainingReds : number, finalSequence: boolean): boolean => {  
  if ( points === 1 && remainingReds === 0 ) {
    return false
  }
  if ( lastPot > 1 && points > 1 && remainingReds > 0 ) {
    return false
  }
  if ( lastPot > 1 && points <= lastPot && !finalSequence) {
    return true
  }
  if ( lastPot > 1 && points <= lastPot && remainingReds === 0 ) {
    return false
  }
  if ( lastPot === 0 && points > 1) {
    return false
  }
  return true
};

const Ball: React.FC<BallProps> = ({ points, onClick, finalSequence, remainingBalls, remainingReds, lastPot }) => {
  const color = getColorForPoints(points);

  return (
    <button onClick={onClick} disabled={!isButtonEnabled(points, lastPot, remainingReds, finalSequence)} className={ isButtonEnabled(points, lastPot, remainingReds, finalSequence) ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed' }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <circle cx="50%" cy="25%" r="25%" fill={color} />
        {points === 1 && <text x="50%" y="25%" textAnchor="middle" fill="white">{remainingBalls}</text>}
      </svg>
      
    </button>
  );
}

export default Ball;
