import Header from "../Header/Header";
import {Button, Form} from "react-bootstrap";
import '../../main.css'
import './register.css'
import Footer from "../Footer/Footer";
import {useRef, useState, useEffect} from "react";
import {validatePassword, validateEmail, validatePasswordMatch} from "../Utils/Validation";

export default function RegisterPage() {

    const userRef = useRef();
    const errRef = useRef();

    const [userEmail, setUserEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatchPassword, setValidMatchPassword] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = validateEmail(userEmail);
        console.log(result);
        console.log(userEmail);
        setValidEmail(result);
    }, [userEmail]);

    useEffect(() => {
        const result = validatePassword(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const matchedPassword = validatePasswordMatch(password, matchPassword);
        setValidMatchPassword(matchedPassword);
    }, [password, matchPassword]);

    useEffect(() =>{
        setErrorMessage('');
    }, [userEmail, password, matchPassword])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // Check if someone is not trying to brute force this into the database
        const v1 = validateEmail(userEmail);
        const v2 = validatePassword(password);
        if(!v1 || !v2) {
            setErrorMessage("Vul alstublieft alle gegevens in");
            return;
        }
        //TODO add logic for inserting into db here:
        setSucces(true);

    }

    return(
        <>
            <div className="main-content">
                <Header/>
                <h1>Registreren</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="userEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Vul uw emailadres in"
                                      ref={userRef}
                                      onChange={(e) => setUserEmail(e.target.value)} required
                                      autoComplete= "off"
                                      aria-invalid={validEmail ? "false" : "true"}
                                      aria-describedby="uidnote"
                                      onFocus={() => setUserFocus(true)}
                                      onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && userEmail && !validEmail ? "instructions": "offscreen"}>
                            Dit moet een geldig email adres zijn.
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Wachtwoord</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Wachtwoord"
                                      onChange={(e) => setPassword(e.target.value)} required
                                      aria-invalid={validPassword ? "false" : "true"}
                                      aria-describedby= "passwordnote"
                                      onFocus={() => setPasswordFocus(true)}
                                      onBlur={() => setPasswordFocus(false)}
                        />
                        <p id="passwordnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            Het wachtwoord moet minimaal 8 karakters bevatten <br />
                            waarvan minstens 1 hoofdletter, 1 nummer en 1 speciaal karakter.
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordRepeat">
                        <Form.Label>Herhaal wachtwoord</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Herhaal uw wachtwoord"
                                      onChange={(e) => setMatchPassword(e.target.value)} required
                                      aria-invalid={validMatchPassword ? "false" : "true"}
                                      aria-describedby={"confirmnote"}
                                      onFocus={() => setMatchFocus(true)}
                                      onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatchPassword ? "instructions" : "offscreen"}>
                            De wachtwoorden moeten hetzelfde zijn
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userType">
                        <Form.Label>Kies een profiel type</Form.Label>
                        <Form.Select aria-label="userType">
                            <option value="employer">Werkgever</option>
                            <option value="employee">Werknemer</option>
                        </Form.Select>
                    </Form.Group>
                    <Button disabled={!validEmail || !validPassword || !validMatchPassword} variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>
                        Heeft u al een account?
                        <span className="registrationLink"> <br/>
                            <a href="/login">Login</a>
                        </span>
                    </p>
                </Form>
                <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live={"assertive"}>{errorMessage}</p>
                <Footer/>
            </div>
        </>

    )
}