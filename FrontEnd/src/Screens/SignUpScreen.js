import { Link } from 'react-router-dom'
import Header from '../Component/Header'
import React, { Component } from "react"
import UserService from "../Services/UserService"


class SignUpScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
      age: "",
    }
  }

  onSignup = (event) => {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName, lastName: this.state.lastName, mobile: this.state.mobile, email: this.state.email, password: this.state.password, age: this.state.age
    }
    UserService.addUser(user).then((response) => {
      this.props.history.push("/signin")
    })

  }

  render() {
    return (
      <div className="container">
        <Header title="Signup" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input value={this.state.firstName}
              onChange={(event) => this.setState({ firstName: event.target.value })
              }
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input value={this.state.lastName}
              onChange={(event) => this.setState({ lastName: event.target.value })
              }
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">MobileNo</label>
            <input value={this.state.mobile}
              onChange={(event) => this.setState({ mobile: event.target.value })
              }
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })
              }
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input value={this.state.password}
              onChange={(event) => this.setState({ password: event.target.value })
              }
              type="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input value={this.state.age}
              onChange={(event) => this.setState({ age: event.target.value })
              }
              className="form-control" />
          </div>
          <div className="mb-3">
            <button onClick={this.onSignup} className="btn btn-success">
              Singup
            </button>
            <div className="float-end">
              Existing user? <Link to="/signin">Signin here</Link>
            </div>
          </div>
        </div>
        {/* {userSignup.loading && <div>waiting for result</div>} */}
      </div>
    )
  }
}
export default SignUpScreen