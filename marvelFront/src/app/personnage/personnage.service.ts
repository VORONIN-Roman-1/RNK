import { Injectable } from '@angular/core';
import { Personnage } from './personnage';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // RxJS 6, à utiliser
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PersonnageService {
  constructor(private http: HttpClient) { }

  private personnageUrl = 'http://localhost:8080/personnages';

  // Retourne tous les personnages
  getFilms(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(this.personnageUrl).pipe(
      tap(_ => this.log(`fetched films`)),
      catchError(this.handleError(`getFilms`, []))
    )
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