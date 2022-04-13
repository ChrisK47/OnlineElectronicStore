import axios from "axios"

const url = "http://localhost:9090/onlineShopping/admin/"

class AdminService {

    getProducts() {
        return axios.get(url + "products")
    }

    deleteProduct(id) {
        return axios.delete(url + "deleteProduct/" + id, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    addProduct(p, id) {
        return axios.post(url + "addProduct/" + id, p, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    getCategory() {
        return axios.get(url + "category")
    }


    addCategory(c) {
        return axios.post(url + "categoryAdd", c, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    getCustomer() {
        return axios.get(url + "customers")
    }

    getOrderList() {
        return axios.get(url + "orderList")
    }

    getOrderById(id) {
        return axios.get(url + "orderList/" + id)
    }

    updateOrder(order) {
        return axios.put(url + "updateOrder/", order)
    }

}
export default new AdminService();