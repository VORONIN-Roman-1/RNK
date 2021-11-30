
import { Injectable } from '@angular/core';
import { Film } from './film';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // RxJS 6, à utiliser
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class FilmService {
  
  constructor(private http: HttpClient) { }

  private filmUrl = 'http://localhost:8080/films';


  searchFilms(term: string): Observable<Film[]>{
    if (!term.trim()){
        return of([]);
    }
    return this.http.get<Film[]>( `${this.filmUrl}/?title=${term}`).pipe(tap(_ => this.log(`found films matching "${term}"`)),
        catchError(this.handleError<Film[]>('searchFilms', []))
    );

}

  // Retourne tous les films
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmUrl).pipe(
      tap(_ => this.log(`fetched films`)),
      catchError(this.handleError(`getFilms`, []))
    )
  }

   getFilm(id: number): Observable <Film> {
     const url = `${this.filmUrl}/${id}`;
     return this.http.get<Film>(url).pipe(tap(_=> this.log(`fetched Film id=${id}`)),
     catchError(this.handleError<Film>(`this.getFilms id=${id}`)));
 }

  private log(log: string) {
    console.info(log);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}