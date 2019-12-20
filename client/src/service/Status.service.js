import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/status`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  buy = ( product, status, creator ) => this._service.post("/buy", { product, status, creator})

  getStatus = () => this._service.get("/getStatus")

  getSold = () => this._service.get("/getSold")
}