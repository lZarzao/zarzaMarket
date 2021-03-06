import React, {Component} from "react"
import { Col, Button, Card } from "react-bootstrap"
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
    console.log(this.props)
    return (
      <>
        <Col xs={6} md={4}>
        <Card className="profileProductCard">
         <Card.Img variant="top" src={this.props.products.imageUrl} />
          <hr />
          <Card.Body>
             <Link to={`/zarzamarket/profile/myproducts/${this.props.products._id}`}><Card.Title>{this.props.products.name}</Card.Title></Link>
            <Card.Text>
              {this.props.products.category} {this.props.products.subcategory}
              <br />
              {this.props.products.price} {"€"}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <Link
                to={`/zarzamarket/profile/myproducts/edit/${this.props.products._id}`}
                className="mt-auto btn btn-primary"
                style={{ width: "100%" }}
              >
                Editar
              </Link><br/><br/>
              <Button className="DeleteButton" onClick={this.handleSubmit} style={{ width: "100%" }}>Eliminar</Button>
            </small>
          </Card.Footer>
        </Card>
      </Col>
      </>
    );
  }
}

export default ProductCard