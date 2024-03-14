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
      <div className="tw-flex tw-min-h-full tw-flex-1 tw-flex-col tw-justify-center tw-px-6 tw-lg:px-8">
        <div className="sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-sm">
          <img
            className="tw-mx-auto tw-w-auto"
            src={logo}
            alt="Aristides Hall"
          />
          <h2 className="tw-mt-10 tw-text-center tw-text-2xl tw-font-bold tw-leading-9 tw-tracking-tight tw-text-gray-900">
            Aristides Hall Snooker Club
          </h2>
        </div>

        <div className="tw-mt-10 sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-sm">
          <div className="tw-space-y-6">
            <div>
              <div className="tw-mt-2">
                <input
                  type="text"
                  placeholder="Jogador 1 "
                  value={player1Name}
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
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
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                  onChange={(e) => handlePlayerNameChange(2, e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleStartGame}
                className="tw-flex tw-w-full tw-justify-center tw-rounded-md tw-bg-red-600 tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-leading-6 tw-text-white tw-shadow-sm hover:tw-bg-red-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-600"
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
