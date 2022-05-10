import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-ToDo App</Navbar.Brand>
                        <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}