import './Dentists.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { useEffect, useState } from "react"
import { Table, Container, Navbar, Nav, Card, Form, Row, Col, Button } from "react-bootstrap"
import { getAll } from "../../services/dentists"
import { getAll as getCountries } from "../../services/countries"
import { isLogged } from '../../helpers/auth-helpers'
import { useNavigate } from 'react-router-dom';
import { getUserToken, deleteUserToken } from '../../helpers/auth-helpers'

const Dentists = () => {
    const navigate = useNavigate()
    const [dentists, setDentists] = useState([])
    const [countries, setCountries] = useState([])
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [country, setCountry] = useState(null)
    const [created, setCreated] = useState(null)

    const handleChange = (e) => {
        sessionStorage.setItem(e.target.name, e.target.value)
        switch (e.target.name) {
            case 'name': setName(e.target.value); break;
            case 'surname': setSurname(e.target.value); break;
            case 'country': setCountry(e.target.value); break;
            case 'created': setCreated(e.target.value); break;
        }
    };

    const populate = async () => {
        const token = getUserToken()
        setCountries(await getCountries(getUserToken()))
        setDentists(await getAll(token, { name, surname, country, created }))
    }

    const clean = () => {
        sessionStorage.removeItem("name")
        sessionStorage.removeItem("surname")
        sessionStorage.removeItem("country")
        sessionStorage.removeItem("created")

        setName(null);
        setSurname(null);
        setCreated(null);
        setCountry(null);
    }

    useEffect(async() => {
        if (!isLogged()) {
            navigate('/');
        }
        setName((sessionStorage.getItem("name") && sessionStorage.getItem("name")))
        setSurname((sessionStorage.getItem("surname") && sessionStorage.getItem("surname")))
        setCreated((sessionStorage.getItem("created") && sessionStorage.getItem("created")))
        
    }, [])
    useEffect(() => {
        populate()
    }, [name, created, country, surname])

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex ">
                    <Navbar.Brand href="#">KeepSmiling</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="active" href="/dentists">Dentists</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="bg-danger text-right" onClick={() => { deleteUserToken(); navigate('/') }} href="#">Salir</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className='mt-4'>
                <Card className="w-100 shadow mb-2">
                    <Row className="p-1">
                        <Col xs="10" lg="4" sm="6" className="d-flex mt-2 mb-1 justify-content-center">
                            <Form.Group as={Row} className="mb-1">
                                <Form.Label column sm="4">
                                    Name
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control type="text" name="name" placeholder="name" value={name ? name : ''} onChange={handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col xs="10" lg="4" sm="6" className="d-flex mt-2 mb-1 justify-content-center">
                            <Form.Group as={Row} className="mb-1">
                                <Form.Label column sm="4">
                                    Surname
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control type="text" name="surname" placeholder="surname" value={surname ? surname : ''} onChange={handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col xs="10" lg="4" sm="6" className="d-flex mt-2 mb-1 justify-content-center">
                            <Form.Group as={Row} className="mb-1">
                                <Form.Label column sm="4">
                                    Country
                                </Form.Label>
                                <Col lg="11">
                                    <Form.Select name="country" onChange={handleChange}>
                                        <option defaultValue={""} value={!country && ''} >select country</option>
                                        {countries.map(item => (
                                            <option key={item.id} value={item.id} selected={country == item.id}>{item.name}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col xs="10" lg="4" sm="6" className="d-flex mt-4 mb-2 justify-content-center">
                            <Form.Group as={Row} className="mb-1">
                                <Form.Label column sm="4">
                                    Created at
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control type="date" name="created" placeholder="created at" value={created ? created : ''} onChange={handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row className="d-flex justify-content-end my-2">
                        <Col xs="10" sm="3">
                            <Form.Group className="mb-1">
                                <Button variant="danger" size="sm" onClick={clean}>
                                    Clean
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>

                </Card>
            </Container>
            <Container className='mt-3'>
                <Card className="w-100 shadow mb-3">
                    <Table striped hover responsive className="mt-4 shadow">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dentists.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.country_name}</td>
                                    <td>{item.getCreatedAt()}</td>
                                </tr>
                            ))}
                            
                            {dentists.length == 0  &&<td colspan="6"><Skeleton count={20} /></td>}
                        </tbody>

                        
                    </Table>
                </Card>
            </Container>
        </>
    )
}

export default Dentists