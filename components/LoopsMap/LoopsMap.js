import SmallLoops from "../SmallLoops/SmallLoops";
import data from "../../data/data";
import { Col, Row } from "react-bootstrap";

export default function LoopsMap() {
    return (
        <>
        <Row className="mb-5"><h1>{data.length} papers analyzed</h1></Row>
        
        <Row xs={2} md={3} lg={5} className="g-4">
        {
            data.map((loop) => (<Col key={loop.title}><SmallLoops key={loop.title} data={loop} /></Col>))
        }
        </Row>
        </>
        );
    }