import Loops from "../Loops";

import { Col, Row } from "react-bootstrap";
import * as d3 from "d3";

export default function PlaceLoops( cards ) {
    const data = cards.cards.sort((a, b) => d3.ascending(a.title, b.title));
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