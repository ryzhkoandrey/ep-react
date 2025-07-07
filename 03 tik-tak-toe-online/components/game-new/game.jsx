import { GameLayouts } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameTitle } from './ui/game-title';
import { PLAYERS } from './constants';
import { PlayerInfo } from './ui/player-info';

export function Game() {
   return (
      <GameLayouts
         backLink={<BackLink />}
         title={<GameTitle />}
         gameInfo={
            <GameInfo isRatingGame playersCount={4} timeMode={'1 мин. на ход'} />
         }
         playersList={PLAYERS.map((player, index) => (
            <PlayerInfo
               key={player.id}
               avatar={player.avatar}
               isRight={index % 2 === 1}
               ragint={player.rating}
               seconds={60}
               symbol={player.symbol}
               name={player.name}
            />
         ))}
      />
   );
}
