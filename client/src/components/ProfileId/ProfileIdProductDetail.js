import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Service from "../../service/Product.service";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {}
    this._service = new Service();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this._service
      .getOne(id)
      .then(theProduct => this.setState(theProduct.data))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <h1>{this.state.name}</h1>
        <h3>Descripción</h3>
        <p>{this.state.description}</p>
        <h3>Category</h3>
        <p>{this.state.category}</p>
        <h3>Sub Category</h3>
        <p>{this.state.subcategory}</p>
        {this.state.category === "Video Juegos" && (
          <>
            <h3>Sub Sub Category</h3>
            <p>{this.state.subsubcategory}</p>
          </>
        )}
        {(this.state.category === "Puzzle" ||
          this.state.category === "Video Juegos") && (
          <>
            <h3>Marca</h3>
            <p>{this.state.brand}</p>
          </>
        )}
        <h3>Precio</h3>
        <p>{this.state.price} €</p>
        <h3>Código</h3>
        <p>{this.state.modelCode}</p>
        <h3>Delívery?</h3>
        <p>{`${this.state.delivery}`}</p>
        <h3>Negociable?</h3>
        <p>{`${this.state.negotiable}`}</p>
      </Container>
    );
  }
}

export default ProductDetail