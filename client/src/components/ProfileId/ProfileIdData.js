import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Service from "../../service/Auth.service";

class ProfileData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._service = new Service();
  }

  render() {
    return (
      <Container>
      <h1>Perfil</h1><hr/>
        <div className="datosDiv">
          <div className="datosDivHead">
            <h4>Datos</h4>
          </div>
          <hr />
          <Row>
            <Col>
              <h5>
                Nombre: <p>{this.props.user.username}</p>
              </h5>
            </Col>
            <Col>
              <h5>
                Apellido: <p>{this.props.user.userlastname}</p>
              </h5>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h5>
                Teléfono: <p>{this.props.user.telefono}</p>
              </h5>
            </Col>
            <Col>
              <h5>
                Email: <p>{this.props.user.email}</p>
              </h5>
            </Col>
          </Row>
          <br />
          <h5>Horario:</h5>
          <br />
          <h5>Dirección:</h5>
        </div>
      </Container>
    );
  }
}

export default ProfileData;
