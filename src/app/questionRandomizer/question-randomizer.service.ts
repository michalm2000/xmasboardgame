import { Injectable, OnInit } from '@angular/core';
import { level7, level8} from './questions'
 
@Injectable({
  providedIn: 'root'
})
export class QuestionRandomizerService {

  questions = level7.map(questionsForPoints => questionsForPoints.map(q => ({question: q, wasUsed: false})))

  constructor() {
  }

  getARandomQuestion(points: number) {
    const filteredQuestionArray = this.questions[points - 1].filter(q => !q.wasUsed);
    if (filteredQuestionArray.length === 0) [
      filteredQuestionArray.map(q => ({question: q.question, wasUsed: false}))
    ]
    const question = filteredQuestionArray[Math.floor(Math.random() * filteredQuestionArray.length)]
    question.wasUsed = true;
    console.log(question, this.questions)
    return question.question;
   }

  setLevel(level: 7 | 8 ) {
    switch(level) {
      case 7: 
        this.questions = level7.map(questionsForPoints => questionsForPoints.map(q => ({question: q + " level 7", wasUsed: false})));
        break;
      case 8:
        this.questions = level8.map(questionsForPoints => questionsForPoints.map(q => ({question: q, wasUsed: false})));
    }
   }

}


