import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProfileIdProductCard"

import StatusService from "../../service/Status.service";

class ProfileShop extends Component {
  constructor() {
    super();
    this.state = {
      sold: []
    }
    this._statusService = new StatusService()
  }

componentDidMount(){
    let aux = []
    let sold = []
     this._statusService.getSold()
      .then(theProducts => (aux = theProducts.data))
      .then(()=> aux.map((elm)=> elm.status === "sold" && sold.push(elm)))
      .then(() => this.setState({ sold: sold }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <Container style={{width: "75vw"}}>
        <h1>Productos Vendidos</h1>
        <hr />
        <Row className="productsProfile">
          {this.state.sold.length === 0 ? (
            <h3>No tiene productos vendidos...</h3>
          ) : (
            this.state.sold.map((elm, idx) => (
              <ProductCard
                key={idx}
                history={this.props.history}
                products={elm.product}
              />
            ))
          )}
        </Row>
        <hr />
      </Container>
    );
  }
}

export default ProfileShop;
