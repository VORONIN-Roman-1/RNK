import { AfterViewInit, Component, OnInit } from "@angular/core";
//  import * as M from "../../assets/materialize/js/materialize.min.js";
import { ActivatedRoute, Router } from "@angular/router";
import { Film } from "./film";
import { FilmService } from "./film.service";
import * as M from 'materialize-css';


@Component({
    selector: 'list-films',
    templateUrl: './list-films.component.html'
    //styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit, AfterViewInit {
    condition = true;
    films!: Film[];
    options = { fullWidth: false };


    constructor(
        private route: ActivatedRoute,
        private router: Router, private filmService: FilmService) { }

    ngOnInit(): void {
        this.getFilms();
    }
    ngAfterViewInit() {
    }

    getCarousel() {
        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems, this.options);
         setTimeout(() => {
            this.condition = false;
        }, 0);
    }

    getFilms(): void {
        this.filmService.getFilms().subscribe(films => {
            this.films = films;
        });
    }

    selectFilm (film : Film){
        let link = [ '/film', film.id];

        this.router.navigate(link);
    }
}