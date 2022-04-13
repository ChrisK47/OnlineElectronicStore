import Header from '../Component/Header'
import CustomerNavigation from '../Component/CustomerNavigation'
import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'


class UpdateProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
      age: "",
    }
  }

  componentDidMount() {
    let obj = sessionStorage.getItem('user');
    obj = JSON.parse(obj);
    this.setState({
      id: obj.id, firstName: obj.firstName, lastName: obj.lastName, email: obj.email, age: obj.age, mobile: obj.mobile
    })
  }

  onUpdateProfile = (event) => {
    event.preventDefault();
    let obj = sessionStorage.getItem('user');
    obj = JSON.parse(obj);
    let user = { id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, age: this.state.age, mobile: this.state.mobile }
    CustomerService.updateProfile(user).then((response) => {
      alert("In update")
      this.props.history.push("/Home")
    }).catch((error) => {
      alert(error)
    })
  }

  render() {

    return (
      <div className="container">
        <Header title="Update Profile" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input value={this.state.firstName}
              onChange={(e) => {
                this.setState({ firstName: e.target.value })
              }}
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input value={this.state.lastName}
              onChange={(e) => {
                this.setState({ lastName: e.target.value })
              }}
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">phone</label>
            <input value={this.state.mobile}
              onChange={(e) => {
                this.setState({ mobile: e.target.value })
              }}
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value })
              }}
              type="email"
              className="form-control"
              placeholder="test@test.com" />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input value={this.state.age}
              onChange={(e) => {
                this.setState({ age: e.target.value })
              }}
              className="form-control" />
          </div>
          <div className="mb-3">
            <button onClick={this.onUpdateProfile} className="btn btn-success">
              Update
            </button>
          </div>
        </div>

      </div>
    )
  }
}
export default UpdateProfileScreen