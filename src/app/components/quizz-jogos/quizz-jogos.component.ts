import { Component, OnInit } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import quizz_jogos from "../../../assets/data/quizz_jogos.json"
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-jogos',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './quizz-jogos.component.html',
  styleUrl: './quizz-jogos.component.css'
})
export class QuizzJogosComponent implements OnInit{

  questions:any
  questionSelected:any
  isChecked:any

  answers:string[] = []
  answerSelected:string =""

  optionsSelected:number = 0
  questionIndex:number =0
  questionMaxIndex:number=0

  finished:boolean = false

  constructor(){}

  checkedOptions: Set<string> = new Set();

  ngOnInit(): void {
    if(quizz_jogos){
      this.finished = false

      this.questionSelected = 0
      this.questions = quizz_jogos.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex)
      console.log(this.questionMaxIndex)
    }

  }

  playerChoose(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.optionsSelected++;
    } else {
      this.optionsSelected--;
    }

    console.log(this.optionsSelected);
  }

  async nextStep(){
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
        this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.checkResult(this.optionsSelected)
      this.finished = true
    }
  }


  checkResult(answers:number){
    if(answers >= 30){
      this.answerSelected = quizz_jogos.results.range_30_more
    }else if(answers >= 20 && answers <= 29){
      this.answerSelected = quizz_jogos.results.range_20_29
    }else if(answers >= 10 && answers <= 19){
      this.answerSelected = quizz_jogos.results.range_10_19
    }else if(answers >= 0 && answers <= 9){
      this.answerSelected = quizz_jogos.results.range_0_9
    }


  }
}
