import { Link, Button } from 'react-router-dom'
import React from 'react'

class Navigation extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          sessionStorage.getItem('token') == null && (

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
                      <Link to="/signin">
                        <span className="nav-link">SignIn</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup">
                        <span className="nav-link">SignUp</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/aboutus">
                        <span className="nav-link">AbouUs</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )
        }
      </div >
    )
  }
}
export default Navigation
