import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ChangeDetectorRef} from '@angular/core';
import {Equation} from '../models/equation';

@Component( {
  selector: 'app-math-list',
  templateUrl: './math-list.component.html',
  styleUrls: [ './math-list.component.css' ]
} )
export class MathListComponent implements OnInit {


  private _equationList: Equation[];
  private isLoading: boolean;

  get equationList(): Equation[] {
    return this._equationList;
  }

  @Input() set equationList(value: Equation[]) {
    this._equationList = value;
    if (value.length > 0) {
      this.finished_count = 0;
      this.isLoading = true;
      this.changeDetectorRef.detectChanges();
    }
  }


  private finished_count = 0;

  @Input() showTitle = false;

  @Output() OnClick = new EventEmitter<Equation>();


  constructor(private elem: ElementRef, private changeDetectorRef: ChangeDetectorRef) {


  }

  ngOnInit() {

  }


  scrollOnMouseWheel(elem: HTMLLIElement):void {

  }

  OnFinishTypesetting( finished: boolean): void {
    if (this.finished_count++ >= (this._equationList.length-1)){
      this.isLoading = false;
      this.changeDetectorRef.detectChanges();
    }
  }

  static setListElem_CSS(elem: HTMLLIElement, key: string, value: boolean): void {
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
   * @param {Equation} event
   */
  emitLatexEquation(event: Equation): void {
    this.OnClick.emit( event );
    console.log( `MathListComponent--emitLatexEquation: id: ${event.id},  name: ${event.name}` );
  }

}
