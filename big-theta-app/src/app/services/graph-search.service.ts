import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GraphSearchService {
  private graphSearchSource = new Subject<string>();

  graphSearch$ = this.graphSearchSource.asObservable();

  constructor() { }

  newSearch(subjectId: string) {
    this.graphSearchSource.next(subjectId);
  }
}
