import { Injectable } from '@angular/core';
import { GameState } from '../board/model/game-state.model';
import { Store } from '@ngrx/store';
import { GameStateActions } from '../store/gamestate.actions';

@Injectable({
  providedIn: 'root'
})
export class MoveService {
  constructor(private store: Store<{gameState: GameState}>) {

  }

  incrementPlayerPosition(player: number, fields: number): void{
    this.store.dispatch(GameStateActions.setLoading({loading: true}))
    for(let i = 0; i < fields; i++) {
        setTimeout(() => this.store.dispatch(GameStateActions.incrementPlayerPosition({player})), 200*i)
        if (i === fields - 1) {
          setTimeout(() => this.store.dispatch(GameStateActions.setLoading({loading: false})), 200*i)
        }
    }
}

  decrementPlayerPosition(player: number, fields: number): void{
    for(let i = 0; i < fields; i++) {
        setTimeout(() => this.store.dispatch(GameStateActions.decrementPlayerPosition({player})), 200*i)
    }
  }

}
