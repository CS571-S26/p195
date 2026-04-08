
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function BusBuddyNavbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/p195">
                BusBuddy
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/p195">Start</Nav.Link>
                    <Nav.Link as={Link} to="/p195/university-buses">University Buses</Nav.Link>
                    <Nav.Link as={Link} to="/p195/favorites">Favorites</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
