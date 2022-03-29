import { useEffect, useState } from "react"
import { Table, Container, Navbar, Nav } from "react-bootstrap"
import { getAll } from "../../services/dentists"
import { isLogged } from '../../helpers/auth-helpers'
import { useNavigate } from 'react-router-dom';
import { getUserToken, deleteUserToken } from '../../helpers/auth-helpers'

const Dentists = () => {
    const navigate = useNavigate()
    const [dentists, setDentists] = useState([])

    const populate = async () => {
        setDentists(await getAll(getUserToken()))
    }

    useEffect(() => {
        if (!isLogged()) {
            navigate('/');
        }
        populate()
    }, [])

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex ">
                    <Navbar.Brand href="#">KeepSmiling</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="active" href="/dentists">Dentists</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="bg-danger text-right" onClick={() => {deleteUserToken(); navigate('/')}} href="#">Salir</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className='mt-3'>

                <Table striped hover responsive className="mt-4">
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
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Dentists