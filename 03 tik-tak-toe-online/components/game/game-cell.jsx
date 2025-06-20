import { GameSymbol } from './game-symbol';

export function GameCell({ isWinner, onClick, symbol }) {
   return (
      <button
         className={`border border-gray-400 -mt-px -ml-px flex items-center justify-center bg-transparent ${
            isWinner ? 'bg-green-100' : ''
         }`}
         onClick={onClick}
      >
         {symbol ? <GameSymbol symbol={symbol} /> : null}
      </button>
   );
}
