import { GameLayouts } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameTitle } from './ui/game-title';

export function Game() {
   return (
      <GameLayouts
         backLink={<BackLink />}
         title={<GameTitle />}
         gameInfo={
            <GameInfo isRatingGame playersCount={4} timeMode={'1 мин. на ход'} />
         }
      />
   );
}
