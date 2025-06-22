import Link from 'next/link';
import { ArrowLeftIcon } from './icons/arrow-left-icon';

export function GameTitle() {
   return (
      <div className="pl-2 flex flex-col items-start">
         <Link
            className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
            href="#"
         >
            <ArrowLeftIcon />
            На главную
         </Link>

         <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      </div>
   );
}
