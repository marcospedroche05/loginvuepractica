import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
    getEmpleadoLogado(){
        return new Promise(function(resolve, reject) {
            let request = "api/Empleados/PerfilEmpleado";
            let url = Global.urlEmpleados + request;
            let config = {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            }
            axios.get(url, config).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error);
            })
        })
    }

    getSubordinados(){
        return new Promise(function(resolve, reject) {
            let request = "api/Empleados/Subordinados";
            let token = localStorage.getItem("token");
            let url = Global.urlEmpleados + request;
            let config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            axios.get(url, config).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error);
            })
        })
    }
}