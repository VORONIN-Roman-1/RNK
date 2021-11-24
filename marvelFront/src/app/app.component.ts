import { FilmService } from './film/film.service';
import { Component } from '@angular/core';
import { Film } from './film/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvelFront';
  films!: Film[];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
}
getFilms(): void {
    this.filmService.getFilms()
    .subscribe(films => this.films = films );
    }
    
    
}
