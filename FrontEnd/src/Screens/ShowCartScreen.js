import React, { Component } from 'react'
import Header from '../Component/Header'
import CustomerService from '../Services/CustomerService'


class ShowCartScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        let data = sessionStorage.getItem('user')
        data = JSON.parse(data);
        CustomerService.getCart(data.id).then((response) => {
            this.setState({ cart: response.data })
        })
    }

    onOrder = () => {
        this.props.history.push("/orderDetails")
    }

    onUpdate = (id) => {
        this.props.history.push("/updateCart/" + id)
    }

    onDelete = (id) => {
        CustomerService.removeFromcart(id).then((response) => {
            document.location.reload('http://localhost:3000/cart')
        })
    }
    render() {
        return (
            <div className="container" >
                <Header title="Cart" />
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
                            this.state.cart.map((cart) => {
                                return (
                                    <tr>
                                        <td>{cart.name}</td>
                                        <td>{cart.price}</td>
                                        <td>{cart.quantity}</td>
                                        <td>
                                            <button onClick={() => { this.onDelete(cart.id) }} className="btn btn-danger float-end">
                                                Delete
                                            </button>
                                            <button onClick={() => { this.onUpdate(cart.id) }} className="btn btn-success float-end">
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
export default ShowCartScreen;