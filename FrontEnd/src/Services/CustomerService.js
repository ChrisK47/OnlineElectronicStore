import axios from 'axios'

const url = "http://localhost:9090/onlineShopping/customer/"

class CustomerService {

    getUserById(id) {
        return axios.get(url + id)
    }
    updateProfile(user) {
        return axios.put(url + "updateProfile", user, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    updatePassword(user) {
        return axios.put(url + "updatePassword", user, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    showProductlist() {
        return axios.get(url + "showProductList")
    }

    getProductByName(p) {
        return axios.post(url + "getProduct", p, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    gteProductByCategory(id) {
        return axios.get(url + "getProductByCategory/" + id)
    }

    addToCart(pid, id) {
        return axios.post(url + "addToCart/" + id, pid, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
    updCart(cart) {
        return axios.put(url + "updCart/", {
            headers: { 'Content-Type': 'application/json' }
        })
    }
    getCategories() {
        return axios.get(url + "categoryList")
    }

    getAddress(id) {
        return axios.get(url + "addressList/" + id)
    }

    addAddress(address, pid) {
        return axios.post(url + "addAddress/" + pid, address, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    getAddressById(id) {
        return axios.get(url + "getAddress/" + id)
    }

    getCart(id) {
        return axios.get(url + "getCart/" + id)
    }

    getCartById(id) {
        return axios.get(url + "getCartById/" + id)
    }

    updCart(cart) {
        return axios.put(url + "editCart/", cart, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    removeProduct(id) {
        return axios.delete(url + "removeAddress/" + id)
    }

    updAddress(address, id) {
        return axios.put(url + "editAddress/" + id, address, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    removeFromcart(id) {
        return axios.delete(url + "removeFromCart/" + id)
    }

    addToOrder(order, id) {
        return axios.post(url + "addToOrder/" + id, order)
    }

    getOrders(id) {
        return axios.get(url + "getOrderList/" + id)
    }

    removeAddress(id) {
        return axios.delete(url + "removeAddress/" + id)
    }
}

export default new CustomerService();