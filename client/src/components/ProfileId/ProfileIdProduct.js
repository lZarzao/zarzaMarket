import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import ProductCard from "./ProfileIdProductCard"

import Service from "../../service/Product.service"

class ProfileIdProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    };
    this._service = new Service();
    this._service
      .findVisitProducts(props.user._id)
      .then(theProducts => {
        this.setState({ products: theProducts.data });
      })
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <Container style={{ width: "75vw" }}>
        <h1>Productos a la Venta</h1>
        <hr />
        <Row className="productsProfile">
          {this.state.products.map((elm, idx) => (
            <ProductCard
              key={idx}
              history={this.props.history}
              products={elm}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProfileIdProducts;
