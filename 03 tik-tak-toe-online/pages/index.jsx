import { useState } from 'react';
import { GameInfo, GameTitle, GameField, useGameState } from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
   const [playersCount] = useState(2);

   const { cells, currentMove, handleCellClick, nextMove, winnerSequence } =
      useGameState(playersCount);

   return (
      <div className="bg-slate-50 min-h-screen">
         <Header />

         <main className="mx-auto w-max pt-6">
            <GameTitle playersCount={playersCount} />

            <GameInfo
               className="mt-4"
               playersCount={playersCount}
               currentMove={currentMove}
            />

            <GameField
               className="mt-6"
               cells={cells}
               currentMove={currentMove}
               nextMove={nextMove}
               handleCellClick={handleCellClick}
               winnerSequence={winnerSequence}
            />
         </main>
      </div>
   );
}
