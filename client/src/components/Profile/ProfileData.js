import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import Service from "../../service/Auth.service"

class ProfileData extends Component {
  constructor() {
    super();
    this.state = {};
    this._service = new Service();
    this._service
      .loggedin()
      .then(theLoggedInUserFromTheServer =>
        this.setState(theLoggedInUserFromTheServer.data)
      )
      .catch(err => {
        this.setState({ loggedInUser: false });
        console.log({ err });
      });
  }

  render() {
    return (
      <Container>
        <div className="datosDiv">
          <div className="datosDivHead">
            <h4>Mis Datos</h4>
            <Link to="/zarzamarket/profile/edit">
              <p>Editar mi perfil</p>
            </Link>
          </div>
          <hr />
          <Row>
            <Col>
              <h5>
                Nombre: <p>{this.state.username}</p>
              </h5>
            </Col>
            <Col>
              <h5>
                Apellido: <p>{this.state.userlastname}</p>
              </h5>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h5>
                Teléfono: <p>{this.state.telefono}</p>
              </h5>
            </Col>
            <Col>
              <h5>
                Email: <p>{this.state.email}</p>
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
