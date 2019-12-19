import React, { Component } from "react"
import { Container } from "react-bootstrap"
import { Switch, Route} from "react-router-dom"
import ProfileData from "./ProfileIdData"
import ProfileHead from "./ProfileIdHead"
import ProfileIdProducts from "./ProfileIdProduct"
import ProfileIdProductsDetails from "./ProfileIdProductDetail"
import ProfileSales from "./ProfileIdSales"
import ProfileValoration from "./ProfileIdValoration"

import Service from "../../service/Auth.service"

class Profile extends Component {
  constructor() {
    super()
    this.state = {}
    this._service = new Service()
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this._service
      .getOne(id)
      .then(theUser => this.setState(theUser.data))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <Container>
      {this.state.theUser && <>
        <ProfileHead user={this.state.theUser}/>
        <Switch>
          <Route exact path="/zarzamarket/visit/profile/:id" render={match => <ProfileData user={this.state.theUser} {...match} />}/>
          <Route exact path="/zarzamarket/visit/profile/:id/products" render={match => <ProfileIdProducts user={this.state.theUser} {...match}/>}/>
          <Route path="/zarzamarket/visit/profile/:id/products/details" render={match => <ProfileIdProductsDetails user={this.state.theUser} {...match}/>}/>
          <Route path="/zarzamarket/visit/profile/:id/sales" render={match => <ProfileSales user={this.state.theUser} {...match} />}/>
          <Route path="/zarzamarket/visit/profile/:id/valoration" component={ProfileValoration}/>
        </Switch></>}
      </Container>
    )
  }
}

export default Profile