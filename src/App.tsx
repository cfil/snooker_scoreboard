import React, { useState } from 'react';
import StartForm from './components/StartForm';
import Scorecard from './components/Scorecard';

const App: React.FC = () => {
  const [player1Name, setPlayer1Name] = useState<string>("");
  const [player2Name, setPlayer2Name] = useState<string>("");
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handlePlayerNameChange = (player: number, name: string): void => {
    if (player === 1) {
      setPlayer1Name(name);
    } else {
      setPlayer2Name(name);
    }
  };

  const handleStartGame = (): void => {
    setPlayer1Name(player1Name ? player1Name : 'Player 1')
    setPlayer2Name(player2Name ? player2Name : 'Player 2')
    setGameStarted(true);
  };

  return (
    <div className="App tw-bg-green-800 tw-h-dvh">
      {!gameStarted ? (
        <StartForm 
        player1Name={player1Name} 
        player2Name={player2Name} 
        handlePlayerNameChange={handlePlayerNameChange} 
        handleStartGame={handleStartGame} 
      />
      ) : (
       <Scorecard
       player1Name={player1Name} 
       player2Name={player2Name} 
       gameStarted={gameStarted}
       />
       )}
    </div>
  );
};

export default App;
