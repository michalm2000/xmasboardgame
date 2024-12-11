import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FieldComponent } from "../field/field.component";
import { Store } from "@ngrx/store";
import { selectGameState } from "../store/gamestate.selectors";
import { map } from "rxjs";
import { GameState } from "./model/game-state.model";
import { GameStateActions } from "../store/gamestate.actions";

@Component({
    selector: "board",
    templateUrl: "./board.component.html",
    imports: [CommonModule, FieldComponent],
    styleUrl: "./board.component.scss"
})
export class BoardComponent implements OnInit {
    gameState$ = this.store.select(selectGameState).pipe(map(state => state))

    @Input("fieldNumber")
    fieldNumber: number = 0;
    constructor(private route: ActivatedRoute, private store: Store<{"gameState": GameState}>){
        store.select(selectGameState).subscribe(value => console.log(value))
    }

    ngOnInit() : void {
        this.fieldNumber = parseInt(this.route.snapshot.queryParamMap.get("fields")?? "30");
    }

    incrementPlayerPositionBy6(): void{
        for(let i = 0; i < 6; i++) {
            setTimeout(() => this.store.dispatch(GameStateActions.incrementPlayerPosition({player: 0})), 200*i)
        }
    }

    decrementPlayerPositionBy6(): void{
        for(let i = 0; i < 6; i++) {
            setTimeout(() => this.store.dispatch(GameStateActions.decrementPlayerPosition({player: 0})), 200*i)
        }
    }
    
}