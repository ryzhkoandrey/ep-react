import { SYMBOL_O, SYMBOL_X } from './constants';

export function GameSymbol({ symbol }) {
   const getSymbolClassName = (symbol) => {
      if (symbol === SYMBOL_O) return 'text-red-400';
      if (symbol === SYMBOL_X) return 'text-green-600';
      return '';
   };

   return (
      <span className={`text-xl/6 ${getSymbolClassName(symbol)}`}>{symbol}</span>
   );
}
