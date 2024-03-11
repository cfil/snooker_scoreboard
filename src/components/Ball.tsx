import React from 'react';

interface BallProps {
  points: number;
  onClick: () => void;
  disabled: boolean;
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

const Ball: React.FC<BallProps> = ({ points, onClick, disabled }) => {
  const color = getColorForPoints(points);

  return (
    <button onClick={onClick} disabled={disabled}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle representing the ball */}
        <circle cx="50" cy="50" r="40" fill={color} />
      </svg>
    </button>
  );
}

export default Ball;
