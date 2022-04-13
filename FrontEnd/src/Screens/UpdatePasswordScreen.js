
import Header from '../Component/Header'
import CustomerNavigation from '../Component/CustomerNavigation'
import { updatePassword } from '../Actions/UserAction'
import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'


class UpdatePasswordScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      email: "",
      password: ""
    }
  }

  componentDidMount() {
    let data = sessionStorage.getItem('user')
    data = JSON.parse(data);
    this.setState({ id: data.id, email: data.email })
  }

  onUpdatePassword = () => {
    let data = sessionStorage.getItem('user')
    data = JSON.parse(data);
    let user = { id: data.id, email: data.email, password: this.state.password }
    CustomerService.updatePassword(user).then((response) => {
      this.props.history.push("/Home")
    }).then((error) => {
      alert(error)
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="Update Password" />
        <div className="form">


          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={this.state.email}
              onChange={(e) => { this.setState({ email: e.target.value }) }}
              type="email"
              className="form-control"
              placeholder="test@test.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> New Password</label>
            <input value={this.state.password}
              onChange={(e) => { this.setState({ password: e.target.value }) }}
              type="password"
              className="form-control"
              placeholder="*****"></input>
          </div>
          <div className="mb-3">
            <button onClick={this.onUpdatePassword} className="btn btn-success">
              Change Password
            </button>
          </div>
        </div>

        {updatePassword.loading && <div>waiting for result</div>}
      </div >
    )
  }
}
export default UpdatePasswordScreen