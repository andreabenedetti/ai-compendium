import { construct } from "../Loops/Loops.render";
import { useRef, useEffect } from "react";

import { Card, Button, ListGroup, Accordion } from "react-bootstrap";

export default function SmallLoops ({ data }) {
    const svgEl = useRef();

    const height = 120;
    const radius = 20;
    const labels = false;
    
    useEffect(() => {
        console.log("Mounted", data.loop);
        console.log(svgEl.current.clientWidth)
        construct(svgEl.current, data.loop, svgEl.current.clientWidth, height, radius, labels);
    }, []);
    
    return (
        <>
        <Card>
        <Card.Body>
        <Card.Text>
        {data.title}
        </Card.Text>
        <svg ref={svgEl} width="100%" height={height}></svg>
        </Card.Body>
        </Card>      
        </>
        );
    }