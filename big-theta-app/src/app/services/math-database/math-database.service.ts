import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap, concatAll} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

import {LatexEquation} from '../../latex-equation';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable()
export class MathDatabaseService {

  private latexEquationsUrl = 'api/latexEquations';  // URL to web api

  private equation_prop = 'equation';
  private id_prop = 'id';


  constructor( private http: HttpClient ) {

  }

  getLatexEquationsByRank(): Observable<LatexEquation[]> {

    this.log( `LatexEquationService: fetched LatexEquation by rank` );
    const url = `${this.latexEquationsUrl}/?rank=true`;

    return this.http.get<LatexEquation[]>( url )
      .pipe( tap( latexEquation => this.log( 'fetched LatexEquations' + latexEquation ) ),
        catchError( this.handleError( 'getLatexEquationes', [] ) ) );
  }

  getLatexEquationsBySubject( subject: string ): Observable<LatexEquation[]> {
    const url = `${this.latexEquationsUrl}/?subject=${subject}`;
    this.log( 'LatexEquationService: feteched LatexEquations' );

    // .concatAll()
    // .map(res => new LatexEquation( res[ this.equation_prop ], res[ this.id_prop ] ))

    return this.http.get<LatexEquation[]>( url )
      .pipe( tap( latexEquation => this.log( 'fetched LatexEquations' + latexEquation ) ),
        catchError( this.handleError( 'getLatexEquationes', [] ) ) );

  }


  /* GET LatexEquations whose name contains search term */
  searchLatexEquations( term: string ): Observable<LatexEquation[]> {
    if ( !term.trim() ) {
      // if not search term, return empty LatexEquation array.
      return of( [] );
    }
    return this.http.get<LatexEquation[]>( `api/latexEquations/?equation=${term}` ).pipe(
      tap( _ => this.log( `found LatexEquationes matching "${term}"` ) ),
      catchError( this.handleError<LatexEquation[]>( 'searchLatexEquations', [] ) )
    );
  }


  private log( message: string ) {
    console.log( 'LatexEquationService: ' + message );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>( operation = 'operation', result?: T ) {
    return ( error: any ): Observable<T> => {


      // TODO: better job of transforming error for user consumption
      this.log( `${operation} failed: ${error.message}` );

      // Let the app keep running by returning an empty result.
      return of( result as T );
    };
  }

}
