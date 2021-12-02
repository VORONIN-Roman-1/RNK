import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { FilmService } from './film.service'; 
import { Film } from './film'; 

@Component({
    selector: 'film-search',
    templateUrl: './search-film.component.html'
})
export class FilmSearchComponent implements OnInit {

    private searchTerms = new Subject<string>();

    films$!: Observable<Film[]>;

    constructor(private filmService: FilmService, private router: Router) { }

    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.films$ = this.searchTerms.pipe(
            // attendre 300ms de pause entre chaque requête
            debounceTime(300),
            // ignorer la recherche en cours si c'est la même que la précédente
            distinctUntilChanged(),
            // on retourne la liste des résultats correpsondant aux termes de la recherche
            switchMap((term: string) => this.filmService.searchFilms(term)),);

    }
    gotoDetail(film: Film): void {
        let link = ['/film', film.id];
        this.router.navigate(link);
    }
}