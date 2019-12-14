
import React, { Component } from "react";
import { Container, Button} from "react-bootstrap";

import Service from "../../service/Product.service";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      name: "",
      category: "",
      subcategory: "",
      subsubcategory: "",
      price: "",
      negotiable: false,
      description: "",
      delivery: false,
      modelCode: ""
    };
    this._service = new Service();
  }

  componentDidMount() {
    const { handle } = this.props.match.params;
    let id = handle;
    this._service
      .getOne(id)
      .then(theProduct => this.setState(theProduct.data))
      .catch(err => console.log(err));
  }

  handleSubmit = () => {
    this.props.history.push("/zarzamarket/profile/myproducts");
  }

  render() {
    return (
      <Container>
        <h1>{this.state.name}</h1>
        <Button variant="dark" onClick={this.handleSubmit}>
          Go Back
        </Button>
      </Container>
    );
  }
}

export default ProductDetail