import Header from '../Component/Header'
import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'


class ShowProductScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      products: [],
      arr: [],
    }
  }

  componentDidMount() {
    if (this.state.id != undefined) {
      CustomerService.gteProductByCategory(this.state.id).then((response) => {
        this.setState({ products: response.data })
      })
    }
    else {
      CustomerService.showProductlist().then((response) => {
        this.setState({ products: response.data })
      })
    }
  }

  onAddToCart = (p) => {
    let data = sessionStorage.getItem('user')
    data = JSON.parse(data);
    CustomerService.addToCart(p.id, data.id).then((response) => {
    }).catch(() => {
      alert("Not Available Sorry for the inconvienence");
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="Product List" />
        <div className="row">
          {
            this.state.products.map(product => {
              return (


                <div div className="col-md-4" key={product.id} >
                  <div className="ibox">
                    <div className="ibox-content product-box">
                      <div className="product-imitation">
                        <img src={`../images/${product.location}.jpg`} width="150" height="150" />
                      </div>
                      <div className="product-desc">
                        <span className="product-price">
                        </span>
                        <small className="text-muted">Product Desc</small>
                        <div className=" m-t-xs">
                          Name: {product.name}<br />
                          Desc: {product.description}<br />
                          Manf: {product.cname}<br />
                          Price: {product.price}<br />
                        </div>
                        <div className="m-t text-righ">

                          <button type="button" className="btn btn-primary" onClick={() => {
                            this.onAddToCart(product)
                          }}>
                            Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              )
            })}
        </div>
      </div >

    )
  }
}
export default ShowProductScreen