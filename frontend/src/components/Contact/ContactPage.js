import Header from "../Header/Header";
import {Button, Form} from "react-bootstrap";
import '../../main.css'
export default function AboutUsPage() {
    return(
        <>
            <div className="main-content">
                <Header/>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Naam</Form.Label>
                        <Form.Control type="name" placeholder="Vul uw naam in" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Vul uw emailadres in" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bericht">
                        <Form.Label>Bericht</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>

    )
}