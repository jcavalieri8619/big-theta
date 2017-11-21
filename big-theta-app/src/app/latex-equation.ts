export class LatexEquation {
  private _equation = '$$\\bf{ R={\\sqrt {X^{2}+Y^{2}}}.}$$';


  get equation(): string {
    return this._equation;
  }

  set equation( value: string ) {
    this._equation = this.makeDisplayStyle(value);
  }

  private _id = 0;

  get id(): number {
    return this._id;
  }

  set id( value: number ) {
    this._id = value;
  }


  constructor( equation: string, id: number ) {
    this.equation = equation;
    this.id = id;
  }

  private makeDisplayStyle( latex_str: string): string {
    return '$$\\bf'.concat( latex_str ).concat( '$$' );
  }
}
