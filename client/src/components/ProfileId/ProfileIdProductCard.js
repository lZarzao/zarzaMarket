import React, {Component} from "react"
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

import Service from "../../service/Product.service";

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._service = new Service()
  }

  render() {
    return (
      <>
        <Col xs={6} md={4}>
          <Card className="profileProductCard">
            <Card.Img variant="top" src={this.props.products.imageUrl} />
            <hr />
            <Card.Body>
              <Link
                to={`/zarzamarket/visit/profile/${this.props.products.creator}/products/details/${this.props.products._id}` }
              >
                <Card.Title>{this.props.products.name}</Card.Title>
              </Link>
              <Card.Text>
                {this.props.products.category} {this.props.products.subcategory}
                <br />
                {this.props.products.price} {"€"}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
}

export default ProductCard