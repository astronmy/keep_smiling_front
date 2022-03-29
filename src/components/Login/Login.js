
import './Login.css'
import { Card, Button, Form, Alert } from "react-bootstrap"
import { useEffect, useState } from 'react'
import axios from 'axios'


const Login = () => {
    const [token, setToken] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        
    })

    const login = () => {
        if (!(username && password)) {
            setMessage("Debe ingresar su nombre de usuario y contraseña")
            setShowAlert(true)
            return;
        }
        setShowAlert(false)
        axios.post(`${process.env.REACT_APP_API_BASE_URL}login`, {email: username, password: password}).then((response) => {
            const data = response.data;
            setToken(data.token)
        }).catch((error) => {
            setMessage("Los datos ingresados son incorrectos")
            setShowAlert(true)
        }) 
    }

    return (

        <div className="container d-flex flex-column justify-content-center mt-5">
            <Alert variant="danger" className='w-50 alert' show={showAlert} onClose={(e) => setShowAlert(false)} dismissible>
                <Alert.Heading>Advertencia! </Alert.Heading>
                <hr />
                <p className="mb-0">{message}</p>
            </Alert>
            <Card className="mt-5 p-4 card shadow">
                <Card.Img className='card__image' variant="top" src="images/logo.jpeg" />
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="success" type="button" onClick={login}>
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
                <small className='text-muted text-center mt-3'>v. {process.env.REACT_APP_VERSION}</small>
            </Card>
            
        </div>
    )
}

export default Login