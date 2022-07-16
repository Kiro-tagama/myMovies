// https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69

import axios from "axios"

// type: movie | serie
// code: 550

const API = 'https://api.themoviedb.org/3/'
const KEY_API='?api_key=d1615f652decb87e27cb2749542f5f69&'

export async function api(search) {
    const api = await fetch(API + search + KEY_API + 'language=pt-BR')
    const data = await api.json()

    return data
}

export async function apiSearch(search) {
    const api = await axios.get(API+'search/company'+KEY_API+`query=${search}&page=1`)
    const data = await api.data

    return api.data
}