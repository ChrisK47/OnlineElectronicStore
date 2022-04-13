import React, { Component } from 'react'
import AdminService from '../Services/AdminService'
import Header from '../Component/Header'

class ProductScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { arr: [], flag: false };
  }
  componentDidMount() {
    AdminService.getProducts().then((response) => {
      this.setState({ arr: response.data })
    })
  }

  componentDidUpdate() {
    if (this.state.flag == true) {
      AdminService.getProduct().then((response) => {
        this.setState({ arr: response.data });
        this.setState({ flag: false });
      })
    }
  }

  onAddProduct = () => {
    this.props.history.push('/addProduct')
  }

  onUpdate = (id) => {
    this.props.history.push('/updateProduct/' + id)
  }

  onDelete = (id) => {
    AdminService.deleteProduct(id).then((response) => {
      this.setState({ flag: true });
    })
  }

  render() {
    return (
      <div className="container" >
        <Header title="Products" />
        <button onClick={this.onAddProduct} className="btn btn-warning float-end">
          Add Products
        </button>


        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>ProductName</th>
              <th>ManufactureName</th>
              <th>ManufactureDate</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>

            {
              this.state.arr.map((productList) => {
                return (
                  <tr>
                    <td>{productList.id}</td>
                    <td>{productList.name}</td>
                    <td>{productList.cname}</td>
                    <td>{productList.manufactureDate}</td>
                    <td>{productList.price}</td>
                    <td>{productList.qty}</td>
                    <td>
                      <button onClick={() => { this.onDelete(productList.id) }} className="btn btn-danger float-end">
                        Delete
                      </button>
                      <button onClick={() => { this.onUpdate(productList.id) }} className="btn btn-success float-end">
                        Update
                      </button>
                    </td>
                  </tr>
                )
              })}

          </tbody>
        </table>
      </div >
    )
  }
}


export default ProductScreen