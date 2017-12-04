import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubjectTree } from '../models/subject-tree';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';
import { GraphSearchService } from 'app/services/graph-search.service';


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

  constructor(private http: HttpClient, private graphSearchService: GraphSearchService) {
    graphSearchService.graphSearch$.subscribe(searchId => {
      http.get<SubjectTree>("https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/subject/tree/" + searchId)
      .subscribe(data => {
        let graphData = this.getGraphData(data);
        d3.select("svg").remove();
        this.initGraph(graphData);
      });
    });
  }

  initGraph(graphData) {
    const element = this.graphContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(d => d.id))
      .force("collide",d3.forceCollide(d => 35).iterations(16))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    let link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graphData.links)
      .enter()
      .append("line")
      .attr("stroke", "black")
  
    let node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graphData.nodes)
      .enter().append("g");
    node.append("circle")
      .attr("stroke", "black")
      .attr("fill", "blue")
      .attr("r", d => 15)
      .on("click", d => {
        if (d3.event.altKey) {
          this.graphSearchService.newEquationSubject(d);
        }
      });
    node.call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
    node.append("title").text(d => d.title);
  
  
    let ticked = function() {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node.select("circle")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
    }

    simulation.nodes(graphData.nodes).on("tick", ticked);

    simulation.force("link").links(graphData.links);

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    
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
        if (grandChild.id !== treeData.id) {
          nodes.push({ id: grandChild.id, title: grandChild.title });
          links.push({ source: child.id, target: grandChild.id });
        }
      })
    });

    return { nodes, links };
  }

  ngOnInit() {

  }

}
