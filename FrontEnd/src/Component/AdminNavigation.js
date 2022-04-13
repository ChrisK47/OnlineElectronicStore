import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'


class AdminNavigation extends React.Component {

  constructor(props) {
    super(props)
  }

  onLogout = (event) => {
    sessionStorage.clear();
    event.preventDefault()
    document.location.replace('http://localhost:3000/Home')
  }

  render() {

    return (
      <div>
        {sessionStorage.getItem('token') == "ROLE_ADMIN" && (

          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/home">
                <span className="navbar-brand">EShop</span>
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/AdminHome">
                      <span className="nav-link">Home</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/customer">
                      <span className="nav-link">Customer List</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/product">
                      <span className="nav-link">Product List</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/category">
                      <span className="nav-link">Category List</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/adminOrder">
                      <span className="nav-link">Order List</span>
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <button
                    onClick={this.onLogout}
                    class="btn btn-warning"
                    type="submit">
                    LogOut
                  </button>
                </form>

              </div>
            </div>
          </nav>
        )}

      </div>
    )
  }
}

export default AdminNavigation
