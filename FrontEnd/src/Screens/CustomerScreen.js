import Header from '../Component/Header'
import React, { Component } from "react"
import AdminService from "../Services/AdminService";

class CustomerScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cust: [] }
  }

  componentDidMount() {
    AdminService.getCustomer().then((response) => {
      this.setState({ cust: response.data })
    })
  }
  render() {
    return (
      <div class="container">
        <Header title="Customer" />


        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>firstName</th>
              <th>lastname</th>
              <th>mobile</th>
            </tr>
          </thead>
          <tbody>

            {
              this.state.cust.map((customerList) => {
                return (
                  <tr>
                    <td>{customerList.id}</td>
                    <td>{customerList.firstName}</td>
                    <td>{customerList.lastName}</td>
                    <td>{customerList.mobile}</td>
                  </tr>
                )
              })}

          </tbody>
        </table>
      </div>
    )
  }
}

export default CustomerScreen