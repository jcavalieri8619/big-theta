import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, map, tap, concatAll} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

import {Equation} from '../../models/equation';
import {SubjectTree} from "../../models/subject-tree";
import {Subject} from "../../models/subject";
import {Constants} from "../../constants";



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

interface MathDatabseHttpResponse {
  statusCode: string;
  body: any;
  headers: HttpHeaders;

}

@Injectable()
export class MathDatabaseService {


  private databaseURL = Constants.databaseUrl;



  constructor( private http: HttpClient ) {

  }

  fetchRankedEquations(): Observable<Equation[]> {


    this.log( `fetching LatexEquation by rank` );

    const url = `${this.databaseURL}/equations/top`;

    return this.http.get<HttpResponse<Equation[]>>(url)
      .map(value => value.body)
      .pipe(catchError(this.handleError('fetchRankedEquations', [])));
  }

  fetchSubjectEquations(subject_id: string): Observable<Equation[]> {

    this.log( 'fetching LatexEquations by subjectID: ' + subject_id );

    const url = `${this.databaseURL}/equations/subject/${subject_id}`;

    return this.http.get<HttpResponse<Equation[]>>(url)
      .map(value => value.body)
      .pipe(catchError(this.handleError('fetchSubjectEquations', [])));

  }

  fetchSubjectTree(tree_id: string): Observable<SubjectTree> {

    const url = `${this.databaseURL}/subject/tree/${tree_id}`;

    return this.http.get<HttpResponse<SubjectTree>>(url)
      .map(value => value.body)
      .pipe(catchError(this.handleError('fetchSubjectEquations', new SubjectTree())));

  }


  searchSubjects(term: string): Observable<Subject[]> {
    if (!term.trim()) {
      // if not search term, return empty LatexEquation array.
      return of([]);
    }
    const url = `${this.databaseURL}/subject/tree/${term}`;


    return this.http.get<HttpResponse<Subject[]>>(url)
      .map(value => value.body)
      .pipe(catchError(this.handleError<Subject[]>('searchSubjects', [])));
  }



  /**
   * For future use--we've decided not to search by equations in current version
   * @param {string} term
   * @returns {Observable<LatexEquation[]>}
   */
  searchEquations(term: string): Observable<Equation[]> {
    if ( !term.trim() ) {
      // if not search term, return empty LatexEquation array.
      return of( [] );
    }

    const url = `${this.databaseURL}/equations/search/${term}`;

    return this.http.get<HttpResponse<Equation[]>>(url)
      .map(value => value.body)
      .pipe(catchError(this.handleError<Equation[]>('searchEquations', [])));
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
