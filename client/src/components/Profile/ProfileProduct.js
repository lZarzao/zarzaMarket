import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import ProductCard from "../Profile/ProfileProductCard"
import ProdcutCard2 from "./ProfileProductCardStatus"

import StatusService from "../../service/Status.service"
import Service from "../../service/Product.service"

class ProfileProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      pending: [],
      sold: []
    }
    this._service = new Service()
    this._statusService = new StatusService()
  }

  componentDidMount(){
    let aux = []
    let pending = []
    let sold = []
    this._service.find()
      .then(theProducts => {
        //aux = theProducts.data.filter((elm)=> elm.show === true)
        aux = theProducts.data
        this.setState({ products: aux })
      })
      .then(()=> this._statusService.getSold())
      .then(theProducts => (aux = theProducts.data))
      .then(()=> aux.map((elm)=> elm.status === "pending" ? pending.push(elm) : sold.push(elm)))
      .then(() => this.setState({ pending: pending, sold: sold }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <Container style={{ width: "75vw" }}>
        <h1>Mis productos a la Venta</h1>
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
        <h1>Productos Pendientes</h1>
        <hr />
        <Row className="productsProfile">
          {this.state.pending.length === 0 ? (
            <h3>No tiene productos pendientes...</h3>
          ) : (
            this.state.pending.map((elm, idx) => (
              <ProdcutCard2
                key={idx}
                history={this.props.history}
                products={elm.product}
                pending={{ pending: true }}
              />
            ))
          )}
        </Row>
        <h1>Productos Vendidos</h1>
        <hr />
        <Row className="productsProfile">
          {this.state.sold.length === 0 ? (
            <h3>No tiene productos vendidos...</h3>
          ) : (
            this.state.sold.map((elm, idx) => (
              <ProdcutCard2
                key={idx}
                history={this.props.history}
                products={elm.product}
                sold={{ sold: true }}
              />
            ))
          )}
        </Row>
        <hr />
      </Container>
    );
  }
}

export default ProfileProducts;
