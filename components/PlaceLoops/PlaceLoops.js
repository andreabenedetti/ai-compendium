import Loops from "../Loops";
import data from "../../data/data";
import { Col, Row } from "react-bootstrap";

export default function PlaceLoops() {
    return (
        <>
        <Row className="mb-5"><h1>{data.length} papers analyzed</h1></Row>
        
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            data.map((loop) => (<Col key={loop.title}><Loops key={loop.title} data={loop} /></Col>))
        }
        </Row>
        </>
        );
    }