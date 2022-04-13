import React from 'react'
import Header from '../Component/Header'
import CustomerService from '../Services/CustomerService'

class UpdateCartScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: "",
            quantity: "",
            price: "",
            sum: "",
        }
    }
    componentDidMount() {
        CustomerService.getCartById(this.state.id).then((response) => {
            let obj = response.data;
            let t1 = obj.price
            let t2 = obj.quantity
            let summed = (t1 / t2)
            this.setState({ name: obj.name, price: summed, quantity: obj.quantity, sum: summed })
        })
    }

    updateProduct = (event) => {
        event.preventDefault();
        let cart = { id: this.state.id, name: this.state.name, quantity: this.state.quantity, price: this.state.price }
        CustomerService.updCart(cart).then((response) => {
            this.props.history.push("/cart")
        }).catch(() => {
            alert("Not Sufficient Quantity");
        })
    }

    render() {
        return (
            <div className="container" >
                <Header title="Update Cart" />
                <div className="form">

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value }
                            )}
                            className="form-control" disabled />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input value={this.state.price}
                            onChange={(e) => this.setState({ price: e.target.value })
                            }
                            className="form-control" disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input value={this.state.quantity}
                            onChange={(e) => this.setState({ quantity: e.target.value, price: e.target.value * this.state.sum })}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3">
                    <button onClick={this.updateProduct} className="btn btn-success">
                        Update
                    </button>
                </div>

            </div>
        )
    }

}
export default UpdateCartScreen;