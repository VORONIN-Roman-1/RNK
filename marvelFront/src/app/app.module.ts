import { PersonnageModule } from './personnage/personnage.module';
import { FilmModule } from './film/film.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FilmService } from './film/film.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FilmModule,
    PersonnageModule
  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
