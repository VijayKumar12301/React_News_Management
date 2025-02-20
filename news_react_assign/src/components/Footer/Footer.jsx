import { Navbar, Container, Nav } from "react-bootstrap";
function Footer(){
    return (
        <Navbar bg="primary" data-bs-theme="dark" className="" >
                <Container fluid>
                  <Nav>
                    <Nav.Item >
                        Copyrights @ 2025
                    </Nav.Item>
                  </Nav>
                </Container>
            </Navbar>
    )
}

export default Footer;