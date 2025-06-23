import clsx from 'clsx';
import { Profile } from '../profile';
import { CrossIcon } from './icons/cross-icon';

export function GameInfo({ className }) {
   return (
      <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 py-4')}>
         <div className="flex items-center gap-3">
            {/* profile */}
            <div className="relative">
               <Profile className="w-[180px]" />
               <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                  <CrossIcon />
               </div>
            </div>

            {/* divider */}
            <div className="w-px h-6 bg-slate-200" />
         </div>
      </div>
   );
}
