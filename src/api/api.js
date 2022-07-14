// https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69

// type: movie | serie
// code: 550

export async function api(search) {
    const api = await fetch(`https://api.themoviedb.org/3/${search}?api_key=d1615f652decb87e27cb2749542f5f69&language=pt-BR`)
    const data = await api.json()

    console.log(data);

    return data
}