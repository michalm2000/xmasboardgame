import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FieldComponent } from "../field/field.component";
import { Store } from "@ngrx/store";
import { selectCurrentDiceThrow, selectCurrentPlayer, selectGameState } from "../store/gamestate.selectors";
import { map, Subscription, take } from "rxjs";
import { GameState } from "./model/game-state.model";
import { MoveService } from "../move/move.service";
import { ControlPanelComponent } from "../control-panel/control-panel.component";
import { ScoreboardComponent } from "../scoreboard/scoreboard.component";
import { QuestionDialogComponent } from "../question-dialog/question-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { GameStateActions } from "../store/gamestate.actions";
import { QuestionRandomizerService } from "../questionRandomizer/question-randomizer.service";

@Component({
    selector: "board",
    templateUrl: "./board.component.html",
    imports: [CommonModule, FieldComponent, ControlPanelComponent, ScoreboardComponent],
    providers: [MatDialog, MoveService],
    styleUrl: "./board.component.scss"
})
export class BoardComponent implements OnInit {
    gameState$ = this.store.select(selectGameState).pipe(map(state => state))
    
    currentDiceThrowSub: Subscription | null = null
    
    playerNumber: number = 0;

    constructor(private route: ActivatedRoute,
                private store: Store<{"gameState": GameState}>,
                private dialog: MatDialog,
                private moveService: MoveService,
                private questionRandomizer: QuestionRandomizerService){
    }

    ngOnInit() : void {
        this.playerNumber = parseInt(this.route.snapshot.queryParamMap.get("players")?? "3");
        if (this.playerNumber < 2 || this.playerNumber > 4 ) this.playerNumber = 3;
        this.store.dispatch(GameStateActions.setInitialState({players: this.playerNumber}))
        this.currentDiceThrowSub = this.store.select(selectCurrentDiceThrow).subscribe(currentDice => {
            this.openDialog(currentDice)
        });
    }

    openDialog(currentDice?: number) {
        if (currentDice) {
            let currentPlayer!: number;
            this.store.select(selectCurrentPlayer).pipe(take(1)).subscribe(cp => currentPlayer = cp);
            const question = this.questionRandomizer.getARandomQuestion(currentDice)

            const dialogRef = this.dialog.open(QuestionDialogComponent, {
                data: {
                    currentPlayer,
                    currentDiceThrow: currentDice,
                    question
                }
            })
            dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
                if (result) {
                    if (result.questionAnswered) {
                        this.moveService.incrementPlayerPosition(currentPlayer, currentDice)
                    }
                    this.store.dispatch(GameStateActions.clearCurrentDiceThrow())
                    this.store.dispatch(GameStateActions.nextPlayer())
                }
            })
        }
    }
    
    determineFieldType(row: number, field:number) {
        if (row*10 + field === 6*10-1) {
            return "finish"
        }
        if ((row)*10 + field === 0) return "normal"
        if ((row*6 + field ) % 5 === 0) {
            return "chance"
        }
        return "normal"
    }
    
}