import { construct } from "./Loops.render";
import { useRef, useEffect } from "react";
import styles from "./Loops.module.scss";
import classNames from 'classnames';

import { Card, Button, ListGroup, Accordion, Badge } from "react-bootstrap";
import { style } from "d3";

export default function Loops ({ data }) {
    const svgEl = useRef();

    const height = 170;
    const radius = 50;
    const labels = true;
    
    useEffect(() => {
        // console.log("Mounted", data.loop);
        // console.log(svgEl.current.clientWidth)
        construct(svgEl.current, data.loop, svgEl.current.clientWidth, height, radius, labels);
    }, []);
    
    return (
        <>
        <Card>
        <Card.Body>
        <Card.Text>
        <b>{data.title}</b>
        </Card.Text>
        <Card.Text>
        {data.value.humans.map(h => <Badge pill text="dark" key={h} className={classNames(styles.pill, styles.pillHuman)}>{h}</Badge>)}
        {data.value.problems.map(p => <Badge pill text="dark" key={p} className={classNames(styles.pill, styles.pillProblem)}>{p}</Badge>)}
        {data.value.technologies.map(t => <Badge pill text="dark" key={t} className={classNames(styles.pill, styles.pillTechnology)}>{t}</Badge>)}
        {data.value.promises.map(p => <Badge pill text="dark" key={p} className={classNames(styles.pill, styles.pillPromise)}>{p}</Badge>)}
        {data.value.data.map(d => <Badge pill text="dark" key={d} className={classNames(styles.pill, styles.pillData)}>{d}</Badge>)}
        </Card.Text>
        <svg ref={svgEl} width="100%" height={height}></svg>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><span className={styles.taskButton}>Task list</span></Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
        <ListGroup variant="flush" as="ol" numbered>
        {data.loop.map((task) => {
            if (task.actor === "human") {
                return <ListGroup.Item key={task[0]} as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ textTransform: "capitalize" }}><Badge pill text="dark" className={classNames(styles.pill, styles.pillHuman)}>{task.actor}</Badge> {task.type}</div>
                {task.label}
                </div>
                </ListGroup.Item>
            } else {
                return <ListGroup.Item key={task[0]} as="li" className="d-flex justify-content-between align-items-start"><div className="ms-2 me-auto">
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
        </>
        );
    }