const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

function App() {
   const [cells, setCells] = React.useState([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
   ]);
   const [currentStep, setCurrentStep] = React.useState(SYMBOL_O);

   const getSymbolClassName = (symbol) => {
      if (symbol === SYMBOL_O) return 'symbol--o';
      if (symbol === SYMBOL_X) return 'symbol--x';
      return '';
   };

   const renderSymbol = (symbol) => (
      <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
   );

   const handleCellClick = (index) => {
      if (cells[index]) return;

      const cellsCopy = cells.slice();
      cellsCopy[index] = currentStep;
      setCells(cellsCopy);

      setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
   };

   return (
      <div className="game">
         <div className="game-info">Ход: {renderSymbol(currentStep)}</div>

         <div className="game-field">
            {cells.map((symbol, index) => {
               return (
                  <button
                     key={index}
                     className="cell"
                     onClick={() => handleCellClick(index)}
                  >
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
