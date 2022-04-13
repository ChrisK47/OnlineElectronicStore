import Header from '../Component/Header'
import React, { Component } from 'react'
import AdminService from '../Services/AdminService'


class AddProductScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: "",
      cname: "",
      name: "",
      price: "",
      qty: "",
      manufactureDate: "",
      cat: "",
      carr: []
    }
  }

  componentDidMount() {
    AdminService.getCategory().then((response) => {
      this.setState({ carr: response.data })
    })
  }


  addProduct = (event) => {
    event.preventDefault();
    let product = { name: this.state.name, cname: this.state.cname, description: this.state.description, price: this.state.price, qty: this.state.qty, manufactureDate: this.state.manufactureDate }
    let id = this.state.cat
    AdminService.addProduct(product, id).then((response) => {
      this.props.history.push("/product")
    })
  }

  render() {
    return (
      <div class="container">
        <Header title="Add Product" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={(e) => {
                this.setState({ name: e.target.value })
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">ManufactureName</label>
            <input
              onChange={(e) => {
                this.setState({ cname: e.target.value })
              }}
              className="form-control"
              rows="3" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              onChange={(e) => {
                this.setState({ description: e.target.value })
              }}
              className="form-control"
              rows="3" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              onChange={(e) => {
                this.setState({ price: e.target.value })
              }}
              className="form-control"
              rows="3" />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              onChange={(e) => {
                this.setState({ qty: e.target.value })
              }}
              className="form-control"
              rows="3" />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select name="category" onChange={(e) => { this.setState({ cat: e.target.value }) }}>
              <option key="0" value="none">Select Option</option>
              {this.state.carr.map((e) => {
                return <option key={e.id} value={e.id}
                >{e.name}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">ManufactureDate</label>
            <input
              onChange={(e) => {
                this.setState({ manufactureDate: e.target.value })
              }}
              className="form-control"
              rows="3" />
          </div>
          <div className="mb-3">
            <button onClick={this.addProduct} className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddProductScreen
