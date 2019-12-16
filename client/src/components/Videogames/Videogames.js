import React, { Component } from "react"
import { Container, Carousel, Row } from "react-bootstrap"
import ProductCard from "../Product/ProductCard"

import Service from "../../service/Product.service"

class Videogames extends Component {
  constructor() {
    super()
    this.state = {
      videoGames: [],
      backup: []
    }
    this._service = new Service()
  }

  componentDidMount() {
    let category = "Video Juegos";
    this._service
      .findByCategory(category)
      .then(theResult => this.setState({ videoGames: theResult.data }))
      .catch(err => console.log(err.response));
  }

  render() {

let data = ["Play Station 4", "Xbox One", "Nintendo Switch"];

    return (
      <Container>
        <h1>Video Games!!</h1>
        <Carousel>
          {data.map((elm, idx) => (
            <Carousel.Item className="carousel" key={idx}>
              <img
                className="d-block w-100"
                src="../images/puzzle.png"
                alt="First slide"
                height="200px"
              />
              <Carousel.Caption>
                <h3>{elm}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Row>
          {this.state.videoGames.map((elm, idx) => (
            <ProductCard key={idx} products={elm} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Videogames
