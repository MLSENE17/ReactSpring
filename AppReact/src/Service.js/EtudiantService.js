import axios from "axios"
import HostService from "./HostService"
import Storage from '../Service.js/Storage';
class EtudiantService{
    searchEtudiant(data)
    {
        return axios.post(HostService.getHost()+"/etudiant/search",data,{headers: Storage.updateToken()})
    }
    updateEtudiant(data,id)
    {
        return axios.put(HostService.getHost()+"/etudiant/edit/"+id,data,{headers: Storage.updateToken()})
    }
    postEtudiant(data)
    {
        return axios.post(HostService.getHost()+"/etudiant/create",data,{headers: Storage.updateToken()})
    }
    getTotal()
    {
        return axios.get(HostService.getHost()+"/etudiant/total",{headers: Storage.updateToken()})
    }
    getAll()
    {
        return axios.get(HostService.getHost()+"/etudiant/all",{headers: Storage.updateToken()})
    }
    getOne(id)
    {
        return axios.get(HostService.getHost()+"/etudiant/"+id,{headers: Storage.updateToken()})
    }
    deleleOne(id)
    {
        return axios.delete(HostService.getHost()+"/etudiant/delete/"+id,{headers: Storage.updateToken()})
        
    }
    toEtudiant(data)
    {
        return {
            prenom:data.prenom,
            nom:data.nom,
            email:data.email,
            classe:{
                id:data.classe_id
            }
        }
    }
}
export default new EtudiantService()