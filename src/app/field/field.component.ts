import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameState } from "../board/model/game-state.model";
import { Store } from '@ngrx/store';
import { selectGameState } from '../store/gamestate.selectors';
import { map, Subscription } from 'rxjs';
import { start } from 'node:repl';

@Component({
  selector: 'field',
  imports: [],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent implements OnInit, OnDestroy {
  @Input() fieldNo = 0
  @Input() type: "normal" | "chance" | "finish" = "normal"
  visiblePlayersSubscription?: Subscription;
  visiblePlayers: number[] = []
  visiblePlayers$ = this.store.select(selectGameState).pipe(map(gameState => {
    const visible: number[] = []
    gameState.forEach((field, index) => {
      if (field === this.fieldNo) {
        visible.push(index)
      }
    })
    return visible;
  }))

  constructor(private store: Store<{"gameState": GameState}>) {
  }

  ngOnInit(): void {
    this.visiblePlayersSubscription = this.visiblePlayers$.subscribe(vp => this.visiblePlayers = vp) 
  }

  ngOnDestroy(): void {
    this.visiblePlayersSubscription!.unsubscribe();
  }

  calculateNumber() {
    if (this.type === "finish") {
      return "Meta"
    }
    if (this.fieldNo === 0) {
      return "Start";
    }
    return this.fieldNo.toString();
  }
  
}
