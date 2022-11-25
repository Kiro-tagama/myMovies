import axios from "axios"

// type: movie | serie
// code: 550

const API = 'https://api.themoviedb.org/3/'
const KEY_API='?api_key=d1615f652decb87e27cb2749542f5f69&'

export async function api(search) {
    const api = await axios.get(API + search + KEY_API + 'language=pt-BR')
    .then(res=>{let data = res.data; return data})

    return api
}

export async function apiSearch(type,search) {
    const api = await axios.get(
        `https://api.themoviedb.org/3/search/${ type }?api_key=d1615f652decb87e27cb2749542f5f69&rlanguage=pt-BR&query=${search}`
    )
    .then(res=>{let data = res.data; return data})

    console.log(api)

    return api
}