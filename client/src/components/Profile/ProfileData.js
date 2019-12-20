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
              <p><span>Nombre:</span> {this.state.username}</p>
            </Col>
            <Col>
                <p><span>Apellido: </span>{this.state.userlastname}</p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <p>
                <span>Teléfono: </span> {this.state.telefono}
              </p>
            </Col>
            <Col>
              <p>
                <span>Email: </span>{this.state.email}
              </p>
            </Col>
          </Row>
          <hr/>
          <br />
          <span>Horario: </span>
          <br /><br/>
          <span>Dirección:</span>
          <hr/>
        </div>
      </Container>
    );
  }
}

export default ProfileData;
