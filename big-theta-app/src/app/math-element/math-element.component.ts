///<reference path="../../../node_modules/@types/mathjax/index.d.ts"/>


import {Component, AfterViewInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {Equation} from '../models/equation';
import {WindowRefService} from '../services/window-ref/window-ref.service';


@Component( {
  selector: 'app-math-element',
  templateUrl: './math-element.component.html',
  styleUrls: [ './math-element.component.css' ]
} )
export class MathElementComponent implements AfterViewInit {


  @Input() equation: Equation;

  @Output() OnClick = new EventEmitter<Equation>();

  @Output() typesetFinished = new EventEmitter<boolean>();




  constructor( private elem: ElementRef, private windowRef: WindowRefService ) {


  }


  ngAfterViewInit(): void {



    // noinspection TypeScriptUnresolvedVariable
    // MathJax is attached to global window object accesssed via WindowRef service
    this.windowRef.nativeWindow.MathJax.Hub.Queue(
      [ 'Typeset', MathJax.Hub, this.elem.nativeElement ],
      ()=> this.typesetFinished_callback() );
  }

  typesetFinished_callback(): void {

    this.typesetFinished.emit( true);
  }

  emitLatexEquation(): void {
    this.OnClick.emit(this.equation);
    console.log( 'MathElementComponent--emitLatexEquation: emitted click event' );
  }


  getDisplayStyleEquation( ): string {
    return '$$\\bf '.concat(this.equation.equation).concat(' $$');
  }
}
