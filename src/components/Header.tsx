import {
  Row,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

// This is a reusable header.
export default function Header() {
  return (
    <Row className="page-title">
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>

          <Navbar.Brand href="./home" className="brand-title">DIGITAL TRANSFORMATION</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              {/* Navbar links */}
              <Nav.Link href="./home">Home</Nav.Link>
              <Nav.Link href="./hobbies">Hobbies</Nav.Link>
              <Nav.Link href="./json">JSON</Nav.Link>
              <Nav.Link href="./calculator">Calculator</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}
