import Loops from "../Loops";
import data from "../../data/data";
import { Col, Row } from "react-bootstrap";

export default function PlaceLoops() {
    return (
        <>
        <Row xs={1} md={2} className="g-4">
        {
            data.map((loop) => (<Col key={loop.title}><Loops key={loop.title} data={loop} /></Col>))
        }
        </Row>
        </>
        );
    }