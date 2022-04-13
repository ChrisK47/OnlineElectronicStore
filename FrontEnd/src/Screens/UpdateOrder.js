import React, { Component } from "react"
import Header from '../Component/Header'
import AdminService from "../Services/AdminService";


class UpdateOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            amount: "",
            userId: "",
            address: "",
            deliveryDate: "",
            status: "",
            stat: ""
        }
    }
    componentDidMount() {
        AdminService.getOrderById(this.state.id).then((response) => {
            let ob = response.data;
            this.setState({ id: ob.id, amount: ob.amount, address: ob.address.address, deliveryDate: ob.deliveryDate, status: ob.stat });
        })
    }

    updateOrder = (event) => {
        alert(this.state.stat)
        event.preventDefault();
        let order = {
            id: this.state.id, amount: this.state.amount,
            deliveryDate: this.state.deliveryDate, stat: this.state.stat
        }
        AdminService.updateOrder(order).then((response) => {
            this.props.history.push("/adminOrder")
        })
    }

    render() {
        return (
            <div className="container" >
                <Header title="Update Product" />
                <div className="form">

                    <div className="mb-3">
                        <label className="form-label">Id</label>
                        <input value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value }
                            )}
                            className="form-control" disabled />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Amount</label>
                        <input value={this.state.amount}
                            onChange={(e) => this.setState({ amount: e.target.value })
                            }
                            className="form-control" disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input value={this.state.address}
                            onChange={(e) => this.setState({ address: e.target.value })}
                            className="form-control" disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">DeliveryDate</label>
                        <input value={this.state.deliveryDate}
                            onChange={(e) => this.setState({ deliveryDate: e.target.value })}
                            className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select name="category" onChange={(e) => { this.setState({ stat: e.target.value }) }}>
                            <option key="0" value="none">Select Option</option>
                            <option key='1' value="COMPLETED">Completed</option>;
                            <option key='2' value="INPROGRESS">InProgress</option>;
                            <option key='3' value="CANCELLED">Cancelled</option>;
                        </select>
                    </div>
                    <div className="mb-3">
                        <button onClick={this.updateOrder} className="btn btn-success">
                            Update
                        </button>
                    </div>
                </div>

            </div >
        )
    }
}
export default UpdateOrder