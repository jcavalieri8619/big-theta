import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LatexEquation} from '../latex-equation';

@Component( {
  selector: 'app-math-list',
  templateUrl: './math-list.component.html',
  styleUrls: [ './math-list.component.css' ]
} )
export class MathListComponent implements OnInit {


  private _equationList: LatexEquation[];
  private isLoading: boolean;

  get equationList(): LatexEquation[] {
    return this._equationList;
  }

  @Input() set equationList( value: LatexEquation[] ) {
    this._equationList = value;
    if (value.length > 0) {
      this.finished_count = 0;
      this.isLoading = true;
    }
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
      this.isLoading = false;
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
