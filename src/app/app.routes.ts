import { RouterModule, Routes } from '@angular/router';
import { QuizzFilmesComponent } from './components/quizz-filmes/quizz-filmes.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { QuizzJogosComponent } from './components/quizz-jogos/quizz-jogos.component';
import { QuizzMusicaComponent } from './components/quizz-musica/quizz-musica.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filmes', component: QuizzFilmesComponent},
  {path: 'jogos', component: QuizzJogosComponent},
  {path: 'musica', component: QuizzMusicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
