import { Component, OnInit } from '@angular/core';
import {Equation} from '../models/equation';
import {MathDatabaseService} from '../services/math-database/math-database.service';
import {WindowRefService} from '../services/window-ref/window-ref.service';

@Component({
  selector: 'app-equation-rank',
  templateUrl: './equation-rank.component.html',
  styleUrls: ['./equation-rank.component.css']
})
export class EquationRankComponent implements OnInit {

  equations: Equation[] = [];

  constructor(private apiConnection: MathDatabaseService, private window_ref: WindowRefService) { }

  ngOnInit() {
    this.apiConnection.fetchRankedEquations().subscribe( eqns => this.equations = eqns);
  }

  openEquationWikiPage(event: Equation): void {
    this.window_ref.nativeWindow.open( event.url );
  }


}
