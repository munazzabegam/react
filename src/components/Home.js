import React from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  return (
    <div>
      <Navbar className='navClass' bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className='navBrand' href="#home">MyWebsite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className='navLink' href="#home">Home</Nav.Link>
              <Nav.Link className='navLink' href="#features">Features</Nav.Link>
              <Nav.Link className='navLink' href="#pricing">Pricing</Nav.Link>
              <Nav.Link className='navLink' as={Link} to="/login">Login</Nav.Link>
              <Nav.Link className='navLink' as={Link} to="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero-section d-flex justify-content-center align-items-center">
        <Row className="text-center">
          <Col>
            <h1 className="display-4">Welcome to MyWebsite</h1>
            <p className="lead">tempor incididunt ut labore et exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            <Button variant="primary" size="lg" as={Link} to="/signup">Get Started</Button>
          </Col>
        </Row>
      </Container>

      <Container id='features' className="my-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="primary" as={Link} to="/features">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary" as={Link} to="/features">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Button variant="primary" as={Link} to="/features">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
