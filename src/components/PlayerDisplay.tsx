import React from 'react';

interface PlayerDisplayProps {
  isActive: boolean;
  playerName: string;
  playerScore: number;
  opponentScore: number;
}

const PlayerDisplay: React.FC<PlayerDisplayProps> = ({ isActive, playerName, playerScore, opponentScore }) => {
  return (
    <div className={`player ${isActive ? "active" : ""}`}>
      <h2 className={isActive ? "tw-text-white tw-font-bold" : ""}>
        {isActive ? " > " : ""}{playerName}{isActive ? " < " : ""}
      </h2>
      <p className='tw-text-[200px] tw-font-bold tw-flex tw-justify-center tw-text-white'>{playerScore}</p>
      <p className="tw-text-[50px] tw-flex tw-justify-center tw-text-white">
        ({playerScore - opponentScore})
      </p>
    </div>
  );
};

export default PlayerDisplay;
