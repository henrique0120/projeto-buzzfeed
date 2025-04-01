import { Component, OnInit } from '@angular/core';

import quizz_musica from "../../../assets/data/quizz_musica.json"
import quizz_jogos from "../../../assets/data/quizz_jogos.json"
import quizz_filmes from "../../../assets/data/quizz_filmes.json"

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  title1:string = ""
  title2:string = ""
  title3:string = ""

  constructor(private readonly router: Router){}

  ngOnInit(): void {

      this.title1 = quizz_musica.title;
      this.title2 = quizz_jogos.title;
      this.title3 = quizz_filmes.title;

  }

  onNavigate(path: string){
    this.router.navigate([path])
  }


}
