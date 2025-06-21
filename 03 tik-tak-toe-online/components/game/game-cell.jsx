import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-400 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-green-100"
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
