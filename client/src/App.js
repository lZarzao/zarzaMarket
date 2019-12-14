import React, { Component } from 'react'
import Navbar from './components/UI/Navbar'
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Profile from "./components/Profile/Profile"
import Index from "./components/Index/Index"
import Footer from "./components/UI/Footer"
import Lego from "./components/Lego/lego"
import Puzzle from "./components/Puzzle/Puzzle"
import Videogames from "./components/Videogames/Videogames"
import NewProduct from "./components/Product/NewProduct"
import { Switch, Route, } from "react-router-dom"
import './App.css'

import Service from "./service/Auth.service"

class App extends Component {
  constructor() {
    super()
    this.state = { loggedInUser: null }
    this._service = new Service()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log(
      "El método 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:",
      this.state.loggedInUser
    )
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._service
        .loggedin()
        .then(theLoggedInUserFromTheServer =>
          this.setState({ loggedInUser: theLoggedInUserFromTheServer.data })
        )
        .catch(err => {
          this.setState({ loggedInUser: false })
          console.log({ err })
        });
    }
  };

  render() {
    this.fetchUser()

    return (
      <>
        <Navbar
          loggedInUser={this.state.loggedInUser}
          setUser={this.setTheUser}/>
          <br/><br/><br/>
        <Switch>
          <Route exact path="/zarzamarket" component={Index} />
          <Route path="/zarzamarket/signup" render={match => <Signup setUser={this.setTheUser} {...match} />}/>
          <Route path="/zarzamarket/login" render={match => <Login setUser={this.setTheUser} {...match} />}/>
          <Route path="/zarzamarket/profile" component={Profile}/>
          <Route path="/zarzamarket/lego" component={Lego}/>
          <Route path="/zarzamarket/puzzle" component={Puzzle}/>
          <Route path="/zarzamarket/videogames" component={Videogames}/>
          <Route path="/zarzamarket/product/new" render={match => <NewProduct {...match} />}/>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;