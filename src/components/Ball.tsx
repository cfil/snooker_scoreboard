import React from 'react';

interface BallProps {
  points: number;
  onClick: () => void;
  disabled: boolean;
  remainingBalls: number;
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

const Ball: React.FC<BallProps> = ({ points, onClick, disabled, remainingBalls }) => {
  const color = getColorForPoints(points);

  return (
    <button onClick={onClick} disabled={disabled} className={ disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200' }>
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
