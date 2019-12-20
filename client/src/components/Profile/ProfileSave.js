import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Service from "../../service/Status.service";

class ProfileShop extends Component {
  constructor() {
    super();
    this.state = {
      pending: [],
      sold: []
    };
    this._service = new Service();
  }

  componentDidMount() {
    let aux = [];
    let pending = [];
    let sold = [];
    this._service
      .getStatus()
      .then(theProducts => (aux = theProducts.data))
      .then(() =>
        aux.map(elm =>
          elm.status === "pending" ? pending.push(elm) : sold.push(elm)
        )
      )
      .then(() => this.setState({ pending: pending, sold: sold }))
      .catch(err => console.log(err.response));
  }

  render() {
    console.log(this.state);
    return (
      <Container style={{ width: "75vw" }}>
        <h1>Productos Guardados</h1>
        <hr />
        {this.state.pending.length === 0 ? (
          <h3>No tiene productos pendientes...</h3>
        ) : (
          <Row className="productsProfile">
            {this.state.pending.map((elm, idx) => (
              <Col key={idx} xs={6} md={4}>
                <Card className="profileProductCard">
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <hr />
                  <Card.Body>
                    <Link
                      to={`/zarzamarket/profile/myproducts/${elm.product._id}`}
                    >
                      <Card.Title>{elm.product.name}</Card.Title>
                    </Link>
                    <Card.Text>
                      {elm.product.category} {elm.product.subcategory}
                      <br />
                      {elm.product.price} {"€"}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <Button
                        className="DeleteButton"
                        onClick={this.handleSubmit}
                        style={{ width: "100%" }}
                      >
                        Cancelar
                      </Button>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
}

export default ProfileShop;