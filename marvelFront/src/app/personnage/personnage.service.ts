import { Injectable } from '@angular/core';
import { Personnage } from './personnage';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // RxJS 6, à utiliser
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PersonnageService {
  constructor(private http: HttpClient) { }

  private personnageUrl = 'http://localhost:8080/personnages';

  searchPersonnages(term: string): Observable<Personnage[]>{
    if (!term.trim()){
        return of([]);
    }
    return this.http.get<Personnage[]>( `${this.personnageUrl}/?name=${term}`).pipe(tap(_ => this.log(`found personnages matching "${term}"`)),
        catchError(this.handleError<Personnage[]>('searchPersonnages', []))
    );

}

  // Retourne tous les personnages
  getPersonnages(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(this.personnageUrl).pipe(
      tap(_ => this.log(`fetched personnages`)),
      catchError(this.handleError(`getPersonnages`, []))
    )
  }
  // Retourne un personnage avec l'id passé en paramètre
  
  getPersonnage(id: number): Observable<Personnage> {
    const url = `${this.personnageUrl}/${id}`;
    return this.http.get<Personnage>(url).pipe(
        tap(_ => this.log(`fetched personnage id=${id}`)),
        catchError(this.handleError<Personnage>(`getPersonnage id=${id}`))
        );
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