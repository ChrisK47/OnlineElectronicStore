import React, { Component } from 'react'
import Header from '../Component/Header'
import CustomerService from '../Services/CustomerService'

class AddUpdAddress extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            op: this.props.match.params.id,
            state: "",
            city: "",
            zipcode: "",
            address: "",
            id: "",
        }
    }

    componentDidMount() {
        if (this.state.op == "_add") {
        }
        else {
            CustomerService.getAddressById(this.state.op).then((response) => {
                let obj = response.data;
                this.setState({ state: obj.state, city: obj.city, zipcode: obj.zipcode, address: obj.address, id: obj.id })
            })
        }
    }

    addAddress = (event) => {
        event.preventDefault();
        let data = sessionStorage.getItem('user');
        data = JSON.parse(data);
        if (this.state.op == "_add") {
            let address = { state: this.state.state, city: this.state.city, zipcode: this.state.zipcode, address: this.state.address }
            CustomerService.addAddress(address, data.id).then((response) => {
                this.props.history.push("/address");
            })
        } else {
            let address = { state: this.state.state, city: this.state.city, zipcode: this.state.zipcode, address: this.state.address, id: this.state.id }
            CustomerService.updAddress(address, data.id).then((response) => {
                this.props.history.push("/address");
            })
        }

    }

    render() {
        return (
            <div className="container" >
                <Header title="Add Address" />
                <div className="form">
                    <div className="mb-3">
                        <label className="form-label">State</label>
                        <input value={this.state.state}
                            onChange={(e) => {
                                this.setState({ state: e.target.value })
                            }}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input value={this.state.city}
                            onChange={(e) => {
                                this.setState({ city: e.target.value })
                            }}
                            className="form-control"
                            rows="3" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PinCode</label>
                        <input value={this.state.zipcode}
                            onChange={(e) => {
                                this.setState({ zipcode: e.target.value })
                            }}
                            className="form-control"
                            rows="3" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input value={this.state.address}
                            onChange={(e) => {
                                this.setState({ address: e.target.value })
                            }}
                            className="form-control"
                            rows="3" />
                    </div>
                    <div className="mb-3">
                        <button onClick={this.addAddress} className="btn btn-success">
                            Add
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}
export default AddUpdAddress;