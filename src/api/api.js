import axios from "axios"
import {APP_API_KEY} from '@env'
// type: movie | serie
// code: 550

const API = 'https://api.themoviedb.org/3/'
const KEY_API=APP_API_KEY

export async function api(search) {
    const api = axios.get(`${API + search + KEY_API }language=pt-BR`)
    .then(res=>res.data)
    .catch(err=>{
        console.log(err)
        return {
            id:"0",
            title:"err",
            adult:false,
            overview:"voltar ou escolha randomica"
        }
    })
    return api
}

export async function apiSearch(type,search) {
    const api = axios.get(`${API}search/${type + KEY_API}language=pt-BR&query=${search}`)
    .then(res=>res.data)
    .catch(err=>console.log('search err '+err))

    return api
}