import clsx from 'clsx';
import Image from 'next/image';
import { GameSymbol } from './game-symbol';

export function PlayerInfo({
   isRight,
   name,
   rating,
   avatar,
   symbol,
   isTimerRunning,
   seconds,
}) {
   const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
   const secondsString = String(Math.floor(seconds % 60)).padStart(2, '0');

   const isDanger = seconds < 10;

   const getTimerColor = () => {
      if (isTimerRunning) {
         return isDanger ? 'text-orange-600' : 'text-slate-900';
      }
      return 'text-slate-300';
   };

   return (
      <div className="flex items-center gap-3">
         {/* profile */}
         <div className={clsx('relative', isRight && 'order-3')}>
            <div className={'flex items-center gap-2 text-start text-teal-600 w-44'}>
               <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
               <div className="overflow-hidden">
                  <div className="text-lg leading-tight truncate">{name}</div>
                  <div className="text-slate-400 text-xs leading-tight">
                     Рейтинг: {rating}
                  </div>
               </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
               <GameSymbol symbol={symbol} />
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
