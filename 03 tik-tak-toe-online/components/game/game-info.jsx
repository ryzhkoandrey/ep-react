import clsx from 'clsx';
import { Profile } from '../profile';
import { GameSymbol } from './';

export function GameInfo({ className }) {
   return (
      <div
         className={clsx(
            className,
            'bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between'
         )}
      >
         <PlayerInfo playerInfo={{ name: 'Andrey', rating: '1234' }} />
         <PlayerInfo playerInfo={{ name: 'Ava', rating: '1234' }} />
      </div>
   );
}

function PlayerInfo({ playerInfo }) {
   return (
      <div className="flex items-center gap-3">
         {/* profile */}
         <div className="relative">
            <Profile
               className="w-44"
               name={playerInfo.name}
               rating={playerInfo.rating}
               avatar={playerInfo.avatar}
            />
            <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
               <GameSymbol symbol={playerInfo.symbol} />
            </div>
         </div>

         {/* divider */}
         <div className="w-px h-6 bg-slate-200" />

         {/* numbers */}
         <div className="text-lg font-semibold">01:08</div>
      </div>
   );
}
