import axios from "axios"

const url = "http://localhost:9090/onlineShopping/user/"

class UserService {

    addUser(user) {
        return axios.post(url + "add", user, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    getUser(user) {
        return axios.post(url + "login", user, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

}
export default new UserService();