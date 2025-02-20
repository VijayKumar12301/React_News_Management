import { Navbar, Container, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";  // Make sure to import Link from react-router-dom


function Drop_news() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand>News Details</Navbar.Brand>

        <Nav className="me-auto">
          {/* Dropdown for Add News and Search News */}
          <Nav.Item>
            <DropdownButton
              variant="link"
              id="dropdown-basic-button"
              title="News"
              className="text-light"
            >
              <Dropdown.Item as={Link} to="/Addnews">Add News</Dropdown.Item>
              <Dropdown.Item as={Link} to="/searchnews">Search News</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
        </Nav>

        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/login" className="mylink">Login</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/register" className="mylink">Register</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Drop_news;
