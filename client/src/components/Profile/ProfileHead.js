import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

import Service from "../../service/Auth.service"

class ProfileHead extends Component {
  constructor() {
    super();
    this.state = {}
    this._service = new Service()
  }

  componentDidMount(){
    this._service
      .loggedin()
      .then(theLoggedInUserFromTheServer =>
        this.setState(theLoggedInUserFromTheServer.data)
      )
      .catch(err => {
        this.setState({ loggedInUser: false })
        console.log({ err })
      });
  }

  render() {
    console.log(this.state.imageUrl)
    return (
      <Container>
        <div className="profileDiv">
          <h1>{this.state.username} {this.state.userlastname}</h1>
        </div>
        <div className="profileImgDiv">
        {(this.state.imageUrl !== undefined) && (
          <Row style={{ height: 80 + "px" }}>
            <Col md="12" className="ImgRow">
              <img src={this.state.imageUrl} alt="pic"></img>
            </Col>
            </Row>)}
          <Row>
            <Col md="4" className="datosProfile">
              <h3>Compras</h3>
            </Col>
            <Col md="4" className="datosProfile">
              <h3>Ventas</h3>
            </Col>
            <Col md="4" className="datosProfile">
              <h3>Valoración</h3>
            </Col>
          </Row>
        </div>
      </Container>
      )
  }
}

export default ProfileHead;
