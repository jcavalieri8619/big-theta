import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubjectTree } from '../models/subject-tree';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @ViewChild('graph') private graphContainer: ElementRef;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private chart: any;
  private width: number;
  private height: number;

  constructor(private http: HttpClient) { }

  initGraph(graphData) {
    console.log("Got data", graphData);

    const element = this.graphContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);


    let force = d3.layout.force()
      .charge(-200).linkDistance(30).size([this.width, this.height]);

    
  }

  getGraphData(treeData: SubjectTree) {
    let nodes = [];
    let links = [];

    // assuming depth = 2 tree for now
    nodes.push({ id: treeData.id, title: treeData.title });
    treeData.children.forEach(child => {
      nodes.push({ id: child.id, title: child.title });
      links.push({ source: treeData.id, target: child.id });
      child.children.forEach(grandChild => {
        nodes.push({ id: grandChild.id, title: grandChild.title });
        links.push({ source: child.id, target: grandChild.id });
      })
    });

    return { nodes, links };
  }

  ngOnInit() {
    this.http.get<SubjectTree>("https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/subject/tree/4")
    .subscribe(data => {
      let graphData = this.getGraphData(data);
      this.initGraph(graphData);
    });
  }

}
