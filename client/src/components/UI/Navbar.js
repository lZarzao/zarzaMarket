import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Service from "../../service/Auth.service"

class Navigation extends Component {
  constructor(props) {
    super(props)
    this._service = new Service()
  }

  logoutUser = () => {
    this._service.logout()
      .then(x => console.log(x))
      .then(x => this.props.setUser(false))
      .catch(err => console.log(err))
  }

  render() {
    const saludo = this.props.loggedInUser
      ? (`${this.props.loggedInUser.username} ${this.props.loggedInUser.userlastname}`)
      : "invitado"

    return this.props.loggedInUser ? (
      <Navbar bg="light" variant="light" expand="md" fixed="top">
        <Nav.Link as="li">
          <Link to="/zarzamarket"><img src="/images/logo_zarza.png" style={{width: "50px"}}/></Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Navbar.Text>{saludo}</Navbar.Text>
            <img src={this.props.loggedInUser.imageUrl} className="rounded-circle z-depth-0"
              alt="avatar image" height="35" style={{marginLeft: "10px"}}/>
            <Nav.Link as="li">
              <Link to="/zarzamarket/profile/">Mi Perfil</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/zarzamarket/myproduct/new" style={{ color: "#0487D9"}}>New Product</Link>
            </Nav.Link>
            <Nav.Link as="li" onClick={this.logoutUser}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <Navbar bg="light" style={{backgroundColor: "#FFF5EC"}} expand="md" fixed="top">
        <Nav.Link as="li">
            <Link to="/zarzamarket"><img src="/images/logo_zarza.png" alt="zarza_logo" style={{ width: "50px" }}/></Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link as="li">
              <Link to="/zarzamarket/login">Login</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/zarzamarket/signup">Registro</Link>
            </Nav.Link>
            <Navbar.Text>{saludo}</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation
