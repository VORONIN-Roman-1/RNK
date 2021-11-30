
import { DetailFilmComponent } from './detail-film.component';
import { FilmService } from './film.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilmRoutingModule } from './film-routing.module';
import { ListFilmsComponent } from './list-films.component';
import { FilmSearchComponent } from './search-film.component';

@NgModule({

    imports: [
        CommonModule,
        FilmRoutingModule
    ],
    declarations: [
        ListFilmsComponent,
        DetailFilmComponent,
        FilmSearchComponent

    ],
    providers: [
        FilmService
    ]
})

export class FilmModule { }