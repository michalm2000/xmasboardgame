import { Component } from '@angular/core';
import { GameState } from '../board/model/game-state.model';
import { Store } from '@ngrx/store';
import { selectCurrentPlayer } from '../store/gamestate.selectors';
import { AsyncPipe, NgIf } from '@angular/common';
import { mapPlayerNoToColor as colorMap } from "../utils/game.utils"
import { map } from 'rxjs';

@Component({
  selector: 'app-control-panel',
  imports: [AsyncPipe, NgIf],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
    currentPlayer$ = this.store.select(selectCurrentPlayer).pipe(
      map(curr => {
        console.log("curr", curr);
        return curr + 1;
      })
    );

    constructor(private store: Store<{gameState: GameState}>) {

    }

    mapPlayerNoToColor(player: number| null) {
      colorMap(player ?? 0);
    }
}
