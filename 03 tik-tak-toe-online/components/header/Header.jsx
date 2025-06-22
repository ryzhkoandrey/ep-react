import Image from 'next/image';
import logoSrc from './logo.svg';
import avatarSrc from './avatar.png';

export function Header() {
   return (
      <header className="flex items-center h-24 px-8 bg-white shadow-lg">
         {/* logo */}
         <Image src={logoSrc} alt="logo" />

         {/* divider */}
         <div className="w-px h-8 bg-slate-200 mx-6" />

         {/* btn */}
         <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight">
            Играть
         </button>

         {/* profile */}
         <button className="ml-auto flex items-center gap-2 text-start">
            <Image src={avatarSrc} width={48} height={48} alt="avatar" unoptimized />
            <div>
               <div className="text-teal-600 text-lg leading-tight">Paromovevg</div>
               <div className="text-slate-400 text-xs leading-tight">
                  Рейтинг: 1230
               </div>
            </div>
         </button>
      </header>
   );
}
