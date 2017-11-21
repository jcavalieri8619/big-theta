import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LatexEquation} from '../latex-equation';



@Component({
  selector: 'app-math-list',
  templateUrl: './math-list.component.html',
  styleUrls: ['./math-list.component.css']
})
export class MathListComponent implements OnInit {

  @Input() equationList: LatexEquation[];

  @Output() OnClick = new EventEmitter<LatexEquation>();

  currentCSSClasses= {'active': false};

  constructor() {
    console.log( this.equationList[ 0 ].equation );
  }

  ngOnInit() {
  }


  /**
   * bind to app-math-element OnClick event
   * @param {LatexEquation} event
   */
  emitLatexEquation(event: LatexEquation): void {
    this.OnClick.emit( event );
    console.log( 'MathListComponent--emitLatexEquation: emitted event' + event );
  }

}
