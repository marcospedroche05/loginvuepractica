import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
    getEmpleadoLogado(){
        return new Promise(function(resolve) {
            let request = "api/Empleados";
            let url = Global.urlEmpleados + request;
            let config = {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            }
            axios.get(url, config).then(response => {
                resolve(response.data)
            })
        })
    }
}