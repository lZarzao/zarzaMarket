import React, { Component } from "react";
import { Link } from "react-router-dom";

//import Service from "./service"

class SideBar extends Component {
  constructor() {
    super();
    this.state = {};
    //  this._service = new Service()
  }

  render() {
    return (
      <div>
        <div className="sideBar">
          <Link to="/zarzamarket/profile/">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk0"></div>
              </div>
              <h5>Perfil</h5>
            </div>
          </Link>
          <Link to="/zarzamarket/profile/payment">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk1"></div>
              </div>
              <h5>Pago</h5>
            </div>
          </Link>
          <Link to="/zarzamarket/profile/myproducts">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk2"></div>
              </div>
              <h5>Productos</h5>
            </div>
          </Link>
          <Link to="/zarzamarket/profile/shop">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk3"></div>
              </div>
              <h5>Compras</h5>
            </div>
          </Link>
          <Link to="/zarzamarket/profile/save">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk4"></div>
              </div>
              <h5>Guardados</h5>
            </div>
          </Link>
          <Link to="/zarzamarket/profile/valoration">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk4"></div>
              </div>
              <h5>Valoración</h5>
            </div>
          </Link>
          <Link to="/zarzamarket/profile/estadistic">
            <div className="sideBarSection">
              <div className="sideBarCircleSection">
                <div className="sideBarContent bk5"></div>
              </div>
              <h5>Estadística</h5>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBar;
