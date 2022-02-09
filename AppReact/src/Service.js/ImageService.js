import axios from "axios"
import HostService from "./HostService";
import Storage from "./Storage";

class ImageService{
    postImage(data)
    {
        const formData = new FormData()
        formData.append("file", data);
        return axios.post(HostService.getHost()+"/files/upload",formData,{headers: Storage.updateTokenUpload()})
    }
    getAllImage(){
        return axios.get(HostService.getHost()+"/files/allurl",{headers: Storage.updateToken()})
    }
    deleteAll()
    {
        return axios.delete(HostService.getHost()+"/files/deleteAll",{headers: Storage.updateToken()})
    }
}
export default new ImageService()