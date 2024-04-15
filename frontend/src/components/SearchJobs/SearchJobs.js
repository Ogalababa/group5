import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

export default function SearchJobs(){
    return(
        <>
            <h2 className="text-center">Zoeken</h2>
            <Form>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Zoeken">
                            <Form.Control type="text"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Zoekcriteria"
                        >
                            <Form.Select aria-label="Floating label select example">
                                <option>Functie</option>
                                <option value="1">Salaris</option>
                                <option value="2">Locatie</option>
                                <option value="3">Dienstverband</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
        </>
    )
}