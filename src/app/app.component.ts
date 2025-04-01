import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import quizz_musica from "../assets/data/quizz_musica.json"
import quizz_jogos from "../assets/data/quizz_jogos.json"
import quizz_filmes from "../assets/data/quizz_filmes.json"


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  text_header = '';

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateTitle(event.urlAfterRedirects);
      }
    });
  }

  updateTitle(event: string) {
    switch (true) {
      case event.includes('filmes'):
        this.text_header = quizz_filmes.title;
        break;

      case event.includes('jogos'):
        this.text_header = quizz_jogos.title;
        break;

      case event.includes('musica'):
        this.text_header = quizz_musica.title;
        break;
      default:
        this.text_header = 'Escolha um quizz!';
        break;
    }
  }
}
