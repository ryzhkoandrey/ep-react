import clsx from 'clsx';
import { useState } from 'react';
import { UiButton } from '../uikit/ui-button';
import { GAME_SYMBOLS } from './constants';
import { GameSymbol } from './';

const MOVE_ORDER = [
   GAME_SYMBOLS.CROSS,
   GAME_SYMBOLS.ZERO,
   GAME_SYMBOLS.TRIANGLE,
   GAME_SYMBOLS.SQUARE,
];

function getNextMove(currentMove) {
   const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
   return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({ className }) {
   const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
   const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS);
   const nextMove = getNextMove(currentMove);
   const actions = (
      <>
         <UiButton size="md" variant="primary">
            Ничья
         </UiButton>
         <UiButton size="md" variant="outline">
            Сдаться
         </UiButton>
      </>
   );

   return (
      <GameFieldLayout className={className}>
         <GameMoveInfo
            actions={actions}
            currentMove={currentMove}
            nextMove={nextMove}
         ></GameMoveInfo>

         <GameGrid>
            {cells.map((_, index) => (
               <GameCell key={index}></GameCell>
            ))}
         </GameGrid>
      </GameFieldLayout>
   );
}

function GameCell({ children }) {
   return (
      <button className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
         {children}
      </button>
   );
}

function GameFieldLayout({ children, className }) {
   return (
      <div
         className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}
      >
         {children}
      </div>
   );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
   return (
      <div className="flex items-center gap-3">
         <div className="mr-auto">
            <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
               Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
               Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
            </div>
         </div>

         {actions}
      </div>
   );
}

function GameGrid({ children }) {
   return (
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-4">
         {children}
      </div>
   );
}
