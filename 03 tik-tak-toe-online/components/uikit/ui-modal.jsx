import clsx from 'clsx';

/**
 *
 * @param {{
 *    width: 'md' | 'full'
 * }} props
 * @returns
 */

export function UiModal({ width }) {
   return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10">
         <div
            className={clsx(
               'bg-white rounded-lg min-h-[320px] mx-auto',
               {
                  md: 'max-w-[640px] w-full',
                  full: 'mx-5',
               }[width]
            )}
         ></div>
      </div>
   );
}
