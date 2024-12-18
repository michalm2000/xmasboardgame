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

export interface FinishDialogData {
  winningTeamName: string;
  losingTeamNames: string[];
}

@Component({
  selector: 'app-finish-dialog',
  imports: [MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions],
  templateUrl: './finish-dialog.component.html',
  styleUrl: './finish-dialog.component.scss'
})
export class FinishDialogComponent {
readonly data = inject<FinishDialogData>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<FinishDialogComponent>);
    
    constructor() {
      this.dialogRef.disableClose = true;
    }

    onButtonPress(questionAnswered: boolean) {
      this.dialogRef.close({questionAnswered})
    }
}
