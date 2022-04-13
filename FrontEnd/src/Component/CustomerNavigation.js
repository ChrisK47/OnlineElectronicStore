import { Link } from 'react-router-dom'
import React from 'react'

class CustomerNavigation extends React.Component {

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
        {sessionStorage.getItem('token') == "ROLE_CUSTOMER" && (

          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/Home">
                <span className="navbar-brand">EShop</span>
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item">
                    <Link to="/AdminHome">
                      <span className="nav-link">Home</span>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/updateProfile">
                      <span className="nav-link">Update Profile</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/updatePassword">
                      <span className="nav-link">Change Password</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/address">
                      <span className="nav-link">Address</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/custCategoryList">
                      <span className="nav-link">Category List</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/showProductList">
                      <span className="nav-link">Product List</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart">
                      <span className="nav-link">Cart</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orderList">
                      <span className="nav-link">Order List</span>
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <button
                    onClick={this.onLogout}
                    className="btn btn-warning"
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
export default CustomerNavigation
