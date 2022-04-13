import React from 'react'
import Header from '../Component/Header';
import AdminService from '../Services/AdminService';



class AdminOrderList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            order: []
        }
    }

    componentDidMount() {
        AdminService.getOrderList().then((response) => {
            this.setState({ order: response.data })
        })
    }

    onUpdate = (id) => {
        this.props.history.push("/updateOrder/" + id)
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
                                        <td>
                                            <button onClick={() => { this.onUpdate(orderList.id) }} className="btn btn-success float-end">
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

export default AdminOrderList;