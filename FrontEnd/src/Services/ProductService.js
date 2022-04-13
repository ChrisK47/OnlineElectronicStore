import axios from "axios"

const url = "http://localhost:9090/onlineShopping/admin/"

class ProductService {

    getProductById(pid) {
        return axios.get(url + "product/" + pid)
    }

    editProduct(p) {
        return axios.put(url + "updateProduct/", p, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

}
export default new ProductService();