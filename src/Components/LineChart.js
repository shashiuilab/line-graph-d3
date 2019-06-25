import React, { Component } from 'react';
import * as d3 from "d3";


class LineChart extends Component {
 render() {
  var margin = {top: 50, right: 50, bottom: 50, left: 50}
  , width = window.innerWidth - margin.left - margin.right 
  , height = window.innerHeight - margin.top - margin.bottom;
var dataset = this.props.data;
var n = 15;


var xScale = d3.scaleLinear()
    .domain([d3.min(dataset, d => d.category), d3.max(dataset, d => d.category)])
    .range([0, width]);

var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

var line = d3.line()
    .x(function(d, i) { return xScale(d.category); }) 
    .y(function(d) { return yScale(d.value); }) 


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")") 
    .call(d3.axisBottom(xScale)); 


svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale).tickFormat(function(d){
             return d+"%";
         })); 


svg.append("path")
    .datum(dataset)
    .attr("class", "line") 
    .attr("d", line);


svg.selectAll(".dot")
    .data(dataset)
  .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", function(d, i) { return xScale(d.category) })
    .attr("cy", function(d) { return yScale(d.value) })
    .attr("r", 5);

    
    return (
          <svg></svg>
    )
  }
}
export default LineChart;
