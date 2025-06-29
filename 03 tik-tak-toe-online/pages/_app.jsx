import clsx from 'clsx';
import '../styles/global.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function App({ Component, pageProps }) {
   console.log('app');
   return (
      <div className={clsx(inter.className, 'text-slate-900')}>
         <Component {...pageProps} />
         <div id="modals"></div>
      </div>
   );
}
