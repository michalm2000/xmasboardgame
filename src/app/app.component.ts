import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionRandomizerService } from './questionRandomizer/question-randomizer.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [QuestionRandomizerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xmas-board-game';
}
