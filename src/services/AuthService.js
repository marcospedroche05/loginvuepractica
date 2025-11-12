import Global from "@/Global";
import axios from "axios";

export default class AuthService {
    login(name, password) {
        return new Promise(function(resolve) {
            let request = "Auth/Login";
            let url = Global.urlEmpleados + request;
            let cuerpo = {
                userName: name,
                password: password
            }
            axios.post(url, cuerpo).then(response => {
                resolve(response.data.response)
            })
        })
    }
}