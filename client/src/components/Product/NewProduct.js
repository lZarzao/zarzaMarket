import React, { Component } from "react"
import { Button, Form, Container, select } from "react-bootstrap"

import Service from "../../service/Product.service"

class newProduct extends Component {
  constructor(props) {
    super(props)
    this._service = new Service();
    this.state = {
      name: "",
      category: "",
      subcategory: "",
      subsubcategory: "",
      price: "",
      negotiable: false,
      description: "",
      delivery: false,
      brand: "",
      modelCode: "",
      selectCategory: ["LEGO", "Video Juegos", "Puzzle"],
      selectSubCategoryLEGO: [
        "Architecture",
        "BOOST",
        "BrickHeadz",
        "City",
        "Classic",
        "Creator",
        "DC Super Heroes",
        "Disney",
        "DUPLO",
        "Elves",
        "Fantastic Beasts™",
        "Friends",
        "Frozen II",
        "Harry Potter™",
        "Hidden Side™",
        "Ideas",
        "Juniors",
        "Jurassic World",
        "LEGO Batman",
        "LEGO Originals",
        "LEGO Spider-Man",
        "LEGO Marvel",
        "MINDSTORMS",
        "Minecraft",
        "Minifiguras",
        "NEXO KNIGHTS™",
        "NINJAGO",
        "Overwatch",
        "Power Functions",
        "Powered UPNovedad",
        "Powerpuff Girls",
        "SERIOUS PLAY",
        "Speed Champions",
        "Star Wars",
        "Stranger Things",
        "Technic",
        "THE LEGO BATMAN MOVIE",
        "THE LEGO MOVIE 2",
        "THE LEGO NINJAGO MOVIE™",
        "Toy Story 4",
        "LEGO Trolls World TourNovedad",
        "Unikitty!",
        "Xtra"
      ],
      selectedSubCategoryVG: [
        "Play Station 4",
        "Xbox One",
        "Nintendo Switch",
        "PC",
        "Accesorio"
      ],
      selectedSubCategoryPuzzle: [
        "500 piezas",
        "1000 piezas",
        "1500 piezas",
        "2000 piezas",
        "más de 2000 piezas"
      ],
      selectedSubSubCategoryVG: [
        "Juego",
        "Consola",
        "Joystick",
        "Headset",
        "HeadPhone",
        "VR",
        "Mouse",
        "Keyword",
        "Otro"
      ]
    };  
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      name, category, subcategory, subsubcategory, price,
      negotiable, description, delivery, brand, modelCode} = this.state;
    this._service
      .new(name, category, subcategory, subsubcategory, price,
        negotiable, description, delivery, brand, modelCode)
      .then(() => {
        this.setState({
          name: "",
          category: "",
          subcategory: "",
          subsubcategory: "",
          price: "",
          negotiable: false,
          description: "",
          delivery: false,
          brand: "",
          modelCode: ""
        })
        this.props.history.push("/zarzamarket/profile")
      })
      .catch(err => console.log(err.response))
  }

  handleInputChange = e => {
    let { name, value } = e.target
    if (name === "negotiable" || name === "delivery") value = e.target.checked
    this.setState({ [name]: value })
  };

  render() {
    return (
      <Container>
        <h1>Add A New Product</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <select
              name="category"
              required={true}
              onChange={this.handleInputChange}
              value={this.state.category}
            >
              {this.state.category === "" ? (
                <>
                  <option value={this.state.category}>Choose a category</option>
                  {this.state.selectCategory.map((elm, idx) => (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  ))}
                </>
              ) : (
                this.state.selectCategory.map((elm, idx) => (
                  <option key={idx} value={elm}>
                    {elm}
                  </option>
                ))
              )}
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Subcategory</Form.Label>
            <select
              name="subcategory"
              required={true}
              onChange={this.handleInputChange}
              value={this.state.subcategory}
            >
              {this.state.category === "" && (
                <option value="">First choose a Category</option>
              )}
              {this.state.category === "LEGO" && (
                <>
                  {this.state.subcategory === "" ? (
                    <>
                      <option value={this.state.subcategory}>
                        Choose a Subcategory
                      </option>
                      {this.state.selectSubCategoryLEGO.map((elm, idx) => (
                        <option key={idx} value={elm}>
                          {elm}
                        </option>
                      ))}
                    </>
                  ) : (
                    this.state.selectSubCategoryLEGO.map((elm, idx) => (
                      <option key={idx} value={elm}>
                        {elm}
                      </option>
                    ))
                  )}
                </>
              )}
              {this.state.category === "Video Juegos" && (
                <>
                  {this.state.subcategory === "" ? (
                    <>
                      <option value={this.state.subcategory}>
                        Choose a Subcategory
                      </option>
                      {this.state.selectedSubCategoryVG.map((elm, idx) => (
                        <option key={idx} value={elm}>
                          {elm}
                        </option>
                      ))}
                    </>
                  ) : (
                    this.state.selectedSubCategoryVG.map((elm, idx) => (
                      <option key={idx} value={elm}>
                        {elm}
                      </option>
                    ))
                  )}
                </>
              )}
              {this.state.category === "Puzzle" && (
                <>
                  {this.state.subcategory === "" ? (
                    <>
                      <option value={this.state.subcategory}>
                        Choose a Subcategory
                      </option>
                      {this.state.selectedSubCategoryPuzzle.map((elm, idx) => (
                        <option key={idx} value={elm}>
                          {elm}
                        </option>
                      ))}
                    </>
                  ) : (
                    this.state.selectedSubCategoryPuzzle.map((elm, idx) => (
                      <option key={idx} value={elm}>
                        {elm}
                      </option>
                    ))
                  )}
                </>
              )}
            </select>
          </Form.Group>
          <Form.Group>
            {this.state.category === "Video Juegos" && (
              <>
                <Form.Label>Subsubcategory</Form.Label>
                <select
                  name="subsubcategory"
                  required={true}
                  onChange={this.handleInputChange}
                  value={this.state.subsubcategory}>
                  {this.state.subsubcategory === "" ? (
                    <>
                      <option value={this.state.subsubcategory}>
                        Choose a Subsubcategory
                      </option>
                      {this.state.selectedSubSubCategoryVG.map((elm, idx) => (
                        <option key={idx} value={elm}>
                          {elm}
                        </option>
                      ))}
                    </>
                  ) : (
                    this.state.selectedSubSubCategoryVG.map((elm, idx) => (
                      <option key={idx} value={elm}>
                        {elm}
                      </option>
                    ))
                  )}
                </select><br/>
              </>
            )}
            {(this.state.category === "Video Juegos" || this.state.category === "Puzzle") && (
              <>
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  onChange={this.handleInputChange}
                  value={this.state.brand}
                ></Form.Control>
              </>
            )}
            {(this.state.category === "LEGO" || this.state.category === "Puzzle") && (
              <>
                <Form.Label>Model Code</Form.Label>
                <Form.Control
                  type="text"
                  name="modelCode"
                  onChange={this.handleInputChange}
                  value={this.state.modelCode}
                ></Form.Control>
              </>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={this.handleInputChange}
              value={this.state.price}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Negotiable?</Form.Label>
            <Form.Control
              type="checkbox"
              name="negotiable"
              onChange={this.handleInputChange}
              checked={this.state.negotiable}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={this.handleInputChange}
              value={this.state.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Delivery</Form.Label>
            <Form.Control
              type="checkbox"
              name="delivery"
              onChange={this.handleInputChange}
              checked={this.state.delivery}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    )
  }
}

export default newProduct;