import { Navbar, Container } from 'react-bootstrap';
// import styles from "./Nav.module.scss";

export default function Nav() {
    return (
        <Navbar className="fixed-top" expand="lg" style={{background: "#F5F5F5", borderBottom: "1px solid #DDDDDD"}}>
            <Container>
                <Navbar.Brand href="#home">shAI Compendium</Navbar.Brand>
                <Navbar.Text>Mapping human labour in AI</Navbar.Text>
            </Container>
        </Navbar>
    );
}