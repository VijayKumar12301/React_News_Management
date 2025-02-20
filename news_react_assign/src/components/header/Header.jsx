import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Header.css";

function Header() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand>News Details</Navbar.Brand>
                    <Nav>
                    <Nav.Item>
                            <Nav.Link>
                                <Link className="mylink" to="">Home</Link>
                            </Nav.Link>
                            </Nav.Item>

                        <Nav.Item>
                            
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    News
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link to="/Addnewss">Add News</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Searchnews">Search News</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                   
                
                        <Nav.Item>
                            <Nav.Link>
                                <Link className="mylink" to="/Login">Login</Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>
                                <Link className="mylink" to="/Register">Register</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
