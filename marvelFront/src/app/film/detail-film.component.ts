import { Personnage } from './../personnage/personnage';
import { FilmService } from './film.service';
import { Film } from './film';
import { Component, Input, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'detail-film',
    templateUrl: './detail-film.component.html'
})
export class DetailFilmComponent implements OnInit {

    film!: Film;
  constructor( 
      private route: ActivatedRoute,
      private router : Router, private filmService: FilmService) { }

 
  ngOnInit() : void { 
    let id = +this.route.snapshot.paramMap.get('id')! ;
    this.filmService.getFilm(id).subscribe(film => this.film = film);
}

goBack(): void {
    this.router.navigate(['/films']);
}
update(film: Film) {
    this.filmService.updateFilm(film).subscribe(() => this.goBack());
}

delete(film: Film)  {
    this.filmService.deleteFilm(film).subscribe(_ => this.goBack());
    }

}