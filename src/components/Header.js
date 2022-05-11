import { Nav, Container, Navbar} from 'react-bootstrap';

export default function Header() {
    return (
        <div className='header-container'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-ToDo App</Navbar.Brand>
                        <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}