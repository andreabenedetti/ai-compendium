import * as d3 from "d3";
import 'bootstrap/dist/css/bootstrap.min.css';

let svg;

const radians = Math.PI / 180;

const color = d3
.scaleOrdinal()
.range(["#0e6b63", "#DDD"])
.domain(["human", "algorithm"]);

const spatialize = (element, data, width, height, radius, labels) => {
    let w = width;
    let h = height;
    let r = radius;
    let l = labels;
    
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
        
    const diagram = element.append("g").attr("transform", `translate(${[Math.random() * w, Math.random() * h]})`);
    
    const tasks = diagram
    .append("g");
    
    const drawing = diagram
    .append("g");
    
    tasks
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d) => checkActorSin(d))
    .attr("cy", (d) => checkActorCos(d))
    .attr("r", r / 3.33)
    .attr("fill", (d) => {
        if (l) {
            return "#FFFFFF"
        } else {
            return color(d.actor)
        }
    })
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
    .attr("stroke-width", () => {
        if (l) {
            return 2
        } else {
            return 1
        }
    })
    .attr("d", (region) => loop(data))
    .style("marker-mid", "url(#arrow)")
    .style("marker-start", "url(#arrow)");
    
    if (l) {
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
    }
    
    
    function checkActorSin(data) {
        if (data.actor === "human") {
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

export { spatialize };