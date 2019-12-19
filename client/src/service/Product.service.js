import axios from "axios"

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/product`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }
  find = () => this._service.get()

  findAll = () => this._service.get('/all')

  findByCategory = (category) => this._service.get(`/category/${category}`)

  findVisitProducts = (id) => this._service.get(`visit/${id}`)
  
  new = (name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode) =>
  this._service.post("/new", { name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode})
  
  getOne = (id) => this._service.get(`/${id}`)
  
  edit = (id, name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode) =>
    this._service.post(`/${id}/edit`, { name, category, subcategory, subsubcategory, price, negotiable, description, delivery, brand, modelCode })
 
  delete = (id) => this._service.get(`/${id}/delete`)
}