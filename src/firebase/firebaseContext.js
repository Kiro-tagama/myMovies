import React, { createContext, useState, useEffect } from 'react';
import app from './index' //firebase config
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  onValue,
  set
} from 'firebase/database'

export const FirebaseContext=createContext({})

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
    .then((cred)=>{
      let user=cred.user

      let data={
        uid:user.uid,
        email:user.email
      }
      setUser(data)
      storageUser(data)

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
    .catch((err)=>{
      console.log(err);
    })
  console.log('signIn');
}

async function signUp(email,password,nome) {
  await createUserWithEmailAndPassword(auth, email, password, nome)
  .then((cred)=>{
    let user=cred.user
    // star save db user
    console.log('user:'+ user);
    set(ref(db,user.uid),{
      fav:{},
      nome:nome,
    }).then(()=>{
      let data={
        uid:uid,
        nome:nome, 
        email:email
      }
      setUser(data)
      storageUser(data)
    })

    // end save db user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('err: '+errorCode+'\n'+errorMessage);
    //..
  });
}

async function signOut(params) {
  //deslog

  setUser(null)
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
    set(ref(db,user.uid+'fav/'),{
      
    })
}

async function removeForDb(data){
  // remove user's favorite movie/series
  // remove favorite movie/series of user

  /*
    id - user - nameFav (del)
  */
}

async function getFavDb(data){
  // return movies to database
  onValue(ref(db,user.uid+'/fav/'),(snap)=>{
    const resultDb = snap.val()
    console.log('dados: ',resultDb);
    return resultDb
  }) 
  // return [?] or {?}
}

getFavDb()

// data to child -> login and home (pages)
return (
  <FirebaseContext.Provider value={{signed:!!user ,user,signUp,signIn,signOut,includeInDb,removeForDb,getFavDb}} >
    {children}
  </FirebaseContext.Provider>
)
}