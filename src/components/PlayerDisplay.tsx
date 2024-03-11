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
      <h2 className={isActive ? "tw-text-red-500" : ""}>
        {isActive ? " > " : ""}{playerName}{isActive ? " < " : ""}
      </h2>
      <p className="tw-text-9xl tw-flex tw-justify-center">{playerScore}</p>
      <p className="tw-text-xl tw-flex tw-justify-center">
        ({playerScore - opponentScore})
      </p>
    </div>
  );
};

export default PlayerDisplay;
