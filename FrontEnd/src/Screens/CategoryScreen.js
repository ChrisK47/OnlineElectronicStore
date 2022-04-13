import React, { Component } from 'react'
import AdminService from '../Services/AdminService'
import Header from '../Component/Header'

class CategoryScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { category: [] };
  }

  componentDidMount() {
    AdminService.getCategory().then((response) => {
      this.setState({ category: response.data })
    })
  }

  onAddCategory = () => {
    this.props.history.push("/AddCategory")
  }

  linkProduct = (id) => {
    this.props.history.push("/linkProduct/" + id)
  }

  render() {
    return (
      <div class="container">
        <Header title="Category" />
        <button onClick={this.onAddCategory} className="btn btn-warning float-end">
          Add Category
        </button>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>

            {
              this.state.category.map((categoryList) => {
                return (
                  <tr>
                    <td>{categoryList.id}</td>
                    <td>{categoryList.name}</td>
                    <td>{categoryList.description}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CategoryScreen