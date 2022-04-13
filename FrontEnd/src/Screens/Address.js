import Header from "../Component/Header"
import CustomerService from '../Services/CustomerService'
import React, { Component } from 'react'

class Address extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            address: []
        }
    }

    componentDidMount() {
        let data = sessionStorage.getItem('user')
        data = JSON.parse(data);
        CustomerService.getAddress(data.id).then((response) => {
            this.setState({ address: response.data })
        })
    }

    onUpdate = (id) => {
        this.props.history.push("/addAddress/" + id);
    }

    onDelete = (id) => {
        CustomerService.removeAddress(id).then((response) => {
        })
    }
    onAddAddress = () => {
        this.props.history.push("/addAddress/_add");
    }

    render() {
        return (
            <div className="container" >
                <Header title="Address" />
                <button onClick={this.onAddAddress} className="btn btn-warning float-end">
                    Add Address
                </button>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>City</th>
                            <th>PinCode</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.address.map((address) => {
                                return (
                                    <tr>
                                        <td>{address.state}</td>
                                        <td>{address.city}</td>
                                        <td>{address.zipcode}</td>
                                        <td>{address.address}</td>
                                        <td>
                                            <button onClick={() => { this.onDelete(address.id) }} className="btn btn-danger float-end">
                                                Delete
                                            </button>
                                            <button onClick={() => { this.onUpdate(address.id) }} className="btn btn-success float-end">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                    </tbody>
                </table>
            </div >
        )
    }
}

export default Address;