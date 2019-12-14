import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Service from "./service"

class ProfilePayment extends Component {
  constructor() {
    super();
    this.state = {};
    // this._service = new Service()
    // this._service.
  }

  render() {
    return (
      <Container>
        <div className="datosDiv">
          <div className="datosDivHead">
            <h4>Mis Métodos de Pagos</h4>
            <p>Editar</p>
          </div>
          <hr />
          <h4>Cuenta de PayPal</h4>
          <Row>
            <Col>
              <h5>Datos</h5>
            </Col>
            <Col>
              <h5>Datos</h5>
            </Col>
          </Row>
          <br />
          <h4>Tarjetas de Crédito</h4>
          <Row>
            <Col>
              <h5>Datos</h5>
            </Col>
            <Col>
              <h5>Datos</h5>
            </Col>
          </Row>
          <br />
          <h4>Cuentas Bancarias</h4>
          <Row>
            <Col>
              <h5>Datos</h5>
            </Col>
            <Col>
              <h5>Datos</h5>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default ProfilePayment;
