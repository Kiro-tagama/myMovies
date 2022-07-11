const Axios = require("axios");

// https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69

// type: movie | serie
// code: 550


function api(type, code) {
    const api=Axios.get(`https://api.themoviedb.org/3/${type}/${code}?api_key=d1615f652decb87e27cb2749542f5f69&language=pt-BR`)
    .then( res=>console.log(res.data) )

    console.log('api: ',api);
}
api()