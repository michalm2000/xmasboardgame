import { Component, output } from '@angular/core';
import { GameState } from '../board/model/game-state.model';
import { Store } from '@ngrx/store';
import { selectCurrentPlayer, selectLoading } from '../store/gamestate.selectors';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { mapPlayerNoToColor as colorMap, mapPlayerNoToColorPolish as colorMapPolish } from "../utils/game.utils"
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule} from '@angular/material/button'
import { FormControl, Validators, ReactiveFormsModule, FormGroup, FormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { GameStateActions } from '../store/gamestate.actions';
import { QuestionRandomizerService } from '../questionRandomizer/question-randomizer.service';


@Component({
  selector: 'app-control-panel',
  imports: [AsyncPipe, NgIf, MatProgressSpinnerModule, MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
    currentPlayer$ = this.store.select(selectCurrentPlayer);

    isLoading$ = this.store.select(selectLoading);
    moveForm = new FormGroup({ 
      diceThrowResult: new FormControl<number | undefined>(undefined, [Validators.required, this.diceThrowResultValidator])
    })

    diceThrowResultValidator(value: AbstractControl) : ValidationErrors | null {
      return value.value > 0 && value.value < 7 ? null : { invalidNumber: true};
    }

    constructor(private store: Store<{gameState: GameState}>, private questionRandomizer: QuestionRandomizerService) {

    }

    initiateMove() {
      if (!this.moveForm.valid) {
        return;
      }
      
      const diceThrowResult = this.moveForm.value.diceThrowResult;
      if (diceThrowResult) {
          this.store.dispatch(GameStateActions.setCurrentDiceThrow({diceThrow: diceThrowResult}))
      }

      this.moveForm.reset();
      this.moveForm.markAsUntouched()
    }

    mapPlayerNoToColor(player: number | null) {
      return colorMap(player ?? 0);
    }

    mapPlayerNoToColorPolish(player: number | null) {
      return colorMapPolish(player ?? 0);
    }
    
    get diceThrowResult() {
        return this.moveForm.get('diceThrowResult')
    }
}
