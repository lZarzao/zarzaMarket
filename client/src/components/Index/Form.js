import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const SuscribeForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Col sm="2"><Form.Label>Boletín de Ofertas</Form.Label></Col>
          <Col sm="8">
            <Form.Control type="text" placeholder="email" />
          </Col>
          <Col sm="2"><Button variant="dark" type="submit">Registrarme</Button></Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SuscribeForm;
