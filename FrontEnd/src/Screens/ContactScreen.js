import Header from '../Component/Header'
import React from "react"

class ContactScreen extends React.Component {


    render() {
        return (
            <div class="container">
                <Header title="AboutUs" />

                <div>
                    <p>
                        Eshop is an online retail store that catered to all multi-brand digital gadgets and home electronic needs in India.Eshop has a wide product range,various brands that will to help customers.
                    </p>
                    <p>
                        Bringing  the promise of best price and fast delivery for its customers, Eshop offers its customers and also allows for a seamless shopping experience that lets a customer enjoy the best of both the online & the offline worlds.
                    </p>
                    <p>
                        It is our moto to provide the best customer experience to a customer
                    </p>
                </div>
                <button class="btn btn-info" onClick={() => window.location = 'mailto:eshop@gmail.com'}>Email</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => window.location = 'tel:7774039017'} class="btn btn-success">MobileNo</button>
            </div>
        )
    }
}

export default ContactScreen