import React, { Component } from "react";
import { Container, Row, Form } from "react-bootstrap";
import ProductCard from "../Product/ProductCard";

import Service from "../../service/Product.service";
import AuthService from "../../service/Auth.service"

class Lego extends Component {
  constructor() {
    super()
    this.state = {
      legos: [],
      backup: [],
      category: [],
      price: 0,
      filterCategory:[],
      filterPrice:[],
      negotiable: false,
      delivery: false
    }
    this._authService = new AuthService()
    this._service = new Service()
  }

  componentDidMount() {
    let category = "LEGO"
    let id = ""
    let aux = []
    this._authService
      .loggedin()
      .then(theResult => {
        theResult.data._id && (id = theResult.data._id)
      })
      .catch(err => console.log(err.response));
    this._service.findByCategory(category)
      .then(theResult => {
        //DEBO CAMBIAR EL "||" POR "&&"
        aux = theResult.data.filter(elm => elm.creator !== id || elm.show === true)
      })
      .then(() =>
        this.setState({ legos: aux, backup: aux })
      )
      .then(() => {
        let categoryCopy = [];
        let priceCopy = [];
        this.state.legos.map(elm => priceCopy.push(elm.price));
        priceCopy.sort((a, b) => a - b);
        priceCopy.splice(0, priceCopy.length - 1);
        this.setState({ price: priceCopy[0] });
        this.state.legos.map(elm => categoryCopy.push(elm.subcategory));
        this.setState({
          category: categoryCopy.filter(function(item, index, array) {
            return array.indexOf(item) === index;
          })
        });
      })
      .catch(err => console.log(err.response));
  }

  handleInputChange = e => {
    let thecopy = [...this.state.filterCategory]
    e.target.checked ? thecopy.push(e.target.value) : thecopy = thecopy.filter(function(elm) {
      return elm !== e.target.value
    })
    this.setState({filterCategory: thecopy}, ()=> this.filter())
    }

  filter = () => {
      let legoCopy = []
      this.state.filterCategory.forEach((cat) => this.state.backup.forEach((elm) => (elm.subcategory === cat && legoCopy.push(elm))))
      this.state.filterCategory.length === 0 && (legoCopy = [...this.state.backup])
      this.state.delivery && (legoCopy = legoCopy.filter((elm)=> elm.delivery === true))
      this.state.negotiable && (legoCopy = legoCopy.filter((elm)=> elm.negotiable === true))
      this.state.filterPrice.length &&
      (legoCopy = legoCopy.filter((elm) => (elm.price >= (this.state.filterPrice[0]-100) && elm.price <= (this.state.filterPrice[this.state.filterPrice.length-1]))))
      this.setState({ legos: legoCopy })
  }

  handleDeliveryChange = e => {
    this.setState({ delivery: e.target.checked }, () => {
     this.filter()
    })
  }

  handleNegotiableChange = e => {
    this.setState({ negotiable: e.target.checked }, () => {
      this.filter()
    })
  }

  handlePriceChange = e => {
    let aux = e.target.value.split(",")
    let thecopy = [...this.state.filterPrice]
    e.target.checked ? thecopy.push(aux[1]) : thecopy = thecopy.filter(function (elm) {
      return elm !== aux[1]
    })
    thecopy.sort((a, b) => a - b)
    this.setState({ filterPrice : thecopy}, ()=> this.filter())
  }

  render() {

    let margen = []
    let i = 50
    while(i <= this.state.price){
      margen.push(i)
      i += 100
    }
    margen.push(this.state.price)

    return (
      <Container>
        <h1>¡Legos!</h1>
        <hr />
        {this.state.category.length && (
          <div>
            <div className="filterSideBar">
              <div className="filtersideBarSection">
                <h5>Filtros</h5>
                <hr />
                <h5>Sub Categorias</h5>
                {this.state.category.map((elm, idx) => (
                  <div key={idx}>
                    <Form.Label>
                      <p>{elm}</p>
                    </Form.Label>
                    <Form.Control
                      type="checkbox"
                      onChange={this.handleInputChange}
                      value={elm}
                    />
                  </div>
                ))}
                <hr />
                <div className="filtersideBarSection">
                  <Form.Label>
                    <p>Delivery</p>
                  </Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="delivery"
                    onChange={this.handleDeliveryChange}
                    value={this.state.delivery}
                  />
                  <Form.Label>
                    <p>Nogotiable</p>
                  </Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="negotiable"
                    onChange={this.handleNegotiableChange}
                    value={this.state.negotiable}
                  />
                  <hr />
                  <h5>Price</h5>
                  {margen.map((elm, idx) => (
                    <div key={idx}>
                      <Form.Label>
                        <p>
                          {margen[idx - 1] ? margen[idx - 1] : 0}... {elm}€
                        </p>
                      </Form.Label>
                      <Form.Control
                        type="checkbox"
                        onChange={this.handlePriceChange}
                        value={[margen[idx - 1], elm]}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <Row>
          {this.state.legos.map((elm, idx) => (
            <ProductCard
              key={idx}
              history={this.props.history}
              products={elm}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Lego;