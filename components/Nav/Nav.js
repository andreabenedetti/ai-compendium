import { Navbar, Container } from 'react-bootstrap';
import styles from "./Nav.module.scss";

export default function Nav() {
    return (
        <Navbar fixed="bottom" className={styles.nav} expand="lg">
            <Container fluid>
                <Navbar.Text href="#home">shAI Compendium</Navbar.Text>
            </Container>
        </Navbar>
    );
}