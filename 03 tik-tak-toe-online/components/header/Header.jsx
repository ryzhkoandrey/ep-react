import Image from 'next/image';
import logoSrc from './logo.svg';

export function Header() {
   return (
      <header className="flex items-center h-24 px-8 bg-white shadow-lg">
         <Image src={logoSrc} alt="logo" />

         <div className="w-px h-8 bg-slate-200 mx-6" />

         <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl">
            Играть
         </button>
      </header>
   );
}
