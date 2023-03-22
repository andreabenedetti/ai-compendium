import * as d3 from "d3";
import 'bootstrap/dist/css/bootstrap.min.css';

let svg;

const radians = Math.PI / 180;


const color = d3
.scaleOrdinal()
.range(["var(--bs-primary)", "slategray"])
.domain(["human", "algorithm"]);

const construct = (element, data, width, height, radius) => {
    console.log(width);
    let w = width;
    let h = height;
    let r = radius;

    console.log(h);
    const loop = d3
    .line()
    .x((d) => checkActorSin(d))
    .y((d) => checkActorCos(d))
    .curve(d3.curveCatmullRomClosed.alpha(0));
    
    const humanScale = d3
    .scalePoint()
    .range([-180, -0])
    .padding(0.5)
    .domain(d3.map(data.filter((d) => d.actor === "human"), (d) => d.index).sort((a, b) => a - b));
    
    const algoScale = d3
    .scalePoint()
    .range([0, 180])
    .padding(0.5)
    .domain(d3.map(data.filter((d) => d.actor === "algorithm"),(d) => d.index).sort((a, b) => a - b));
    
    svg = d3.select(element).attr("background-color", "#FFFFFF");

    svg.selectAll("*").remove();
    
    const def = svg.append("defs");
    
    const g = def.append("linearGradient").attr("id", "hit");
    
    g.append("stop").attr("stop-color", "var(--bs-primary)").attr("offset", "0");
    
    g.append("stop").attr("stop-color", "black").attr("offset", "1");
    
    svg
    .append("defs")
    .append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 2.5)
    .attr("markerWidth", r / 10)
    .attr("markerHeight", r / 10)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("fill", "#000");
    
    svg
    .append("text")
    .attr("x", w / 2 - 20)
    .attr("y", 15)
    .attr("text-anchor", "end")
    .attr("font-weight", "bold")
    .attr("font-size", 14)
    .attr("fill", "#0d6efd")
    .text("Humans");
    
    svg
    .append("text")
    .attr("x", w / 2 + 20)
    .attr("y", 15)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .attr("font-size", 14)
    .attr("fill", "slateGray")
    .text("Algorithms");

    for (let i = 1; i < 5; i+=0.7) {
        svg
        .append("circle")
        .attr("cx", w / 2)
        .attr("cy", h / 2)
        .attr("r", i * r)
        .attr("opacity", 1 / (i * 5))
        .attr("fill", "none")
        .attr("stroke-width", 1)
        .attr("stroke", "url(#hit)");
    }
    
    const tasks = svg
    .append("g")
    .attr("transform", `translate(${[w / 2, h / 2]})`);
    
    const drawing = svg
    .append("g")
    .attr("transform", `translate(${[w / 2, h / 2]})`);
    
    tasks
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d) => checkActorSin(d))
    .attr("cy", (d) => checkActorCos(d))
    .attr("r", r / 3.33)
    .attr("fill", "#Ffffff")
    .attr("stroke-dasharray", (d, i) => {
        if (i > 0) {
            return "2px";
        } else {
            return "0px";
        }
    })
    .attr("stroke-width", (d, i) => {
        if (i > 0) {
            return "1px";
        } else {
            return "2px";
        }
    })
    .attr("stroke", (d) => color(d.actor))
    .append("title")
    .text((d, i) => `${i + 1}: ${d.label}`);
    
    drawing
    .selectAll("path")
    .data(["S", "N"])
    .join("path")
    .attr("fill", "none")
    .attr("stroke", "#110000")
    .attr("stroke-width", 2)
    .attr("d", (region) => loop(data))
    .style("marker-mid", "url(#arrow)")
    .style("marker-start", "url(#arrow)");
    
    tasks
    .selectAll("text")
    .data(data)
    .join("text")
    .attr("text-anchor", (d) => {
        if (checkActorText(d)) {
            return "end";
        }
    })
    .attr("x", (d) =>
    checkActorText(d) ? checkActorSin(d) - 20 : checkActorSin(d) + 20
    )
    .attr("y", (d) => checkActorCos(d) + 4)
    .attr("font-size", 12)
    .text(d => {
        let labelArray = d.label.split(" ");
        return labelArray[0]                      
    });
   ;
    
    function checkActorSin(data) {
        if (data.actor === "human") {
            console.log(humanScale(data.index));
            return data.radius * r * Math.sin(humanScale(data.index) * radians);
        } else {
            return data.radius * r * Math.sin(algoScale(data.index) * radians);
        }
    }
    
    function checkActorCos(data) {
        if (data.actor === "human") {
            return data.radius * r * Math.cos(humanScale(data.index) * radians);
        } else {
            return data.radius * r * Math.cos(algoScale(data.index) * radians);
        }
    }
    
    function checkActorText(data) {
        if (data.actor === "human") {
            return true;
        }
    }  
};

export { construct };