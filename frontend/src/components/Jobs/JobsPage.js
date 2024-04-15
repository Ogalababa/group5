import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import SearchJobs from "../SearchJobs/SearchJobs";

export default function JobsPage() {
    return(
        <>
            <Header/>
            <SearchJobs/>
            <Container>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Vacature 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Vacature 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Vacature 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Vacature 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>

    )
}