import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

function SignUpPage() {
  return (
    <Container id='signUpContainer' fluid className="d-flex justify-content-center align-items-center container">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Sign Up
                </Button>

                <div className="text-center mt-3">
                  <span className="text-muted">Already have an account? </span>
                  <a href="/login" className="text-primary">Login</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPage;
