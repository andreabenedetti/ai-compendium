import { construct } from "./Loops.render";
import { useRef, useEffect } from "react";

import { Card, Button } from "react-bootstrap";

export default function Loops ({ data }) {
    const svgEl = useRef();
    
    useEffect(() => {
        console.log("Mounted", data.loop);
        construct(svgEl.current, data.loop);
    }, []);
    
    return (
        <>
        <Card>
        <Card.Body>
            <Card.Title>
                {data.title}
            </Card.Title>
            <Card.Text>
                {data.value}
            </Card.Text>
            <svg ref={svgEl} width="100%" height="300"></svg>
            <Button variant="link"><a href={data.url} target="_blank">{data.url}</a></Button>
        </Card.Body>
        </Card>      
        </>
        );
    }