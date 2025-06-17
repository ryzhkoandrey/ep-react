const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

function App() {
   const cells = [SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, null, null, null, null];
   const currentStep = SYMBOL_X;

   const getSymbolClassName = (symbol) => {
      if (symbol === SYMBOL_O) return 'symbol--o';
      if (symbol === SYMBOL_X) return 'symbol--x';
      return '';
   };

   const renderSymbol = (symbol) => (
      <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
   );

   return (
      <div className="game">
         <div className="game-info">Ход: {renderSymbol(currentStep)}</div>

         <div className="game-field">
            {cells.map((symbol, index) => {
               return (
                  <button key={index} className="cell">
                     {symbol ? renderSymbol(symbol) : null}
                  </button>
               );
            })}
         </div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
