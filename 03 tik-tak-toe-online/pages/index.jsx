import { useState } from 'react';
import { Header } from '../components/header';
import { GameInfo, GameTitle, GameField } from '../components/game';

export default function HomePage() {
   const [playersCount] = useState(4);

   return (
      <div className="bg-slate-50 min-h-screen">
         <Header />
         <main className="mx-auto w-max pt-6">
            <GameTitle playersCount={playersCount} />
            <GameInfo playersCount={playersCount} className="mt-4" />
            <GameField playersCount={playersCount} className="mt-6" />
         </main>
      </div>
   );
}
