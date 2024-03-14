import React, { useState } from 'react';
import Ball from './Ball';
import PlayerDisplay from './PlayerDisplay';
import PointsPossibleDisplay from './PointsPossibleDisplay';

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
  const [remainingPoints, setRemainingPoints] = useState<number>(147);
  const [finalSequence, setFinalSequence] = useState<boolean>(false);
  const [lastColorRespot, setLastColorRespot] = useState<boolean>(false);

  const handleButtonClick = (points: number): void => {
    if (!gameStarted) return;
    
    if (points === 1) {
      setLastPot(1);
      setPlayerScore(points);
      decreaseRemainingBalls(points);
    } else {
      setLastPot(points);
      setPlayerScore(points);
      if (remainingReds === 0 && lastColorRespot === false) {
        setLastColorRespot(true);
      }    
      if (lastColorRespot === true) {
        setFinalSequence(true);
      }
        
    }
  };

  const decreaseRemainingBalls = (balls_to_remove: number): void => {
    setRemainingReds(remainingReds - balls_to_remove);
  };

  const setPlayerScore = (points: number): void => {
    const scoreSetter = activePlayer === 1 ? setPlayer1Score : setPlayer2Score;
    scoreSetter(prevScore => prevScore + points);
    let removePoints = points === 1 ? 1 : 7;
    setRemainingPoints(remainingPoints - removePoints);
  };

  const changeActivePlayer = (): void => {
    let removepoints = lastPot === 1 ? 7 : 0;
    setRemainingPoints(remainingPoints - removepoints);
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  return (
    <div className="App tw-bg-green-800 tw-h-dvh">
      <div className="row">
        {(
          <>
            <div className="row">
              <div className="col-12 tw-flex tw-justify-center tw-mb-6">
                <a href={window.location.href} className="tw-font-semibold tw-mt-2 tw-text-white tw-underline">Aristides Hall Snooker Club</a>
              </div>
            </div>
            <div className="row players tw-mt-2">
              <div className="col-5 tw-flex tw-justify-center">
                <PlayerDisplay
                  key={player1Name}
                  isActive={activePlayer === 1}
                  playerName={player1Name}
                  playerScore={player1Score}
                  opponentScore={player2Score}
                />
              </div>
              <div className="col-2">
                <div className="row">
                  <div className="col-12">
                    <PointsPossibleDisplay remainingPoints={remainingPoints} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tw-align-middle">
                      <div className="change-player-button tw-flex tw-justify-center tw-items-center">
                        <button
                          onClick={changeActivePlayer}
                          type="button"
                          className="tw-w-full tw-rounded-full tw-bg-green-600 tw-px-4 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm "
                        >
                          End Break
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tw-align-middle">
                      <div className="change-player-button tw-flex tw-justify-center tw-items-center tw-mt-6">
                        <button
                          onClick={changeActivePlayer}
                          type="button"
                          className="tw-w-full tw-rounded-full tw-bg-green-600 tw-px-4 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm"
                        >
                          Foul
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 tw-flex tw-justify-center">
                <PlayerDisplay
                  key={player2Name}
                  isActive={activePlayer === 2}
                  playerName={player2Name}
                  playerScore={player2Score}
                  opponentScore={player1Score}
                />
              </div>
            </div>
            <div className="buttons tw-mt-6">
              <div className="row tw-flex tw-justify-center tw-items-middle">
                {[1, 2, 3, 4, 5, 6, 7].map((points, index) => (
                  <div className="col-1" key={points+index}>
                    <Ball
                      points={points}
                      onClick={() => handleButtonClick(points)}
                      finalSequence={finalSequence}
                      remainingBalls={points === 1 ? remainingReds : 1}
                      remainingReds={remainingReds}
                      lastPot={lastPot}
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
