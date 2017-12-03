export class Equation {
    id: string;
    name: string;
    equation: string;
    url: string;
  
    public static sample() : Equation {
      return {
        id: "3048",
        name: "Mathematics",
        equation: "{ p\\Rightarrow q}",
        url: "https://en.wikipedia.org/wiki/Mathematics"
      };
    }
}