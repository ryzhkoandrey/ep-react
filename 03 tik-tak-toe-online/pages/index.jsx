import { Header } from '../components/header';
import { Game } from '../components/game-new';

export default function HomePage() {
   return (
      <HomePageLayout header={<Header />}>
         <Game />
      </HomePageLayout>
   );
}

function HomePageLayout({ header, children }) {
   return (
      <div className="bg-slate-50 min-h-screen">
         {header}
         <main className="mx-auto w-max pt-6">{children}</main>
      </div>
   );
}
