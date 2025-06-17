const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

function App() {
   const cells = [null, null, null, SYMBOL_O, SYMBOL_X, SYMBOL_O, null, null, null];
   const currentStep = SYMBOL_X;

   const getSymbolClassName = (symbol) => {
      if (symbol === SYMBOL_O) return 'symbol--o';
      if (symbol === SYMBOL_X) return 'symbol--x';
      return '';
   };

   return (
      <div className="game">
         <div className="game-info">
            Ход:{' '}
            <span className={`symbol ${getSymbolClassName(currentStep)}`}>
               {currentStep}
            </span>
         </div>

         <div className="game-field">
            {cells.map((symbol) => {
               return (
                  <button className="cell">
                     {symbol ? (
                        <span className={`symbol ${getSymbolClassName(symbol)}`}>
                           {symbol}
                        </span>
                     ) : null}
                  </button>
               );
            })}
         </div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
