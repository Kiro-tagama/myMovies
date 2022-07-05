import Axios from "axios";

// https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69

function api(tipe,genero) {
    const isso=Axios.get('https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69&language=pt-BR').then(r=>console.log(r.json()))
    console.log('isso',isso);
  }
  api()