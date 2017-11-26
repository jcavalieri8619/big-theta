import { Component, OnInit } from '@angular/core';
import {LatexEquation} from '../latex-equation';
import {MathDatabaseService} from '../services/math-database/math-database.service';
import {WindowRefService} from '../services/window-ref/window-ref.service';

@Component({
  selector: 'app-equation-rank',
  templateUrl: './equation-rank.component.html',
  styleUrls: ['./equation-rank.component.css']
})
export class EquationRankComponent implements OnInit {

  equations: LatexEquation[] = [];

  constructor(private apiConnection: MathDatabaseService, private window_ref: WindowRefService) { }

  ngOnInit() {
    this.apiConnection.fetchRankedEquations().subscribe( eqns => this.equations = eqns);
    console.log( 'EquationRankComponent: fetched equations by rank' );
  }

  openEquationWikiPage(event: LatexEquation): void {
    this.window_ref.nativeWindow.open( event.url );
  }


}
