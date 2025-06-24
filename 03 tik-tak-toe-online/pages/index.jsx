import { Header } from '../components/header';
import { GameInfo, GameTitle, GameField } from '../components/game';

export default function HomePage() {
   return (
      <div className="bg-slate-50 min-h-screen">
         <Header />
         <main className="mx-auto w-max pt-6">
            <GameTitle />
            <GameInfo className="mt-4" />
            <GameField className="mt-6" />
         </main>
      </div>
   );
}
