import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GraphSearchService {
  private graphSearchSource = new Subject<string>();
  private equationSubjectSource = new Subject<any>();

  graphSearch$ = this.graphSearchSource.asObservable();
  equationSubjectSource$ = this.equationSubjectSource.asObservable();

  constructor() { }

  newSearch(subjectId: string) {
    this.graphSearchSource.next(subjectId);
  }

  newEquationSubject(subject: any) {
    this.equationSubjectSource.next(subject);
  }
}
