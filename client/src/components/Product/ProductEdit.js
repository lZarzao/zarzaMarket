import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

import Service from "../../service/Product.service";

class ProductEdit extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      name: "",
      category: "",
      subcategory: "",
      subsubcategory: "",
      price: 0,
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
    this._service = new Service();
  }

  componentDidMount() {
    const { handle } = this.props.match.params
    let id = handle
    this._service
      .getOne(id)
      .then(theProduct => this.setState(theProduct.data))
      .catch(err =>console.log(err)
      )
  }

  handleSubmit = e => {
    e.preventDefault();
    const {name, category, subcategory, subsubcategory, price,
      negotiable, description, delivery, brand, modelCode} = this.state
    const id = this.state._id
    this._service
      .edit(id, name, category, subcategory, subsubcategory, price,
        negotiable, description, delivery, brand, modelCode)
      .then(() => {
        this.props.history.push("/zarzamarket/profile/")
      })
      .catch(err => console.log(err.response.data.message))
  }

  handleInputChange = e => {
    let { name, value } = e.target
    if (name === 'negotiable' || name === 'delivery') value = e.target.checked
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <h1>Editar Datos</h1><hr/>
        <div className="NewProduct">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group>
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
            <select
              name="subcategory"
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
                <select
                  name="subsubcategory"
                  required={true}
                  onChange={this.handleInputChange}
                  value={this.state.subsubcategory}
                >
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
            {(this.state.category === "LEGO" || this.state.category === "Puzzle") && (
              <>
                <Form.Control
                  type="text"
                  name="modelCode"
                  onChange={this.handleInputChange}
                  value={this.state.modelCode}
                ></Form.Control>
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
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              name="price"
              onChange={this.handleInputChange}
              value={this.state.price}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>¿El precio es Negociable?</Form.Label>
            <Form.Control
              type="checkbox"
              name="negotiable"
              onChange={this.handleInputChange}
              checked={this.state.negotiable}
                style={{
                  display: "inline",
                  width: "10%",
                  height: "15px",
                  marginLeft: "10px"
                }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="description"
              onChange={this.handleInputChange}
              value={this.state.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>¿Incluye Delivery?</Form.Label>
            <Form.Control
              type="checkbox"
              name="delivery"
              onChange={this.handleInputChange}
              checked={this.state.delivery}
                style={{
                  display: "inline",
                  width: "10%",
                  height: "15px",
                  marginLeft: "10px"
                }}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Actualizar
          </Button>
        </Form>
        </div>
      </Container>
    );
  }
}

export default ProductEdit;