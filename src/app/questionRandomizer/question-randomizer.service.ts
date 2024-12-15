import { Injectable, OnInit } from '@angular/core';
import { questions as rawQuestions } from './questions'
 
@Injectable({
  providedIn: 'root'
})
export class QuestionRandomizerService {
  
  questions = rawQuestions.map(questionsForPoints => questionsForPoints.map(q => ({question: q, wasUsed: false})))

  constructor() {
  }

  getARandomQuestion(points: number) {
    const filteredQuestionArray = this.questions[points - 1].filter(q => !q.wasUsed);
    const question = filteredQuestionArray[Math.floor(Math.random() * filteredQuestionArray.length)]
    question.wasUsed = true;
    console.log(question, this.questions)
    return question.question;
   }




}


