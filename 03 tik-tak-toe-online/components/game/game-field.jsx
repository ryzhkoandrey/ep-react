import clsx from 'clsx';
import { ZeroIcon } from './icons/zero-icon';
import { CrossIcon } from './icons/cross-icon';
import { UiButton } from '../uikit/ui-button';

export function GameField({ className }) {
   return (
      <div
         className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}
      >
         <div className="flex items-center gap-3">
            {/* info */}
            <div className="mr-auto">
               <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
                  Ход: <ZeroIcon className="w-5 h-5" />
               </div>

               <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
                  Следующий: <CrossIcon />
               </div>
            </div>

            {/* btns */}
            <UiButton size="md" variant="primary">
               Ничья
            </UiButton>

            <UiButton size="md" variant="outline">
               Сдаться
            </UiButton>
         </div>
      </div>
   );
}
