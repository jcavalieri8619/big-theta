///<reference path="../../../node_modules/@types/mathjax/index.d.ts"/>


import {Component, AfterViewInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {LatexEquation} from '../latex-equation';
import {WindowRefService} from '../services/window-ref/window-ref.service';


@Component( {
  selector: 'app-math-element',
  templateUrl: './math-element.component.html',
  styleUrls: [ './math-element.component.css' ]
} )
export class MathElementComponent implements AfterViewInit {


  @Input() latexEquation: LatexEquation;

  @Output() OnClick = new EventEmitter<LatexEquation>();



  constructor( private elem: ElementRef, private windowRef: WindowRefService ) {


  }


  ngAfterViewInit(): void {



    // noinspection TypeScriptUnresolvedVariable
    // MathJax is attached to global window object accesssed via WindowRef service
    this.windowRef.nativeWindow.MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub, this.elem.nativeElement ] );
  }

  emitLatexEquation(): void {
    this.OnClick.emit( this.latexEquation );
    console.log( 'MathElementComponent--emitLatexEquation: emitted click event' );
  }


  getDisplayStyleEquation( ): string {
    return '$$\\bf '.concat( this.latexEquation.equation).concat( ' $$' );
  }
}
