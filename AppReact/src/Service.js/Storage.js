class Storage{
    setToken(token){
        localStorage.setItem('token',token)
    }
    getToken(){
        return localStorage.getItem('token')
    }
    setRole(role){
        localStorage.setItem(role,'role')
    }
    getRole(){
       return localStorage.getItem('role')
    }
    setUser(user){
        localStorage.setItem(user,'user')
    }
    getUser(){
       return  localStorage.getItem('user')
    }
    isLogged(){
        return this.getToken() ?  true :   false
    }
   updateToken () {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ( this.getToken() ? this.getToken() : localStorage.getItem('token'))
        }
        return headers;
    }
    updateTokenUpload  () {
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + (this.getToken() ? this.getToken() : localStorage.getItem('token'))
        }
        return headers;
    }
}
export default new Storage()