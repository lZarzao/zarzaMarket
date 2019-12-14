import React, { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"

import Service from "../../service/Auth.service"

class ProfileDataEdit extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        userlastname: "",
        email: "",
        telefono: ""
    }
    this._service = new Service()
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
    const { username, userlastname, email, telefono } = this.state;
    this._service
      .edit(username, userlastname, email, telefono)
      .then(theEditedUser => {
        this.props.history.push("/zarzamarket/profile/")
      })
      .catch(err => console.log(err.response.data.message))
  }

  handleInputChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <h1>Editar Datos</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="userlastname"
              onChange={this.handleInputChange}
              value={this.state.userlastname}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              onChange={this.handleInputChange}
              value={this.state.telefono}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Add Changes
          </Button>
        </Form>
      </Container>
    )
  }
}

export default ProfileDataEdit