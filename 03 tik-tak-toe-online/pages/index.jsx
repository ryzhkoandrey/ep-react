import { useState } from 'react';
import {
   GameInfo,
   GameTitle,
   GameField,
   useGameState,
   GameSymbol,
} from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
   const [playersCount] = useState(4);

   const {
      cells,
      currentMove,
      handleCellClick,
      nextMove,
      winnerSequence,
      handlePlayersTimeOver,
      winnerSymbol,
   } = useGameState(playersCount);

   return (
      <div className="bg-slate-50 min-h-screen">
         <Header />

         <main className="mx-auto w-max pt-6">
            <GameTitle playersCount={playersCount} />

            <GameInfo
               className="mt-4"
               playersCount={playersCount}
               currentMove={currentMove}
               isWinner={!!winnerSymbol}
               onPlayerTimeOver={handlePlayersTimeOver}
            />

            {winnerSymbol && (
               <div>
                  <GameSymbol symbol={winnerSymbol} />
               </div>
            )}

            <GameField
               className="mt-6"
               cells={cells}
               currentMove={currentMove}
               nextMove={nextMove}
               handleCellClick={handleCellClick}
               winnerSequence={winnerSequence}
               winnerSymbol={winnerSymbol}
            />
         </main>
      </div>
   );
}
