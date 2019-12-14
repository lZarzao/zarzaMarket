import React, {Component} from "react"
import { Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import Service from "../../service/Product.service";

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._service = new Service()
  }

  handleSubmit = e => {
    e.preventDefault()
    let id = this.props.products._id;
    this._service
      .delete(id)
      .then(() => {
      this.props.history.push("/zarzamarket/profile");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Col>
          <Link to={`/zarzamarket/profile/myproducts/${this.props.products._id}`}><p>{this.props.products.name}</p></Link>
          <p>{this.props.products.category}</p>
          <p>{this.props.products.price} {"€"}</p>
          <Link to={`/zarzamarket/profile/myproducts/edit/${this.props.products._id}`}>Editar</Link><br />
          <Button variant="dark" onClick={this.handleSubmit}>Eliminar</Button>
        </Col>
      </>
    );
  }
}

export default ProductCard