import { useGameState } from './use-game-state';
import { GameInfo } from './game-info';
import { GameCell } from './game-cell';
import { ResetButton } from './reset-button';

export function Game() {
   const {
      cells,
      currentStep,
      winnerSequence,
      handleCellClick,
      handleResetClick,
      winnerSymbol,
      isDraw,
   } = useGameState();

   return (
      <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
         <GameInfo
            isDraw={isDraw}
            winnerSymbol={winnerSymbol}
            currentStep={currentStep}
         />

         <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)] pt-px pl-px">
            {cells.map((symbol, index) => (
               <GameCell
                  key={index}
                  isWinner={winnerSequence?.includes(index)}
                  onClick={() => handleCellClick(index)}
                  symbol={symbol}
               />
            ))}
         </div>

         <ResetButton onClick={handleResetClick} />
      </div>
   );
}
