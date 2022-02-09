import axios from "axios"
import HostService from "./HostService"
import Storage from "./Storage";

class ClasseService{
    postClasse(data)
    {
        return axios.post(HostService.getHost()+"/classe/create",data,{headers: Storage.updateToken()})
    }
    getAll()
    {
        return axios.get(HostService.getHost()+"/classe/all",{headers: Storage.updateToken()})
    }
    deleleOne(id)
    {
        console.log(id);
        return axios.delete(HostService.getHost()+"/classe/delete/"+id,{headers: Storage.updateToken()})
    }
}
export default new ClasseService()