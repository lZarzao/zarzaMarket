import React, { Component } from "react"
import { Container } from "react-bootstrap"
import { Switch, Route} from "react-router-dom"
import SideBar from "./Sidebar"
import ProfileData from "./ProfileData"
import ProfileHead from "./ProfileHead"
import ProfilePayment from "./ProfilePayment"
import ProfileProducts from "./ProfileProduct"
import ProfileShop from "./ProfileShop"
import ProfileValoration from "./ProfileValoration"
import ProfileStadistic from "./ProfileStadistic"
import ProfileDataEdit from "./ProfileDataEdit"
import ProductEdit from "../Product/ProductEdit";
import ProductDetail from "../Product/ProductDetail";

//import Service from "./service"

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
    //  this._service = new Service()
  }

  render() {
    return (
      <Container>
        <SideBar />
        <ProfileHead />
        <Switch>
          <Route exact path="/zarzamarket/profile" component={ProfileData}/>
          <Route path="/zarzamarket/profile/payment" component={ProfilePayment}/>
          <Route exact path="/zarzamarket/profile/myproducts" render={match => <ProfileProducts {...match}/>}/>
          <Route path="/zarzamarket/profile/shop" component={ProfileShop}/>
          <Route path="/zarzamarket/profile/valoration" component={ProfileValoration}/>
          <Route path="/zarzamarket/profile/estadistic" component={ProfileStadistic}/>
          <Route path="/zarzamarket/profile/edit" render={match => <ProfileDataEdit {...match} />}/>
          <Route path="/zarzamarket/profile/myproducts/:handle" render={match => <ProductDetail {...match} />}/>
          <Route path="/zarzamarket/profile/myproducts/edit/:handle" render={match => <ProductEdit {...match} />}/>

        </Switch>
      </Container>
    );
  }
}

export default Profile;
