import React, { Component } from "react"
import { Button, Form, Container, select } from "react-bootstrap"

import Service from "../../service/Product.service"
import FilesService from "../../service/Files.service";

class newProduct extends Component {
  constructor(props) {
    super(props);
    this._service = new Service()
    this._filesService = new FilesService()
    this.state = {
      disabledButton: false,
      buttonText: "Añadir Producto",
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
      imageUrl: "",
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
    e.preventDefault();
    let show = true;
    const {
      name,
      category,
      subcategory,
      subsubcategory,
      price,
      negotiable,
      description,
      delivery,
      brand,
      modelCode,
      imageUrl
    } = this.state;
    this._service
      .new(
        name,
        category,
        subcategory,
        subsubcategory,
        price,
        negotiable,
        description,
        delivery,
        brand,
        modelCode,
        imageUrl,
        show
      )
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
        });
        this.props.history.push("/zarzamarket/profile");
      })
      .catch(err => console.log(err.response));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    if (name === "negotiable" || name === "delivery") value = e.target.checked;
    this.setState({ [name]: value });
  };

  handleFileUpload = e => {
    this.setState({ disabledButton: true, buttonText: "Subiendo imagen..." });

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this._filesService
      .handleUpload(uploadData)
      .then(response => {
        console.log(
          "Subida de archivo finalizada! La URL de Cloudinray es: ",
          response.data.secure_url
        );
        this.setState({
          disabledButton: false,
          buttonText: "Añadir Producto",
          imageUrl: response.data.secure_url
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <h1>Add A New Product</h1>
        <div className="NewProduct">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.name}
                placeholder="Nombre"
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
                    <option value={this.state.category}>
                      Elige una Categoria
                    </option>
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
                required={true}
                onChange={this.handleInputChange}
                value={this.state.subcategory}
              >
                {this.state.category === "" && (
                  <option value="">Primero Elige una Categoria</option>
                )}
                {this.state.category === "LEGO" && (
                  <>
                    {this.state.subcategory === "" ? (
                      <>
                        <option value={this.state.subcategory}>
                          Elige una Sub Categoría
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
                          Elige una Sub Categoría
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
                          Elige una Sub Categoría
                        </option>
                        {this.state.selectedSubCategoryPuzzle.map(
                          (elm, idx) => (
                            <option key={idx} value={elm}>
                              {elm}
                            </option>
                          )
                        )}
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
                          Elige una Sub Sub Categoría
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
                  </select>
                  <br />
                </>
              )}
              {(this.state.category === "Video Juegos" ||
                this.state.category === "Puzzle") && (
                <><br/>
                  <Form.Control
                    type="text"
                    name="brand"
                    onChange={this.handleInputChange}
                    value={this.state.brand}
                    placeholder="Marca"
                  ></Form.Control>
                  <br />
                </>
              )}
              {(this.state.category === "LEGO" ||
                this.state.category === "Puzzle") && (
                <>
                  <Form.Control
                    type="text"
                    name="modelCode"
                    onChange={this.handleInputChange}
                    value={this.state.modelCode}
                    placeholder="Código de Producto"
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
                placeholder="Precio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>¿El precio es Negociable?</Form.Label>
              <Form.Control
                style={{
                  display: "inline",
                  width: "10%",
                  height: "15px",
                  marginLeft: "10px"
                }}
                type="checkbox"
                name="negotiable"
                onChange={this.handleInputChange}
                checked={this.state.negotiable}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="description"
                onChange={this.handleInputChange}
                value={this.state.description}
                placeholder="Descripción del Producto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>¿Incluye Delivery?</Form.Label>
              <Form.Control
                style={{
                  display: "inline",
                  width: "10%",
                  height: "15px",
                  marginLeft: "10px"
                }}
                className="inputForm"
                type="checkbox"
                name="delivery"
                onChange={this.handleInputChange}
                checked={this.state.delivery}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subir Imagen</Form.Label>
              <Form.Control
                name="imageUrl"
                type="file"
                onChange={this.handleFileUpload}
              />
            </Form.Group>
            <br />
            <Button
              variant="dark"
              type="submit"
              style={{ width: "100%" }}
              disabled={this.state.disabledButton}
            >
              {this.state.buttonText}
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default newProduct;