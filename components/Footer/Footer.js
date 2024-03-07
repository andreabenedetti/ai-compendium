import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <Container className={styles.footerContainer} fluid>
            <Row>
                <Col md={6}>
                    <p><b>Author, PhD Candidate</b> - Andrea Benedetti</p>
                    <p><b>Scientific supervisor</b> - Donato Ricci</p>
                    <p>Researched and developed in 2023.</p>
                </Col>
                <Col md={6}>
                    <p>The <i>AI Compendium</i> is developed within the scope of Shaping AI, s a multi-national and multi-disciplinary social research project that examines the global trajectories of public discourse on artificial intelligence (AI) in four countries (Germany, UK, Canada and France) over a ten-year period 2012-2021. The <i>AI Compendium</i> is part of the PhD Thesis of Andrea Benedetti.</p>
                </Col>
            </Row>
        </Container>
    )
}