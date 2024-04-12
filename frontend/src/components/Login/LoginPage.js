import Header from "../Header/Header";
import {Button, Form} from "react-bootstrap";
import '../../main.css'
import Footer from "../Footer/Footer";
export default function LoginPage() {
    return(
        <>
            <div className="main-content">
                <Header/>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Vul uw emailadres in" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Wachtwoord</Form.Label>
                        <Form.Control type="password" placeholder="Wachtwoord" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordRepeat">
                        <Form.Label>Herhaal wachtwoord</Form.Label>
                        <Form.Control type="password" placeholder="Herhaal uw wachtwoord" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Footer/>
            </div>
        </>

    )
}