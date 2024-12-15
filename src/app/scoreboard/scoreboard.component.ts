import { Component } from '@angular/core';
import { GameState } from '../board/model/game-state.model';
import { Store } from '@ngrx/store';
import { selectCurrentPlayer, selectGameState } from '../store/gamestate.selectors';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-scoreboard',
  imports: [AsyncPipe, NgIf],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {

  state$ = this.store.select(selectGameState);
  currentPlayer$ = this.store.select(selectCurrentPlayer);

  constructor(private store: Store<{"gameState": GameState}>){

  }

}
