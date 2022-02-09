import axios from "axios"
import HostService from "./HostService";

class AuthService{
    login(data){
        return axios.post(HostService.getHost()+"/api/auth/signin",data)
    }
    logout(){
        localStorage.removeItem('token')
    }
}
export default new  AuthService()