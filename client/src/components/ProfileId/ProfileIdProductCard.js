import React, {Component} from "react"
import { Col } from "react-bootstrap"
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
        <Col>
          <Link to={`/zarzamarket/visit/profile/${this.props.products._id}/products/details`}><p>{this.props.products.name}</p></Link>
          <p>{this.props.products.category}</p>
          <p>{this.props.products.price} {"€"}</p>
        </Col>
    )
  }
}

export default ProductCard