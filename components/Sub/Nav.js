import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import styles from "./Nav.module.scss";

export default function Sub( count ) {
    return (
        <Navbar fixed="bottom" className={styles.nav}>
            <Container fluid>
            <Nav className="me-auto">
                <Nav.Link className={styles.navBrand} href="/">AI Compendium</Nav.Link>
                <Nav.Link href="/loops">Loops</Nav.Link>
                <Nav.Link href="/tasks">Tasks</Nav.Link>
                <Navbar.Text>{count.count} papers analyzed</Navbar.Text>
            </Nav>
            </Container>
        </Navbar>
    );
}