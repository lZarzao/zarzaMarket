import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/product",
      withCredentials: true // RUTAS PERSISTENTES
    })
  }
  find = () => this._service.get()
  new = (name, category, subcategory, subsubcategory, price, negotiable, description, delivery, modelCode) =>
  this._service.post("/new", { name, category, subcategory, subsubcategory, price, negotiable, description, delivery, modelCode})
  getOne = (id) => this._service.get(`/${id}`)
  edit = (name, category, id) => this._service.post(`/${id}/edit`, { name, category })
  delete = (id) => this._service.get(`/${id}/delete`)
}