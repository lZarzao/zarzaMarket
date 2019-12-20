import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";

import Service from "../../service/Product.service";

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
      modelCode: "",
      brand: "",
      imageUrl: String,
    };
    this._service = new Service();
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
    this.props.history.push("/zarzamarket/profile/myproducts");
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
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="imgDetail">
              <img src={this.state.imageUrl} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetail