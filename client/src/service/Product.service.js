import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/product",
      withCredentials: true // RUTAS PERSISTENTES
    })
  }
  find = () => this._service.get()

  findAll = () => this._service.get('/all')

  findByCategory = (category) => this._service.get(`/category/${category}`)
  
  new = (name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode) =>
  this._service.post("/new", { name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode})
  
  getOne = (id) => this._service.get(`/${id}`)
  
  edit = (name, category, subcategory, subsubcategory, price, negotiable, description, delivery, modelCode, brand, id) =>
  this._service.post(`/${id}/edit`, { name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode })
 
  delete = (id) => this._service.get(`/${id}/delete`)
}