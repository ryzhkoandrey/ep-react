import { GameSymbol } from './game-symbol';

export function PlayerInfo() {
   return (
      <div className="flex items-center gap-3">
         {/* profile */}
         <div className={clsx('relative', isRight && 'order-3')}>
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
         <div className={clsx('w-px h-6 bg-slate-200', isRight && 'order-2')} />

         {/* timer */}
         <div
            className={clsx(
               'text-lg font-semibold w-[60px]',
               isRight && 'order-1',
               getTimerColor()
            )}
         >
            {minutesString}:{secondsString}
         </div>
      </div>
   );
}
