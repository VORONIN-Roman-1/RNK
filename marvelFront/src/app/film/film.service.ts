
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
  updateFilm(film: Film): Observable<Film> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Film>(this.filmUrl, film, httpOptions).pipe(
      tap(_ => this.log(`updated film id=${film.id}`)),
      catchError(this.handleError<any>('updatedFilm'))
    );
  }
  deleteFilm(film: Film): Observable<Film> {
    const url = `${this.filmUrl}/${film.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<Film>(url, httpOptions).pipe
      (tap(_ => this.log(`delete film id=${film.id}`)),
        catchError(this.handleError<Film>('deleteFilm'))
      )
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