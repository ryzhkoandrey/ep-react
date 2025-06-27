import { useState } from 'react';
import { GAME_SYMBOLS } from './constants';
import { getNextMove, computeWinner } from './model';

export function useGameState(playersCount) {
   const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(() => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
   }));

   const winnerSequence = computeWinner(cells);
   const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

   const handleCellClick = (index) => {
      setGameState((lastGameState) => {
         if (lastGameState.cells[index]) {
            return lastGameState;
         }

         return {
            ...lastGameState,
            currentMove: getNextMove(
               lastGameState.currentMove,
               playersCount,
               playersTimeOver
            ),
            cells: lastGameState.cells.map((cell, i) =>
               i === index ? lastGameState.currentMove : cell
            ),
         };
      });
   };

   const handlePlayersTimeOver = (symbol) => {
      setGameState((lastGameState) => {
         return {
            ...lastGameState,
            playersTimeOver: [...lastGameState.playersTimeOver, symbol],
            currentMove: getNextMove(
               lastGameState.currentMove,
               playersCount,
               playersTimeOver
            ),
         };
      });
   };

   return {
      cells,
      currentMove,
      nextMove,
      handleCellClick,
      handlePlayersTimeOver,
      winnerSequence,
   };
}
