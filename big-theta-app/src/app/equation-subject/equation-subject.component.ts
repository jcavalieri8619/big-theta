import {Component, Input, OnInit} from '@angular/core';
import {MathDatabaseService} from '../services/math-databse/math-database.service';
import {LatexEquation} from '../latex-equation';

@Component({
  selector: 'app-equation-subject',
  templateUrl: './equation-subject.component.html',
  styleUrls: ['./equation-subject.component.css']
})
export class EquationSubjectComponent implements OnInit {

  @Input() subjectID: number;
  equations: LatexEquation[] = [];

  constructor(private apiConnection: MathDatabaseService) { }

  ngOnInit() {
    this.apiConnection.fetchSubjectEquations(this.subjectID).subscribe( eqns => this.equations = eqns);
    console.log( 'EquationRankComponent: fetched equations by subjectID ' + this.subjectID );
  }

  searchEquation(event: LatexEquation): void {
    // if user clicks on equation in list, then search for that equation
    // by the latex string in event.equation

    // this could either generate a new graph or..
  }

}
