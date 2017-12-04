import { Component, OnInit } from '@angular/core';
import { GraphSearchService } from 'app/services/graph-search.service';
import { MathDatabaseService } from 'app/services/math-database/math-database.service';
import { LatexEquation } from 'app/latex-equation';

@Component({
  selector: 'app-subject-equations',
  templateUrl: './subject-equations.component.html',
  styleUrls: ['./subject-equations.component.css']
})
export class SubjectEquationsComponent implements OnInit {
  equations: LatexEquation[] = [];

  constructor(private graphSearchService: GraphSearchService, private mathDatabaseService: MathDatabaseService) {
    graphSearchService.equationSubjectSource$.subscribe(subjectId => {
      mathDatabaseService.fetchSubjectEquations(subjectId).subscribe(equations => {
        this.equations = equations;
      })
    })
  }

  ngOnInit() {
  }

}
