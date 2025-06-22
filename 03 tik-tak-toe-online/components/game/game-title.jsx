import Link from 'next/link';
import { ArrowLeftIcon } from './icons/arrow-left-icon';

export function GameTitle() {
   return (
      <div className="pl-2">
         <Link className="flex items-center gap-2 text-teal-600" href="#">
            <ArrowLeftIcon />
            На главную
         </Link>
      </div>
   );
}
