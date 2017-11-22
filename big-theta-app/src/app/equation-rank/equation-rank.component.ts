import { Component, OnInit } from '@angular/core';
import {LatexEquation} from '../latex-equation';
import {MathDatabaseService} from '../services/math-database/math-database.service';

@Component({
  selector: 'app-equation-rank',
  templateUrl: './equation-rank.component.html',
  styleUrls: ['./equation-rank.component.css']
})
export class EquationRankComponent implements OnInit {

  equations: LatexEquation[] = [];

  constructor(private apiConnection: MathDatabaseService) { }

  ngOnInit() {
    this.apiConnection.getLatexEquationsByRank().subscribe(eqns => this.equations = eqns);
    console.log( 'EquationRankComponent: fetched equations by rank' );
  }

  searchEquation(event: LatexEquation): void {
    // if user clicks on equation in list, then search for that equation
    // by the latex string in event.equation

    // this could either generate a new graph or..
  }


}
