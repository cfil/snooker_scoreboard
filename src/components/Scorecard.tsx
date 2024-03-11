import React, { useState } from 'react';
import Ball from '../components/Ball';
import PlayerDisplay from '../components/PlayerDisplay';

interface ScorecardProps {
  player1Name: string;
  player2Name: string;
  gameStarted: boolean;
}

const Scorecard: React.FC<ScorecardProps> = ({ player1Name, player2Name, gameStarted }) => {
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [activePlayer, setActivePlayer] = useState<number>(1);
  const [lastPot, setLastPot] = useState<number | 0>(0);
  const [remainingReds, setRemainingReds] = useState<number>(15);

  const handleButtonClick = (points: number): void => {
    if (!gameStarted) return;
    
    if (points === 1) {
      setLastPot(1);
      setPlayerScore(points);
      decreaseRemainingBalls(points);
    } else {
      setLastPot(points);
      setPlayerScore(points);
    }
  };

  const decreaseRemainingBalls = (balls_to_remove: number): void => {
    setRemainingReds(remainingReds - balls_to_remove);
  };

  const setPlayerScore = (points: number): void => {
    const scoreSetter = activePlayer === 1 ? setPlayer1Score : setPlayer2Score;
    scoreSetter(prevScore => prevScore + points);
  };

  const changeActivePlayer = (): void => {
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  const isButtonDisabled = (points: number): boolean => {
    if (!gameStarted) return true;
    
    if (points === 1) {
      return false
    }
    if (lastPot == 0 && points == 1) {
      return false
    }
    if (lastPot == 0 && points > 1) {
      return true
    }
    return lastPot > 1
  };

  return (
    <div className="App tw-bg-green-800 tw-h-dvh">
      <div className="row">
        <div className="col-12 tw-flex tw-justify-center">
          <h1>Snooker</h1>
        </div>
        {(
          <>
            <div className="row players">
              <div className="col-6 tw-flex tw-justify-center">
                <PlayerDisplay
                  isActive={activePlayer === 1}
                  playerName={player1Name}
                  playerScore={player1Score}
                  opponentScore={player2Score}
                />
              </div>
              <div className="col-6 tw-flex tw-justify-center">
                <PlayerDisplay
                  isActive={activePlayer === 2}
                  playerName={player2Name}
                  playerScore={player2Score}
                  opponentScore={player1Score}
                />
              </div>
            </div>
            <div className="row buttons">
              <div className="row tw-flex tw-justify-center tw-items-middle">
                <div className="col-1 tw-align-middle">
                  <div className="change-player-button tw-flex tw-justify-center tw-items-center">
                    <button
                      onClick={changeActivePlayer}
                      type="button"
                      className="tw-rounded-full tw-bg-indigo-600 tw-px-4 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 "
                    >
                      Change Active Player
                    </button>
                  </div>
                </div>
                {[1, 2, 3, 4, 5, 6, 7].map((points) => (
                  <div className="col-1">
                    <Ball
                      key={points}
                      points={points}
                      onClick={() => handleButtonClick(points)}
                      disabled={isButtonDisabled(points)}
                      remainingBalls={points === 1 ? remainingReds : 1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Scorecard;