export function GameLayouts({ backLink, title, gameInfo }) {
   return (
      <div>
         <div className="pl-2 flex flex-col items-start">
            {backLink}
            {title}
            {gameInfo}
         </div>
      </div>
   );
}
