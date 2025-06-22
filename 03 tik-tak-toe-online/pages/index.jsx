import { Header } from '../components/header';
import { GameInfo, GameTitle } from '../components/game';

export default function HomePage() {
   return (
      <div className="bg-slate-50 min-h-screen">
         <Header />

         <main className="mx-auto max-w-[616px] pt-6 ">
            <GameTitle />
            <GameInfo className="mt-4" />
         </main>
      </div>
   );
}
