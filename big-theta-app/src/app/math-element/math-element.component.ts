///<reference path="../../../node_modules/@types/mathjax/index.d.ts"/>


import {Component, AfterViewInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {LatexEquation} from '../latex-equation';


@Component( {
  selector: 'app-math-element',
  templateUrl: './math-element.component.html',
  styleUrls: [ './math-element.component.css' ]
} )
export class MathElementComponent implements AfterViewInit {


  @Input() latexEquation: LatexEquation;

  @Output() OnClick = new EventEmitter<LatexEquation>();



  constructor( private elem: ElementRef ) {


  }


  ngAfterViewInit(): void {

    // noinspection TypeScriptUnresolvedVariable
    // window. MathJax is attached to global window object
    MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub, this.elem.nativeElement ] );
  }

  emitLatexEquation(): void {
    this.OnClick.emit( this.latexEquation );
    console.log( 'MathElementComponent--emitLatexEquation: emitted click event' );
  }


  getDisplayStyleEquation( ): string {
    return '$$\\bf '.concat( this.latexEquation.equation).concat( ' $$' );
  }
}
