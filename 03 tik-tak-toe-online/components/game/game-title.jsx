import Link from 'next/link';
import { ArrowLeftIcon } from './icons/arrow-left-icon';
import { UserIcon } from './icons/user-icon';
import { StarIcon } from './icons/star-icon';
import { HistoryIcon } from './icons/history-icon';

export function GameTitle({ playersCount }) {
   return (
      <div className="pl-2 flex flex-col items-start">
         {/* back */}
         <Link
            className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
            href="#"
         >
            <ArrowLeftIcon />
            На главную
         </Link>

         {/* title */}
         <h1 className="text-4xl leading-tight">Крестики нолики</h1>

         {/* info */}
         <div className="flex items-center gap-3 text-xs text-slate-400">
            <StarIcon />

            <div className="flex items-center gap-1">
               <UserIcon /> {playersCount}
            </div>

            <div className="flex items-center gap-1">
               <HistoryIcon /> 1 мин на ход
            </div>
         </div>
      </div>
   );
}
