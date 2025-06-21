import Image from 'next/image';
import logoSrc from './logo.svg';

export function Header() {
   return (
      <header className="flex items-center h-24 px-8 bg-white shadow-lg">
         <Image src={logoSrc} alt="logo" />

         <div className="w-px h-8 mx-6 bg-slate-200"></div>
      </header>
   );
}
