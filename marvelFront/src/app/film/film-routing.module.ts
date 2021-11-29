
import { DetailFilmComponent } from './detail-film.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ListFilmsComponent } from './list-films.component';

//Les routes du module Employe
const filmsRoutes: Routes = [

    { path: 'films', component: ListFilmsComponent  },
    { path: 'film/:id', component: DetailFilmComponent },
  
];

@NgModule ({
    imports: [
        RouterModule.forChild(filmsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FilmRoutingModule { }