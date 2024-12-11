import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FieldComponent } from "../field/field.component";
import { Store } from "@ngrx/store";
import { selectGameState } from "../store/gamestate.selectors";
import { map } from "rxjs";
import { GameState } from "./model/game-state.model";
import { MoveService } from "../move/move.service";
import { ControlPanelComponent } from "../control-panel/control-panel.component";

@Component({
    selector: "board",
    templateUrl: "./board.component.html",
    imports: [CommonModule, FieldComponent, ControlPanelComponent],
    providers: [MoveService],
    styleUrl: "./board.component.scss"
})
export class BoardComponent implements OnInit {
    gameState$ = this.store.select(selectGameState).pipe(map(state => state))
    @Input("fieldNumber")
    fieldNumber: number = 0;
    constructor(private route: ActivatedRoute, private store: Store<{"gameState": GameState}>, private move: MoveService){
        store.select(selectGameState).subscribe(value => console.log(value))
    }

    ngOnInit() : void {
        this.fieldNumber = parseInt(this.route.snapshot.queryParamMap.get("fields")?? "30");
    }
    
    incrementPlayerPositionBy6(): void{
        this.move.incrementPlayerPosition(0, 6)
    }

    decrementPlayerPositionBy6(): void{
        this.move.decrementPlayerPosition(0 ,6)
    }
    
}