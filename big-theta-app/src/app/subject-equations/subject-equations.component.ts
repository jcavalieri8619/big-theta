import { Component, OnInit } from '@angular/core';
import { GraphSearchService } from 'app/services/graph-search.service';
import { MathDatabaseService } from 'app/services/math-database/math-database.service';
import {Equation} from 'app/models/equation';

@Component({
  selector: 'app-subject-equations',
  templateUrl: './subject-equations.component.html',
  styleUrls: ['./subject-equations.component.css']
})
export class SubjectEquationsComponent implements OnInit {
  equations: Equation[] = [];
  chosenSubject: string = "";
  chosenSubjectUrl: string = "";

  constructor(private graphSearchService: GraphSearchService, private mathDatabaseService: MathDatabaseService) {
    graphSearchService.equationSubjectSource$.subscribe(subject => {
      this.chosenSubject = subject.title;
      this.chosenSubjectUrl = subject.url;
      mathDatabaseService.fetchSubjectEquations(subject.id).subscribe(equations => {
        this.equations = equations;
      })
    })
  }

  ngOnInit() {
  }

}
