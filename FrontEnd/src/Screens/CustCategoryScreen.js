import Header from '../Component/Header'
import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'


class CustCategoryScreen extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    CustomerService.getCategories().then((response) => {
      this.setState({ categories: response.data })
    })
  }

  onVisit = (id) => {
    this.props.history.push("/showProductList/" + id)

  }

  render() {
    return (
      <div className="container">
        <Header title="Category List" />

        <h5>Welcome to category page !!!</h5>

        <div className="row">
          {
            this.state.categories.map((category) => {
              return (

                <div className="col-md-4">
                  <div className="ibox">
                    <div className="ibox-content product-box">
                      <div className="product-imitation">
                        <img src={`../images/${category.catImage}.jpg`} width="200" height="150" />
                      </div>
                      <div className="product-desc">
                        <span className="product-price">

                        </span>
                        <small className="text-muted">Category</small>
                        <div className="small m-t-xs">
                          {category.name}
                        </div>
                        <div className="m-t text-right">
                          <button type="button" className="btn btn-primary" onClick={() =>
                            this.onVisit(
                              category.id)}>View info</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

    )
  }
}
export default CustCategoryScreen