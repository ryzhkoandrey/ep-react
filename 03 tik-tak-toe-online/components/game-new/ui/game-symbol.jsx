import { GAME_SYMBOLS } from '../constants';
import { TriangleIcon } from './icons/triangle-icon';
import { SquareIcon } from './icons/square-icon';
import { CrossIcon } from './icons/cross-icon';
import { ZeroIcon } from './icons/zero-icon';

export function GameSymbol({ symbol, className }) {
   const Icon =
      {
         [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
         [GAME_SYMBOLS.SQUARE]: SquareIcon,
         [GAME_SYMBOLS.CROSS]: CrossIcon,
         [GAME_SYMBOLS.ZERO]: ZeroIcon,
      }[symbol] ?? CrossIcon;

   return <Icon className={className} />;
}
