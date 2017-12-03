export class Subject {
    id: string;
    title: string;
    url: string;
  
    public static sample() : Subject {
      return {
        id: "15787",
        title: "Fourier series",
        url: "https://en.wikipedia.org/wiki/Fourier_series"
      }
    }
  }