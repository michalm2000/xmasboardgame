import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule} from '@angular/material/button'
import { FormControl, Validators, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  imports: [MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule, FormsModule, MatSliderModule ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  gameForm = new FormGroup({ 
    fieldNumber: new FormControl<number>(0, [Validators.required]),
    playerNumber: new FormControl<number>(0, [Validators.required])
  })


  constructor(
    private router: Router
  ) {

  }

  onSubmit() : void {
    this.router.navigate(["/game"], {
      queryParams: {fields: this.gameForm.value.fieldNumber, players: this.gameForm.value.playerNumber}
    })
  }


}
