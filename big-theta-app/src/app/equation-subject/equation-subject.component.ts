import {Component, Input, OnInit} from '@angular/core';
import {MathDatabaseService} from '../services/math-database/math-database.service';
import {LatexEquation} from '../latex-equation';
import {WindowRefService} from '../services/window-ref/window-ref.service';

@Component({
  selector: 'app-equation-subject',
  templateUrl: './equation-subject.component.html',
  styleUrls: ['./equation-subject.component.css']
})
export class EquationSubjectComponent implements OnInit {

  @Input() subjectID: number;
  equations: LatexEquation[] = [];

  constructor(private apiConnection: MathDatabaseService, private window_ref: WindowRefService) { }

  ngOnInit() {
    this.apiConnection.fetchSubjectEquations(this.subjectID).subscribe( eqns => this.equations = eqns);
    console.log( 'EquationRankComponent: fetched equations by subjectID ' + this.subjectID );
  }

  openEquationWikiPage(event: LatexEquation): void {
    this.window_ref.nativeWindow.open( event.url );
  }

}
