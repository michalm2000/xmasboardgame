import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';

export interface DialogData {
  currentPlayer: number
  currentDiceThrow: number
  question: string
}

@Component({
  selector: 'app-question-dialog',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions],
  templateUrl: './question-dialog.component.html',
  styleUrl: './question-dialog.component.scss'
})
export class QuestionDialogComponent {
    readonly data = inject<DialogData>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<QuestionDialogComponent>);
    
    constructor() {
      this.dialogRef.disableClose = true;
    }

    onButtonPress(questionAnswered: boolean) {
      this.dialogRef.close({questionAnswered})
    }

}
