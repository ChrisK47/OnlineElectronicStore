import React, { Component } from 'react'
import Header from '../Component/Header';
import CustomerService from '../Services/CustomerService'

class OrderScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { order: [] };
    }
    componentDidMount() {
        let data = sessionStorage.getItem('user')
        data = JSON.parse(data)
        CustomerService.getOrders(data.id).then((response) => {
            this.setState({ order: response.data })
        })
    }

    render() {
        return (
            <div className="container" >
                <Header title="Order" />
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>DeliveryDate</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.order.map((orderList) => {
                                return (
                                    <tr>
                                        <td>{orderList.id}</td>
                                        <td>{orderList.deliveryDate}</td>
                                        <td>{orderList.amount}</td>
                                        <td>{orderList.stat}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div >
        )
    }
}


export default OrderScreen