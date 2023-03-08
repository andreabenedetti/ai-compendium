import { Navbar, Container } from 'react-bootstrap';

export default function Nav() {
    return (
        <Navbar className="fixed-top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">shAI Compendium</Navbar.Brand>
                <Navbar.Text>Mapping human labour in AI</Navbar.Text>
            </Container>
        </Navbar>
    );
}