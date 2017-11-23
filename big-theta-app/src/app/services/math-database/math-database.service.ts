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

  private databaseURL = 'https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/';  // URL to web api


  constructor( private http: HttpClient ) {

  }

  fetchRankedEquations(): Observable<LatexEquation[]> {

    this.log( `fetching LatexEquation by rank` );

    const url = `${this.databaseURL}/?rank=true`;

    return this.http.get<LatexEquation[]>( url )
      .pipe( tap( latexEquations => this.log( 'fetched ranked equations:\n' + latexEquations ) ),
        catchError( this.handleError( 'fetchRankedEquations', [] ) ) );
  }

  fetchSubjectEquations( subject_id: number ): Observable<LatexEquation[]> {

    this.log( 'fetching LatexEquations by subject id' );

    const url = `${this.databaseURL}/equations/subject/${subject_id}`;

    // .concatAll()
    // .map(res => new LatexEquation( res[ this.equation_prop ], res[ this.id_prop ] ))

    return this.http.get<LatexEquation[]>( url )
      .pipe( tap( latexEquations => this.log( 'fetched equations by subject:\n' + latexEquations ) ),
        catchError( this.handleError( 'fetchSubjectEquations', [] ) ) );

  }


  /* GET LatexEquations whose name contains search term */
  searchLatexEquations( term: string ): Observable<LatexEquation[]> {
    if ( !term.trim() ) {
      // if not search term, return empty LatexEquation array.
      return of( [] );
    }
    return this.http.get<LatexEquation[]>( this.databaseURL ).pipe(
      tap( _ => this.log( `found LatexEquationes matching "${term}"` ) ),
      catchError( this.handleError<LatexEquation[]>( 'searchLatexEquations', [] ) )
    );
  }


  private log( message: string ) {
    console.log( 'MathDatabaseService: ' + message );
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
