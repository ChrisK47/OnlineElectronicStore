import { Link } from 'react-router-dom'
import Header from '../Component/Header'
import React, { Component } from 'react'
import UserService from '../Services/UserService'

class SignInScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  onSignin = (event) => {
    let user = { email: this.state.email, password: this.state.password }
    UserService.getUser(user).then((response) => {
      let role = response.data
      if (role.role == "ROLE_ADMIN") {
        sessionStorage.setItem('token', role.role)
        sessionStorage.setItem('user', JSON.stringify(role));
        document.location.replace('http://localhost:3000/AdminHome')
      }
      else if (role.role == "ROLE_CUSTOMER") {
        sessionStorage.setItem('token', role.role)
        sessionStorage.setItem('user', JSON.stringify(role));
        document.location.replace('http://localhost:3000/Home')
      }
    })
  }
  render() {
    return (
      <div className="container">
        <Header title="Signin" />
        <div className="form">


          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              className="form-control"
              placeholder="@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              className="form-control"
              placeholder="*****"></input>
          </div>
          <div className="mb-3">
            <button onClick={this.onSignin} className="btn btn-success">
              Singin
            </button>
            <div className="float-end">
              Don't have an account? <Link to="/signup">Signup here</Link>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
export default SignInScreen