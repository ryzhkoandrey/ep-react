import { StarIcon } from './icons/star-icon';
import { UserIcon } from './icons/user-icon';
import { HistoryIcon } from './icons/history-icon';

export function GameInfo() {
   return (
      <div className="flex items-center gap-3 text-xs text-slate-400">
         <StarIcon />

         <div className="flex items-center gap-1">
            <UserIcon /> {playersCount}
         </div>

         <div className="flex items-center gap-1">
            <HistoryIcon /> 1 мин на ход
         </div>
      </div>
   );
}
