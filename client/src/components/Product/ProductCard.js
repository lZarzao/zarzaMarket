import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col xs={6} md={4}>
        <Card>
          <Card.Img variant="top" src={this.props.products.imageUrl} alt="image" />
          <hr />
          <Card.Body>
            <Card.Title>{this.props.products.name}</Card.Title>
            <Card.Text>
              {this.props.products.category} {this.props.products.subcategory}
              <br />
              {this.props.products.price} {"€"}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <Link
                to={`/zarzamarket/product/${this.props.products._id}`}
                className={this.props.products.imageUrl}
                style={{ width: "100%" }}
              >
                Detalles
              </Link>
            </small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default ProductCard;