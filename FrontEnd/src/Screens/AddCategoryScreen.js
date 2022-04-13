import Header from '../Component/Header'
import React, { Component } from 'react'
import AdminService from '../Services/AdminService'


class AddCategoryScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: ""
    }
  }

  onAddCategory = () => {
    let cat = { name: this.state.name, description: this.state.description }
    AdminService.addCategory(cat).then((response) => {
      this.props.history.push("/category")
    })
  }
  render() {
    return (
      <div class="container">
        <Header title="Add Category" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea onChange={(e) => {
              this.setState({ description: e.target.value })
            }}
              className="form-control"
              rows="3"></textarea>
          </div>

          <div className="mb-3">
            <button onClick={this.onAddCategory} className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default AddCategoryScreen
