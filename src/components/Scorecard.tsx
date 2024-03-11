import React, { useState } from 'react';
import Ball from '../components/Ball';
import BallReflect from '../components/BallReflect';


interface ScorecardProps {
  player1Name: string;
  player2Name: string;
  gameStarted: boolean;
}

const Scorecard: React.FC<ScorecardProps> = ({ player1Name, player2Name, gameStarted }) => {
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [activePlayer, setActivePlayer] = useState<number>(1);
  const [lastPlayer, setLastPlayer] = useState<number | null>(null);

  const handleButtonClick = (points: number): void => {
    if (!gameStarted) return;
    
    if (points === 1) {
      if (activePlayer === 1) {
        setPlayer1Score(player1Score + 1);
        setLastPlayer(1);
        setActivePlayer(2);
      } else {
        setPlayer2Score(player2Score + 1);
        setLastPlayer(2);
        setActivePlayer(1);
      }
    } else {
      if (activePlayer === 1) {
        setPlayer1Score(player1Score + points);
      } else {
        setPlayer2Score(player2Score + points);
      }
    }
  };

  const changeActivePlayer = (): void => {
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  const isButtonDisabled = (points: number): boolean => {
    if (!gameStarted) return true;
    
    if (points === 1) {
      return lastPlayer === activePlayer;
    } else {
      return false;
    }
  };

  return (
    <div className="App bg-green-800 h-dvh">
      <h1>Snooker</h1>
      {(
        <>
          <div className="players">
            <div className={activePlayer === 1 ? "player active" : "player"}>
              <h2>{player1Name}</h2>
              <p>Score: {player1Score}</p>
            </div>
            <div className={activePlayer === 2 ? "player active" : "player"}>
              <h2>{player2Name}</h2>
              <p>Score: {player2Score}</p>
            </div>
          </div>
          <div className="buttons">
            {[1, 2, 3, 4, 5, 6, 7].map((points) => (
              <Ball
                key={points}
                points={points}
                onClick={() => handleButtonClick(points)}
                disabled={isButtonDisabled(points)}
              />
            ))}
          </div>
          <div className="change-player-button">
            <button onClick={changeActivePlayer}>Change Active Player</button>
            <BallReflect></BallReflect>
          </div>
        </>
      )}
    </div>
  );
}

export default Scorecard;
