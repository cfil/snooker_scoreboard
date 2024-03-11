import React from 'react';
import logo from '../images/logo.png';

interface StartFormProps {
  player1Name: string;
  player2Name: string;
  handlePlayerNameChange: (player: number, name: string) => void;
  handleStartGame: () => void;
}

const StartForm: React.FC<StartFormProps> = ({ player1Name, player2Name, handlePlayerNameChange, handleStartGame }) => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-auto"
            src={logo}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Aristides Hall Snooker Club
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Jogador 1 "
                  value={player1Name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => handlePlayerNameChange(1, e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Jogador 2"
                  value={player2Name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => handlePlayerNameChange(2, e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleStartGame}
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Jogar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default StartForm;
