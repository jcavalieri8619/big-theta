import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LatexEquation} from '../latex-equation';



@Component( {
  selector: 'app-math-list',
  templateUrl: './math-list.component.html',
  styleUrls: [ './math-list.component.css' ]
} )
export class MathListComponent implements OnInit {

  @Input() equationList: LatexEquation[];

  @Input() showTitle = false;

  @Output() OnClick = new EventEmitter<LatexEquation>();


  constructor() {
  }

  ngOnInit() {
  }


  scrollOnMouseWheel(elem: HTMLLIElement):void {

  }

  setListElem_CSS( elem: HTMLLIElement, key: string, value: boolean ): void {
    if ( value ) {
      elem.classList.add( key );

    } else {
      elem.classList.remove( key );
    }
  }


  extractTitle( index: number ): string {

    return this.equationList[ index ].name;


  }


  /**
   * bind to app-math-element OnClick event, If user clicks on equation then
   * trigger equation search
   * @param {LatexEquation} event
   */
  emitLatexEquation( event: LatexEquation ): void {
    this.OnClick.emit( event );
    console.log( `MathListComponent--emitLatexEquation: id: ${event.id},  name: ${event.name}` );
  }

}
