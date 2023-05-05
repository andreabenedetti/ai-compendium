import * as d3 from "d3";
import data from "../../data/data-manual";
import { Row } from "react-bootstrap";
import { useRef, useEffect } from "react";
import { spatialize } from "./LoopsMap.render";

export default function LoopsMap() {
    const svgEl = useRef();
    
    const height = 400;
    const radius = 10;
    const labels = false;
    let diagram;
    
    function drawData() {
        diagram.each(function(d) {
            console.log(d3.select(this))
            spatialize(d3.select(this), d.loop, svg.clientWidth, 200, radius, labels)
        });
    };
    
    useEffect(() => {
        const svg = d3.select(svgEl.current);
        
        console.log(svgEl);
        
        svg
        .append("defs")
        .append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 2.5)
        .attr("markerWidth", radius / 5)
        .attr("markerHeight", radius / 5)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "#000");
        
        diagram = svg.selectAll("g")
        .data(data)
        .append("g");
        
        console.log(diagram);
        drawData();
        
        //     const simulation = d3
        // .forceSimulation(data)
        // .force("collide", d3.forceCollide(3.5))
        // .force("x", d3.forceX(svgEl.current.clientWidth / 2))
        // .force("y",d3.forceY(height / 2));
        
        // simulation.on("tick", () => {
        //     diagram.attr("x", (d) => d.x).attr("y", (d) => d.y);
        //   });
        // data.forEach((d) => {
        //     console.log(d)
        //     spatialize(svg, d.loop, svg.clientWidth, height, radius, labels)
        // })
    }, []);
    
    return (
        <>
        <Row className="mb-5"><h1>{data.length} papers analyzed</h1></Row>
        
        <svg ref={svgEl} width="100%" height={height}></svg>
        </>
        );
    }