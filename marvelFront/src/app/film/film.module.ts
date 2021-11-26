import { DetailFilmComponent } from './detail-film.component';
import { FilmService } from './film.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilmRoutingModule } from './film-routing.module';


@NgModule({

    imports: [
        CommonModule,
        FilmRoutingModule
    ],
    declarations: [
        DetailFilmComponent

    ],
    providers: [FilmService]
})

export class FilmModule { }