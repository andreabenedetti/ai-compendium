import Loops from "../Loops";
import data from "../../data/data";
import { Col, Row } from "react-bootstrap";

export default function PlaceLoops() {
    return (
        <>
        <Row className="mb-5"><p>{data.length} papers analyzed</p></Row>
        
        <Row xs={1} md={3} lg={3} className="g-2">
        {
            data.map((loop) => (<Col key={loop.title}><Loops key={loop.title} data={loop} /></Col>))
        }
        </Row>
        </>
        );
    }