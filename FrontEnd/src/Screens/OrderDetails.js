import React, { Component } from 'react'
import Header from '../Component/Header'
import CustomerService from '../Services/CustomerService'

class OrderDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            price: "",
            date: "",
            qty: "",
            id: "",
            add: "",
            address: []
        }
    }

    componentDidMount() {
        let data = sessionStorage.getItem('user')
        data = JSON.parse(data)
        var count = 0;
        var quantity = 0;
        CustomerService.getCart(data.id).then((response) => {
            this.setState({ arr: response.data })
            for (var i = 0; i < this.state.arr.length; i++) {
                count += this.state.arr[i].price;
                quantity += this.state.arr[i].quantity;
            }
            this.setState({ price: count, qty: quantity, id: data.id })
        })
        CustomerService.getAddress(data.id).then((response) => {
            this.setState({ address: response.data })
        })
        var date = new Date().toLocaleDateString();
        this.setState({ date: date })
    }
    onOrder = () => {
        let order = { amount: this.state.price }
        //let address = { id: this.state.add }
        CustomerService.addToOrder(order, this.state.add).then((response) => {
            this.props.history.push("/orderList")
        })
    }

    render() {
        return (
            <div className="container" >
                <Header title="OrderDetails" />
                <button onClick={this.onOrder} className="btn btn-warning float-end">
                    Order
                </button>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.arr.map((cart) => {
                                return (
                                    <tr>
                                        <td>{cart.name}</td>
                                        <td>{cart.price}</td>
                                        <td>{cart.quantity}</td>
                                    </tr>
                                )
                            })}
                        <tr>
                            <td>Delivery Address:</td>
                            <td colSpan={2}>
                                <select name="address" onChange={(e) => { this.setState({ add: e.target.value }) }}>
                                    <option key="0" value="none">Select Option</option>
                                    {this.state.address.map((e) => {
                                        return <option key={e.id} value={e.id}
                                        >{e.address}</option>;
                                    })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Price: {this.state.price}</td>
                            <td>Delivery Date: {this.state.date}</td>
                            <td>Total Quantity: {this.state.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }
}


export default OrderDetails;