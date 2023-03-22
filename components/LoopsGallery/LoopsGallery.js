import { construct } from "../Loops/Loops.render";
import { useRef, useEffect } from "react";

import { Card, Button, ListGroup, Accordion } from "react-bootstrap";

export default function Loops ({ data }) {
    const svgEl = useRef();

    const height = 150;
    const radius = 25;
    
    useEffect(() => {
        console.log("Mounted", data.loop);
        console.log(svgEl.current.clientWidth)
        construct(svgEl.current, data.loop, svgEl.current.clientWidth, height, radius);
    }, []);
    
    return (
        <>
        <Card>
            <Card.Header><Button variant="link"><a href={data.url} target="_blank">{data.url}</a></Button></Card.Header>
        <Card.Body>
        <svg ref={svgEl} width="100%" height={height}></svg>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Task list</Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
        <ListGroup variant="flush" as="ol" numbered>
        {data.loop.map((task) => {
            if (task.actor === "human") {
                return <ListGroup.Item key={task[0]} as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto" style={{color: "var(--bs-primary)"}}>
                <div className="fw-bold" style={{ textTransform: "capitalize" }}>{task.actor}: {task.type}</div>
                {task.label}
                </div>
                </ListGroup.Item>
            } else {
                return <ListGroup.Item key={task[0]} as="li" className="d-flex justify-content-between align-items-start"><div className="ms-2 me-auto">
                <div className="fw-bold" style={{ textTransform: "capitalize" }}>{task.actor}: {task.type}</div>
                {task.label}
                </div></ListGroup.Item>
            }
        })}
        </ListGroup>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Card.Body>
        </Card>      
        </>
        );
    }