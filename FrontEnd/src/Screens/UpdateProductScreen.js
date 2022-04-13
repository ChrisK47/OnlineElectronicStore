import React, { Component } from "react"
import ProductService from "../Services/ProductService"
import Header from '../Component/Header'
import CustomerNavigation from '../Component/CustomerNavigation'

class UpdateProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      name: "",
      cname: "",
      price: "",
      qty: "",
      manufactureDate: "",

    }
    alert(this.state.id);
  }
  componentDidMount() {
    ProductService.getProductById(this.state.id).then((response) => {
      let ob = response.data;
      this.setState({ id: ob.id, description: ob.description, name: ob.name, cname: ob.cname, price: ob.price, qty: ob.qty, manufactureDate: ob.manufactureDate });
    })
  }

  updateProduct = (event) => {
    event.preventDefault();
    let product = { id: this.state.id, description: this.state.description, name: this.state.name, cname: this.state.cname, manufactureDate: this.state.manufactureDate, qty: this.state.qty, price: this.state.price }
    ProductService.editProduct(product).then((response) => {
      this.props.history.push("/product")
    })
  }

  render() {
    return (
      <div className="container" >
        <Header title="Update Product" />
        <div className="form">

          <div className="mb-3">
            <label className="form-label">Id</label>
            <input value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value }
              )}
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })
              }
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">ManufactureName</label>
            <input value={this.state.cname}
              onChange={(e) => this.setState({ cname: e.target.value })}
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              type="email"
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input value={this.state.qty}
              onChange={(e) => this.setState({ qty: e.target.value })}
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">ManufactureDate</label>
            <input value={this.state.manufactureDate}
              onChange={(e) => this.setState({ manufactureDate: e.target.value })}
              className="form-control" />
          </div>
          <div className="mb-3">
            <button onClick={this.updateProduct} className="btn btn-success">
              Update
            </button>
          </div>
        </div>

      </div>
    )
  }
}
export default UpdateProductScreen