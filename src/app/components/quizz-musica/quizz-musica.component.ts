import { Component, OnInit } from '@angular/core';
import quizz_musica from "../../../assets/data/quizz_musica.json"
import {NgFor, NgIf} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-musica',
  imports: [NgFor, NgIf],
  templateUrl: './quizz-musica.component.html',
  styleUrl: './quizz-musica.component.css'
})
export class QuizzMusicaComponent implements OnInit{

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string =""

  questionIndex:number =0
  questionMaxIndex:number=0

  finished:boolean = false

  constructor() { }


  ngOnInit(): void {
    if(quizz_musica){
      this.finished = false

      this.questions = quizz_musica.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex)
      console.log(this.questionMaxIndex)
    }

  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()

  }

  async nextStep(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){
        this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz_musica.results[finalAnswer as keyof typeof quizz_musica.results ]
    }
  }

  async checkResult(anwsers:string[]){

    const result = anwsers.reduce((previous, current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })

    return result
  }

}
