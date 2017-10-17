import { Component, OnInit } from '@angular/core';

const BASE_URL = "https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta";

class Equation {
  equation: string;
  format: string;
  topic: string;

  static sample() : Equation {
    return {
      equation: "x2",
      format: "ascii",
      topic: "Math"
    };
  }
}

class EquationTree extends Equation {
  children: EquationTree[];

  static sample(): EquationTree {
    return {
      equation: "x2",
      format: "ascii",
      topic: "Math",
      children: [
        {
          equation: "x+y=1",
          format: "ascii",
          topic: "Physics",
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
    readonly bodyParameters: ApiParameter[] = []) {}

  exampleRequest(endpoint) : string {
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
  endpoints: ApiEndpoint[] = [{
    name: "/equationtree",
    methods: [
      new ApiEndpointMethod("GET", "Get an equation tree of related equations given an equation.", JSON.stringify(EquationTree.sample(), null, 2), [
        { name: "equation", description: "Root equation to search for", required: true, example: "x2" },
        { name: "format", description: "Format of equation, either ascii or latex", required: true, example: "ascii" }
      ])
    ]
  },{
    name: "/equations",
    methods: [
      new ApiEndpointMethod("GET", "Get a list of all equations in the tree optionally filtered by topic", JSON.stringify(Equation.sample(), null, 2), [
        { name: "topic", description: "Topic of the equations to filter by", required: false, example: "Math" }
      ]),
      new ApiEndpointMethod("POST", "Add an equation to the tree", JSON.stringify(Equation.sample(), null, 2), [], [
        { name: "equation", description: "Equation to add", required: true, example: "x2" },
        { name: "topic", description: "Topic of the equation", required: true, example: "Math" },
        { name: "format", description: "Format of the equation, either ascii or latex", required: true, example: "ascii" }
      ])
    ]
  }];

  constructor() { }

  ngOnInit() {

  }

}
