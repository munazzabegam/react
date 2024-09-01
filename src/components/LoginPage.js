import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

function LoginPage() {
  return (
    <Container id='loginContainer' fluid className="d-flex justify-content-center align-items-center container">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                    <a style={{color: "white", textDecoration: "none"}} href='/home'>Login</a>
                </Button>

                <div className="text-center mt-3">
                  <a href="#forgot-password" className="text-muted">Forgot Password?</a>
                </div>

                <div className="text-center mt-3">
                  <span className="text-muted">Don't have an account? </span>
                  <a href="/signup" className="text-primary">Sign Up</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
