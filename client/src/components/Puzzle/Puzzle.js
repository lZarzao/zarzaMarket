import React, { Component } from "react"
import { Container, Form, Carousel, Row } from "react-bootstrap"
import ProductCard from "../Product/ProductCard"

import Service from "../../service/Product.service"
import AuthService from "../../service/Auth.service"

class Puzzle extends Component {
  constructor() {
    super()
    this.state = {
      puzzle: [],
      backup: [],
      category: [],
      price: 0,
      brand: [],
      filterCategory: [],
      filterPrice: [],
      filterBrand: [],
      negotiable: false,
      delivery: false
    }
    this._authService = new AuthService()
    this._service = new Service()
  }

  componentDidMount() {
    let category = "Puzzle"
    let id = "";
    let aux = [];
    this._authService.loggedin().then(theResult => {
      theResult.data._id && (id = theResult.data._id)
    })
    .then(()=>this._service.findByCategory(category))
    .then(theResult => {
        aux = theResult.data.sort((a, b) => a - b)
        //DEBO CAMBIAR EL "||" POR "&&"
        aux = aux.filter(elm => elm.creator !== id || elm.show === true)})
    .then(()=> this.setState({ puzzle: aux, backup: aux }))
    .then(() => {
      let categoryCopy = []
      let priceCopy = []
      let brandCopy = []
      this.state.puzzle.map(elm => brandCopy.push(elm.brand))
      this.setState({
        brand: brandCopy.filter(function (item, index, array) {
          return array.indexOf(item) === index
          })
        })
      this.state.puzzle.map(elm => priceCopy.push(elm.price))
      priceCopy.sort((a, b) => a - b)
      priceCopy.splice(0, priceCopy.length - 1)
      this.setState({ price: priceCopy[0] })
      this.state.puzzle.map(elm => categoryCopy.push(elm.subcategory))
      this.setState({
        category: categoryCopy.filter(function (item, index, array) {
          return array.indexOf(item) === index
          })
        })
      })
    .catch(err => console.log(err.response))
  }
  
  filter = () => {
      let puzzleCopy = []
      let brandPuzzle = []
      this.state.filterCategory.forEach((cat) => this.state.backup.forEach((elm) => (elm.subcategory === cat && puzzleCopy.push(elm))))
      this.state.filterCategory.length === 0 && (puzzleCopy = [...this.state.backup])
      if (this.state.filterBrand.length > 0) { 
        this.state.filterBrand.forEach((brand) => puzzleCopy.forEach((elm) => (elm.brand === brand && brandPuzzle.push(elm))))
        brandPuzzle.length ? puzzleCopy = [...brandPuzzle] : puzzleCopy = []
        }
      this.state.delivery && (puzzleCopy = puzzleCopy.filter((elm) => elm.delivery === true))
      this.state.negotiable && (puzzleCopy = puzzleCopy.filter((elm) => elm.negotiable === true))
      this.state.filterPrice.length &&
      (puzzleCopy = puzzleCopy.filter((elm) => (elm.price >= (this.state.filterPrice[0] - 15) && elm.price <= (this.state.filterPrice[this.state.filterPrice.length - 1]))))
      this.setState({ puzzle: puzzleCopy })
  }
  
  handleInputChange = e => {
    let thecopy = [...this.state.filterCategory]
    e.target.checked ? thecopy.push(e.target.value) : thecopy = thecopy.filter(function (elm) {
      return elm !== e.target.value
    })
    this.setState({ filterCategory: thecopy }, () => this.filter())
  }

  handleBrandChange = e => {
    let thecopy = [...this.state.filterBrand]
    e.target.checked ? thecopy.push(e.target.value) : thecopy = thecopy.filter(function (elm) {
      return elm !== e.target.value
    })
    this.setState({ filterBrand: thecopy }, () => this.filter())
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
    this.setState({ filterPrice: thecopy }, () => this.filter())
  }

  render() {

    let data = ["500 pieces", "1000 pieces", "1500 pieces", "2000 pieces", "More than 2000 pieces"]

    let margen = []
    let i = 10
    while (i <= this.state.price) {
      margen.push(i)
      i += 15
    }
    margen.push(this.state.price)

    return (
      <Container>
        <h1>Puzzle!</h1>
        <hr/>
        {this.state.category.length && (
          <div>
            <div className="filterSideBar">
              <div className="filtersideBarSection">
                <h5>Filtros</h5>
                <hr />
                <h5>Sub Categorias</h5>
                {this.state.category.map((elm, idx) => (
                  <div key={idx}>
                    <Form.Label ><p>{elm}</p></Form.Label>
                    <Form.Control
                      type="checkbox"
                      onChange={this.handleInputChange}
                      value={elm}
                    /></div>
                ))}
                <hr />
                <div className="filtersideBarSection">
                  <Form.Label ><p>Delivery</p></Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="delivery"
                    onChange={this.handleDeliveryChange}
                    value={this.state.delivery}
                  /><br/>
                  <Form.Label><p>Nogotiable</p></Form.Label>
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
                      <Form.Label ><p>{margen[idx - 1] ? margen[idx - 1] : 0}... {elm}€</p></Form.Label>
                      <Form.Control
                        type="checkbox"
                        onChange={this.handlePriceChange}
                        value={[margen[idx - 1], elm]}
                      /></div>
                  ))}<hr />
                  <h5>Brands</h5>
                  {this.state.brand.map((elm, idx) => (
                    <div key={idx}>
                      <Form.Label ><p>{elm}</p></Form.Label>
                      <Form.Control
                        type="checkbox"
                        onChange={this.handleBrandChange}
                        value={elm}
                      /></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <Row>
          {this.state.puzzle.map((elm, idx) => (
            <ProductCard key={idx} history={this.props.history} products={elm} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Puzzle;
