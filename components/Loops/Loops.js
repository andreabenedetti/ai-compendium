import { construct } from "./Loops.render";
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import _ from 'lodash';
import styles from "./Loops.module.scss";
import classNames from 'classnames';

import { Card, ListGroup, Accordion, Badge } from "react-bootstrap";

const css = `
.main-path {
    stroke-dasharray: 200;
    stroke-dashoffset: 560;
    pointer-events: none;
    animation: animateDash 5s linear infinite forwards;
}

@keyframes animateDash {
    to {
        stroke-dashoffset: 150;
    }
}
`

export default function Loops ({ data }) {
    const svgEl = useRef();

    const height = 170;
    const radius = 50;
    const labels = true;
    
    useEffect(() => {
        construct(svgEl.current, data.loop, svgEl.current.clientWidth, height, radius, labels);
    }, []);
    
    return (
        <>
        <Card id={data.title.split("")[0]}>
            <Card.Header className={styles.cardHeader}><Badge pill className={classNames(styles.pill, styles.letter)} text="light" bg="secondary">{data.title.split("")[0]}</Badge></Card.Header>
        <Card.Body>
        <Card.Text>
        <b>{data.title}</b>
        </Card.Text>
        <Card.Text>
        {data.value.problems.map(p => <Badge pill text="dark" key={p} className={classNames(styles.pill, styles.pillProblem)}>{p}</Badge>)}

        {data.value.data.map(d => <Badge pill text="dark" key={d} className={classNames(styles.pill, styles.pillData)}>{d}</Badge>)}

        {data.value.promises.map(p => <Badge pill text="dark" key={p} className={classNames(styles.pill, styles.pillPromise)}>{p}</Badge>)}


        {data.value.humans.map(h => <Badge pill text="dark" key={h} className={classNames(styles.pill, styles.pillHuman)}>{h}</Badge>)}
        </Card.Text>
        <svg ref={svgEl} width="100%" height={height}></svg>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><span className={styles.taskButton}>Task list</span></Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
        <ListGroup variant="flush" as="ol" numbered>
        {data.loop.map((task) => {
            if (task.actor === "human") {
                return <ListGroup.Item key={task.title} as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ textTransform: "capitalize" }}><Badge pill text="dark" className={classNames(styles.pill, styles.pillHuman)}>{task.actor}</Badge> {task.type}</div>
                {task.label}
                </div>
                </ListGroup.Item>
            } else {
                return <ListGroup.Item key={task.title} as="li" className="d-flex justify-content-between align-items-start"><div className="ms-2 me-auto">
                <div className="fw-bold" style={{ textTransform: "capitalize" }}><Badge pill text="dark" className={classNames(styles.pill, styles.pillTechnology)}>{task.actor}</Badge> {task.type}</div>
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
        <style>{css}</style>     
        </>
        );
    }