const {initializeApp} = require('firebase/app'); 

const firebaseConfig = {
  apiKey: "AIzaSyBIb5gImejSsKMTTzZdZD1sjEPGaIesqmQ",
  authDomain: "mymovies-5d214.firebaseapp.com",
  databaseURL: "https://mymovies-5d214-default-rtdb.firebaseio.com",
  projectId: "mymovies-5d214",
  storageBucket: "mymovies-5d214.appspot.com",
  messagingSenderId: "329389037968",
  appId: "1:329389037968:web:aa895b743387736a763b15",
  measurementId: "G-3EM6WQNL2M"
};

const app = initializeApp(firebaseConfig);

module.exports = app