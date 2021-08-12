import axios from 'axios';

let config ={

    baseURL:'https://jsonplaceholder.typicode.com/users'

}

let useraxios = axios.create(config)

const getuseraxios =() =>{
    return useraxios.get('')
}

export {getuseraxios}








