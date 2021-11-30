import { Component, OnInit } from "@angular/core";
//  import * as M from "../../assets/materialize/js/materialize.min.js";
import { ActivatedRoute, Router } from "@angular/router";
import { Film } from "./film";
import { FilmService } from "./film.service";


@Component ({
    selector: 'list-films',
    templateUrl: './list-films.component.html'
    //styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

    films!: Film[];

    constructor( 
        private route: ActivatedRoute,
        private router : Router,private filmService: FilmService) { }
  
   
    ngOnInit() : void { 
      this.getFilms();
    }

    getFilms(): void  {
        this.filmService.getFilms().subscribe( films  => this.films= films);
    }

    selectFilm (film : Film){
        alert("vous avez cliqué sur le film : "+ film.title)
        let link = [ '/film', film.id];
        this.router.navigate(link);
      }
}