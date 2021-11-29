
import { DetailFilmComponent } from './detail-film.component';
import { FilmService } from './film.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilmRoutingModule } from './film-routing.module';
import { ListFilmsComponent } from './list-films.component';


@NgModule({

    imports: [
        CommonModule,
        FilmRoutingModule
    ],
    declarations: [
        ListFilmsComponent,
        DetailFilmComponent

    ],
    providers: [FilmService]
})

export class FilmModule { }