import React, { Component } from "react"
import { Container, Row, Col, } from "react-bootstrap"
import { Link } from "react-router-dom"

import Service from "../../service/Auth.service"

class ProfileHead extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._service = new Service()
  }

  render() {

    return (
      <Container>
        <div className="profileDiv">
          <h1>
            {this.props.user.username} {this.props.user.userlastname}
          </h1>
          <p>{this.props.user.email}</p>
        </div>
        <div className="profileImgDiv">
          <Row style={{ height: 80 + "px" }}>
            <Col md="12" className="ImgRow">
              <img src="/images/xbox.png" alt="pic"></img>
            </Col>
          </Row>
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
        <Row>
          <Col md="3"><Link to={`/zarzamarket/visit/profile/${this.props.user._id}`}>Profile</Link></Col>
          <Col md="3"><Link to={`/zarzamarket/visit/profile/${this.props.user._id}/products`}>Products</Link></Col>
          <Col md="3"><Link to={`/zarzamarket/visit/profile/${this.props.user._id}/sales`}>Sales</Link></Col>
          <Col md="3"><Link to={`/zarzamarket/visit/profile/${this.props.user._id}/valoration`}>Valoration</Link></Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileHead;
