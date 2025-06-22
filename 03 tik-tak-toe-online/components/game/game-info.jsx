import clsx from 'clsx';
import { Profile } from '../profile';
import { CrossIcon } from './icons/cross-icon';

export function GameInfo({ className }) {
   return (
      <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 py-4')}>
         <div>
            <div className="relative">
               <Profile />
               <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white shadow absolute -left-1 -top-1">
                  <CrossIcon />
               </div>
            </div>
         </div>
      </div>
   );
}
