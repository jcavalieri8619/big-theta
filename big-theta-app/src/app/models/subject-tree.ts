import { Subject } from "./subject";

export class SubjectTree extends Subject {
    children: SubjectTree[];
  
    public static sample(): SubjectTree {
      return {
        id: "15787",
        title: "Fourier series",
        url: "https://en.wikipedia.org/wiki/Fourier_series",
        children: [
          {
            id: "6878",
            title: "Linear algebra",
            url: "https://en.wikipedia.org/wiki/Linear_algebra",
            children: []
          }
        ]
      };
    }
  }