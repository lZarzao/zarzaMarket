import React, { Component } from "react"
import { Container, Button, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import Service from "../../service/Product.service"
import BuyService from "../../service/Status.service"

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      name: "",
      category: "",
      subcategory: "",
      subsubcategory: "",
      price: "",
      negotiable: false,
      description: "",
      delivery: false,
      brand: "",
      modelCode: "",
      imageUrl:"",
      creator: {}
    }
    this._service = new Service()
    this._buyService = new BuyService()
  }

  componentDidMount() {
    const { handle } = this.props.match.params;
    let id = handle;
    this._service
      .getOne(id)
      .then(theProduct => this.setState(theProduct.data))
      .catch(err => console.log(err));
  }

  handleSubmit = () => {
    let id = this.state._id
    let product = this.state._id;
    let creator = this.state.creator._id;
    let status = "pending"
    let show = false
    this._buyService
      .buy(product, status, creator)
      .then(() => {this._service.update(id, show)})
      .then(()=> this.props.history.push("/zarzamarket"))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <h1>{this.state.name}</h1>
        <Row>
          <Col xs={12} md={6}>
            <div className="DetailView">
              <p>
                <span>Categoría: </span> {this.state.category}
              </p>
              <p>
                <span>Sub Categoría: </span>
                {this.state.subcategory}
              </p>
              {this.state.category === "Video Juegos" && (
                <>
                  <p>{this.state.subsubcategory}</p>
                </>
              )}
              {(this.state.category === "Puzzle" ||
                this.state.category === "Video Juegos") && (
                <>
                  <p>
                    <span>Marca: </span> {this.state.brand}
                  </p>
                </>
              )}
              <hr />
              <p>
                <span>Código del Producto: </span>
                {this.state.modelCode}
              </p>
              <hr />
              <p>
                <span>Valor de venta: </span>
                {this.state.price} €
              </p>
              <hr />
              <span>Descripción</span>
              <p>{this.state.description}</p>
              <hr />
              {this.state.delivery ? (
                <p>Cuenta con Delívery</p>
              ) : (
                <p>No cuenta con Delívery</p>
              )}
              {this.state.negotiable ? (
                <p>El precio es negociable</p>
              ) : (
                <p>El precio no es Negociable</p>
              )}
              <hr />
              <span>Creador: </span>
              <Link to={`/zarzamarket/visit/profile/${this.state.creator._id}`}>
                {this.state.creator.username} {this.state.creator.userlastname}
                <br />
              </Link>
              <br />
              <Button variant="dark" onClick={this.handleSubmit}>
                Buy
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="imgDetail">
              <img src={this.state.imageUrl} alt="image" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetail