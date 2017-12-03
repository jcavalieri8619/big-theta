import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Line Chart';

  private margin = {top: 20, right: 30, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;
  private rootNode: any;
  private i:number;
  private duration:number;

  tree={nodes:[
    {id: "33",name: "von Mises distribution",url: "https://en.wikipedia.org/wiki/Von_Mises_distribution",},
    {      id: "160544",name: "1.96",url: "https://en.wikipedia.org/wiki/1.96"    },
    {      id: "131441",name: "Notation in probability and statistics",url: "https://en.wikipedia.org/wiki/Notation_in_probability_and_statistics"},
    {      id: "131440",name: "Glossary of probability and statistics",url: "https://en.wikipedia.org/wiki/Glossary_of_probability_and_statistics"}
  ],
    links:[
      {parent:"33",child:"160544"},
      {parent:"33",child:"131441"},
      {parent:"33",child:"131440"}
    ]};

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.update(this.rootNode);
  
  }

  private initSvg() {
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    

  }

  private initAxis() {
    this.rootNode=this.tree[0];
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);

    this.rootNode.x0 = this.height / 2;
    this.rootNode.y0 = 0;
    this.i=0;
    this.duration=700;
   // this.x.domain(d3Array.extent(Stocks, (d) => d.date ));
    //this.y.domain(d3Array.extent(Stocks, (d) => d.value ));
  }
  private update(source) {
    
      // Compute the new tree layout.
      var nodes = this.tree.nodes(this.root).reverse();
      var  links = this.tree.links(nodes);
    
      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 180; });
    
      // Update the nodes…
      var node = this.svg.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++this.i); });
    
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);
    
      nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
    
      nodeEnter.append("text")
        .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
        .attr("dy", ".35em")
        .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
        .text(function(d) { return d.name; })
        .on('click', function(d,i){ alert(d.url); })
        .style("fill-opacity", 1e-6);
    
      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
        .duration(this.duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
    
      nodeUpdate.select("circle")
        .attr("r", 5)
        .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
    
      nodeUpdate.select("text")
        .style("fill-opacity", 1);
    
      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
        .duration(this.duration)
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();
    
      nodeExit.select("circle")
        .attr("r", 1e-6);
    
      nodeExit.select("text")
        .style("fill-opacity", 1e-6);
    
      // Update the links…
      var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });
    
      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
        });
    
      // Transition links to their new position.
      link.transition()
        .duration(duration)
        .attr("d", diagonal);
    
      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
        })
        .remove();
    
      // Stash the old positions for transition.
      nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
      });
    }


}
