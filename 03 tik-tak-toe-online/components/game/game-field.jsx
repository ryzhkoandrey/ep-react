import clsx from 'clsx';
import { ZeroIcon } from './icons/zero-icon';
import { CrossIcon } from './icons/cross-icon';
import { UiButton } from '../uikit/ui-button';

export function GameField({ className }) {
   return (
      <div
         className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}
      >
         <div className="flex items-center justify-between">
            {/* info */}
            <div>
               <div className="flex items-center gap-1 text-xl leading-tight">
                  Ход: <ZeroIcon />
               </div>

               <div className="flex items-center gap-1">
                  Следующий: <CrossIcon />
               </div>
            </div>

            {/* btns */}
            <div className="flex items-center gap-3">
               <UiButton size="md" variant="primary">
                  Ничья
               </UiButton>

               <UiButton size="md" variant="outline">
                  Сдаться
               </UiButton>
            </div>
         </div>
      </div>
   );
}
