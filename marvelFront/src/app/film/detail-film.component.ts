import { FilmService } from './film.service';
import { Film } from './film';
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'detail-film',
    templateUrl: './detail-film.component.html'
})
export class DetailFilmComponent implements OnInit {

    films!: Film[];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
}
getFilms(): void {
    this.filmService.getFilms()
    .subscribe(films => this.films = films );
    }
    
    
        
        
    // constructor ( private route: ActivatedRoute,
    //               private router : Router,
    //               private filmService: FilmService )  {}

    //               ngOnInit() : void { 
    //                   let id = +this.route.snapshot.paramMap.get('id')! ;
    //                   this.filmService.getFilms(id).subscribe(film => this.film = film);
    //               }

    //               goBack(): void {
    //                 this.router.navigate(['/films']);
                //}
            



}