import Loops from "../Loops";

import { Col, Row } from "react-bootstrap";
import * as d3 from "d3";

export default function PlaceLoops( cards ) {

    const data = cards.cards;

    data.forEach(d => {
        d.humanCount = d.loop.filter(e => e.actor === "human").length;
        d.algoCount = d.loop.filter(e => e.actor === "algorithm").length;
    });

    data.sort((a, b) => d3.descending(a.humanCount, b.humanCount) || d3.ascending(a.algoCount, b.algoCount));

    console.log(data);

    return (
        <>        
        <Row xs={1} md={3} lg={3} className="g-2">
        {
            data.map((loop) => (<Col key={loop.title}><Loops key={loop.title} data={loop} /></Col>))
        }
        </Row>
        </>
        );
    }