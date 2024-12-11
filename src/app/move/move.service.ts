import { Injectable } from '@angular/core';
import { GameState } from '../board/model/game-state.model';
import { Store } from '@ngrx/store';
import { selectCurrentPlayer } from '../store/gamestate.selectors';
import { Subscription, take } from 'rxjs';
import { GameStateActions } from '../store/gamestate.actions';

@Injectable({
  providedIn: 'root'
})
export class MoveService {
  storeSubscription?: Subscription
  constructor(private store: Store<{gameState: GameState}>) {

  }

  move() {
    let currentPlayer;
    this.store.select(selectCurrentPlayer).pipe(take(1)).subscribe(cp => currentPlayer = cp);
  }

  incrementPlayerPosition(player: number, fields: number): void{
    for(let i = 0; i < fields; i++) {
        setTimeout(() => this.store.dispatch(GameStateActions.incrementPlayerPosition({player})), 200*i)
    }
}

  decrementPlayerPosition(player: number, fields: number): void{
    for(let i = 0; i < fields; i++) {
        setTimeout(() => this.store.dispatch(GameStateActions.decrementPlayerPosition({player})), 200*i)
    }
  }

}
