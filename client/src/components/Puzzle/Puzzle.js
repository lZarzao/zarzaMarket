import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";

//import Service from "./service"

class Puzzle extends Component {
  constructor() {
    super();
    this.state = {};
    //  this._service = new Service()
  }

  render() {

    let data = ["500 pieces", "1000 pieces", "1500 pieces", "2000 pieces", "More than 2000 pieces"];

    return (
      <Container>
        <h1>Puzzle!</h1>
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
        <>
          <h1>Aquí debe ir un grid</h1>
        </>
      </Container>
    );
  }
}

export default Puzzle;
