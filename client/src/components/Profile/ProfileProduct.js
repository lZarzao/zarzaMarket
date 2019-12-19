import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Profile/ProfileProductCard";
import Service from "../../service/Product.service";

class ProfileProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this._service = new Service();
    this._service
      .find()
      .then(theProducts => {
        this.setState({ products: theProducts.data });
      })
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <Container>
        <Row>
        {this.state.products.map((elm, idx) => (
          <ProductCard key={idx} history={this.props.history} products={elm} />
        ))}
        </Row>
      </Container>
    );
  }
}

export default ProfileProducts;
