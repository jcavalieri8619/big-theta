import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LatexEquation} from '../latex-equation';



@Component( {
  selector: 'app-math-list',
  templateUrl: './math-list.component.html',
  styleUrls: [ './math-list.component.css' ]
} )
export class MathListComponent implements OnInit {


  private _equationList: LatexEquation[];

  get equationList(): LatexEquation[] {
    return this._equationList;
  }

  @Input() set equationList( value: LatexEquation[] ) {
    this._equationList = value;
    console.log("got equations");
  }


  private finished_count = 0;

  @Input() showTitle = false;

  @Output() OnClick = new EventEmitter<LatexEquation>();


  constructor(private elem: ElementRef) {


  }

  ngOnInit() {

  }


  scrollOnMouseWheel(elem: HTMLLIElement):void {

  }

  OnFinishTypesetting( finished: boolean): void {
    if (this.finished_count++ >= (this._equationList.length-1)){
      this.elem.nativeElement.querySelector( '.spinner' ).classList.toggle( "no_display" );
      this.elem.nativeElement.querySelector( '.hidden' ).classList.toggle( "hidden" );

    }
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
