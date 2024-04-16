import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function Footer() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/about-us">Over ons</Nav.Link>
                            <Nav.Link href="/certificate">Certificering</Nav.Link>
                            <Nav.Link href={`${process.env.REACT_APP_API_URL}/test`}>API Test Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}