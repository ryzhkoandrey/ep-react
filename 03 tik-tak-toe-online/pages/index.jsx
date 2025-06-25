import { useState } from 'react';
import { GameInfo, GameTitle, GameField, useGameState } from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
   const [playersCount] = useState(4);

   const { cells, currentMove, nextMove, handleCellClick } =
      useGameState(playersCount);

   return (
      <div className="bg-slate-50 min-h-screen">
         <Header />
         <main className="mx-auto w-max pt-6">
            <GameTitle playersCount={playersCount} />
            <GameInfo playersCount={playersCount} className="mt-4" />
            <GameField
               cells={cells}
               currentMove={currentMove}
               nextMove={nextMove}
               handleCellClick={handleCellClick}
               className="mt-6"
            />
         </main>
      </div>
   );
}
