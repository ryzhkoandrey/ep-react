import styles from '../styles/game.module.css';

export default function HomePage() {
   const {
      cells,
      currentStep,
      winnerSequence,
      handleCellClick,
      handleResetClick,
      winnerSymbol,
      isDraw,
   } = useGameState();

   return (
      <div className={styles['game']}>
         <GameInfo
            isDraw={isDraw}
            winnerSymbol={winnerSymbol}
            currentStep={currentStep}
         />

         <div className={styles['game-field']}>
            {cells.map((symbol, index) => (
               <GameCell
                  key={index}
                  isWinner={winnerSequence?.includes(index)}
                  onClick={() => handleCellClick(index)}
                  symbol={symbol}
               />
            ))}
         </div>

         <button className={styles['reset']} onClick={handleResetClick}>
            Сбросить
         </button>
      </div>
   );
}
