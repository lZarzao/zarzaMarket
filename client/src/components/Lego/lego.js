import React, { Component } from "react"
import { Container, Carousel } from "react-bootstrap";

//import Service from "./service"

class Lego extends Component {
  constructor() {
    super();
    this.state = {};
    //  this._service = new Service()
  }

  render() {

    let data = [
      "Architecture",
      // "BOOST",
      // "BrickHeadz",
      "City",
      "Classic",
      "Creator",
      // "DC Super Heroes",
      // "Disney™",
      // "DUPLO®",
      // "Elves",
      // "Fantastic Beasts™",
      // "Friends",
      // "Frozen II",
      "Harry Potter™",
      // "Hidden Side™",
      "Ideas",
      // "Juniors",
      // "Jurassic World™",
      "LEGO® Batman",
      // "LEGO® Originals",
      "LEGO® Spider-Man",
      // "LEGO® Marvel",
      // "MINDSTORMS®",
      // "Minecraft™",
      // "Minifiguras",
      // "NEXO KNIGHTS™",
      "NINJAGO®",
      // "Overwatch®",
      // "Power Functions",
      // "Powered UPNovedad",
      // "Powerpuff Girls™",
      // "SERIOUS PLAY®",
      // "Speed Champions",
      "Star Wars™",
      // "Stranger Things",
      "Technic™",
      // "THE LEGO® BATMAN MOVIE",
      // "THE LEGO® MOVIE 2™",
      // "THE LEGO® NINJAGO® MOVIE™",
      // "Toy Story 4",
      // "LEGO® Trolls World TourNovedad",
      // "Unikitty!™",
      // "Xtra"
    ]

    return (
      <Container>
        <h1>Legos!</h1>

        <Carousel>
          {data.map((elm, idx) => (
            <Carousel.Item className="carousel" key= {idx}>
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

export default Lego