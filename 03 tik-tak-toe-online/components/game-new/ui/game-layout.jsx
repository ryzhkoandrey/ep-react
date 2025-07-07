export function GameLayouts({ backLink, title, gameInfo, playersList }) {
   return (
      <div>
         <div className="pl-2 flex flex-col items-start">
            {backLink}
            {title}
            {gameInfo}
         </div>
         <div
            className={
               'mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3'
            }
         >
            {playersList}
         </div>
      </div>
   );
}
