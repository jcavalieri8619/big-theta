import { Component, OnInit } from '@angular/core';

const BASE_URL = "https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta";

class Equation {
  id: string;
  name: string;
  equation: string;
  url: string;

  static sample() : Equation {
    return {
      id: "3048",
      name: "Mathematics",
      equation: "{ p\\Rightarrow q}",
      url: "https://en.wikipedia.org/wiki/Mathematics"
    };
  }
}

class Subject {
  id: string;
  title: string;
  url: string;

  static sample() : Subject {
    return {
      id: "15787",
      title: "Fourier series",
      url: "https://en.wikipedia.org/wiki/Fourier_series"
    }
  }
}

class SubjectTree extends Subject {
  children: SubjectTree[];

  static sample(): SubjectTree {
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

interface ApiParameter {
  name: string;
  description: string;
  required: boolean;
  example: string;
}

class ApiEndpointMethod {
  constructor(readonly type: string,
    readonly description: string,
    readonly exampleResponse: string,
    readonly urlParameters: ApiParameter[] = [],
    readonly bodyParameters: ApiParameter[] = [],
    readonly pathParameters: ApiParameter[] = []) {}

  exampleRequest(endpoint: string) : string {
    this.pathParameters.forEach(param => {
      endpoint = endpoint.replace(`{${param.name}}`, param.example);
    });
    let request = `${this.type} ${BASE_URL}${endpoint}`;
    this.urlParameters.forEach((param, i) => request += `${i === 0 ? "?" : "&"}${param.name}=${param.example}`)
    return request;
  }
}

interface ApiEndpoint {
  name: string;
  methods: ApiEndpointMethod[];
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  endpoints: ApiEndpoint[] = [
  {
    name: "/equations/top",
    methods: [
      new ApiEndpointMethod("GET", "Get a list of equations from the highest ranking pages.", JSON.stringify([Equation.sample()], null, 2))
    ]
  },
  {
    name: "/equations/subject/{subjectId}",
    methods: [
      new ApiEndpointMethod("GET", "Get a list of equations present on the subject page requested", JSON.stringify([Equation.sample()], null, 2), [], [], [
        { name: "subjectId", description: "ID for subject page", required: true, example: "4" }
      ])
    ]
  },
{
  name: "/subject/search/{searchTerm}",
  methods: [
    new ApiEndpointMethod("GET", "Get a list of subjects that match the search term", JSON.stringify([Subject.sample()], null, 2), [], [], [
      { name: "searchTerm", description: "Subject search query", required: true, example: "series" }
    ])
  ]
},
{
  name: "/subject/tree/{subjectId}",
  methods: [
    new ApiEndpointMethod("GET", "Get a tree of related subjects given a specific subject ID", JSON.stringify(SubjectTree.sample(), null, 2), [], [], [
      { name: "subjectId", description: "ID for subject page", required: true, example: "4" }
    ])
  ]
}];

  constructor() { }

  ngOnInit() {

  }

}
