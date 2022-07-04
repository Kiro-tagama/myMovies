import React, { createContext, useState, useEffect } from 'react';
import app from './index' //firebase config
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getDatabase
} from 'firebase/database'

export const AuthContext=createContext({})

export default function AuthProvider({children}){

const auth = getAuth(app)
const db = getDatabase(app)

const [user, setUser]= useState(null)

useEffect(()=>{
  async function loadStorage() {
    const storageUser= await AsyncStorage.getItem('Auth_user')

    if(storageUser){
      setUser(JSON.parse(storageUser))
      setLoading(false)
    }
    setLoading(false)

  }
  loadStorage()
},[])

async function signIn(email,password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then(async(value)=>{
      let uid=value.user.uid

      // ??????
      
      // await firebase.database().ref('users').child(uid).once('value', (snapshot)=> {
      //   let data={
      //     uid:uid,
      //     nome: snapshot.val().nome,
      //     email:value.user.email
      //   }
      //   setUser(data)
      //   storageUser(data)
      //   setLoadingAuth(false)
      // })
      //

    })
    .catch((error)=>{
      alert(error.code)
      setLoadingAuth(false)
    })
  console.log('signIn');
}

async function signUp(email,password,nome) {
  await createUserWithEmailAndPassword(auth, email, password)
  .then(async(value)=>{
    let uid=value.user.uid

    // star save db user

    // await firebase.database().ref('users').child(uid).set({
    //   fav:[],
    //   nome: nome
    // })
    // .then(()=>{
    //   let data={
    //     uid:uid,
    //     nome:nome, 
    //     email: value.user.email
    //   }
    //   setUser(data)
    //   storageUser(data)
    // })

    // end save db user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //..
  });
  console.log('signUp '+ nome);
}

async function signOut(params) {
  //deslog

  console.log('signOut');
}

async function storageUser(data){
  // save user
  await AsyncStorage.setItem('Auth_user',JSON.stringify(data))
  Asyn
}

async function includeInDb(data){
  // include user's favorite movie/series
  // include favorite movie/series of user

  /*
    id - user - favs
  */
}

async function removeForDb(data){
  // remove user's favorite movie/series
  // remove favorite movie/series of user

  /*
    id - user - nameFav (del)
  */
}

async function getFavDb(){
  // return movies to database

  // return [?] or {?}
}

// data to child -> login and home (pages)
return (
  <AuthContext.Provider value={{signed:!!user ,user,signUp,signIn,signOut}} >
    {children}
  </AuthContext.Provider>
)
}