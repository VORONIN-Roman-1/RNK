import { PersonnageService } from './personnage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Personnage } from './personnage'; 

@Component({
    selector: 'personnage-search',
    templateUrl: './search-personnage.component.html'
})
export class PersonnageSearchComponent implements OnInit {

    private searchTerms = new Subject<string>();

    personnages$!: Observable<Personnage[]>;

    constructor(private personnageService: PersonnageService, private router: Router) { }

    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.personnages$ = this.searchTerms.pipe(
            // attendre 300ms de pause entre chaque requête
            debounceTime(300),
            // ignorer la recherche en cours si c'est la même que la précédente
            distinctUntilChanged(),
            // on retourne la liste des résultats correpsondant aux termes de la recherche
            switchMap((term: string) => this.personnageService.searchPersonnages(term)),);

    }
    gotoDetail(personnage: Personnage): void {
        let link = ['/personnage', personnage.id];
        this.router.navigate(link);
    }
}