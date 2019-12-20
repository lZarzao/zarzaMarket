import React, { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"

import Service from "../../service/Auth.service"
import FilesService from "../../service/Files.service";

class ProfileDataEdit extends Component {
  constructor() {
    super();
    this.state = {
      disabledButton: false,
      buttonText: "Actualizar",
      username: "",
      userlastname: "",
      email: "",
      telefono: "",
      imageUrl: ""
    };
    this._service = new Service()
    this._filesService = new FilesService();
    this._service
      .loggedin()
      .then(theLoggedInUserFromTheServer =>
        this.setState(theLoggedInUserFromTheServer.data)
      )
      .catch(err => {
        this.setState({ loggedInUser: false })
        console.log({ err })
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, userlastname, email, telefono, imageUrl } = this.state;
    this._service
      .edit(username, userlastname, email, telefono, imageUrl)
      .then(() => {
        this.props.history.push("/zarzamarket/profile/");
      })
      .catch(err => console.log(err.response.data.message));
  }

  handleInputChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFileUpload = e => {
  this.setState({ disabledButton: true, buttonText: "Subiendo imagen..." })
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
        buttonText: "Actualizar",
        imageUrl: response.data.secure_url
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container >
        <h1>Editar Datos</h1>
        <div className="NewProduct">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="userlastname"
              onChange={this.handleInputChange}
              value={this.state.userlastname}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="telefono"
              onChange={this.handleInputChange}
              value={this.state.telefono}
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
          <Button variant="dark" type="submit" disabled={this.state.disabledButton}>
           {this.state.buttonText}
          </Button>
        </Form>
        </div>
      </Container>
    );
  }
}

export default ProfileDataEdit